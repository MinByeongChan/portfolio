import TextField from '@/components/TextField';
import styled from '@emotion/styled';
import React from 'react';

export default function Introduction() {
  return (
    <Wrapper>
      <IntroTitle>
        <p>
          <TextField fontSize="1rem" color="white">
            This is
          </TextField>
        </p>
        <p>
          <TextField fontSize="5rem" lineHeight="4rem" color="white" letterSpacing="-7px">
            FRONT END
          </TextField>
          <br />
          <TextField fontSize="5rem" lineHeight="4rem" color="white" letterSpacing="-7px">
            DEVELOPER
          </TextField>
        </p>
      </IntroTitle>

      <IntroContent>
        <p>
          <TextField fontSize="0.8rem" color="white" letterSpacing="-1px">
            4년차 프론트엔드 주니어 개발자 입니다. 프론트엔드 개발은 바로 눈으로 볼 수 있다는 매력에 빠져 개발하고 있습니다. 팀원들과 코드로 소통할 수 있는 클린코드를 지향합니다. 최근에는 가독성 높고
            유지보수성이 좋은 코드를 짜기위해 노력하고 있습니다. 기술 트렌드를 놓치지 않는 것, 그리고 기본을 중요하게 생각합니다. 개발했던 것들을 정리하기 위해 개인 기술블로그 운영하고 있습니다.
            핸드드립 커피와 싸이클, 웨이트 운동을 좋아합니다.
          </TextField>
        </p>
      </IntroContent>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const IntroTitle = styled.section`
  margin-top: 120px;
`;

const IntroContent = styled.section`
  display: flex;
  margin-top: 20px;
  justify-content: end;
  p {
    width: 60%;
  }
`;
