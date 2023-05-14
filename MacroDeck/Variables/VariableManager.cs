﻿using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading;
using System.Threading.Tasks;
using Cottle;
using SQLite;
using SuchByte.MacroDeck.Logging;
using SuchByte.MacroDeck.Plugins;
using SuchByte.MacroDeck.Startup;

namespace SuchByte.MacroDeck.Variables;

public static class VariableManager
{
    private static SQLiteConnection _database;
    
    internal const string TemplateTrimBlank = "_trimblank_";

    internal static event EventHandler OnVariableChanged;
    internal static event EventHandler OnVariableRemoved;


    /// <summary>
    /// Use GetVariables(MacroDeckPlugin macroDeckPlugin)
    /// </summary>
    internal static TableQuery<Variable> ListVariables => 
        _database.Table<Variable>().OrderBy(v => v.Name);

    public static Variable[] Variables =>
        ListVariables.ToArray();

    public static List<Variable> GetVariables(MacroDeckPlugin macroDeckPlugin)
    {
        var pluginVariables = ListVariables
            .Where(x => x.Creator.Equals(macroDeckPlugin.Name, StringComparison.OrdinalIgnoreCase))
            .OrderBy(x => x.Name)
            .ToList();

        return pluginVariables;
    }

    public static Variable GetVariable(MacroDeckPlugin macroDeckPlugin, string variableName)
    {
        return ListVariables.FirstOrDefault(x =>
            x.Creator == macroDeckPlugin.Name &&
            string.Equals(x.Name, variableName, StringComparison.CurrentCultureIgnoreCase));
    }


    private static DocumentConfiguration templateConfiguration = new()
    {
        Trimmer = DocumentConfiguration.TrimFirstAndLastBlankLines,
    };

    internal static void InsertVariable(Variable variable)
    {
        if (ListVariables.Any(x => string.Equals(x.Name, variable.Name, StringComparison.CurrentCultureIgnoreCase)))
        {
            return;
        }
        _database.Insert(variable);
    }

    internal static Variable SetValue(string name, object value, VariableType type, string creator = "User")
    {
        if (string.IsNullOrWhiteSpace(name)) return null;
        name = ConvertNameString(name);

        var variable =
            ListVariables.FirstOrDefault(v => v.Name == name);
        if (variable == null)
        {
            variable = new Variable
            {
                Name = name
            };
            _database.Insert(variable);
        }
        variable.Type = type.ToString();
        variable.Creator = creator;

        if (!variable.Value.Equals(value))
        {
            switch (type)
            {
                case VariableType.Bool:
                    if (bool.TryParse(value.ToString(), out var boolResult))
                    {
                        value = boolResult;
                    }
                    else
                    {
                        value = false;
                    }
                    variable.Value = value.ToString();
                    break;
                case VariableType.Float:
                    if (float.TryParse(value.ToString().Replace(".", Thread.CurrentThread.CurrentCulture.NumberFormat.NumberDecimalSeparator), out var floatResult))
                    {
                        value = floatResult;
                    }
                    else
                    {
                        value = 0.0f;
                    }
                    variable.Value = ((float)value).ToString();
                    break;
                case VariableType.Integer:
                    if (int.TryParse(value.ToString(), out var intResult))
                    {
                        value = intResult;
                    }
                    else
                    {
                        value = 0;
                    }
                    variable.Value = value.ToString();
                    break;
                case VariableType.String:
                default:
                    variable.Value = value.ToString();
                    break;
            }

            OnVariableChanged?.Invoke(variable, EventArgs.Empty);
        }

        try
        {
            _database.Update(variable);
        } catch { }
            
        return variable;
    }

    internal static Variable SetValue(string name, object value, VariableType type, string[] suggestions, string creator = "User")
    {
        var variable = SetValue(name, value, type, creator);
        variable.Suggestions = suggestions;

        return variable;
    }
        
    /// <summary>
    /// Set the value of an variable. If the variable does not exists, Macro Deck automatically creates it.
    /// </summary>
    /// <param name="name">Name of the variable</param>
    /// <param name="value">Value of the variable</param>
    /// <param name="type">Type of the variable</param>
    /// <param name="plugin">The instance of your plugin</param>
    /// <param name="suggestions">Suggestions for the value.</param>
    public static void SetValue(string name, object value, VariableType type, MacroDeckPlugin plugin, string[] suggestions = null)
    {
        SetValue(name, value, type, suggestions, plugin.Name);
    }

    [Obsolete("Remove save parameter")]
    public static void SetValue(string name, object value, VariableType type, MacroDeckPlugin plugin, bool save = true)
    {
        SetValue(name, value, type, plugin.Name);
    }


    [Obsolete("Remove save parameter")]
    public static void SetValue(string name, object value, VariableType type, MacroDeckPlugin plugin, string[] suggestions, bool save = true)
    {
        SetValue(name, value, type, suggestions, plugin.Name);
    }

    /// <summary>
    /// Deletes a variable
    /// </summary>
    /// <param name="name">Name of the variable</param>
    public static void DeleteVariable(string name)
    {
        _database.Delete(new Variable() { Name = name });
        OnVariableRemoved?.Invoke(name, EventArgs.Empty);
        MacroDeckLogger.Info("Deleted variable " + name);
    }


    public static string RenderTemplate(string template)
    {
        string result;
        try
        {
            templateConfiguration.Trimmer = template.StartsWith(TemplateTrimBlank, StringComparison.OrdinalIgnoreCase)
                ? DocumentConfiguration.TrimFirstAndLastBlankLines
                : DocumentConfiguration.TrimNothing;
            template = template.Replace(TemplateTrimBlank, "", StringComparison.OrdinalIgnoreCase);
            var document = Document.CreateDefault(template, templateConfiguration).DocumentOrThrow;

            var vars = new Dictionary<Value, Value>();

            foreach (var v in ListVariables)
            {
                if (vars.ContainsKey(v.Name)) continue;
                Value value = "";

                switch (v.Type)
                {
                    case nameof(VariableType.Bool):
                        bool.TryParse(
                            v.Value.Replace("On", "True", StringComparison.CurrentCultureIgnoreCase)
                                .Replace("Off", "False", StringComparison.OrdinalIgnoreCase), out var resultBool);
                        value = Value.FromBoolean(resultBool);
                        break;
                    case nameof(VariableType.Float):
                        float.TryParse(v.Value, out var resultFloat);
                        value = Value.FromNumber(resultFloat);
                        break;
                    case nameof(VariableType.Integer):
                        int.TryParse(v.Value, out var resultInteger);
                        value = Value.FromNumber(resultInteger);
                        break;
                    case nameof(VariableType.String):
                        value = Value.FromString(v.Value);
                        break;
                }

                vars.Add(v.Name, value);
            }
            result = document.Render(Context.CreateBuiltin(vars));
        } catch (Exception e)
        {
            result = "Error: " + e.Message;
        }

        return result;
    }

    internal static void Initialize()
    {
        MacroDeckLogger.Info(typeof(VariableManager), "Initialize variables database...");
        _database = new SQLiteConnection(ApplicationPaths.VariablesFilePath);
            
        _database.CreateTable<Variable>();
        _database.Execute("delete from Variable where 'Name'='';");
        MacroDeckLogger.Info(typeof(VariableManager), ListVariables.Count() + " variables found");
    }

    internal static void Close()
    {
        try
        {
            _database.Close();
        } catch { }
    }

    public static string ConvertNameString(string str)
    {
        str = str.ToLower();

        var regexSpecialChars = new Regex("[ |\\.\\-/]");
        str = regexSpecialChars.Replace(str, "_");

        var regexUmlauts = new Regex("[äöüß]");
        var evaluator = new MatchEvaluator(UmlautsReplacer);
        str = regexUmlauts.Replace(str, evaluator);

        return str;
    }
    
    
    private static string UmlautsReplacer(Match m)
    {
        return m.Value switch
        {
            "ä" => "ae",
            "ö" => "oe",
            "ü" => "ue",
            "ß" => "ss",
            _ => m.Value
        };
    }
}