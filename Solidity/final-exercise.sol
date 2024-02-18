pragma solidity ^0.8.7;

contract auction {

    // Define two public events to track the progress of the auction
    event NewHighestBid (address bidder, uint amount);
    event auctionOver (address winner, uint amount);
    
    // Define variables to keep track of the highest bidder and beneficiary
    address public highestBidder;
    address payable public beneficiary;

    // Define variables to keep track of the end time and highest bid
    uint public endTime;
    uint public highestBid;

    // Define a boolean variable to track if the auction has ended
    bool ended;

    // Define the constructor function that takes in the end time and beneficiary
    constructor(uint _endTime, address payable _beneficiary) {
        endTime = block.timestamp + _endTime; // Set the end time
        beneficiary = _beneficiary; // Set the beneficiary address
    }

    // Define a mapping to keep track of returns
    mapping(address => uint) Returns;
    
    // Define the Bid function, which bidders will use to place bids
    function Bid () public payable {

        // Check if the auction has ended
        if(block.timestamp > endTime) revert("The auction Ended!");

        // Check if the bid is higher than the current highest bid
        if(msg.value <= highestBid) revert ("bid is not high enough!");
        
        // If there is a current highest bidder, add their balance to Returns mapping
        if(highestBid != 0) {
            Returns[highestBidder] = Returns[highestBidder] + highestBid;
        }

        // Update the highest bidder and highest bid amount
        highestBidder = msg.sender;
        highestBid = msg.value;

        // Emit the NewHighestBid event
        emit NewHighestBid (msg.sender, msg.value);
    }

    // Define the withdraw function, which bidders can use to withdraw their returns
    function withdraw() public payable returns(bool) {
        
        // Get the balance of the bidder
        uint amount = Returns[msg.sender];
        
        // If the balance is greater than 0, update the mapping to set the balance to 0
        if(amount > 0) {
            Returns[msg.sender] = 0;
        }

        // Use the send function to transfer the balance to the bidder's address
        if(!payable(msg.sender).send(amount)) {
            Returns[msg.sender] = amount;
        }
        return true;
    }

    // Define the auctionEnd function to end the auction
    function auctionEnd() public {

        // Check if the auction has not ended and if the time has passed
        if(block.timestamp < endTime) revert ("The auction has not ended");
        if(ended) revert ("The auction is already over!");

        // Set the ended flag to true and emit the auctionOver event
        ended = true;
        emit auctionOver(highestBidder, highestBid);
        
        // Transfer the highest bid amount to the beneficiary address
        beneficiary.transfer(highestBid);
    }
}