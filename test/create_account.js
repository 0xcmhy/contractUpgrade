const { ethers } = require("hardhat");

async function generateAccount() {
    // Generate a new random account
    const randomAccount = ethers.Wallet.createRandom();

    // Print the address and private key of the new account
    console.log("Address:", randomAccount.address);
    console.log("Private Key:", randomAccount.privateKey);
}

generateAccount();
