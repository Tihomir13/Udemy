pragma solidity ^0.8.7;

contract Member {
    string name;
    uint age;

    constructor (string memory _name, uint _age) public {
        name = _name;
        age= _age;
    }
}

contract Teacher is Member 
{
    constructor(string memory n, uint a) Member(n, a) public {}

    function getName() public view returns (string memory) {
        return name;
    }

    function getAge() public view returns (uint) {
        return age;
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////
// ExerciseConstructor
contract Base
{
    uint data;

    constructor (uint _data) public 
    {
        data = _data;
    }
}

contract Derived is Base (5)
{
    function getNumber() public view returns(uint) 
    {
        return data;
    }
}