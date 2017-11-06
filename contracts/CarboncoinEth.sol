pragma solidity ^0.4.4;
import 'zeppelin-solidity/contracts/token/StandardToken.sol';

contract CarboncoinEth is StandardToken {

  string public name = 'Carboncoin Eth';
  string public symbol = 'CCE';
  uint public decimals = 8;
  uint public INITIAL_SUPPLY = 80000000 * (10 ** decimals);

  function CarboncoinEth() {
    totalSupply = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
  }

}
