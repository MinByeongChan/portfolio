'use client';

import Career from '@/components/Career';
import Introduction from '@/components/introduction';
import styled from '@emotion/styled';

export default function Home() {
  return (
    <Wrapper>
      <Introduction />
      <Career />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0 30px;
`;
