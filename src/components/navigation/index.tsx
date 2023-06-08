'use client';

import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import TextField from '@/components/TextField';

export default function Navigation() {
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;
  console.log('first', scrollPosition);

  useEffect(() => {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    console.log('first', scrollPosition);
  }, []);
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
  position: sticky;
  top: 0;
  min-height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 30px;
  border-bottom: 1px solid #fff;
  &:before {
    content: '';
    position: fixed;
    width: 100%;
    min-height: 69px;
    z-index: -1;
    top: 0;
    left: 0;
    backdrop-filter: blur(6px);
    background: inherit;
  }
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
