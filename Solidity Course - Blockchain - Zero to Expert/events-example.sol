pragma solidity ^0.8.7;

contract LearnEvents {

    event NewTrade (
        uint indexed date,
        address from,
        address indexed to,
        uint indexed amount
    );

    function trade (address to, uint amount) external {
        emit NewTrade (block.timestamp,msg.sender, to, amount );
    }
}