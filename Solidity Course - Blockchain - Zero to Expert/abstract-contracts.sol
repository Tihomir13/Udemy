pragma solidity ^0.8.7;

abstract contract X {

    function y() public view virtual returns(string memory) {}
}

contract Z is X {
    function y() public override view returns (string memory) {
        return "Hello";
    }
}

contract Member {
    string name;
    uint age = 38;

    function setName() public virtual returns (string memory) {}

    function returnAge() public view returns(uint) {
        return age;
    }
}

contract Teacher is Member {
    function setName() public override returns (string memory) {
        return "Gordan";
    }
}

//Exercise

//base contract
abstract contract Calculator {

    function x() public virtual view returns (uint) {}
}

//derived
contract Test is Calculator {
    function x() public override pure returns (uint) {
        return 1 + 2;
    }
}