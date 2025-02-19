// 59d7c002fa2d4556861d343ca8a23a8d
// https://linea-mainnet.infura.io/v3/59d7c002fa2d4556861d343ca8a23a8d

require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.4",
  networks:{
    linea :{
      url: "https://linea-mainnet.infura.io/v3/59d7c002fa2d4556861d343ca8a23a8d",
      accounts: ['bcc7db556cf9ed86aae7c559c1e41b17bdd4143f5b7f40e22133cd1fd9ef7492']
    }
  }
}