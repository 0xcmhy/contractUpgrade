require('dotenv').config();
const {ethers} = require("ethers");
const CONTRACT_ADDRESS = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9"
const url = "http://127.0.0.1:8545"

async function getStorageAt6() {
    const slot = 6;
    const provider = new ethers.JsonRpcProvider(url);
    //address common.Address, hexKey
    const res = await provider.getStorage(CONTRACT_ADDRESS, slot);
    const stringValue = ethers.toUtf8String(res);
    // console.log("slot 6 stringValue: ", stringValue);
    console.log("getStorageAt storageContract slot 6: ", stringValue);
}

async function getStorageAt0() {
    const slot = 0;
    const provider = new ethers.JsonRpcProvider(url);
    //address common.Address, hexKey
    const res = await provider.getStorage(CONTRACT_ADDRESS, slot);
    console.log("getStorageAt storageContract slot 0: ", res);
}

async function main() {
    await getStorageAt0();
    await getStorageAt6();
}

main()
