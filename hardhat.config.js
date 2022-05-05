require("@nomiclabs/hardhat-waffle");

// The next line is part of the sample project, you don't need it in your
// project. It imports a Hardhat task definition, that can be used for
// testing the frontend.
require("./tasks/faucet");
const ALCHEMY_API_KEY = "P1re1PZoDoDgwBcJlay6vFammzC5ujOF";
const ROPSTEN_PRIVATE_KEY = "f4d8081e088a3b6e0ace631363e684910c06f297d2ee8634e2ed7c3d53d4c22c";

// If you are using MetaMask, be sure to change the chainId to 1337
module.exports = {
  solidity: "0.8.0",
  networks: {
    hardhat: {
      chainId: 31337
    },
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${ROPSTEN_PRIVATE_KEY}`]
    }
  }
};
