// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Example is
Initializable,
OwnableUpgradeable,
UUPSUpgradeable
{
    uint256 public a;

    ///////////////////////////
    //////// SYSTEM  /////////
    ///////////////////////////
    function initialize() public initializer {
        __Ownable_init(msg.sender);
    }

    ///////////////////////////
    ////////USER ACTION////////
    ///////////////////////////



    ///////////////////////////
    //////// UPGRADE  /////////
    ///////////////////////////

    function _authorizeUpgrade(address newImplementation) internal onlyOwner override {
    }
}
