pragma solidity ^0.8.7;

contract learnArrays {

    uint [] public myArray;
    uint [] public myArray2;
    uint[200] public myFixedSizedArray;

    function push(uint number) public {

        myArray.push(number);
    }

    function pop() public {
        myArray.pop();
    }

    function length() public view returns (uint) {
        return myArray.length;
    }

    function remove(uint i) public {
        delete myArray[i]; // s delete ne triem intigera, promenqme go prosto na 0
    }
}

/////////////////////////////////////////////////////////////////////////////////////////
//Exercise 

contract Arrays 
{
    uint [] internal changeArray;

    function removeElement(uint i) public {

        changeArray[i]=changeArray[changeArray.length - 1];
        changeArray.pop();
    }

    function test() public {
        for(uint i=1; i <= 4; i++){ 
        changeArray.push(i);
        }
    }

    function getChangeArray() public view returns (uint [] memory) {
        return changeArray;
    }
}