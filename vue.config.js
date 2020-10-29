module.exports = {
  transpileDependencies: ["vuetify"],
  pwa: {
    name: "barcode",
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "src/service-worker.js"
    }
  }
};
