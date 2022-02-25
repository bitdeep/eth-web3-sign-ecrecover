const hre = require("hardhat");
// npx hardhat run scripts\mainnet.js --network cro
async function main() {
    const _main = await hre.ethers.getContractFactory("main");
    const main = await _main.deploy(mintPass, old);
    await main.deployed();
    console.log("contract:", CSS.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
