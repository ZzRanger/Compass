import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
    // publicRuntimeConfig: {
    //     FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    //   },
  css: ["@/assets/css/styles.css","vuetify/lib/styles/main.sass", 'mdi/css/materialdesignicons.min.css',],
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
    transpile: ["vuetify"],
    },    
});
