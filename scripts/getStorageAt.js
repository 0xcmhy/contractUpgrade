require('dotenv').config();
const {ethers} = require("ethers");
const INFURA_API_KEY = process.env.INFURA_API_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS

async function getStorageAt7() {
    const slot = 7;
    const provider = new ethers.JsonRpcProvider("https://sepolia.infura.io/v3/" + INFURA_API_KEY);
    //address common.Address, hexKey
    const res = await provider.getStorage(CONTRACT_ADDRESS, slot);
    console.log("7getStorageAt: ", res);
    const stringValue = ethers.toUtf8String(res);
    console.log("7stringValue: ", stringValue);
}

async function getStorageAt8() {
    const slot = 8;
    const provider = new ethers.JsonRpcProvider("https://sepolia.infura.io/v3/" + INFURA_API_KEY);
    //address common.Address, hexKey
    const res = await provider.getStorage(CONTRACT_ADDRESS, slot);
    console.log("8getStorageAt: ", res);
}

async function main() {
    await getStorageAt7();
    await getStorageAt8();
}
main()
