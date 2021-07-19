import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Loader from '@components/Loader';
import Container from '@components/Container';
import useIntersection from 'hooks/useIntersection';
import { getMoreCoinData } from 'redux/actions';
import { selectCoinList, selectIsError, selectIsLoadMoreEnded, selectOffset } from 'redux/selectors';

import { Wrapper, CoinListTitle, LoadMoreBox, ErrorMessage } from './component';
import CoinTable from '../CoinTable';

const CoinList = () => {
  const dispatch = useDispatch();
  const coinList = useSelector(selectCoinList);
  const offset = useSelector(selectOffset);
  const isError = useSelector(selectIsError);
  const isLoadMoreEnded = useSelector(selectIsLoadMoreEnded);

  const loadMoreRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersection(loadMoreRef, {
    root: null,
    threshold: 0.1,
  });

  useEffect(() => {
    if (isVisible && coinList.length !== 0) {
      dispatch(getMoreCoinData(offset));
    }
  }, [isVisible]);

  if (isError) {
    return (
      <Container>
        <Wrapper>
          <ErrorMessage>Something went wrong, please comeback later 😁</ErrorMessage>
        </Wrapper>
      </Container>
    );
  }

  return (
    <Container>
      <Wrapper>
        <CoinListTitle>Coin Ranking</CoinListTitle>
        <CoinTable />
        {isLoadMoreEnded && <LoadMoreBox>End of result</LoadMoreBox>}
        {!isLoadMoreEnded && (
          <LoadMoreBox ref={loadMoreRef}>
            <Loader width="50px" height="50px" />
          </LoadMoreBox>
        )}
      </Wrapper>
    </Container>
  );
};

export default CoinList;
