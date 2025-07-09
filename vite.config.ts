import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/criar-pagamento": "http://localhost:3001",
      "/status-pagamento": "http://localhost:3001",
      "/webhook": "http://localhost:3001",
    },
  },
});
