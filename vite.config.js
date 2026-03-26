import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "robots.txt", "apple-touch-icon.png"],
      manifest: {
        name: "Kidz & Kash",
        short_name: "Kidz&Kash",
        description: "Financial literacy made fun",
        theme_color: "#F5A623",
        background_color: "#0D1B2A",
        display: "standalone",
        icons: [...],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/firestore\.googleapis\.com\/.*/i,
            handler: "NetworkFirst",
            options: { cacheName: "firestore-cache" },
          },
        ],
      },
    }),
  ],
});