pragma solidity ^0.8.7;

//Exercise
contract A {

    uint innerVal = 100;

    function innerAddTen(uint a) public view returns (uint) {
        return a + 10;
    }
}

contract B is A{

    function outerAddTen(uint a) public view returns(uint) {
        return innerAddTen(a);
    }

    function returnInnerValue() public view returns (uint) {
        return innerVal;
    }
}