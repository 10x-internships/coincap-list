import { CoinItemTypes } from '@fragments/home/CoinListCard';
import GET_COINLIST, { LOAD_MORE_ENDED } from '../constants/coinList';
import { LIMIT_REQUEST } from '../api';

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
    case GET_COINLIST.REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_COINLIST.SUCCESS:
      return {
        ...state,
        data: [...state.data, ...action.payload],
        offset: state.offset + LIMIT_REQUEST,
        isLoading: false,
      };
    case LOAD_MORE_ENDED:
      return {
        ...state,
        isLoadMoreEnded: true,
      };
    case GET_COINLIST.FAILURE:
      return {
        ...state,
        isError: true,
      };
    default:
      return state;
  }
};

export default coinReducer;
