// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

// deployed at: 0x4394A33e8763415227eC9c9820D137818c2a07e4

contract Counter {
    uint public count = 0;

    function incrementCount() public returns(uint) {
        count++;
        return count;
    }
}