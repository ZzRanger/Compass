export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "client",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["vuetify/lib/styles/main.sass", 'mdi/css/materialdesignicons.min.css',],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
    [
      "@nuxtjs/firebase",
      {
        config: {
          apiKey: "AIzaSyAtz4IH8zY1iaMIXoPBXC_JZ4fcaHJ4b2w",

          authDomain: "compassdev-940a1.firebaseapp.com",

          projectId: "compassdev-940a1",

          storageBucket: "compassdev-940a1.appspot.com",

          messagingSenderId: "177153033431",

          appId: "1:177153033431:web:3d4bdacb65accd81305c92",
        },
        services: {
          auth: true, // Just as example. Can be any other service.
        },
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vuetify"],
  },
};
