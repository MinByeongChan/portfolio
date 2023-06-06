'use client';

import TextField from '@/components/TextField';
import styled from '@emotion/styled';
import React from 'react';

export default function Career() {
  return (
    <Wrapper>
      <TextField fontSize="2rem" color="white">
        Career
      </TextField>

      <CardCollection>
        <Card>
          <TextField fontSize="1rem" color="white">
            2021.09 - 현재 코웨이, 서울 (프론트엔드 개발) o 프론트엔드개발팀에서 웹페이지 개발 o 통합회원 어드민, 대내에서 사용하는 관리자 웹페이지 o 매칭서비스 F/E, 고객이 편리하게 렌탈할 수 있는
            매칭서비스의 FE 메인 담당 o 기술스택: React, TypeScript, vite, webpack, React-Query, jotai, cypress, jest
          </TextField>
        </Card>
        <Card>
          <TextField fontSize="1rem" color="white">
            2020.02 - 2021.09 KSNET, 서울 (FE/AOS 개발) o 모바일파트 웹앱 및 웹페이지 개발 o KSTA Mobile 개발, KSNET VAN 가맹점 매출정보 확인 앱 o 테크넷 개발, KSNET 기술본부 개발 이슈관리 및 영업지원
            웹 페이지 개발 o 프론트엔드 (JavaScript, HTML, CSS, React.js) 개발
          </TextField>
        </Card>
      </CardCollection>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`;
const CardCollection = styled.ul`
  margin-top: 30px;
`;
const Card = styled.li`
  width: 100%;
  height: 200px;
  background-color: black;
`;
