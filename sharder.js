const Sharder = require('eris-sharder').Master;
const sharder = new Sharder("someToken", "/index.js", {
  stats: true,
  debug: true,
  guildsPerShard: 1500,
  name: "Zandercraft Bot",
  webhooks: {
    shard: {
      id: "webhookID",
      token: "webhookToken"
    },
     cluster: {
      id: "webhookID",
      token: "webhookToken"
    }
  },
  clientOptions: {
      messageLimit: 150,
      defaultImageFormat: "png"
  }
});

sharder.on("stats", stats => {
  console.log(stats);
});