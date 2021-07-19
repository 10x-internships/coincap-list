import { CoinItemTypes } from '@fragments/home/CoinListCard';
import * as actionTypes from '../constant';

type CoinState = {
  data: CoinItemTypes[];
  offset: number;
};

type CoinAction = {
  type: string;
  payload: CoinItemTypes[];
};

const initialCoinState: CoinState = {
  data: [],
  offset: 0,
};

const coinReducer = (state = initialCoinState, action: CoinAction): CoinState => {
  switch (action.type) {
    case actionTypes.FIRST_LOAD:
      return {
        ...state,
        data: action.payload,
        offset: state.offset + 50,
      };
    case actionTypes.LOAD_MORE:
      return {
        ...state,
        data: [...state.data, ...action.payload],
        offset: state.offset + 50,
      };
    default:
      return state;
  }
};

export default coinReducer;
