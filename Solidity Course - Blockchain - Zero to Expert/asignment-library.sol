pragma solidity ^0.8.7;

library calculations {

    function addition(uint a, uint b) external pure returns(uint) {
        return a + b;
    }

    function subtraction(uint a, uint b) external pure returns(uint) {
        return a - b;
    }

    function division(uint a, uint b) external pure returns(uint) {
        return a / b;
    }

    function multiplication(uint a, uint b) external pure returns(uint) {
        return a * b;
    }
}

contract Calculator {

    address owner;

    constructor() {
        owner = msg.sender;
    }

    function addition(uint a, uint b) public view returns (uint, address) {
        uint result;
        return (result = calculations.addition(a, b), owner);
    }

    function subtraction(uint a, uint b) public view returns (uint, address) {
        uint result;
        return (result = calculations.subtraction(a, b), owner);
    }

    function division(uint a, uint b) public view returns (uint, address) {
        uint result;
        return (result = calculations.division(a, b), owner);
    }

    function multiplication(uint a, uint b) public view returns (uint, address) {
        uint result;
        return (result = calculations.multiplication(a, b), owner);
    }
}