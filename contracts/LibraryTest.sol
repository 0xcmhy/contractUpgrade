// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import {LibraryDemo} from "./libraries/LibraryDemo.sol";

contract LibraryTest {
    function get() public pure returns (uint) {
        // should call a library method which returns `3`
        return LibraryDemo.getFromLib();
    }
}

