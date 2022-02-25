require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-web3");

require('dotenv').config({ path: '.env' });
module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      blockGasLimit: 12_450_000,
      hardfork: "london"
    },
    localhost: {
      url: 'http://localhost:8545',
    },
    cro_testnet: {
      url: 'https://cronos-testnet-3.crypto.org:8545',
      accounts: [`${process.env.PRIVATE_KEY}`]
    },
    cro: {
      url: 'https://evm-cronos.crypto.org',
      accounts: [`${process.env.PRIVATE_KEY}`]
    },
  },
};
