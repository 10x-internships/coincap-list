import GET_COINLIST, { LOAD_MORE_ENDED } from '../constants/coinList';
import { LIMIT_REQUEST, coinCapAPI } from '../api';

import fetchData from './fetchData';

export const getCoinData = () => {
  return fetchData({
    axiosInstance: coinCapAPI,
    type: GET_COINLIST,
    params: {
      limit: LIMIT_REQUEST,
    },
  });
};

export const getMoreCoinData = (offset: number) => {
  return fetchData({
    axiosInstance: coinCapAPI,
    type: GET_COINLIST,
    params: {
      limit: LIMIT_REQUEST,
      offset,
    },
    haveLoading: false,
    isLoadMore: true,
  });
};
