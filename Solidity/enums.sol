pragma solidity ^0.8.7;

contract enumsLearn {
    enum frenchFriesSize {LARGE, MEDIUM, SMALL} //frenchFriesSize e tipat promenliva
    frenchFriesSize choice;

    frenchFriesSize constant defaultChoice = frenchFriesSize.MEDIUM;

    function setSmall() public {
        choice = frenchFriesSize.SMALL;
    } 

    function getChoice() public view returns(frenchFriesSize) {
        return choice;
    }

    function getDefaultChoice() public view returns (uint) {
        return uint(defaultChoice);
    }
}

///////////////////////////////////////////////////////////////////////////////////////////
//Exercise

contract ExerciseEnums {

    enum shirtColor {RED,WHITE,BLUE}
    shirtColor constant defaultChoice = shirtColor.BLUE;
    shirtColor choice;

    function setWhite () public {
        choice = shirtColor.WHITE;
    }

    function getChoice () public view returns (shirtColor) {
        return choice;
    }

    function getDefaultChoice () public view returns (shirtColor) {
        return defaultChoice;
    }
}