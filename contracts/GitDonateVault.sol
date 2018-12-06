pragma solidity ^0.5.0;

import "openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "openzeppelin-solidity/contracts/math/SafeMath.sol";

contract GitDonateVault is Ownable {
    uint storedData;
    //key is gpg Public key/address, value is ETH balance
    mapping(bytes32 => uint256) private balance;

    constructor() public {
        //TODO: something
    }

    function donate(bytes32 gpgAddress, uint256 amount) public {
        balance[gpgAddress] = add(balance[gpgAddress], amount);
    }

    function balance(bytes32 gpgAddress) public view returns (uint256) {
        return balance[gpgAddress];
    }

    function() public {
        //TODO: fallback
    }
}
