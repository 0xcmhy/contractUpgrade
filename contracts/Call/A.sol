// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract A {
    uint256 public alice;
    uint256 public bob;

    address public b;
    constructor(address _b) {
        b = _b;
    }

    function callFoo(uint256 _alice, uint256 _bob) external {
        (bool success, bytes memory data) =
                            b.call(abi.encodeWithSignature("foo(uint256,uint256)",
                _alice, _bob));
        require(success, "Tx failed");
    }

    function delegateCallFoo(uint256 _alice, uint256 _bob) external {
        (bool success, bytes memory data) =
                            b.delegatecall(abi.encodeWithSignature("foo(uint256,uint256)",
                _alice, _bob));
        require(success, "Tx failed");
    }
}

contract B {
    uint256 public alice;
    uint256 public bob;

    function foo(uint256 _alice, uint256 _bob) external {
        alice = _alice;
        bob = _bob;
    }
}