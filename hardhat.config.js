require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["x8d9a68d63e92a6b51d96a6143e458527c4061230fbe8a7bb344de8d44278c213"],
    },
  },
};
