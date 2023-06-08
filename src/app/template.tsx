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

  return (
    <>
      <Background opacity={0.7} />

      <Wrapper>
        <Navigation />
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
