// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract ExampleV1 is
Initializable,
OwnableUpgradeable,
UUPSUpgradeable
{
    string private _name;
    string private _symbol;
    mapping(address account => uint256) private _balances;
    ///////////////////////////
    //////// SYSTEM  /////////
    ///////////////////////////
    function initialize(string memory name, string memory symbol) public initializer {
        __Ownable_init(msg.sender);
        _name = name;
        _symbol = symbol;
    }

    ///////////////////////////
    ////////USER ACTION////////
    ///////////////////////////
    function name() public view virtual returns (string memory) {
        return _name;
    }

    function symbol() public view virtual returns (string memory) {
        return _symbol;
    }

    function setName(string memory name) public {
        _name = name;
    }

    function setSymbol(string memory symbol) public {
        _symbol = symbol;
    }

    function balanceOf(address account) external view returns (uint256){
        return _balances[account];
    }

    function transfer(address to, uint256 value) external returns (bool){
        require(to != address(0), "transfer to the zero address");
        require(value > 0, "transfer value must be greater than zero");
        require(_balances[msg.sender] >= value, "transfer amount exceeds balance");
        _balances[msg.sender] -= value;
        _balances[to] += value;
        return true;
    }

    ///////////////////////////
    //////// UPGRADE  /////////
    ///////////////////////////

    function _authorizeUpgrade(address newImplementation) internal onlyOwner override {
    }
}
