"use strict";
const Web3 = require('web3');
const web3 = new Web3('http://127.0.0.1:8545/');

const signingAddress = web3.eth.accounts.recover(nonce, signature);
