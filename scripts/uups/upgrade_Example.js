// The Open Zeppelin upgrades plugin adds the `upgrades` property
// to the Hardhat Runtime Environment.
const {ethers, network, upgrades} = require("hardhat");
const {address} = require("hardhat/internal/core/config/config-validation");
const EXAMPLE_PROXY_ADDR = "0xF7e0Df345dFa440E26DefEE5AE366a8C8a8EbDA9";

async function main() {
    const ExampleV1 = await ethers.getContractFactory('ExampleV1');
    const exampleV1 = await upgrades.upgradeProxy(
        EXAMPLE_PROXY_ADDR,
        ExampleV1,
        {redeployImplementation: "always"});
    console.log("example addr: ", await exampleV1.getAddress());
}

main();
