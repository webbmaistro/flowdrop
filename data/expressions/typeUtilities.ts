import { Expression } from './stringUtilities';

export const typeUtilities: Expression[] = [
  {
    signature: "toString()",
    description: "Convert value to string",
    format: `\${ input | toString() }`,
    example: `\${ product.id | toString() }`,
    details: "Converts any value to its string representation. Numbers become number strings, booleans become \"true\" or \"false\", objects and arrays are converted to strings. Useful for ensuring consistent data types when concatenating or displaying values."
  },
  {
    signature: "toNumber()",
    description: "Convert value to number or null if NaN",
    format: `\${ input | toNumber() }`,
    example: `\${ formData.version | toNumber() }`,
    details: "Attempts to convert a value to a number. Returns the numeric value if conversion succeeds, or null if the value cannot be converted to a valid number. Safe way to parse numeric strings or ensure values are numbers for calculations."
  },
  {
    signature: "default(fallback)",
    description: "Use a fallback if input is null, undefined, or empty string",
    format: `\${ input | default(fallbackValue) }`,
    example: `\${ env.BRANCH | default("main") }`,
    details: "Returns the input value if it exists and is not an empty string, otherwise returns the fallback value. Essential for providing default values for optional configuration, environment variables, or user inputs that might be missing."
  },
  {
    signature: "json()",
    description: "JSON-stringify input",
    format: `\${ input | json() }`,
    example: `\${ workflow.config | json() }`,
    details: "Converts any value to a JSON string representation. Objects and arrays are serialized with proper formatting. Useful for logging, debugging, storing complex data structures as strings, or sending data to APIs that expect JSON strings."
  },
  {
    signature: "date()",
    description: "Get current ISO date string (no input required)",
    format: `\${ date() }`,
    example: `\${ date() }`,
    details: "Returns the current date and time as an ISO 8601 formatted string. Note: This function doesn't require an input value - it generates the current timestamp. Perfect for adding timestamps to data, logging, or tracking when workflows execute.",
    outputNote: "Output: 2025-10-22T12:00:00.000Z"
  }
];

