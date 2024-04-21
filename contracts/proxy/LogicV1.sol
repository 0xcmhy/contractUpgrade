// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract LogicV1 {
    uint256 public alice;
    uint256 public bob;

    function setAlice(uint256 _alice) external {
        alice = _alice;
    }

    function setBob(uint256 _bob) external {
        bob = _bob;
    }
}