pragma solidity ^0.8.7;

contract DestructuringFunctions {

    uint public changeValue;
    string public tom = 'Hello';

    function f() public pure returns (uint, bool, string memory) {
        return (3, true, 'Goodbye!');
    }

    function g() public {
        (changeValue, ,tom) = f(); //vzema samo parviq datatype koito e 3
    }
}