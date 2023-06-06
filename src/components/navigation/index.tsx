'use client';

import React from 'react';
import styled from '@emotion/styled';
import TextField from '@/components/TextField';

export default function Navigation() {
  return (
    <Nav>
      <NavLeftDiv>
        <TextField fontSize="1.5rem" color="white">
          Byeong Chan
        </TextField>
        <TextField marginLeft="12px" color="white" fontWeight="300" lineHeight="2.5rem">
          FRONT END, DEVELOPER
        </TextField>
      </NavLeftDiv>
      <NavUl>
        <NavLi>
          <TextField fontSize="1rem" color="white" fontWeight="300">
            works.
          </TextField>
        </NavLi>

        <NavLi>
          <TextField fontSize="1rem" color="white" fontWeight="300">
            about.
          </TextField>
        </NavLi>
      </NavUl>
    </Nav>
  );
}

const Nav = styled.nav`
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 30px;
  border-bottom: 1px solid #fff;
`;

const NavLeftDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const NavUl = styled.ul`
  display: flex;
`;

const NavLi = styled.li`
  margin: 10px;
`;
