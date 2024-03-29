pragma solidity >=0.8.7;

contract C 
{
        uint internal data = 10;
    function x()public pure returns (uint) {
        uint data1 = 25;
        return data1;
    }
    function y()private view returns (uint) {
        return data;
    }
}
