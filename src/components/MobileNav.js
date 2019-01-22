import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { FaTimes } from 'react-icons/fa'

import logo from '../images/spp_logo.png'

const NavContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.95);
`

const CloseButton = styled.button`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
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

      a {
        text-decoration: none;
        color: inherit;
        text-transform: uppercase;
      }
    }

    img {
      height: 60px;
    }
  }

  @media screen and (min-width: 800px) {
    display: none;
  }
`
export default ({ close }) => (
  <NavContainer>
    <CloseButton onClick={close}>
      <FaTimes color="#777" size={36} />
    </CloseButton>
    <Nav>
      <ul>
        <li>
          <Link to="/">
            <img src={logo} alt="SP" />
          </Link>
        </li>
        <li>
          <Link to="/about">Sarah</Link>
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
  </NavContainer>
)
