pragma solidity 0.8.7;

contract Coin {
    address public minter;
    mapping (address => uint) public balances;// adresat dava dostap do uint, toi e kluch 

    event Sent (address from, address to, uint amount);

    constructor () {
        minter = msg.sender;
        
    }

    function mint(address receiver, uint amount) public {
        require(msg.sender == minter) ;
        balances[receiver] +=amount;
    }

    error insufficientBalance (uint requested, uint available);

    function Send(address receiver, uint amount) public {
        if(amount > balances[msg.sender]) 
           revert insufficientBalance ({
               requested: amount,
               available: balances[msg.sender]
               });
        
        balances[msg.sender] -= amount;
        balances[receiver] += amount;

        emit Sent(msg.sender, receiver, amount);
    }
    

    
    uint funders;
    mapping (uint => address) contributedAmount;
    function returnFunds () public {

    }
}