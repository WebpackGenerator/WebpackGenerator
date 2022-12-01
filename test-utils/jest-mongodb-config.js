module.exports = {
  mongodbMemoryServerOptions: {
    instance: {
      dbName: 'w'
    },
    binary: {
      version: '6.0.1', // Version of MongoDB
      skipMD5: true
    },
    autoStart: false
  }
};