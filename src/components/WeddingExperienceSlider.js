import Carousel from 'nuka-carousel'
import React from 'react'
import styled from 'styled-components'
import arrow from '../images/arrow.svg'
import watercolor from '../images/blue-watercolor.jpg'
import { BLUE, GOLD } from '../ui/colors'

const SlideWrapper = styled.div`
  width: 700px;
  max-width: 70vw;
  height: 230px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    height: auto;
    width: 100vw;
  }
`

const StepContainer = styled.div`
  width: 200px;
  height: 200px;
  background-color: blue;
  margin: 0 2rem 15px 0;
  background-image: url(${watercolor});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10rem;
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.3);

  span {
    transform: translateY(-10px);
  }

  @media screen and (max-width: 800px) {
    margin: 0 0 15px;
  }
`
const StepContent = styled.div`
  max-width: 90vw;
  width: 400px;
  height: 200px;
  /* border: 3px solid ${GOLD}; */
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  h5 {
    text-align: center;
    font-family: 'Pinyon Script', Helvetica, Arial, sans-serif;
    font-size: 2rem;
    font-weight: normal;
    margin: 0.3em 0;
    color: ${BLUE};
  }

  p,
  li {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 800px) {
    height: auto;
  }
`

const WeddingExperienceSlider = () => {
  return (
    <>
      <Carousel
        renderCenterLeftControls={({ previousSlide }) => (
          <button
            onClick={previousSlide}
            style={{ border: 'none', background: 'none' }}
          >
            <img
              src={arrow}
              alt="Prev"
              style={{ transform: 'rotate(180deg)', width: 30 }}
            />
          </button>
        )}
        renderCenterRightControls={({ previousSlide }) => (
          <button
            onClick={previousSlide}
            style={{ border: 'none', background: 'none' }}
          >
            <img src={arrow} alt="Prev" style={{ width: 30 }} />
          </button>
        )}
        renderBottomCenterControls={({ previousSlide }) => null}
        style={{
          maxWidth: 800,
          minHeight: 250,
          //display: 'flex',
          //justifyContent: 'center',
          margin: '0 auto',
          padding: '15px 0',
          //backgroundColor: 'teal',
          visibility: 'visible',
          overflow: 'visible',
        }}
      >
        <SlideWrapper>
          {/* <StepContainer>
            <span>1</span>
          </StepContainer> */}
          <StepContent>
            <h5>Chat</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
              modi.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
              modi.
            </p>
            {/* <SimpleBorderDecorator xGap={0} yGap={5} />
            <SimpleBorderDecorator xGap={5} yGap={0} /> */}
          </StepContent>
        </SlideWrapper>
      </Carousel>
    </>
  )
}

export default WeddingExperienceSlider
