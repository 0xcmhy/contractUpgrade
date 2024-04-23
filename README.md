# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a
Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```

```shell
npx hardhat ignition deploy ./ignition/modules/Lock.js --network sepolia --verify

#npx hardhat ignition verify deployments-id
npx hardhat ignition verify chain-11155111
```

```shell
npx hardhat run --network sepolia scripts/uups/deploy_Example.js 
npx hardhat verify --network sepolia proxyAddr
 #更改[upgrade_Example.js](scripts%2Fuups%2Fupgrade_Example.js)中的EXAMPLE_PROXY_ADDR
npx hardhat run --network sepolia scripts/uups/upgrade_Example.js
npx hardhat verify --network sepolia proxyAddr
```

```text
https://sepolia.etherscan.io/
```