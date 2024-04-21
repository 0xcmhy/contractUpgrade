// The Open Zeppelin upgrades plugin adds the `upgrades` property
// to the Hardhat Runtime Environment.
const {ethers, network, upgrades} = require("hardhat");
const {address} = require("hardhat/internal/core/config/config-validation");
const EXAMPLE_PROXY_ADDR = "0x166AdAE9BE08D2d849b8A9bf5a9c32d7162CC9D8";

async function main() {
    const ExampleV1 = await ethers.getContractFactory('ExampleV1');
    const exampleV1 = await upgrades.upgradeProxy(
        EXAMPLE_PROXY_ADDR,
        ExampleV1,
        {redeployImplementation: "always"});
    console.log("example addr: ", await exampleV1.getAddress());
}

main();
