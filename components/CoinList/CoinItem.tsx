import styled from '@emotion/styled';
import { css } from '@emotion/react';
import currencyFormatter from 'helpers/currencyFormatter';
import { CoinItemTypes } from './types';

const StyledTd = styled.td<{ textAlign?: string; dNoneMobile?: boolean }>`
  padding: 1rem 0;
  text-align: ${(props) => props.textAlign || 'left'};
  border-bottom: 1px solid var(--border-color);

  @media screen and (min-width: 1024px) {
    padding: 2rem 0;
  }

  ${(props) =>
    props.dNoneMobile &&
    css`
      display: none;

      @media screen and (min-width: 1024px) {
        display: table-cell;
      }
    `}
`;

const StyledPercentChange = styled(StyledTd)<{ color: 'red' | 'green' }>`
  color: ${({ color = 'inherit' }) => `var(--color-${color})`};
`;

const CoinItem = ({
  rank,
  name,
  priceUsd,
  changePercent24Hr,
  volumeUsd24Hr,
  marketCapUsd,
}: CoinItemTypes) => {
  const percentChange = parseFloat(changePercent24Hr) || 0;

  return (
    <tr>
      <StyledTd>{rank}</StyledTd>
      <StyledTd>{name ? name : 'UNKNOWN'}</StyledTd>
      <StyledTd textAlign="right">
        {currencyFormatter.format(+priceUsd)}
      </StyledTd>
      <StyledPercentChange
        color={percentChange > 0 ? 'green' : 'red'}
        textAlign="right"
        dNoneMobile
      >
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
