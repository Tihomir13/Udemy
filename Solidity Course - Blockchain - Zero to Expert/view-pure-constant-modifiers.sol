pragma solidity >= 0.8.7;

contract MyContract {

    uint value;

    function setValue (uint _value) external 
    {
        value = _value;
    }

    function getValue() external view returns (uint) 
    {
        return value;
    }
    function getNewValue() external pure returns (uint) 
    {
        return 3 + 3;
    }

    function multiply() external pure returns(uint) {
        return 3*7;
    }

    function valuePlusThree() external view  returns(uint) {
        return value + 3; 
    }
}