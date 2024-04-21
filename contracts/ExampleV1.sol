// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";

contract ExampleV1 is Initializable, OwnableUpgradeable, UUPSUpgradeable {
    string public name;
    string public symbol;
    mapping(address account => uint256) private _balances;
    //////// SYSTEM  /////////
    function initialize(string memory _name, string memory _symbol) public initializer {
        __Ownable_init(msg.sender);
        name = _name;
        symbol = _symbol;
    }
    ////////USER ACTION////////
    function setName(string memory _name) public onlyOwner{
        name = _name;
    }

    function setSymbol(string memory _symbol) public onlyOwner{
        symbol = _symbol;
    }

    function balanceOf(address account) external view returns (uint256){
        return _balances[account];
    }

    function mint(address to, uint256 value) external onlyOwner {
        require(to != address(0), "mint to the zero address");
        require(value > 0, "mint value must be greater than zero");
        _balances[to] += value;
    }
    //////// UPGRADE  /////////
    function _authorizeUpgrade(address newImplementation) internal onlyOwner override {
    }
}
