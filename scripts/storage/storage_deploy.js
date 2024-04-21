// The Open Zeppelin upgrades plugin adds the `upgrades` property
// to the Hardhat Runtime Environment.
const {ethers, network, upgrades} = require("hardhat");

async function main() {
    // Obtain reference to contract and ABI.
    const Storage = await ethers.getContractFactory("Storage");
    console.log("Deploying Storage to ", network.name);
    // Get the first account from the list of 20 created for you by Hardhat

    //  Deploy logic contract using the proxy pattern.
    const storage = await Storage.deploy()
    await storage.waitForDeployment();
    console.log("storage deployed to:", await storage.getAddress());
}

main();
