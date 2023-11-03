// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract AllProject is ERC20 {
    constructor() ERC20("All Project", "AP") {
        _mint(msg.sender, 100000 ether);
    }
}