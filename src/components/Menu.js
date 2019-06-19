import React, { useState } from 'react'
import styled from 'styled-components'

import { TEAL } from '../ui/colors'

import logo from '../images/spp_logo.png'

const Menu = () => {
  const [isOpen, toggleIsOpen] = useState(false)

  return (
    <MenuWrapper isOpen={isOpen}>
      <MenuButton onClick={() => toggleIsOpen(!isOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </MenuButton>
      <img src={logo} alt="Sarah Pearson Photography" className="logo" />
    </MenuWrapper>
  )
}

export default Menu

const MenuButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: ${TEAL};

  position: fixed;
  top: 30px;
  right: 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: none;
  padding: 0;
  cursor: pointer;
  transition: 200ms all ease;
  z-index: 20;

  .bar {
    width: 30px;
    height: 3px;
    background-color: #fff;
    transition: 200ms all ease;

    &:not(:last-child) {
      margin-bottom: 5px;
    }
  }

  &:hover {
    background-color: #fff;

    .bar {
      background-color: ${TEAL};
    }
  }
`

const MenuWrapper = styled.div`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? 0 : `-1000px`)};
  z-index: 20;

  display: flex;
  justify-content: center;
  padding-top: 20vh;

  width: 100%;
  height: 100vh;

  background-color: #fff;

  .logo {
    width: 60px;
    height: 60px;
  }

  @media (min-width: 800px) {
    width: 300px;
  }
`
