import React from 'react'
import styled from 'styled-components'

import ContactForm from './ContactForm'
import InstaWidget from './InstaWidget'
import { H3 } from './ui/text'
import { Container } from './ui/layout'
import Nav from './Nav'

import watercolor from '../images/blue-watercolor.jpg'

const ContactSection = styled.section`
  background-image: url(${watercolor});
  background-size: cover;
  padding: 1rem 0;
`

export default () => (
  <ContactSection>
    <Container>
      <H3>Contact</H3>
      <ContactForm />
      <InstaWidget />
      <Nav />
      <footer>
        <p style={{ textAlign: 'center', margin: '2rem 0 1rem' }}>
          Copyright 2019 Sarah Pearson Photography
        </p>
        <p style={{ textAlign: 'center', margin: '1rem 0' }}>
          Built by Relate Media & Design
        </p>
      </footer>
    </Container>
  </ContactSection>
)
