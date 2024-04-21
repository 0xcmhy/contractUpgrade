const {ethers, network, upgrades} = require("hardhat");


async function deployB() {
    // Obtain reference to contract and ABI.
    const B = await ethers.getContractFactory("B");
    console.log("Deploying B to ", network.name);
    // Get the first account from the list of 20 created for you by Hardhat

    //  Deploy logic contract using the proxy pattern.
    const b = await B.deploy()
    await b.waitForDeployment();
    console.log("b deployed to:", await b.getAddress());
    return b.getAddress();
}

async function deployA() {
    const bAddr = await deployB();
    // Obtain reference to contract and ABI.
    const A = await ethers.getContractFactory("A");
    console.log("Deploying A to ", network.name);
    // Get the first account from the list of 20 created for you by Hardhat

    //  Deploy logic contract using the proxy pattern.
    const a = await A.deploy(bAddr)
    await a.waitForDeployment();
    console.log("a deployed to:", await a.getAddress());
}


deployA();
