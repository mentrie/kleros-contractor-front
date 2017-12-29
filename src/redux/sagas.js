import 'babel-polyfill';
import { all, fork, call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_USER_CONTRACTS_REQUEST } from './actionTypes';
import { getContractsAPI } from '../remote/api';
import { fetchUserContractsSuccess } from './actions';

function* fetchUserContracts() {
  try {
    const data = yield call(getContractsAPI);
    yield put(fetchUserContractsSuccess(data));
  } catch (e) {
    console.log(e);
  }
}

function* createContractWatcher() {
  // yield takeLatest(CREATE_CONTRACT_REQUEST, createContract);
} 

function* fetchUserContractsWatcher() {
  yield takeLatest(FETCH_USER_CONTRACTS_REQUEST, fetchUserContracts);
}

export default function* () {
  yield all([
    fork(fetchUserContractsWatcher),
    // fork(createContractWatcher)
  ])
}