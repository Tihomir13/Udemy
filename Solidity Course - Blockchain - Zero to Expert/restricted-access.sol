pragma solidity ^0.8.7;

contract RestrictedAccess {

    address public owner = msg.sender;
    uint public creationTime = block.timestamp;

    modifier OnlyBy (address _owner) {
        require(msg.sender == _owner, "Sender not authorized!");
        _;
    }
    modifier OnlyAfter (uint time) {
        require(block.timestamp >= time, "function is called to early");
        _;
    }


    function changeOwnerAddress(address newAddress) OnlyBy(owner) public {
        owner = newAddress;
    }

    function disown() OnlyBy (owner) OnlyAfter (creationTime + 3 weeks) public {
        delete owner;
    }

//Exercise

    modifier costs (uint _amount) {
        require (msg.value >= _amount, "Not enough Ether provided!");
        _;
    }

    function forceOwnerChange (address _newOwner) public payable costs(10 ether){
        owner = _newOwner;
    }
}