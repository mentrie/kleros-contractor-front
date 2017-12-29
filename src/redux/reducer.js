import { 
  FETCH_USER_CONTRACTS_REQUEST, 
  FETCH_USER_CONTRACTS_SUCCESS,
  CREATE_CONTRACT_REQUEST
} from './actionTypes';

const initialState = {
  isFetching: false,
  contracts: []
};

export default (state=initialState, action) => {
  switch(action.type) {
    case FETCH_USER_CONTRACTS_REQUEST:
    case CREATE_CONTRACT_REQUEST:
      return { ...state, isFetching: true };
    case FETCH_USER_CONTRACTS_SUCCESS:
      return { ...state, contracts: action.payload, isFetching: false };
    default:
      return state;
  }
}