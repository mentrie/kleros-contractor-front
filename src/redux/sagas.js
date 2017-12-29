import 'babel-polyfill';
import { all, fork, call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_USER_CONTRACTS_REQUEST, CREATE_CONTRACT_REQUEST, FETCH_CONTRACT_DATA_REQUEST } from './actionTypes';
import { getContractsAPI } from '../remote/api';
import { fetchUserContractsSuccess, createContractSuccess } from './actions';
import { kleros, web3 } from '../utils';

// convert to promise for usage with saga
function getAccounts () {
  return new Promise((resolve, reject) => {
    web3.eth.getAccounts((err, accounts) => {
      if (err) reject(err)
      resolve(accounts);
    })
  })
}

function* fetchUserContracts() {
  try {
    const accounts = yield call(getAccounts);
    const data = accounts[0] ? yield call(kleros.arbitrator.getContractsForUser, accounts[0].toLowerCase()): [];
    // Only keep the addresses in the store until a full data request is made
    yield put(fetchUserContractsSuccess(data.map(item => item.address)));
  } catch (e) {

    // TODO: Fix error
    console.log(e);
  }
}

function* createContract({payload}) {
  try {
    const accounts = yield call(getAccounts);
    let contractArbitrable;
    if(accounts[0]) {
      contractArbitrable = yield call(
        kleros.arbitrableContract.deployContract,
        accounts[0].toLowerCase(),
        web3.utils.toWei(String(payload.payment), 'ether'),
        web3.utils.sha3(payload.description),
        process.env.REACT_APP_ARBITRATOR_ADDRESS,
        payload.timeout,
        payload.partyB.toLowerCase(),
        payload.arbitratorExtraData,
        payload.email,
        payload.description
      )
    }
    yield put(createContractSuccess(contractArbitrable.address));
  } catch (e) {
    // TODO: Fix error
    console.log(e);
  }
}

function* fetchContractData({address}) {
  try {
    const accounts = yield call(getAccounts);
    const data = accounts[0] ? yield call(kleros.arbitrableContract.getData, address.toLowerCase()): {};
    yield put(fetchUserContractsSuccess(data));
  } catch (e) {
    // TODO: Fix error    
    console.log(e)
  }
}

function* fetchContractDataWatcher() {
  yield takeLatest(FETCH_CONTRACT_DATA_REQUEST, fetchContractData);
}

function* createContractWatcher() {
  yield takeLatest(CREATE_CONTRACT_REQUEST, createContract);
} 

function* fetchUserContractsWatcher() {
  yield takeLatest(FETCH_USER_CONTRACTS_REQUEST, fetchUserContracts);
}

export default function* () {
  yield all([
    fork(fetchUserContractsWatcher),
    fork(createContractWatcher),
    fork(fetchContractDataWatcher)
  ])
}