import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const bounedelay = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  } 40% {
    transform: scale(1.0);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px auto;
  width: 80px;
  text-align: center;
`;

interface BoxProps {
  index: number;
}

export const Box = styled.div`
  /* width: 50px;
  height: 10px;
  background-color: #25153a; */

  display: inline-block;
  margin: 0px 5px;
  animation: ${bounedelay} 1.4s infinite ease-in-out both;
  animation-delay: ${(props: BoxProps) => `${-0.32 + props.index * 0.16}s`};
`;

export const Loader = (props) => {
  return (
    <Wrapper {...props}>
      {[0, 1, 2].map((elem) => (
        <Box
          key={`Loading-Box-${elem}`}
          index={elem}
          className="bg-[#ff9e48] rounded-full w-2 h-2"
        />
      ))}
    </Wrapper>
  );
};
