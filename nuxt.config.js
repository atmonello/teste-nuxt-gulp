require("dotenv-flow").config();

export default {
  mode: "universal",
  env: {
    imagePath: process.env.IMAGE_PATH
  },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["~assets/styles/main.sass"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/imageURL.js"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    "@nuxtjs/eslint-module"
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/style-resources"
  ],
  styleResources: {
    sass: ["./assets/styles/vars/*.sass"]
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  router: {
    routerBase:
      process.env.DEPLOY_ENV === "gh_pages" ? "/teste-nuxt-gulp/" : "/"
  }
  // build: {
  //   /*
  //    ** You can extend webpack config here
  //    */
  //   extend(config, ctx) {}
  // }
};
