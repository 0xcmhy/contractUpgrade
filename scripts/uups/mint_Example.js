// The Open Zeppelin upgrades plugin adds the `upgrades` property
// to the Hardhat Runtime Environment.
const {ethers, network, upgrades} = require("hardhat");
const {address} = require("hardhat/internal/core/config/config-validation");
const EXAMPLE_PROXY_ADDR = "0xF7e0Df345dFa440E26DefEE5AE366a8C8a8EbDA9";
const amount = "1000";

async function main() {
    const ExampleV1 = await ethers.getContractAt('ExampleV1', EXAMPLE_PROXY_ADDR);
    //获取当前用户地址
    const accounts = await ethers.getSigners();
    //调用合约方法 mint 100个eth

    const tx = await ExampleV1.mint(accounts[0].address, ethers.parseEther(amount));
    await tx.wait();
    console.log("mint to", accounts[0].address, "amount:", amount);
}

main();
