import { defineConfig } from "tsup";
import { NodeResolvePlugin } from "@esbuild-plugins/node-resolve";

export default defineConfig({
  entry: ["src/index.ts"],
  splitting: false,
  sourcemap: true,
  clean: false,
  minify: true,
  format: ["cjs", "esm"],
  outExtension: ({ format }) => ({ js: format === "cjs" ? ".cjs" : ".mjs" }),
  platform: "browser",
  esbuildPlugins: [
    NodeResolvePlugin({
      extensions: [".js", "ts", "tsx", "jsx"],
      onResolved: (resolved) => {
        if (resolved.includes("node_modules")) {
          return {
            external: true,
          };
        }
        return resolved;
      },
    }),
  ],
  esbuildOptions(options) {
    options.keepNames = true;
    options.banner = {
      js: '"use client"',
    };
  },
});
