import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const StyledTable = styled.table`
  width: 100%;
  margin-top: 1rem;
  border-collapse: collapse;

  @media screen and (min-width: 1024px) {
    margin-top: 2.5rem;
  }
`;

export const StyledTh = styled.th<{ textAlign?: string; dNoneMobile?: boolean }>`
  padding: 1rem 0;
  text-align: ${(props) => props.textAlign || 'left'};
  border-top: 1px solid ${(props) => props.theme.colors.borderColor};
  border-bottom: 1px solid ${(props) => props.theme.colors.borderColor};
  ${(props) =>
    props.dNoneMobile &&
    css`
      display: none;

      @media screen and (min-width: 1024px) {
        display: table-cell;
      }
    `}
`;

export const LoaderWrapper = styled.div`
  width: 100%;
  height: 80vh;
  display: grid;
  place-items: center;
`;
