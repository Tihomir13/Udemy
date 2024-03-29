pragma solidity >= 0.8.7;

contract learnStrings
{
    string greetings = "Hello You're here"; // skipping a chat with "\"  example: \'
    function sayHello() public view returns (string memory)
    {
        return greetings;
    }

    function changeGreeting(string memory _change) public 
    {
        greetings = _change;
    }

    function getChar() public view returns(uint)
    {
        bytes memory stringTobytes = bytes (greetings);
        return stringTobytes.length;
    }
}


contract PracticeStrings 
{
    string favoriteColor = "blue";

    function ReturnFavColor() public view returns(string memory)
    {
        return favoriteColor;
    }

    function ChangingColor(string memory _MyfavColor) public
    {
         favoriteColor = _MyfavColor;
    }

    function HowManyCharacters() public view returns(uint)
    {
        bytes memory Chars = bytes (favoriteColor); 
        /* 
        prevrashtame v byto-ve stringa i sled tova go pravim v druga promenliva za da vzemem daljinata, 
        inache e tvarde skapo za da se vzeme daljinata direktno ot stringa.
        */
        return Chars.length;
    }
}