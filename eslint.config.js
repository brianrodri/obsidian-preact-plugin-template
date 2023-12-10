import js from "@eslint/js";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import typescriptPluginParser from "@typescript-eslint/parser";
import globals from "globals";

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
	{ ignores: ["dist/", "node_modules/"] },

	js.configs.recommended,

	{
		files: ["version-bump.mjs", "{eslint,vite}.config.js"],
		languageOptions: {
			globals: { ...globals.node },
		},
	},

	{
		files: ["src/**/*.ts"],
		plugins: { "@typescript-eslint": typescriptPlugin },
		rules: {
			...typescriptPlugin.configs.recommended.rules,
			...typescriptPlugin.configs.strict.rules,
		},
		languageOptions: {
			globals: { ...globals.browser },
			parser: typescriptPluginParser,
			parserOptions: {
				ecmaFeatures: { modules: true },
				ecmaVersion: "latest",
			},
		},
	},
];