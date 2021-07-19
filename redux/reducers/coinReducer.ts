import { CoinItemTypes } from '@fragments/home/CoinListCard';
import * as actionTypes from '../constant';

type CoinState = {
  data: CoinItemTypes[];
  offset: number;
  isLoading: boolean;
  isError: boolean;
  isLoadMoreEnded: boolean;
};

type CoinAction = {
  type: string;
  payload: CoinItemTypes[];
};

const initialCoinState: CoinState = {
  data: [],
  offset: 0,
  isLoading: false,
  isError: false,
  isLoadMoreEnded: false,
};

const coinReducer = (state = initialCoinState, action: CoinAction): CoinState => {
  switch (action.type) {
    case actionTypes.GET_COINLIST_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.GET_COINLIST_SUCCESS:
      return {
        ...state,
        data: action.payload,
        offset: state.offset + 50,
        isLoading: false,
      };
    case actionTypes.GET_MORE_COINLIST:
      return {
        ...state,
        data: [...state.data, ...action.payload],
        offset: state.offset + 50,
      };
    case actionTypes.GET_MORE_ENDED:
      return {
        ...state,
        isLoadMoreEnded: true,
      };
    case actionTypes.GET_COINLIST_FAILURE:
      return {
        ...state,
        isError: true,
      };
    default:
      return state;
  }
};

export default coinReducer;
