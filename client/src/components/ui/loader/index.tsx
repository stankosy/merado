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
  width: 80px;
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

interface LoaderProps {
  theme: 'dark' | 'light';
  size: 'sm' | 'md' | 'lg';
}

const SIZE_MAP = {
  sm: '2',
  md: '4',
  lg: '6',
};

export const Loader = (props) => {
  const { theme = 'dark', size = 'sm' } = props;

  const bgColor = theme === 'dark' ? '#49266a' : '#ff9e48';
  const sizeDim = SIZE_MAP[size];

  return (
    <Wrapper
      {...props}
      className="flex justify-center items-center text-center my-2 mx-auto"
    >
      {[0, 1, 2].map((elem) => (
        <Box
          key={`Loading-Box-${elem}`}
          index={elem}
          className={`bg-[${bgColor}] rounded-full w-${sizeDim} h-${sizeDim}`}
        />
      ))}
    </Wrapper>
  );
};
