pragma solidity >=0.8.7;

contract Operators {

    function calculator() public pure returns (uint) {
        uint a = 5;
        uint b = 8;
        uint result;
        result = a * b;
        return result; 
    } 
}

contract ComparisonOperators {

    uint a = 323;
    uint b = 54;

    function compare() view public {

        require (a <= b, "This comparison is false");
    }
}

contract LogicalOperators {
    uint a = 17;
    uint b = 32;

    function logic() public view returns(uint)
    {
        uint result = 0;
        if(a < b || a == 5)
        {
            result = a + b;
        }
        return result;
    }

    function multiply() public view returns(uint) {
       
       if(b>a && a!=b) {
       return a * b;
       }
    }
}

contract AssignmentOperator {
    uint b =4;
    uint a =3;

    function assign() public view returns(uint) {
        uint c = 2;
        return c += b;
    }
}

contract FinalExercise {
    uint a = 300;
    uint b = 12;
    uint f = 47;

    function finalize () public view returns(uint){
        uint d = 23;
        if(a >= b && b < f) {
        return d = (d*d)-b;
        }
        else {
        return d;
        }
    }

}

contract Mudulo {

    function c() public view  returns(uint) {
        uint a = 10; 
        uint b = 0;
        uint s;
        return s = a % b;
    }
}