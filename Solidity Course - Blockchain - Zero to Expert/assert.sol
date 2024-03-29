pragma solidity ^0.8.7;

contract learnEtherUnits {

    function test() public {

    assert(1 ether == 1000000000000000000 wei);
    assert(1 wei == 1);

    assert(1 ether == 1e18);

    assert (2 ether == 2000000000000000000 wei);
    
    }

    function exercise () public {

        assert (60 seconds == 1 minutes);
        assert(60 minutes == 1 hours);
        assert(24 hours == 1 days);
        assert(7 days == 1 weeks);
    }
}