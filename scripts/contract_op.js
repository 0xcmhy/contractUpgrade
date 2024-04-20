require('dotenv').config();
const {ethers} = require("hardhat");
const INFURA_API_KEY = process.env.INFURA_API_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS

async function get() {
    const test = await ethers.getContractAt("Test", CONTRACT_ADDRESS);
    const res = await test.b();
    console.log("getb: ", res);
}

get();