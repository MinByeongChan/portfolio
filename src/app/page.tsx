'use client';

import Career from '@/components/Career';
import Introduction from '@/components/Introduction';
import styled from '@emotion/styled';

export default function Home() {
  return (
    <>
      <Wrapper>
        <Introduction />
      </Wrapper>
      <Career />
    </>
  );
}

const Wrapper = styled.div`
  margin: 0 30px;
`;
