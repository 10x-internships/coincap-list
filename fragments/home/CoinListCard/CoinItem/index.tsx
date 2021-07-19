import { CoinItemTypes } from '../types';
import currencyFormatter from 'helpers/currencyFormatter';
import { StyledTd, StyledPercentChange } from './component';

const CoinItem = ({ rank, name, priceUsd, changePercent24Hr, volumeUsd24Hr, marketCapUsd }: CoinItemTypes) => {
  const percentChange = parseFloat(changePercent24Hr) || 0;

  return (
    <tr>
      <StyledTd>{rank}</StyledTd>
      <StyledTd>{name ? name : 'UNKNOWN'}</StyledTd>
      <StyledTd textAlign="right">{currencyFormatter.format(+priceUsd)}</StyledTd>
      <StyledPercentChange color={percentChange > 0 ? 'green' : 'red'} textAlign="right" dNoneMobile>
        {percentChange > 0 && '+'}
        {percentChange.toFixed(2)}%
      </StyledPercentChange>
      <StyledTd textAlign="right" dNoneMobile>
        {currencyFormatter.format(+volumeUsd24Hr)}
      </StyledTd>
      <StyledTd textAlign="right" dNoneMobile>
        {currencyFormatter.format(+marketCapUsd)}
      </StyledTd>
    </tr>
  );
};

export default CoinItem;
