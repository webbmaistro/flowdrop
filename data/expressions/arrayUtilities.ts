import { Expression } from './stringUtilities';

export const arrayUtilities: Expression[] = [
  {
    signature: "first()",
    description: "Get first element of an array or null",
    format: `\${ arrayInput | first() }`,
    example: `\${ fetchUsers.users | first() }`,
    details: "Returns the first element of an array, or null if the array is empty or undefined. Safe way to access the first item without index errors."
  },
  {
    signature: "last()",
    description: "Get last element of an array or null",
    format: `\${ arrayInput | last() }`,
    example: `\${ file.path | split("/") | last() }`,
    details: "Returns the last element of an array, or null if the array is empty or undefined. Commonly used to get filenames from paths or the most recent item in a list."
  },
  {
    signature: "at(index)",
    description: "Safe index access (supports negative indices)",
    format: `\${ arrayInput | at(indexNumber) }`,
    example: `\${ article.tags | at(-1) }`,
    details: "Accesses array elements by index with support for negative indices (counting from the end). Returns null if index is out of bounds. Use at(-1) for last element, at(-2) for second to last, etc."
  },
  {
    signature: "length()",
    description: "Get length of string, array, or object keys",
    format: `\${ input | length() }`,
    example: `\${ fetchUsers.users | length() }`,
    details: "Returns the number of elements in an array, characters in a string, or keys in an object. Essential for counting items, checking if collections are empty, or displaying statistics."
  },
  {
    signature: "uniq()",
    description: "Deduplicate array (shallow comparison)",
    format: `\${ arrayInput | uniq() }`,
    example: `\${ post.tags | uniq() }`,
    details: "Removes duplicate values from an array using shallow comparison. Returns a new array with only unique values. Perfect for cleaning up lists of tags, categories, or IDs."
  },
  {
    signature: "compact()",
    description: "Remove null, undefined, and empty string elements from array",
    format: `\${ arrayInput | compact() }`,
    example: `\${ users.emails | compact() }`,
    details: "Filters out null, undefined, and empty string (\"\") values from an array. Useful for cleaning data before processing or display."
  },
  {
    signature: "sort()",
    description: "Ascending lexicographic/number sort (non-mutating)",
    format: `\${ arrayInput | sort() }`,
    example: `\${ quiz.scores | sort() }`,
    details: "Sorts an array in ascending order (numbers numerically, strings alphabetically). Returns a new sorted array without modifying the original. Great for organizing lists, rankings, or alphabetical sorting."
  }
];

