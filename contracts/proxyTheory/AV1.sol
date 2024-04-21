// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract AV1 {
    uint256 public a;
    uint256 public b;

    address public addressB;
    constructor(address _addressB) {
        addressB = _addressB;
    }

    function callFoo(uint256 _alice, uint256 _bob) external {
        (bool success, bytes memory data) =
                            addressB.call(abi.encodeWithSignature("foo(uint256,uint256)",
                _alice, _bob));
        require(success, "Tx failed");
    }

    function delegateCallFoo(uint256 _alice, uint256 _bob) external {
        (bool success, bytes memory data) =
                            addressB.delegatecall(abi.encodeWithSignature("foo(uint256,uint256)",
                _alice, _bob));
        require(success, "Tx failed");
    }
}

//contract B {
//    uint256 public alice;
//    uint256 public bob;
//
//    function foo(uint256 _alice, uint256 _bob) external {
//        alice = _alice;
//        bob = _bob;
//    }
//}