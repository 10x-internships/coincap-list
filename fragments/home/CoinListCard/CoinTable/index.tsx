import { useEffect } from 'react';
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import Loader from '@components/Loader';

import CoinItem from '../CoinItem';
import { CoinItemTypes } from '../types';
import { StyledTable, StyledTh, LoaderWrapper } from './component';

import { updateCoinData } from 'redux/actions';

const CoinTable = () => {
  const coinList = useSelector((state: RootStateOrAny) => state.coin.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateCoinData());
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
