import React from 'react'
import styled from 'styled-components'

import { Section, Container, SimpleBorderDecorator } from '../../ui/layout'
import { script } from '../../ui/fonts'
import { BLUE, TEAL } from '../../ui/colors'
import Divider from '../../ui/Divider'

import sunset from '../../images/sunset.jpg'

const ExperienceSection = ({ title }) => (
  <Section
    style={{
      // background:
      //   'url(https://images.pexels.com/photos/1024744/pexels-photo-1024744.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&w=500)',
      background: `url(${sunset})`,
      backgroundSize: 'cover',
      backgroundPosition: 'bottom',
      backgroundRepeat: 'none',
    }}
  >
    <Container
      style={{
        background: 'rgba(255,255,255,0.9)',
        padding: '3rem 1rem',
        textAlign: 'center',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h3
        style={{
          fontFamily: script,
          fontSize: '3.5rem',
          fontWeight: 'normal',
          textAlign: 'center',
          color: TEAL,
        }}
      >
        {title}
      </h3>
      <Divider />
      <ExperienceContent>
        <h5>Let's Chat!</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          voluptatibus accusantium dignissimos ipsum illo assumenda officiis,
          aperiam, iste saepe illum id magni! Dolore, perspiciatis sed! Harum
          fugit incidunt vero nisi.
        </p>
      </ExperienceContent>
      <SimpleBorderDecorator xGap={15} yGap={30} hideMd />
      <SimpleBorderDecorator xGap={25} yGap={20} color="#fff" hideMd />
    </Container>
  </Section>
)

export default ExperienceSection

const ExperienceContent = styled.div`
  max-width: 90vw;
  width: 400px;
  height: 200px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  h5 {
    text-align: center;
    font-family: ${script};
    font-size: 2rem;
    font-weight: normal;
    margin: 0.3em 0;
    color: ${BLUE};
  }

  p,
  li {
    font-size: 1.1rem;
  }
`
