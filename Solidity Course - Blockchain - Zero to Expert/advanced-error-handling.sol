pragma solidity ^0.8.7;

contract  LearnErrorHandling {

    bool public sunny = true;
    bool public umbrella = false;
    uint finalCalc = 0;

    function solarCalc() public {
        require(sunny, "It is not sunny today!");
        finalCalc += 3;
        assert (finalCalc != 6); // ne pozvolqva finalCalc da stava 6
    }

    function weatherChanger() public {
        sunny = !sunny;
    }

    function GetCalc() public view returns (uint) {
        return finalCalc;
    }

    function bringUmbrella() public {
        if(!sunny) { //sunny!=true
            umbrella = true;
        }
        else { 
        revert("No need to bring an umbrella today!");
        }
    }
}

//Exercise

contract Vendor {
    address public seller;

    modifier OnlySeller() {
        require(seller == msg.sender);
        _;
    }

    function becomeSeller() public {
        seller = msg.sender;
    }

    function sell(uint amount) public payable OnlySeller {
        if(amount > msg.value) {
        revert("There is not anough ether provided"); 
        }
    }
}