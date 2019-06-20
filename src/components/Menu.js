import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { TEAL } from '../ui/colors'

import logo from '../images/spp_logo.png'

const Menu = () => {
  const [isOpen, toggleIsOpen] = useState(false)

  return (
    <>
      <MenuWrapper isOpen={isOpen}>
        <Nav>
          <ul>
            <li>
              <Link to="/">
                <img
                  src={logo}
                  alt="Sarah Pearson Photography"
                  className="logo"
                />
              </Link>
            </li>
            <li>
              <Link to="/sarah">Sarah</Link>
            </li>
            <li>
              <Link to="/weddings">Weddings</Link>
            </li>
            <li>
              <Link to="/portraits">Portraits</Link>
            </li>
            <li>
              <Link to="/clients">For Clients</Link>
            </li>
            <li>
              <Link to="/journal">Journal</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </Nav>
      </MenuWrapper>
      <MenuButton onClick={() => toggleIsOpen(!isOpen)} isOpen={isOpen}>
        <div className="bar bar-1"></div>
        <div className="bar bar-2"></div>
        <div className="bar bar-3"></div>
      </MenuButton>
    </>
  )
}

export default Menu

const MenuButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: ${TEAL};
  outline: none;

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
    transition: 300ms all ease-in-out;

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

  ${({ isOpen }) =>
    isOpen &&
    `
    background-color: transparent;
    .bar { background-color: ${TEAL}; }
    .bar-1 {
      transform: rotate(45deg) translate3d(6px, 5px, 0);
      width: 40px;
    }
    .bar-2 {
      opacity: 0;
    }
    .bar-3 {
      transform: rotate(-45deg) translate3d(7px, -6px, 0);
      width: 40px;
    }
  `}
`

const MenuWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 20;

  display: flex;
  justify-content: center;
  /* padding-top: 20vh; */

  width: 100%;
  height: 100vh;

  background-color: #fff;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  pointer-events: ${({ isOpen }) => (isOpen ? 'auto' : 'none')};

  transition: 300ms all ease-in-out;

  @media (min-width: 800px) {
    width: 300px;
    right: ${({ isOpen }) => (isOpen ? 0 : `-50px`)};
  }
`

const Nav = styled.nav`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0 auto;
    list-style: none;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1100px;
    font-family: 'Playfair Display', Helvetica, Arial, sans-serif;
    letter-spacing: 0.06em;

    li {
      margin: 0;
      padding: 10px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
      flex-shrink: 0;
      font-size: 1rem;

      a {
        text-decoration: none;
        color: inherit;
        text-transform: uppercase;
      }
    }

    .logo {
      width: 60px;
    }
  }
`
