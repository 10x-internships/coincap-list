import { RootStateOrAny } from 'react-redux';

const selectCoinList = (state: RootStateOrAny) => state.coin.data;
const selectOffset = (state: RootStateOrAny) => state.coin.offset;
const selectIsLoading = (state: RootStateOrAny) => state.coin.isLoading;
const selectIsError = (state: RootStateOrAny) => state.coin.isError;
const selectIsLoadMoreEnded = (state: RootStateOrAny) => state.coin.isLoadMoreEnded;

export { selectCoinList, selectOffset, selectIsLoading, selectIsError, selectIsLoadMoreEnded };
