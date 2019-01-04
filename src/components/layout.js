import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import { GOLD, GRAY } from './colors'

import Header from './header'
import './layout.css'
import Nav from './Nav'

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
  justify-content: center;
  padding: 20px 2rem;
  border-top: 2px solid ${GOLD};
  border-bottom: 2px solid ${GOLD};
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);
  background: #fff;
  z-index: 10;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <HeaderWrapper>
          <HeaderTitle>
            Sarah Pearson <span>Photography</span>
          </HeaderTitle>
        </HeaderWrapper>
        <Navbar>
          <Nav />
        </Navbar>
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <div
        // style={{
        //  margin: `0 auto`,
        //  maxWidth: 960,
        //  padding: `0px 1.0875rem 1.45rem`,
        //  paddingTop: 0,
        // }}
        >
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
