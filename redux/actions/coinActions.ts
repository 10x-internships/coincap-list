import { Dispatch } from 'redux';
import { AxiosRequestConfig } from 'axios';

import GET_COINLIST, { LOAD_MORE_ENDED } from '../constants/coinList';
import { LIMIT_REQUEST, coinCapAPI } from '../api';

interface CoinListType extends AxiosRequestConfig {
  type: {
    REQUEST: string;
    SUCCESS: string;
    FAILURE: string;
  };
  haveLoading?: boolean;
}

const fetchCoinList = (config: CoinListType) => {
  const { url, data, headers, params, type, method, haveLoading = true } = config;

  return async (dispatch: Dispatch) => {
    haveLoading && dispatch({ type: type.REQUEST });
    try {
      const response = await coinCapAPI({
        method,
        url,
        params,
        headers,
        data,
      });
      if (response.status === 200) {
        dispatch(
          response.data.data.length !== 0
            ? { type: GET_COINLIST.SUCCESS, payload: response.data.data }
            : { type: LOAD_MORE_ENDED }
        );
      }
    } catch (err) {
      dispatch({ type: type.FAILURE });
    }
  };
};

export const getCoinData = () => {
  return fetchCoinList({
    url: '/assets',
    type: GET_COINLIST,
    params: {
      limit: LIMIT_REQUEST,
    },
  });
};

export const getMoreCoinData = (offset: number) => {
  return fetchCoinList({
    url: '/assets',
    type: GET_COINLIST,
    params: {
      limit: LIMIT_REQUEST,
      offset,
    },
    haveLoading: false,
  });
};
