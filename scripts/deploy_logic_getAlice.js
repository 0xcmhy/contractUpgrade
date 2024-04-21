const {ethers, network, upgrades} = require("hardhat");

const Alice = 1;
let LogicAddr;
let ProxyAddr="0x5bf5b11053e734690269C6B9D438F8C9d48F528A";

async function getAlice() {
    // Obtain reference to contract and ABI.
    console.log("ProxyAddr: ", ProxyAddr)
    const contract = await ethers.getContractAt("Logic", ProxyAddr);
    const aliceValue = await contract.alice();
    console.log("getAlice: ", aliceValue);
}

async function getAddr() {
    // Obtain reference to contract and ABI.
    console.log("ProxyAddr: ", ProxyAddr)
    const contract = await ethers.getContractAt("Proxy", ProxyAddr);
    const implementation = await contract.implementation();
    console.log("implementation: ", implementation);
}

async function main() {
    await getAddr();
}

main();
