import styled from '@emotion/styled';
import useIntersection from 'hooks/useIntersection';
import { useRef } from 'react';
import CoinTable from './CoinTable';
import { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import Loader from '@components/Loader';

const StyledCoinList = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background-color: var(--color-white);
  border-radius: 0.625rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media screen and (min-width: 1024px) {
    margin-top: 4.5rem;
    padding: 2.5rem;
    border-radius: 1.875rem;
  }
`;

const CoinListTitle = styled.h2`
  font-size: 0.875rem;
  font-weight: 400;

  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
  @media screen and (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

const LoadMoreBox = styled.div`
  height: 5rem;
  display: grid;
  place-items: center;
`;

const CoinList = () => {
  const offset = useSelector((state: RootStateOrAny) => state.offset);
  const coinList = useSelector((state: RootStateOrAny) => state.data);
  const dispatch = useDispatch();

  const loadMoreRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersection(loadMoreRef, {
    root: null,
    threshold: 0.1,
  });

  useEffect(() => {
    if (isVisible && coinList.length !== 0) {
      const fetchCoin = async () => {
        const res = await fetch(
          `https://api.coincap.io/v2/assets?limit=50&offset=${offset}`
        );
        const coinData = await res.json();
        dispatch({ type: 'LOAD_MORE', payload: coinData.data });
      };
      fetchCoin();
    }
  }, [isVisible]);

  return (
    <StyledCoinList>
      <CoinListTitle>Coin Ranking</CoinListTitle>
      <CoinTable />
      <LoadMoreBox ref={loadMoreRef}>
        <Loader width="50px" height="50px" />
      </LoadMoreBox>
    </StyledCoinList>
  );
};

export default CoinList;
