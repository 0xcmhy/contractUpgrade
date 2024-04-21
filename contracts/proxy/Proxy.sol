// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract Proxy {
    address public implementation;
    address public admin;
    constructor() public {
        admin = msg.sender;
    }
    function setImplementation(address newImplementation) external {
        require(msg.sender == admin, "must be admin");
        implementation = newImplementation;
    }
    function changeAdmin(address newAdmin) external {
        require(msg.sender == admin, "must be admin");
        admin = newAdmin;
    }
    function _delegate(address implementation) internal virtual {
        assembly {
            calldatacopy(0, 0, calldatasize())
            let result := delegatecall(gas(), implementation, 0, calldatasize(), 0, 0)
            returndatacopy(0, 0, returndatasize())
            switch result
            case 0 {
                revert(0, returndatasize())
            }
            default {
                return (0, returndatasize())
            }
        }
    }
    function _fallback() internal virtual {
        _delegate(implementation);
    }
    fallback() external payable virtual {
        _fallback();
    }
}