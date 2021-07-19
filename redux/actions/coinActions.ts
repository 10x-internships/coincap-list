import * as actionTypes from '../constant';
import { BASE_URL, LIMIT_REQUEST } from '../api';
import { Dispatch } from 'redux';

export const getCoinData = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: actionTypes.GET_COINLIST_REQUEST });
      const res = await fetch(`${BASE_URL}?limit=${LIMIT_REQUEST}`);
      if (!res.ok) throw new Error();

      const coinData = await res.json();
      dispatch({ type: actionTypes.GET_COINLIST_SUCCESS, payload: coinData.data });
    } catch (err) {
      dispatch({ type: actionTypes.GET_COINLIST_FAILURE });
    }
  };
};

export const getMoreCoinData = (offset: number) => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await fetch(`${BASE_URL}?limit=${LIMIT_REQUEST}&offset=${offset}`);
      const coinData = await res.json();
      if (!res.ok) throw new Error();

      if (coinData.data.length !== 0) {
        dispatch({ type: actionTypes.GET_MORE_COINLIST, payload: coinData.data });
      } else {
        dispatch({ type: actionTypes.GET_MORE_ENDED });
      }
    } catch (err) {
      dispatch({ type: actionTypes.GET_COINLIST_FAILURE });
    }
  };
};
