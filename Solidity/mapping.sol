pragma solidity ^0.8.7;

contract LearnMapping {

    mapping (address => uint) public myMap;

    function getAddress(address _addr) public view returns (uint) {
        return myMap[_addr];
    }

    function setAddress(address _addr, uint _i) public {
        myMap[_addr] = _i;
    }

    function removeAddress(address _addr) public {
        delete myMap[_addr];
    }

}

contract Exersice {

    struct Movie {
        string title;
        string director;
    }

    mapping (uint => Movie) public movie;
    mapping (address => mapping(uint => Movie)) public myMovie;

    function addMovie (uint movie_id, string memory title, string memory director) public 
    {
        movie[movie_id] = Movie(title, director);
    }

    function addMyMovie (uint movie_id, string memory title, string memory director) public 
    {
        myMovie[msg.sender][movie_id] = Movie(title, director);

    }
}

contract allowance {
    
    mapping (address => mapping(address=>uint)) Spender;
    uint id=1;
    
    function pairup(address _addrOwner,address _addrSpender) public {
         Spender[_addrOwner] [_addrSpender] = id;
         id++;
    }

    function getpairup(address _addrOwner, address _addrSpender) public view returns(uint){
        return Spender[_addrOwner][_addrSpender];
    }
 
    //this function removes the spenders allowance
    function remove(address _addrOwner, address _addrSpender) public {
        delete Spender[_addrOwner][_addrSpender];
    }
}