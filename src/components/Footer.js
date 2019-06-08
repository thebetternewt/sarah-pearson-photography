import { Link } from 'gatsby'
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import styled from 'styled-components'
import watercolor from '../images/blue-watercolor.jpg'
import InstaWidget from './InstaWidget'
import { Container, SimpleBorderDecorator } from '../ui/layout'
import { script } from '../ui/fonts'
import Divider from '../ui/elements/Divider'
import { desktopOnly } from '../utils/hide'

const FooterWrapper = styled.footer`
  /* background-image: url(${watercolor}); */
  background-size: cover;
  padding: 1rem 0;

  p {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
    display: block;
    margin: 5px 0;
  }

  .header {
    position: relative;
    font-family: ${script};
    font-weight: 300;
    font-size: 2.3rem;
    text-align: center;
    line-height: 1em;
    margin: 0;
    padding-bottom: 0.5rem;
  }

  .social-links {
    padding: 1rem 0;
    font-size: 1.5rem;
    svg {
      margin: 0 0.5rem;
    }
  }

  .row {
    display: flex;
    border-top: 1px solid #ccc;
    padding-top: 1rem;
    margin-top: 4rem;
  }

  .col {
    padding: 1rem;
    &:not(:first-of-type) {
      border-left: 1px solid #ccc;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .col-1 {
    flex-basis: 25%;
  }
  .col-2 {
    flex-basis: 50%;
  }

  .business-info {
    p {
      font-size: 1rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
  }

  @media screen and (max-width: 800px) {
    .social-links {
      padding-bottom: 0;
    }

    .row {
      flex-direction: column;
      border: none;
    }

    .col {
      padding: 1rem 0;
      justify-content: center;
    }

    .col:not(:first-of-type) {
        border: none;
      }
  }
`

const InstaWidgetWrapper = styled.div`
  position: relative;
  margin: 50px 1.5rem;
  padding-top: 1rem;
`

const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  margin-left: 2rem;

  a {
    color: inherit;
    text-decoration: none;
    display: block;
    margin: 5px 0;
    text-align: left;
  }

  ${desktopOnly}
`

export default () => (
  <FooterWrapper>
    <Container maxWidth={960}>
      <InstaWidgetWrapper>
        <SimpleBorderDecorator xGap={25} yGap={30} />
        <SimpleBorderDecorator xGap={30} yGap={25} />
        <h4 className="header">Follow along on Instagram</h4>
        <Divider />
        <InstaWidget />
      </InstaWidgetWrapper>
      <div className="row">
        <div className="col col-1">
          <Link to="/contact">
            <p>Booking</p>
            <p>
              Inquire and say <em>hello</em>
            </p>
          </Link>
          <Link to="/journal">
            <p>Journal</p>
            <p>View my recent work</p>
          </Link>
        </div>
        <div className="col col-2 business-info">
          <p>Sarah Pearson Photography</p>
          <p>Starkville, MS</p>
          <div className="social-links">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
        <div className="col col-1">
          <FooterNav>
            <Link to="/about">Sarah</Link>
            <Link to="/weddings">Weddings</Link>
            <Link to="/portraits">Portraits</Link>
            <Link to="/clients">For Clients</Link>
            <Link to="/journal">Journal</Link>
            <Link to="/contact">Contact</Link>
          </FooterNav>
        </div>
      </div>
      <div>
        <p style={{ textAlign: 'center', margin: '2rem 0 1rem' }}>
          Copyright 2019 Sarah Pearson Photography
        </p>
        <p style={{ textAlign: 'center', margin: '1rem 0' }}>
          Built by Relate Media & Design
        </p>
      </div>
    </Container>
  </FooterWrapper>
)
