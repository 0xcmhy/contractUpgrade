const {ethers, network, upgrades} = require("hardhat");


async function main() {
    // 部署 LibraryDemo 库
    const LibraryDemo = await ethers.getContractFactory("LibraryDemo");
    const libraryDemo = await LibraryDemo.deploy();
    await libraryDemo.waitForDeployment();

    libraryDemoAddress = await libraryDemo.getAddress();
    console.log("LibraryDemo deployed to:", libraryDemoAddress);

    // 部署并链接 LibraryTest 合约
    const LibraryTest = await ethers.getContractFactory("LibraryTest", {
        libraries: {
            LibraryDemo:libraryDemoAddress,
        },
    });
    const libraryTest = await LibraryTest.deploy();

    await libraryTest.waitForDeployment();
    console.log("LibraryTest deployed to:",await libraryTest.getAddress());

    // 调用 LibraryTest 合约的 get 方法
    const result = await libraryTest.get();
    console.log("LibraryTest.get() result:", result.toString());
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
