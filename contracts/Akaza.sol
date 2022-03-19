// SPDX-License-Identifier: MIT
pragma solidity ^0.8.5;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Akaza is ERC20 {
    address public owner;
    mapping(address => uint) balances;
    uint256 public _totalSupply = 1000000 * 10 ** 18;
    constructor() ERC20('Akaza', 'AKZ'){
        _mint(msg.sender, _totalSupply);
        owner = msg.sender;
        balances[msg.sender] = _totalSupply;
    }

    function mint(address to, uint amount) external {
        require(msg.sender == owner, "Only the onwer is allowed to mint");
        _mint(to,amount);
    }

    function buyToken(address receiver) public payable {
        require(msg.value >= 0, "You cannot mint AKZ with zero ETH"); 
        uint tokenNumber = msg.value * 1000;
        uint finalPrice = tokenNumber * (10 ** 18);
        _mint(receiver,finalPrice);
    }
}