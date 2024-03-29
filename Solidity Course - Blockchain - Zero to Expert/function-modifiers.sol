pragma solidity ^0.8.7;

contract Owner {

    address owner;

    constructor() public {
        owner= msg.sender;
    }

    modifier onlyOwner {
        require(msg.sender == owner);
        _; // tozi znak kazva da prodalji funkciqta ako require e proveril dali msg sendera e = na ownera
    }

    modifier costs (uint price){
        require(msg.value >= price);
        _;
    }
}

contract Register is Owner {    
    mapping (address => bool) registeredAddresses;
    uint price;

    constructor(uint initialPrice) public 
    {
        price = initialPrice; 
    }

    function register() public payable costs(price){
        registeredAddresses[msg.sender] = true;
    }

    function changePrice(uint newPrice) public onlyOwner {
        price = newPrice;
    }
}


//Exercise
