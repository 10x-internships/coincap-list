import styled from '@emotion/styled';

export const Wrapper = styled.div`
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

export const CoinListTitle = styled.h2`
  font-size: 0.875rem;
  font-weight: 400;

  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
  @media screen and (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const LoadMoreBox = styled.div`
  height: 5rem;
  display: grid;
  place-items: center;
`;
