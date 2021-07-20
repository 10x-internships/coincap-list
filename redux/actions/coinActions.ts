import getData from '../constants/getData';
import { LOAD_MORE_ENDED } from '../constants/coinList';
import { BASE_URL, LIMIT_REQUEST } from '../api';
import { Dispatch } from 'redux';

export const getCoinData = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: getData.REQUEST });
      const res = await fetch(`${BASE_URL}?limit=${LIMIT_REQUEST}`);

      if (res.status === 200) {
        const coinData = await res.json();
        dispatch({ type: getData.SUCCESS, payload: coinData.data });
      } else {
        throw new Error();
      }
    } catch (err) {
      dispatch({ type: getData.FAILURE });
    }
  };
};

export const getMoreCoinData = (offset: number) => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await fetch(`${BASE_URL}?limit=${LIMIT_REQUEST}&offset=${offset}`);
      const coinData = await res.json();

      if (res.status === 200) {
        dispatch(
          coinData.data.length !== 0 ? { type: getData.SUCCESS, payload: coinData.data } : { type: LOAD_MORE_ENDED }
        );
      } else {
        throw new Error();
      }
    } catch (err) {
      dispatch({ type: getData.FAILURE });
    }
  };
};
