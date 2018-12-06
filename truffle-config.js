const path = require("path");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),

  networks: {
    development: {
      host: "127.0.0.1",
      //port: 8545, //default for ethereum dev servers, including 'truffle develop'
      port: 7545, //ganache
      //network_id: "*" // match any network
      network_id: "5777" //ganache network id
    }
  }
};
