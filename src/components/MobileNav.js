import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import logo from '../images/spp_logo.png'

const Nav = styled.nav`
  width: 100%;

  ul {
    display: flex;
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
      /* text-align: center; */
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

  @media screen and (max-width: 800px) {
    display: none;
  }
`
export default () => (
  <Nav>
    <ul>
      <li style={{ width: 60, flexBasis: 10 }}>
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
      <li style={{ width: 60, flexBasis: 10 }}>
        <Link to="/">
          <img src={logo} alt="SP" />
        </Link>
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
)
