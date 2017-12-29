import {
  FETCH_USER_CONTRACTS_REQUEST,
  FETCH_USER_CONTRACTS_SUCCESS
} from './actionTypes';

export const fetchUserContractsRequest = () => ({
  type: FETCH_USER_CONTRACTS_REQUEST
});

export const fetchUserContractsSuccess = (payload) => ({
  type: FETCH_USER_CONTRACTS_SUCCESS,
  payload
});
