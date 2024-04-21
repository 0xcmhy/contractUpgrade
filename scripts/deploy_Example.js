// The Open Zeppelin upgrades plugin adds the `upgrades` property
// to the Hardhat Runtime Environment.
const {ethers, network, upgrades} = require("hardhat");

async function main() {
    // Obtain reference to contract and ABI.
    const Example = await ethers.getContractFactory("Example");
    console.log("Deploying Example to ", network.name);
    // Get the first account from the list of 20 created for you by Hardhat

    //  Deploy logic contract using the proxy pattern.
    const example = await upgrades.deployProxy(
        Example,

        //Since the logic contract has an initialize() function
        // we need to pass in the arguments to the initialize()
        // function here.
        ["USDT Example", "UDST"],

        // We don't need to expressly specify this
        // as the Hardhat runtime will default to the name 'initialize'
        {initializer: "initialize", kind: 'uups', redeployImplementation: "always"},
    );
    await example.waitForDeployment();
    console.log("example deployed to:", await example.getAddress());
}

main();
