import Web3 from 'web3';
import { Kleros } from 'kleros-api';

export const web3 = new Web3(new Web3.providers.HttpProvider(process.env.REACT_APP_ETHEREUM_PROVIDER));

export const kleros = new Kleros(web3.currentProvider, process.env.REACT_APP_STORE_PROVIDER);
