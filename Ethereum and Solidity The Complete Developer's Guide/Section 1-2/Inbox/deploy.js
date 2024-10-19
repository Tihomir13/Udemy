const HDWalletProvider = require('@truffle/hdwallet-provider');
const { Web3 } = require('./node_modules/web3/lib/types');
const { interface, bytecode } = require('./compile');

const INITIAL_STRING = 'Hi there';

const provider = new HDWalletProvider(
  'cereal combine congress truly hospital sustain lab peace parrot one view square',
  'https://sepolia.infura.io/v3/75d62a1e49894f8883a428eb6fd64032'
);

const web3 = new Web3(provider);

async function deploy() {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from acc', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
      arguments: [INITIAL_STRING],
    })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
}

deploy();
