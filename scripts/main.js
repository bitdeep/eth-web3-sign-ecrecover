const hre = require("hardhat");
// npx hardhat run scripts\mainnet.js --network cro
async function main() {
    const mintPass = '0x844dacd5a52db9368e6c606f739599598031da84';
    const old = '0xfc1255755829c460D938e76f7Fa6de04505925e1';
    const _CSS = await hre.ethers.getContractFactory("NFT2");
    const CSS = await _CSS.deploy(mintPass, old);
    await CSS.deployed();
    console.log("contract:", CSS.address);
    await CSS.setBaseURI('https://398dofhadsf.cronossociety.com/meta/');

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
