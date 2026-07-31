import js from "@eslint/js";
import pluginVue from "eslint-plugin-vue";

// ESLint 9+ flat config. Replaces the old .eslintrc.js; note that `--ignore-path
// .gitignore` was removed from the CLI, so ignores live here now.
export default [
  {
    ignores: ["dist/**", "node_modules/**", "public/**"],
  },
  js.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        // Browser globals used across the app
        window: "readonly",
        document: "readonly",
        navigator: "readonly",
        console: "readonly",
        fetch: "readonly",
      },
    },
  },
];
