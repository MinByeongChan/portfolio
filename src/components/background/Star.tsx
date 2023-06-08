import { randomWithMax } from '@/utils/common';
import styled from '@emotion/styled';
import React from 'react';

export default function Star() {
  const getRandomPosition = (): [string, string] => {
    const top = randomWithMax(window.innerHeight);
    const left = randomWithMax(window.innerWidth);

    return [`${top}px`, `${left}px`];
  };

  const [top, left] = getRandomPosition();

  return <StarWrapper top={top} left={left} />;
}

const StarWrapper = styled.div<{ top: string; left: string }>`
  position: fixed;
  width: 5px;
  height: 5px;
  background-color: #fff;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  border-radius: 50%;
  z-index: 3;
  filter: blur(1px);
`;
