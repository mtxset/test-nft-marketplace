/* hardhat.config.js */
require("@nomiclabs/hardhat-waffle")
const keys = require("./keys.json");

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    //unused configuration commented out for now
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: ["0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d"]
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/bbb15742b64a4a70abb7df516ab22134`,
      accounts: [`${keys.ROPSTEN_PRIVATE_KEY}`]
    },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}