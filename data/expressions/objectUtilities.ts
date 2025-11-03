import { Expression } from './stringUtilities';

export const objectUtilities: Expression[] = [
  {
    signature: "get(path, defaultValue?)",
    description: "Safe property lookup by dot-path, with optional default",
    format: `\${ objectInput | get(dotPath, defaultValue) }`,
    example: `\${ httpGet.data | get("user.name", "unknown") }`,
    details: "Safely retrieves nested object properties using dot notation (e.g., \"user.profile.email\"). Returns the value at the path, or the optional default value if the path doesn't exist. Prevents errors when accessing deeply nested properties that might not exist."
  },
  {
    signature: "keys()",
    description: "Get object keys as array",
    format: `\${ objectInput | keys() }`,
    example: `\${ workflow.config | keys() }`,
    details: "Returns an array of all enumerable property names (keys) from an object. Useful for iterating over object properties, displaying configuration options, or checking what fields are available in a data structure."
  },
  {
    signature: "values()",
    description: "Get object values as array",
    format: `\${ objectInput | values() }`,
    example: `\${ workflow.config | values() }`,
    details: "Returns an array of all enumerable property values from an object. Perfect for extracting all values without caring about the keys, or when you need to process all values in a collection."
  },
  {
    signature: "has(path)",
    description: "Check whether object has a given dot-path (returns boolean)",
    format: `\${ objectInput | has(dotPath) }`,
    example: `\${ user.settings | has("darkMode") }`,
    details: "Returns true if the object has a property at the specified dot-path, false otherwise. Useful for conditional logic, checking if optional fields exist, or validating data structures before accessing properties."
  }
];

