pragma solidity ^0.8.7;

contract GenerateRandomNumber {

    Oracle oracle;

    constructor(address oracleAddress) {
        oracle = Oracle(oracleAddress); //oracle = new
    }

    function randMod(uint range) external view returns(uint) {

        return uint (keccak256(abi.encodePacked(oracle.rand, block.timestamp, block. difficulty, msg.sender))) % range;

    }

}
//Exercise
contract Oracle {

    address admin;
    uint public rand;

    constructor () {
        admin = msg.sender;
    }

    function ex (uint a) external {
        require (msg.sender == admin);
        rand = a;
    }
}