var CarboncoinEth = artifacts.require('./CarboncoinEth.sol');

module.exports = function(deployer) {
  deployer.deploy(CarboncoinEth);
}
