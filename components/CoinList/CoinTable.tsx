import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Loader from '@components/Loader';
import { useEffect } from 'react';
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import CoinItem from './CoinItem';
import { CoinItemTypes } from './types';

const StyledTable = styled.table`
  --border-color: #d6d6d6;
  width: 100%;
  margin-top: 1rem;
  border-collapse: collapse;

  @media screen and (min-width: 1024px) {
    margin-top: 2.5rem;
  }
`;

const StyledTh = styled.th<{ textAlign?: string; dNoneMobile?: boolean }>`
  padding: 1rem 0;
  text-align: ${(props) => props.textAlign || 'left'};
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  ${(props) =>
    props.dNoneMobile &&
    css`
      display: none;

      @media screen and (min-width: 1024px) {
        display: table-cell;
      }
    `}
`;

const LoaderWrapper = styled.div`
  width: 100%;
  height: 80vh;
  display: grid;
  place-items: center;
`;

const CoinTable = () => {
  const coinList = useSelector((state: RootStateOrAny) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCoin = async () => {
      const res = await fetch('https://api.coincap.io/v2/assets?limit=50');
      const coinData = await res.json();
      dispatch({ type: 'UPDATE_DATA', payload: coinData.data });
    };
    fetchCoin();
  }, []);

  return (
    <>
      {coinList.length === 0 && (
        <LoaderWrapper>
          <Loader width="100px" height="100px" />
        </LoaderWrapper>
      )}
      {coinList.length !== 0 && (
        <StyledTable>
          <thead>
            <tr>
              <StyledTh>#</StyledTh>
              <StyledTh>Name</StyledTh>
              <StyledTh textAlign="right">Price</StyledTh>
              <StyledTh textAlign="right" dNoneMobile>
                24H Change
              </StyledTh>
              <StyledTh textAlign="right" dNoneMobile>
                24H Volume
              </StyledTh>
              <StyledTh textAlign="right" dNoneMobile>
                Market cap
              </StyledTh>
            </tr>
          </thead>
          <tbody>
            {coinList.map((coin: CoinItemTypes) => (
              <CoinItem key={coin.rank} {...coin} />
            ))}
          </tbody>
        </StyledTable>
      )}
    </>
  );
};

export default CoinTable;
