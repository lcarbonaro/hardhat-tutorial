require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.7.3",
  networks: {
    polygontest: {
      url: process.env.POLYGON_ALCHEMY_API,
      accounts: [ process.env.METAMASK_PRIVATE_KEY ]
    }
  }
};
