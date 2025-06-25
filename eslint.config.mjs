import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      // React specific rules
      "react/no-unescaped-entities": "off", // Allow apostrophes in JSX
      "react/prop-types": "off", // We use TypeScript
      "react/react-in-jsx-scope": "off", // Not needed in Next.js
      "react/jsx-uses-react": "off", // Not needed in Next.js
      
      // General code quality
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-debugger": "error",
      "no-alert": "warn",
      "prefer-const": "error",
      "no-var": "error",
    },
  },
];

export default eslintConfig;
