import * as actionTypes from '../constant';
import { BASE_URL, LIMIT_REQUEST } from 'config/api';

export const updateCoinData = () => {
  return async (dispatch: any) => {
    const res = await fetch(`${BASE_URL}?limit=${LIMIT_REQUEST}`);
    const coinData = await res.json();
    dispatch({ type: actionTypes.FIRST_LOAD, payload: coinData.data });
  };
};

export const loadMoreCoinData = (offset: number) => {
  return async (dispatch: any) => {
    const res = await fetch(`${BASE_URL}?limit=${LIMIT_REQUEST}&offset=${offset}`);
    const coinData = await res.json();
    if (coinData.data.length === 0) return;
    dispatch({ type: actionTypes.LOAD_MORE, payload: coinData.data });
  };
};
