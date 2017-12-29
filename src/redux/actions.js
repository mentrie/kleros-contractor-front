import {
  FETCH_USER_CONTRACTS_REQUEST,
  FETCH_USER_CONTRACTS_SUCCESS,
  CREATE_CONTRACT_REQUEST,
  CREATE_CONTRACT_SUCCESS,
  FETCH_CONTRACT_DATA_REQUEST,
  FETCH_CONTRACT_DATA_SUCCESS,
} from './actionTypes';

export const fetchUserContractsRequest = () => ({
  type: FETCH_USER_CONTRACTS_REQUEST
});

export const fetchUserContractsSuccess = (contracts) => ({
  type: FETCH_USER_CONTRACTS_SUCCESS,
  contracts
});

export const createContractRequest = (payload) => ({
  type: CREATE_CONTRACT_REQUEST,
  payload
});

export const createContractSuccess = (address) => ({
  type: CREATE_CONTRACT_SUCCESS,
  address
});

export const fetchContractDataRequest = (address) => ({
  type: FETCH_CONTRACT_DATA_REQUEST,
  address
});

export const fetchContractDataSuccess = (contract) => ({
  type: FETCH_CONTRACT_DATA_SUCCESS,
  contract
});
