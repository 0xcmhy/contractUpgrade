// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract Proxy {
    uint256 public a;
    address public addressLogic;

    function setAddressLogic(address _addressLogic) external {
        addressLogic = _addressLogic;
    }

    function delegateCallF1(uint256 _alice, uint256 _bob) external {
        (bool success, bytes memory data) =
                            addressLogic.delegatecall(abi.encodeWithSignature("f1()"));
        require(success, "Tx failed");
    }
}

contract Logic {
    uint256 public a; //slot 0
    uint256 public bob; //slot 1

    function f1(uint256 _alice, uint256 _bob) external {
        a = a + 1;
    }
}

contract LogicNew {
    uint256 public a; //slot 0

    function f1() external {
        a = a + 2;
    }
}