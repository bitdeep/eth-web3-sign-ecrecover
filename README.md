# eth-web3-sign-ecrecover

This code exemplify how to use web3.eth.sign on js and ecrecover on solidity.

To authorize a token transfer from a application server.

Check the file test/main.js to see a example how to prepare the signature via javascript on node.

See in contracts/main.js the funcion withdraw how to check signature and do the transfer.

# How to Test

Execute: `yarn` first to install all dependencies.

Then execute `yarn test` to run the main test case.

# Test workflow

- Create a mock token.
- Create main contract with token as argument.
- Mint 100 tokens to main contract.
- Query the contract for a valid transaction hash.
- build a signature transaction with transfer data.
- Sent the transaction to contract (this stage must be done by user).
- On contract: build a new hash and check sinagure if valid.
- On contract: do token transfer.
