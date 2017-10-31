module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      host: "localhost", // Connect to geth on the specified
      port: 8545,
      from: "0x3408ec0bE7d441Ae2Db4c3B9d0a206E7dB144Ef5", // default address to use for any transaction Truffle makes during migrations
      network_id: 4,
      gas: 4692388 // Gas limit used for deploys
    }
  }
};
