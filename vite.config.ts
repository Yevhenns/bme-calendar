import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"), // вказуємо вхідний файл для бібліотеки
      name: "BmeCalendar",
      fileName: (format) => `bme-calendar.${format}.js`, // форматуємо назву файлу
    },
    rollupOptions: {
      // Забезпечуємо експорт у форматах, сумісних з ES і CommonJS
      external: ["react", "react-dom"], // не включаємо react в бандл
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
