import { useRef, useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

import Loader from '@components/Loader';
import Container from '@components/Container';
import CoinTable from '../CoinTable';
import useIntersection from 'hooks/useIntersection';

import { Wrapper, CoinListTitle, LoadMoreBox } from './component';
import { loadMoreCoinData } from 'redux/actions';

const CoinList = () => {
  const coinList = useSelector((state: RootStateOrAny) => state.coin.data);
  const offset = useSelector((state: RootStateOrAny) => state.coin.offset);
  const dispatch = useDispatch();

  const loadMoreRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersection(loadMoreRef, {
    root: null,
    threshold: 0.1,
  });

  useEffect(() => {
    if (isVisible && coinList.length !== 0) {
      dispatch(loadMoreCoinData(offset));
    }
  }, [isVisible]);

  return (
    <Container>
      <Wrapper>
        <CoinListTitle>Coin Ranking</CoinListTitle>
        <CoinTable />
        <LoadMoreBox ref={loadMoreRef}>
          <Loader width="50px" height="50px" />
        </LoadMoreBox>
      </Wrapper>
    </Container>
  );
};

export default CoinList;
