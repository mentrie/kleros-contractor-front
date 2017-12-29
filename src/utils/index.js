import Web3 from 'web3';
import { Kleros } from 'kleros-api';


export const web3 = () => {
  let web3;
console.log(process.env,'env utils')
  if (typeof window.web3 !== 'undefined' && window.web3.currentProvider) {
    web3 = new Web3(window.web3.currentProvider);
  } else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider(process.env.ETHEREUM_PROVIDER));
  }

  return web3;
};

export const kleros = new Kleros(web3().currentProvider, process.env.STORE_PROVIDER);
