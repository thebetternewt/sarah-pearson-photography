import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import { GOLD, GRAY } from './colors'
import { FaBars } from 'react-icons/fa'

import Header from './header'
import './layout.css'
import Nav from './Nav'
import logo from '../images/spp_logo.png'
import MobileNav from './MobileNav'

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100px;
  background-color: #fff;
  align-items: center;
  justify-content: center;

  padding-top: 1rem;
`

const HeaderTitle = styled.h1`
  color: #000;
  margin: 2rem 0;
  font-family: 'Playfair Display', Helvetica, Arial, sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  text-align: center;

  span {
    display: block;
    font-size: 0.8em;
    font-family: 'Pinyon Script', Helvetica, Arial, sans-serif;
    font-style: italic;
    text-align: center;
    text-transform: capitalize;
    letter-spacing: 0;
    margin-top: 20px;
  }
`

const Navbar = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 1rem;
  border-top: 2px solid ${GOLD};
  border-bottom: 2px solid ${GOLD};
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);
  background: #fff;
  z-index: 10;

  @media screen and (min-width: 800px) {
    justify-content: center;
    padding: 20px 2rem;

    svg {
      display: none;
    }
  }
`

const Logo = styled(Link)`
  margin: 0;
  display: flex;
  align-items: center;

  img {
    height: 60px;
    margin: 0;
  }

  @media screen and (min-width: 800px) {
    display: none;
  }
`

const MobileNavToggle = styled.button`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: transparent;
  outline: none;

  @media screen and (min-width: 800px) {
    display: none;
  }
`

class Layout extends Component {
  state = {
    showNav: false,
  }

  toggleNav = () =>
    this.setState(({ showNav }) => ({
      showNav: !showNav,
    }))

  render() {
    const { children } = this.props
    const { showNav } = this.state

    return (
      <>
        <HeaderWrapper>
          <HeaderTitle>
            Sarah Pearson <span>Photography</span>
          </HeaderTitle>
        </HeaderWrapper>
        <Navbar>
          <Logo to="/">
            <img src={logo} alt="SP" />
          </Logo>
          <MobileNavToggle>
            <FaBars size={24} color="#777" onClick={this.toggleNav} />
          </MobileNavToggle>
          {showNav && <MobileNav close={this.toggleNav} />}
          <Nav />
        </Navbar>
        <div>{children}</div>
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
