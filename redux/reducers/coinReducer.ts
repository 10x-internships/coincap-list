import { CoinItemTypes } from '@fragments/home/CoinListCard';
import getData from '../constants/getData';
import { LOAD_MORE_ENDED } from '../constants/coinList';
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
    case getData.REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case getData.SUCCESS:
      return {
        ...state,
        data: [...state.data, ...action.payload],
        offset: state.offset + LIMIT_REQUEST,
        isLoading: false,
      };
    case getData.FAILURE:
      return {
        ...state,
        isError: true,
      };
    case LOAD_MORE_ENDED:
      return {
        ...state,
        isLoadMoreEnded: true,
      };
    default:
      return state;
  }
};

export default coinReducer;
