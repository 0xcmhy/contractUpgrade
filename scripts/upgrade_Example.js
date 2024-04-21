// The Open Zeppelin upgrades plugin adds the `upgrades` property
// to the Hardhat Runtime Environment.
const {ethers, network, upgrades} = require("hardhat");
const {address} = require("hardhat/internal/core/config/config-validation");
const EXAMPLE_PROXY_ADDR = "0x272A7c9868B8180C1D5FD097588CD4C181594884";

async function main() {
    const ExampleV1 = await ethers.getContractFactory('ExampleV1');
    const exampleV1 = await upgrades.upgradeProxy(
        EXAMPLE_PROXY_ADDR,
        ExampleV1,
        {redeployImplementation: "always"});
    console.log("example addr: ", await exampleV1.getAddress());
}

main();
