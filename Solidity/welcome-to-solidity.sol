// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

contract WelcomeToSolidity {
    constructor() public {
    }
    function getResult() public view returns (uint) {
        uint a=1;
        uint b=2;
        uint result = a+(b*7);
        return result;
    }
}
