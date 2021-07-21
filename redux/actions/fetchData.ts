import { Dispatch } from 'redux';
import { AxiosRequestConfig, AxiosInstance } from 'axios';

interface fetchDataTypes extends AxiosRequestConfig {
  axiosInstance: AxiosInstance;
  type: {
    REQUEST: string;
    SUCCESS: string;
    FAILURE: string;
    ENDED: string;
  };
  haveLoading?: boolean;
  isLoadMore?: boolean;
}

const fetchData = (config: fetchDataTypes) => {
  const {
    axiosInstance,
    url = '/assets',
    headers = {
      'Content-Type': 'application/json',
    },
    params,
    type,
    method = 'get',
    haveLoading = true,
    isLoadMore = false,
  } = config;

  return async (dispatch: Dispatch) => {
    haveLoading && dispatch({ type: type.REQUEST });
    try {
      const response = await axiosInstance({
        method,
        url,
        params,
        headers,
      });

      if (response.status === 200 && response.data.data.length === 0 && isLoadMore) {
        dispatch({ type: type.ENDED });
      } else {
        dispatch({ type: type.SUCCESS, payload: response.data.data });
      }
    } catch (err) {
      dispatch({ type: type.FAILURE });
    }
  };
};

export default fetchData;
