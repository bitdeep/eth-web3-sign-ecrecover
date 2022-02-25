import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// import "hardhat/console.sol";
// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts v4.4.1

pragma solidity ^0.8.4;

contract main is Ownable {
    mapping(string => uint) public transactions;
    address signer;
    ERC20 token;
    constructor(address _token){
        signer = msg.sender;
        token = ERC20(_token);
    }
    function setSigner(address _signer) external onlyOwner {
        signer = _signer;
    }

    function withdraw(uint amount, string memory _tx,
        uint8 v, bytes32 r, bytes32 s) external
    {
        bytes32 hash2 = hashParams(msg.sender, amount, _tx);
        bytes32 _hashToEth = keccak256(abi.encodePacked("\x19Ethereum Signed Message:\n32", hash2));
        address _signer = ecrecover(_hashToEth, v, r, s);
        require(_signer == signer, 'not authorized');

        require(transactions[_tx] == 0, "tx already processed");
        transactions[_tx] = block.timestamp;
        token.transfer(msg.sender, amount);
    }

    function hashParams(address payTo, uint amount, string memory _tx) public pure returns (bytes32) {
        bytes32 h = sha256(abi.encodePacked(payTo, amount, _tx));
        return h;
    }

}
