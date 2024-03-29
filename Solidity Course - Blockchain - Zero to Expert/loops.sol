pragma solidity >= 0.8.7;

contract loopContract{

    uint [] public numberList = [1,2,3,4,5,6,7,8,9,10];

    function checkMultiples(uint _number) public view returns (uint) {
        uint count = 0;
        for(uint i=1; i < numberList.length; i++)
        {
            if(checkMultiplesValidity(numberList[i], _number))
            {
                count++;
            }
        }
        return count;
    }

    function checkMultiplesValidity (uint _num, uint _nums) public pure returns (bool) { 
        if(_num % _nums == 0)
        return true;
        else 
        return false;
    }
}

contract myLoopingPracticeContract 
{
    uint [] public longList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    uint [] public numberList = [1,4,34,56];

    function TrueFalse(uint userInput) public view returns(bool) 
    {
        for(uint i=0; i<numberList.length; i++)
        {
            if(userInput==numberList[i])
            {
            return true;
            }
        }
    }

    function EvenNumbers() public view returns(uint)
    {
        uint EvenCounter=0;
        for(uint i=0; i < longList.length; i++)
        {
            if(longList[i]%2==0)
            {
                EvenCounter++;
            }
        }
        return EvenCounter;
    }
}