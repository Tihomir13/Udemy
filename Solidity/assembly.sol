pragma solidity 0.8.7;


contract LearnAssembly {


    function addToEVM() external {
        uint x;
        uint y;

        assembly {
            let z := add(x,y)

            let a := mload(0x40)

            mstore(a,4)

            sstore(a,100)
        }

    }

    function addToEVM2() public view returns (bool success) {

        uint size;
        address addr;

        assembly {
            size := extcodesize(addr)
        }

        if(size > 0) {return true;}
        else {return false;}
    }
}

//Exercise

contract Exercise {

    function addToEVM3() public pure returns (bool success) {
        bytes memory data = new bytes(10);

        //bytes32 dataB32 = bytes32(data);

        assembly {            
            dataB32 := mload(add(data, 32))
        }
        
    }

}