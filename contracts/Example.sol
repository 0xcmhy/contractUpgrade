// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";

contract Example is Initializable, OwnableUpgradeable, UUPSUpgradeable {
    string public name;
    string public symbol;
    //////// SYSTEM  /////////
    function initialize(string memory _name, string memory _symbol) public initializer {
        __Ownable_init(msg.sender);
        name = _name;
        symbol = _symbol;
    }

    ////////USER ACTION////////
    function setName(string memory _name) public {
        name = _name;
    }

    function setSymbol(string memory _symbol) public {
        symbol = _symbol;
    }

    //////// UPGRADE  /////////
    function _authorizeUpgrade(address newImplementation) internal onlyOwner override {
    }
}
