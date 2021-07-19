import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const rotate = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg)
  }
`;

const Loader = styled.div<{ width: string; height: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: 4px solid #ccc;
  border-top: 4px solid #111;
  border-radius: 50%;
  animation: ${rotate} 2s linear infinite;
`;

export default Loader;
