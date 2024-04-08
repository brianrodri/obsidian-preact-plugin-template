import preact from "@preact/preset-vite";
import { resolve } from "path";
import { defineConfig, normalizePath } from "vite";

export default defineConfig(({ mode }) => ({
    plugins: [preact()],
    build: {
        copyPublicDir: true, // Copies manifest.json and version.json into the build directory.
        emptyOutDir: false, // Otherwise helpful files like ".hotreload" will be wiped.
        lib: {
            entry: normalizePath(resolve(__dirname, "src/main.tsx")),
            fileName: () => "main.js", // vite will append ".cjs" without this indirection.
            formats: ["cjs"],
        },
        rollupOptions: {
            treeshake: true,
            external: ["obsidian"],
        },
        sourcemap: mode === "development" ? "inline" : false,
    },
    test: {
        environment: "jsdom",
    },
}));
