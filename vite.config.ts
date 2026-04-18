/// <reference types="vite/client" />

import react, {reactCompilerPreset} from "@vitejs/plugin-react";
import {defineConfig} from "vite";
import {resolve} from "path";
import {version} from "./package.json";
import typescript from "@rollup/plugin-typescript";
import babel from "@rolldown/plugin-babel";

console.log(`ReactFirebaseDB v${version}`);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    typescript(),
    react(),
    babel({
      presets: [reactCompilerPreset()],
    }),
  ],
  define: {
    "process.env.REACT_FIREBASE_DB_VERSION": JSON.stringify(version),
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "ReactFirebaseDB",
      fileName: "index",
    },
  },
});
