// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract Logic {
    uint256 public alice;

    function setAlice(uint256 _alice) external {
        alice = _alice;
    }

    function getAlice() external view returns (uint256) {
        return alice;
    }
}