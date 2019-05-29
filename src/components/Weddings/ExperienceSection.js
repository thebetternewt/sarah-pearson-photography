import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

import { Section, Container, SimpleBorderDecorator } from '../ui/layout'
import { script } from '../../ui/fonts'

const ExperienceSection = ({ bgImage }) => (
  <Section>
    <ExperienceContent>
      {/* <Img
        fluid={bgImage.childImageSharp.fluid}
        alt={bgImage.name}
        className="bg-image"
      /> */}
      <Container>
        <div style={{ width: 500 }}>
          <h3>The Wedding Experience</h3>
          {/* <WeddingExperienceSlider /> */}

          <SimpleBorderDecorator xGap={25} yGap={23} />
          <SimpleBorderDecorator xGap={18} yGap={30} />
        </div>
      </Container>
    </ExperienceContent>
  </Section>
)

export default ExperienceSection

const ExperienceContent = styled.div`
  position: relative;
  height: 500px;
  width: 100%;
  /* overflow: hidden; */
  padding: 3rem 0;

  h3 {
    font-family: ${script};
    color: #fff;
  }

  .bg-image {
    position: absolute !important;
    bottom: 0;
    left: 0;
    /* transform: translate3d(-50%, 0, 0); */
    width: 100%;
    z-index: -1;
  }
`
