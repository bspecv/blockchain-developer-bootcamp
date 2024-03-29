require('babel-register');
require('babel-polyfill');
require('dotenv').config();
const HDWalletProvider = require("@truffle/hdwallet-provider"); 
const privateKeys = process.env.PRIVATE_KEYS || ""



module.exports = {
  networks: {
    development :{
      host : "127.0.0.1",
      port : 7545,
      network_id: "*" // match and newtwork ID
    },
    kovan:{
      provider: function () {
       return new HDWalletProvider(
        privateKeys.split(','), //Array for private keys
        `https://kovan.infura.io/v3/${process.env.INFURA_API_KEY}`
       )
      },
      gas:6000000,
      gasPrice:35000000000,
      network_id: 42
    }
  },
  contracts_directory:'./src/contracts/',
  contracts_build_directory:'./src/abis/',


  
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200

      } 
    }
  }
} 

