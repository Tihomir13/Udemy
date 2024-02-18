pragma solidity ^0.8.7;

contract LedgerBalance 
{
    mapping(address=>uint) balance;

    function updatesBalance(uint newBalance) public
    {
        balance[msg.sender] = newBalance;
    }
}

contract Updated {
    function updatesBalance () public 
    {
        LedgerBalance ledgerBalance = new LedgerBalance();
        // ^sazdava se nov contract, koito e kopie na LedgerBalance i se skladira v promenlivata ledgerBalance
        ledgerBalance.updatesBalance(30);
    }
}

contract SimpleStorage {

    uint storedData;

    function set(uint x) public {
        //storedData = x;
        //storedData = block.difficulty;
        //storedData = block.timestamp;
        storedData = block.number;
    }

    function get() public view returns (uint) {
        return storedData;
    }
}