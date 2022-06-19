import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
    // publicRuntimeConfig: {
    //     FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    //   },
  css: ["@/assets/css/styles.css"],
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
      },
      
    },    
});
