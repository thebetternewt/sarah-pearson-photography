import React from 'react'
import styled from 'styled-components'

import { Section, Container, SimpleBorderDecorator } from '../../ui/layout'
import { script } from '../../ui/fonts'
import { BLUE, TEAL } from '../../ui/colors'
import Divider from '../../ui/elements/Divider'

import sunset from '../../images/sunset.jpg'

const ExperienceSection = ({ title }) => (
  <ExperienceWrapper>
    <ExperienceContent>
      <SimpleBorderDecorator xGap={-10} yGap={-20} hideMobile />
      <SimpleBorderDecorator xGap={-15} yGap={-15} hideMobile />
      <h3 className="heading">{title}</h3>
      <Divider />
      <div className="content">
        <h5>Let's Chat!</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          voluptatibus accusantium dignissimos ipsum illo assumenda officiis,
          aperiam, iste saepe illum id magni! Dolore, perspiciatis sed! Harum
          fugit incidunt vero nisi.
        </p>
      </div>
    </ExperienceContent>
  </ExperienceWrapper>
)

const ExperienceWrapper = styled(Section)`
  background: url(${sunset});
  background-size: cover;
  background-position: bottom;
  background-repeat: none;

  @media screen and (max-width: 800px) {
    padding: 0;
  }
`

const ExperienceContent = styled(Container)`
  background: rgba(255, 255, 255, 0.9);
  padding: 3rem 1rem 4rem;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  .heading {
    position: relative;
    font-family: ${script};
    font-size: 3rem;
    font-weight: normal;
    text-align: center;
    color: ${TEAL};
    margin: 0.3em 0;
  }

  .content {
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
      margin: 0.5em 0 0.2em;
      color: ${BLUE};
    }

    p,
    li {
      font-size: 1.1rem;
    }
  }
`

export default ExperienceSection
