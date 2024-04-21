const {buildModule} = require("@nomicfoundation/hardhat-ignition/modules");


module.exports = buildModule("LibraryTestModule", (m) => {
    const LibraryTest = m.contract("LibraryTest");
    return {LibraryTest};
});
