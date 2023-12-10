import { resolve } from "path";
import { defineConfig, normalizePath } from "vite";

export default defineConfig(({ mode }) => ({
	plugins: [],
	build: {
		copyPublicDir: true, // Copies manifest.json and version.json into the build directory.
		emptyOutDir: false, // Otherwise helpful files like ".hotreload" will be wiped.
		lib: {
			entry: normalizePath(resolve(__dirname, "src/main.ts")),
			fileName: () => "main.js", // vite will append ".cjs" without this indirection.
			formats: ["cjs"],
		},
		rollupOptions: {
			treeshake: true,
			external: ["obsidian"],
		},
		sourcemap: mode === "development" ? "inline" : false,
	},
}));
