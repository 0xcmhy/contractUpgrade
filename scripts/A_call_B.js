const {ethers, network} = require("hardhat");
//sepolia
var A_ADDR;
var B_ADDR;

const alice = 1;
const bob = 2;


async function deployB() {
    // Obtain reference to contract and ABI.
    const B = await ethers.getContractFactory("B");
    console.log("Deploying B to ", network.name);
    // Get the first account from the list of 20 created for you by Hardhat

    //  Deploy logic contract using the proxy pattern.
    const b = await B.deploy()
    await b.waitForDeployment();
    B_ADDR = await b.getAddress();
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
    A_ADDR = await a.getAddress();
    console.log("a deployed to:", await a.getAddress());
}


async function getAliceAndBob(contractName, contractAddr) {
    const contract = await ethers.getContractAt(contractName, contractAddr);
    const aliceValue = await contract.alice();
    const bobValue = await contract.bob();
    console.log("Contract:", contractName, "; Alice:", aliceValue);
    console.log("Contract:", contractName, "; Bob:", bobValue);
}

async function A_call_B() {
    const A = await ethers.getContractAt("A", A_ADDR);
    const tx = await A.callFoo(alice, bob);
    await tx.wait();
    console.log("Foo function called successfully.");
}

async function main() {
    console.log("***deploy contract***");
    await deployA();
    console.log("***before calling A_call_B***");
    await getAliceAndBob("A", A_ADDR);
    await getAliceAndBob("B", B_ADDR);
    console.log("***calling A_call_B***");
    await A_call_B();
    console.log("***after calling A_call_B***");
    await getAliceAndBob("A", A_ADDR);
    await getAliceAndBob("B", B_ADDR);
}

main()