require('dotenv').config();
const {ethers} = require("ethers");
const CONTRACT_ADDRESS = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"
const url = "http://127.0.0.1:8545"

async function getStorageAt(slot) {
    const provider = new ethers.JsonRpcProvider(url);
    //address common.Address, hexKey
    const res = await provider.getStorage(CONTRACT_ADDRESS, slot);
    console.log("getStorageAt  slot : ",slot,"value:", res);
}

async function main() {
    await getStorageAt(0);
    await getStorageAt(1);
}

main()
