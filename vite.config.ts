import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      // localsConvention: "camelCaseOnly", // className: myClass → myClass (not my_class)
      generateScopedName: "[name]__[local]___[hash:base64:5]",
    },
  },
});
