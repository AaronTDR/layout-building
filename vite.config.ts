import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Debe permitir conexiones desde cualquier dirección IP
    port: 5173, // El puerto en el que está ejecutando Vite
  },
});
