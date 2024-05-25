import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // this specifies the port for the dev server
    proxy: {
      "/api": {
        target: "http://localhost:5100",
      },
    },
  },
});
