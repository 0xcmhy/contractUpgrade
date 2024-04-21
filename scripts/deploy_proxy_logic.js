const {ethers, network, upgrades} = require("hardhat");

const Alice = 1;
let LogicAddr;
let ProxyAddr;

async function deployLogic() {
    // Obtain reference to contract and ABI.
    const Logic = await ethers.getContractFactory("Logic");
    console.log("Deploying Logic to ", network.name);
    // Get the first account from the list of 20 created for you by Hardhat

    //  Deploy logic contract using the proxy pattern.
    const logic = await Logic.deploy()
    await logic.waitForDeployment();
    LogicAddr = await logic.getAddress();
    console.log("logic deployed to:", await logic.getAddress());
}

async function deployProxy() {
    // Obtain reference to contract and ABI.
    const Proxy = await ethers.getContractFactory("Proxy");
    console.log("Deploying Proxy to ", network.name);
    // Get the first account from the list of 20 created for you by Hardhat

    //  Deploy logic contract using the proxy pattern.
    const proxy = await Proxy.deploy()
    await proxy.waitForDeployment();
    ProxyAddr = await proxy.getAddress();
    console.log("proxy deployed to:", await proxy.getAddress());
    let tx = await proxy.setImplementation(LogicAddr);
    await tx.wait();
    console.log("proxy setImplementation: success", LogicAddr);
}

async function setAlice() {
    // Obtain reference to contract and ABI.
    console.log("ProxyAddrset : ", ProxyAddr)

    const contract = await ethers.getContractAt("Logic", ProxyAddr);
    let tx = await contract.setAlice(Alice);
    await tx.wait();
    console.log("setAlice: success");
}

async function getAlice() {
    console.log("ProxyAddr:get ", ProxyAddr)

    // Obtain reference to contract and ABI.
    const contract = await ethers.getContractAt("Logic", ProxyAddr);
    const aliceValue = await contract.alice();
    console.log("getAlice: ", aliceValue);
}

async function main() {
    await deployLogic();
    await deployProxy();
    await setAlice();
    await getAlice();
}

main();
