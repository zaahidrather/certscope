import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],

  alias: {
   "@images": "./assets/images"
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: ["@nuxt/icon"],
});