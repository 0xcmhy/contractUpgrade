const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");


module.exports = buildModule("ExampleModule", (m) => {
  const example = m.contract("Example");
  return { example };
});
