import Star from '@/components/background/Star';
import styled from '@emotion/styled';
import React from 'react';

interface Props {
  opacity: number;
}

export default function Background(props: Props) {
  const { opacity } = props;

  const numberOfStar = 20;
  const stars = new Array(numberOfStar).fill(0);

  return (
    <div>
      <Wallpaper />
      <BackgroundWrapper opacity={opacity} />
      {opacity === 0.7 && stars.map((data, index) => <Star key={index} />)}
    </div>
  );
}

const Wallpaper = styled.div`
  pointer-events: none;
  position: fixed;
  width: 100%;
  min-height: 100vh;
  background: url('/jejuIsland.jpeg') no-repeat fixed center;
  z-index: 1;
`;

const BackgroundWrapper = styled.div<{ opacity: number }>`
  pointer-events: none;
  position: fixed;
  width: 100%;
  min-height: 100vh;
  transition: 0.3s cubic-bezier(0.48, 0.14, 0.54, 0.92);
  background-color: ${(props) => `rgba(0, 0, 0, ${props.opacity})`};
  z-index: 2;
`;
