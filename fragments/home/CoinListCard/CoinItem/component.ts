import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const StyledTd = styled.td<{
  textAlign?: string;
  dNoneMobile?: boolean;
}>`
  padding: 1rem 0;
  text-align: ${(props) => props.textAlign || 'left'};
  border-bottom: 1px solid ${(props) => props.theme.colors.borderColor};

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

export const StyledPercentChange = styled(StyledTd)<{ color: 'red' | 'green' }>`
  color: ${({ color, theme }) => theme.colors[color] || 'inherit'};
`;
