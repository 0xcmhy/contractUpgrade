// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract Proxy {
    uint256 public a;
    uint256 public b;

    address public addressLogic;
    constructor(address _addressLogic) {
        addressLogic = _addressLogic;
    }

    function callFoo(uint256 _alice, uint256 _bob) external {
        (bool success, bytes memory data) =
                            addressLogic.call(abi.encodeWithSignature("foo(uint256,uint256)",
                _alice, _bob));
        require(success, "Tx failed");
    }

    function delegateCallFoo(uint256 _alice, uint256 _bob) external {
        (bool success, bytes memory data) =
                            addressLogic.delegatecall(abi.encodeWithSignature("foo(uint256,uint256)",
                _alice, _bob));
        require(success, "Tx failed");
    }
}

contract Logic {
    uint256 public alice; //slot 0
    uint256 public bob; //slot 1

    function foo(uint256 _alice, uint256 _bob) external {
        alice = _alice;
        bob = _bob;
    }
}