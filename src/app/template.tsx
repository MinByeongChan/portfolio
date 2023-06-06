'use client';

import Background from '@/components/background';
import Navigation from '@/components/navigation';
import styled from '@emotion/styled';
import React, { useState } from 'react';

interface Props {
  children: React.ReactNode;
}

export default function (props: Props) {
  const { children } = props;

  const [backgroundOpacity, setOpacity] = useState<number>(0.3);

  return (
    <>
      <Background opacity={backgroundOpacity} />

      <Wrapper>
        <Navigation />

        <button
          onClick={() => {
            switch (backgroundOpacity) {
              case 0.3:
                setOpacity(0.5);
                break;
              case 0.5:
                setOpacity(0.7);
                break;
              case 0.7:
                setOpacity(0.3);
                break;
              default:
                setOpacity(0.3);
            }
          }}>
          배경 변경
        </button>
        {children}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  min-height: 100vh;
  z-index: 3;
`;

// const Wallpaper = styled.div`
//   pointer-events: none;
//   position: absolute;
//   width: 100%;
//   min-height: 100vh;
//   background: url('/jejuIsland.jpeg') no-repeat fixed center;
//   z-index: 1;
// `;

// const Background = styled.div<{ opacity: number }>`
//   pointer-events: none;
//   position: absolute;
//   width: 100%;
//   min-height: 100vh;
//   transition: 0.3s cubic-bezier(0.48, 0.14, 0.54, 0.92);
//   background-color: ${(props) => `rgba(0, 0, 0, ${props.opacity})`};
//   z-index: 2;
// `;

// const Star1 = styled.div`
//   position: absolute;
//   width: 5px;
//   height: 5px;
//   background-color: #fff;
//   left: 30px;
//   top: 100px;
//   border-radius: 50%;
//   z-index: 3;
//   filter: blur(1.5px);
// `;
