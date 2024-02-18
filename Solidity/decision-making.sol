pragma solidity >=0.8.7;

contract DecisionMaking {
    uint oranges;
    function validateOranges() public view returns (bool) {
        if(oranges==5){
           return true;
        }
        else return false;
    }
     
    uint stakingWallet = 9;
    function airDrop () public view returns(uint) {
        if(stakingWallet==10)
        {
            return stakingWallet + 10;
        }
        else
        { 
            return stakingWallet + 1;
        }
    }
}