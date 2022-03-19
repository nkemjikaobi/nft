// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Greeter = await hre.ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Hello, Hardhat!");

  //Akaza ERC20 Contract
  const Akaza = await hre.ethers.getContractFactory("Akaza");
  const akaza = await Akaza.deploy();

  //Akaza ERC721 Contract
  const AkazaNFT = await hre.ethers.getContractFactory("AkazaNFT");
  const akazaNft = await AkazaNFT.deploy();

  await greeter.deployed();
  await akaza.deployed();
  await akazaNft.deployed();

  console.log("Greeter deployed to:", greeter.address);
  console.log("Akaza deployed to:", akaza.address);
  console.log("AkazaNFT deployed to:", akazaNft.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
