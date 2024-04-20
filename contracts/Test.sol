// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Test {
    uint256 public b;
    //定义一个error
    error NoPermission(string);

    function test(uint256 input) public {
        if (input == 1) {
            require(input == 2, "input==2");
        }
        if (input == 2) {
            revert NoPermission("input==2");
        }
        b++;
    }

    function get() public view returns (uint256){
        return b;
    }
}
