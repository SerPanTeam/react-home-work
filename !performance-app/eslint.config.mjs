import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        // Глобальные переменные Jest (если используете Jest для тестирования)
        test: "readonly",
        expect: "readonly",
        describe: "readonly",
        it: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
      },
      parserOptions: {
        ecmaFeatures: { jsx: true }, // Перемещаем сюда
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
  },
  {
    settings: {
      react: {
        version: "detect", // Автоматически определяет версию React
      },
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];
