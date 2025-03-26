import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import { dirname, resolve } from "node:path";
// import { fileURLToPath } from "node:url";
// import dts from "vite-plugin-dts";

// const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  // build: {
  //   lib: {
  //     entry: resolve(__dirname, "index.ts"),
  //     name: "bme-calendar",
  //     fileName: "index",
  //   },
  //   copyPublicDir: false,
  //   rollupOptions: {
  //     external: ["react", "react-dom"],
  //     output: {
  //       globals: {
  //         react: "React",
  //         "react-dom": "ReactDOM",
  //       },
  //     },
  //   },
  // },
});
