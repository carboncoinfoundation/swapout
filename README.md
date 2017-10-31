# Carboncoin Swapout Contract

The purpose of the swapout is to secure the holdings of existing holders of Carboncoin in a decentralised, secure way ahead of deploying the new network after the forthcoming ICO.

The contract creates a new token on the Ethereum blockchain that will be swapped for existing Carboncoin.

## Technical Instructions

These contracts for the Carboncoin Ethereum Swapout make use of [Truffle](truffleframework.com) and [Open Zeppelin](https://openzeppelin.org/).

### Suggested Tutorials and Reading before contributing

* [Truffle Pet Shop](http://truffleframework.com/tutorials/pet-shop)
* [Building Robust Smart Contracts with Open Zeppelin](http://truffleframework.com/tutorials/robust-smart-contracts-with-openzeppelin)
* [Mintable Token Tutorial](https://blog.zeppelin.solutions/how-to-create-token-and-initial-coin-offering-contracts-using-truffle-openzeppelin-1b7a5dae99b6)

### Running it locally

Install Ethereum TestRPC and Truffle:

`npm install -g ethereumjs-testrpc`

`npm install -g truffle`

Clone this repository and npm install. This will install Open Zeppelin.

### Deploying locally

Run the Ethereum testrpc in a terminal window:

`testrpc`

In a separate window, compile the project and run the migrations, deploying the contract to testrpc:

`truffle compile`

`truffle migrate`
