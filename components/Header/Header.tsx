import styled from '@emotion/styled';

const StyledHeader = styled.header`
  margin: 1.5rem 0 2rem;
  text-align: center;

  @media screen and (min-width: 1200px) {
    margin: 4rem 0 4.5rem;
  }
`;

const Heading = styled.h1`
  margin: 0;
  font-size: 2rem;
  font-weight: 500;

  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }

  @media screen and (min-width: 1200px) {
    font-size: 4.5rem;
    font-weight: 400;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Heading>Coin Tracker</Heading>
    </StyledHeader>
  );
};

export default Header;
