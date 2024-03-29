pragma solidity ^0.8.7;

contract FunctionOverLoading {

    //2 funkcii s edno i sashto ime s razlichni argumenti
    function x(bool lightSwitch, uint wallet) public {

    }

    function x(uint wallet) public {

    }
}

//Exercise

contract Exercise {

    function sum(uint wallet, uint sender, uint something) public pure returns(uint) {
        return wallet + sender + something;
    }

    function sum(uint wallet, uint sender) public pure returns(uint) {

        return wallet + sender;
    }

    function callex1() public pure returns(uint) { 
        return sum(2,3);
    }

     function callex2() public  pure returns(uint) {
        return sum(3,2,1);
    }
}