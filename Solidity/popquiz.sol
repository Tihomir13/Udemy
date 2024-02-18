pragma solidity 0.8.7;


contract exercise {

    event Log (uint gas);
    fallback () external payable {
        emit Log(gasleft());
    }

    modifier onlyOwner {
        //require(msg.sender == owner);
        _; // tozi znak kazva da prodalji funkciqta ako require e proveril dali msg sendera e = na ownera
    }
    
    mapping (uint => address) contributedAmount;
    function returnFunds () public onlyOwner returns (bool success) 
    {
        //for(uint i = 0; i <= funders.length; i++) 
        {
            //funders[i].transfer(contributedAmount);
        }
        return true;
    }
}

contract Victim {

    function isItAContract() public view returns (bool) {
        uint32 size;
        address a = msg.sender;
         assembly {
             size := extcodesize(a)
         }
         return(size > 0);
    }
}

contract Attacker {
    bool public trickedYou;
    Victim victim;
    
    constructor (address _v) public {
        victim = Victim (_v);
        trickedYou = !victim.isItAContract();
    }
}