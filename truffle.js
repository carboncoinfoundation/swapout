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
      from: process.env.CREATOR_ACCOUNT, // default address to use for any transaction Truffle makes during migrations
      network_id: 4,
      gas: 4692388 // Gas limit used for deploys
    },
    "live": {
      network_id: 1,
      host: "localhost",
      gas: 4712388,
      port: 8546   // Different than the default below
    }
  }
};
