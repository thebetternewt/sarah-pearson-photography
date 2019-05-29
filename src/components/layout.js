import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import styled from 'styled-components'
import logo from '../images/spp_logo.png'
import { GOLD } from '../ui/colors'
import './layout.css'
import MobileNav from './MobileNav'
import Nav from './Nav'
import Footer from './Footer'

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
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 1rem;
  /* border-top: 2px solid ${GOLD};
  border-bottom: 2px solid ${GOLD}; */
  box-shadow: 6px 8px 14px -14px rgba(0, 0, 0, 0.25);
  background: #fff;
  color: #555;
  z-index: 100;

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
    height: 40px;
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

const ContentWrapper = styled.div`
  font-family: 'Baskerville', Arial, Helvetica, sans-serif;
  color: #555;
`

const Layout = ({ children }) => {
  const [showNav, setShowNav] = useState(false)

  const toggleNav = () => setShowNav(!showNav)

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
          <FaBars size={24} color="#555" onClick={toggleNav} />
        </MobileNavToggle>
        {showNav && <MobileNav close={toggleNav} />}
        <Nav />
      </Navbar>
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
