pragma solidity ^0.8.7;

contract FallBack {

    event Log (uint gas);
    fallback () external payable {
        emit Log(gasleft());
    }

    function getBalance() public view returns(uint) {
        return address(this).balance;
    }
}

contract SendToFallBack {

    function transferToFallBack(address payable _to) public payable {
        _to.transfer(msg.value);
    }

    function callFallBack(address payable _to) public payable {
        (bool sent,) = _to.call{value:msg.value}('');
        require(sent, 'Failed to send!');
    }
}