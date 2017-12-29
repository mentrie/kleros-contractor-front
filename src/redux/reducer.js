import { 
  FETCH_USER_CONTRACTS_REQUEST, 
  FETCH_USER_CONTRACTS_SUCCESS,
  CREATE_CONTRACT_REQUEST,
  CREATE_CONTRACT_SUCCESS,
  FETCH_CONTRACT_DATA_REQUEST,
  FETCH_CONTRACT_DATA_SUCCESS
} from './actionTypes';

const initialState = {
  isFetching: false,
  contracts: [],
  address: null,
  contract: null,
};

export default (state=initialState, action) => {
  switch(action.type) {
    case FETCH_USER_CONTRACTS_REQUEST:
    case CREATE_CONTRACT_REQUEST:
    case FETCH_CONTRACT_DATA_REQUEST:
      return { ...state, isFetching: true };
    case FETCH_USER_CONTRACTS_SUCCESS:
      return { ...state, contracts: action.contracts, isFetching: false };
    case CREATE_CONTRACT_SUCCESS:
      return { ...state, address: action.address, isFetching: false };
    case FETCH_CONTRACT_DATA_SUCCESS:
      return { ...state, contract: action.contract, isFetching: false };
    default:
      return state;
  }
}