export interface Expression {
  signature: string;
  description: string;
  format: string;
  example: string;
  details: string;
  outputNote?: string;
}

export const stringUtilities: Expression[] = [
  {
    signature: "split(delimiter)",
    description: "Split a string into an array",
    format: `\${ input | split(delimiter) }`,
    example: `\${ csvData.names | split(",") }`,
    details: "Splits a string by the specified delimiter and returns an array of substrings. Useful for parsing comma-separated values, file paths, or any delimited text."
  },
  {
    signature: "join(separator)",
    description: "Join array elements into a string",
    format: `\${ arrayInput | join(separator) }`,
    example: `\${ userTags.list | join(" | ") }`,
    details: "Joins array elements into a single string with the specified separator. Perfect for creating formatted lists or combining multiple values."
  },
  {
    signature: "replace(search, replacement)",
    description: "Replace all occurrences of a substring",
    format: `\${ input | replace(searchString, replacementString) }`,
    example: `\${ user.fullName | replace(" ", "_") }`,
    details: "Replaces all occurrences of the search string with the replacement string. Commonly used for formatting names, URLs, or file paths."
  },
  {
    signature: "regexReplace(pattern, replacement, flags?)",
    description: "Regex replace with optional flags",
    format: `\${ input | regexReplace(pattern, replacement, flags) }`,
    example: `\${ message.text | regexReplace("\\\\s+", " ", "g") }`,
    details: "Performs regex-based replacement with optional flags (g for global, i for case-insensitive). Powerful for complex string transformations and pattern matching."
  },
  {
    signature: "trim()",
    description: "Trim whitespace from both ends",
    format: `\${ input | trim() }`,
    example: `\${ formData.email | trim() }`,
    details: "Removes whitespace from the beginning and end of a string. Essential for cleaning user input or data from external sources."
  },
  {
    signature: "lower()",
    description: "Convert string to lowercase",
    format: `\${ input | lower() }`,
    example: `\${ user.email | lower() }`,
    details: "Converts all characters in a string to lowercase. Useful for normalizing email addresses, usernames, or case-insensitive comparisons."
  },
  {
    signature: "upper()",
    description: "Convert string to uppercase",
    format: `\${ input | upper() }`,
    example: `\${ product.code | upper() }`,
    details: "Converts all characters in a string to uppercase. Commonly used for formatting codes, constants, or display names."
  },
  {
    signature: "startsWith(prefix)",
    description: "Check if string starts with prefix (returns boolean)",
    format: `\${ input | startsWith(prefixString) }`,
    example: `\${ file.path | startsWith("app/") }`,
    details: "Returns true if the string starts with the specified prefix, false otherwise. Useful for filtering paths, URLs, or conditional logic."
  },
  {
    signature: "endsWith(suffix)",
    description: "Check if string ends with suffix (returns boolean)",
    format: `\${ input | endsWith(suffixString) }`,
    example: `\${ file.name | endsWith(".json") }`,
    details: "Returns true if the string ends with the specified suffix, false otherwise. Perfect for file type detection or URL validation."
  },
  {
    signature: "slice(start, end?)",
    description: "Extract a portion of a string or array",
    format: `\${ input | slice(startIndex, endIndex) }`,
    example: `\${ apiKey.token | slice(0, 8) }`,
    details: "Extracts a section of a string from the start index to the optional end index. Negative indices count from the end. Great for truncating strings or extracting substrings."
  },
  {
    signature: "contains(substring)",
    description: "Check if string contains substring (returns boolean)",
    format: `\${ input | contains(searchString) }`,
    example: `\${ email.subject | contains("invoice") }`,
    details: "Returns true if the string contains the specified substring, false otherwise. Useful for search functionality or content filtering."
  }
];

