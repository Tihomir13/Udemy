pragma solidity ^0.8.7;

library Search {
    function indexOf(uint[] storage self, uint value) public view returns(uint) {
        for(uint i=0; i<self.length; i++)
            if(self[i]==value) 
                return self[i];
    }
}

contract Test {
    uint[] data;
    constructor() public {
        data.push(1);
        data.push(2);
        data.push(3);
        data.push(4);
        data.push(5);
    }

    function isValuePresent(uint val) external view returns(uint) {
        uint value = val;
        uint index = Search.indexOf(data, value);
        return index;
        
    }
}

//2-ri nachin za vzemane na danni ot library
library Search2 {
    function indexOf(uint[] storage self, uint value) public view returns(uint) {
        for(uint i=0; i<self.length; i++)
            if(self[i]==value) 
                return self[i];
    }
}

contract Test2 {
    using Search2 for uint[];
    uint[] data;
    constructor() public {
        data.push(1);
        data.push(2);
        data.push(3);
        data.push(4);
        data.push(5);
    }

    function isValuePresent() external view returns(uint) {
        uint value = 4;
        uint index = data.indexOf(value);
        return index;
    }
}