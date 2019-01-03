import React from 'react'
import styled from 'styled-components'

import Carousel from 'nuka-carousel'

import watercolor from '../images/blue-watercolor.jpg'

const ExperienceCarousel = styled(Carousel)`
  width: 00px;
  height: 500px;
  background-color: teal;
`
const SlideWrapper = styled.div`
  width: 800px;
  display: flex;
  justify-content: center;
`

const StepContainer = styled.div`
  width: 200px;
  height: 200px;
  background-color: blue;
  margin-right: 2rem;
  background-image: url(${watercolor});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10rem;
`
const StepContent = styled.div`
  width: 400px;
  height: 200px;
  background-color: red;
`

const WeddingExperienceSlider = () => {
  return (
    <Carousel
      style={{
        width: 800,
        height: 200,
        display: 'flex',
        justifyContent: 'center',
        margin: '0 auto',
      }}
    >
      <SlideWrapper>
        <StepContainer>1</StepContainer>
        <StepContent>
          <h5>Chat</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
            modi.
          </p>
        </StepContent>
      </SlideWrapper>
    </Carousel>
  )
}

export default WeddingExperienceSlider
