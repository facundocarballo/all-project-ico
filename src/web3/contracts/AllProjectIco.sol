// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract AllProjecICO {
    ERC20 public ALL_PROJECT =
        ERC20(0xd9B9c7A1B42f1ad78D9C3Dd5C7F0381277ddc9Bb);
    address[] public stablecoins_allowed = [
        0x2E50a44F2C744E2BcDe025028622d6349115D7Bf, // BUSD
        0xBf7FD44622e8ED5374cb91d9fc56517c99B40756, // USDC
        0x0D259ECCEb24e8E603486f8062DBDAabF78AB235 // USDT
    ];

    mapping(address => string) public email_of;

    uint256 price = 12 ether;
    uint256 timestamp_end_ico;
    uint256 tokens_sold;
    uint256 stablecoin_funded;

    constructor() {
        timestamp_end_ico = block.timestamp + 30 days;
    }

    function _IsStablecoinAllowed(address _stablecoin_address)
        private view
        returns (bool)
    {
        for (uint256 i = 0; i < stablecoins_allowed.length; i++) {
            if (_stablecoin_address == stablecoins_allowed[i]) return true;
        }
        return false;
    }

    function Buy(uint256 _amount, address _stablecoin_address) external {
        require(
            _IsStablecoinAllowed(_stablecoin_address),
            "The address that you pass as stablecoin address is not a stablecoin allowed to the contract."
        );
        ERC20 Stablecoin = ERC20(_stablecoin_address);
        require(block.timestamp < timestamp_end_ico, "ICO it's over");
        require(
            ALL_PROJECT.balanceOf(address(this)) > _amount,
            "The contract doesn't have this amount of tokens to sell."
        );
        require(
            Stablecoin.transferFrom(msg.sender, address(this), _amount * price)
        );
        require(ALL_PROJECT.transfer(msg.sender, _amount));
        tokens_sold += _amount;
        stablecoin_funded += _amount*price;
    }
}
