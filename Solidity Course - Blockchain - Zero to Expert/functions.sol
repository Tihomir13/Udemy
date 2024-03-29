pragma solidity >=0.8.7;
//public e kogato iskame da izpolzvame funkciqta izvan contracta, inache polzvame private
//view e da vijdame rezultata

contract LearnFunctions {

    function remoControlOpen(bool closedDoor, bool openDoor) public returns (bool) {
         
    }
    function addValues() public view returns(uint) {
        uint a =2;
        uint b = 3;
        uint result = a + b;
        return result;
    }

    function addNewValues() public view returns (uint) {
        uint a = 1;
        uint b = 5;
        uint result = a + b;
        return result;
    }

    function multiplyCalculator(uint a, uint b) public view returns (uint) {
        uint result = a* b;
        return result;
    } 

     function divideCalculator(uint a, uint b) public view returns (uint) {
        uint result = a/ b;
        return result;
     }
}