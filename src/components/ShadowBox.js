import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const ShadowBox = ({ image, close }) => {
  return (
    <Wrapper>
      <Backdrop />
      <CloseButton onClick={close} />
      <ImageWrapper>
        <Img fluid={image.fluid} alt={image.alt} />
      </ImageWrapper>
      <Caption>
        <p>
          This is an image. Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Repudiandae, quia!
        </p>
      </Caption>
    </Wrapper>
  )
}

export default ShadowBox

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 500;
`

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
`

const CloseButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;

  position: absolute;
  right: 36px;
  top: 10px;
  width: 32px;
  height: 32px;
  opacity: 0.6;
  padding: 2rem 0;

  &:hover {
    opacity: 1;
  }
  &:before,
  &:after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 33px;
    width: 2px;
    background-color: #fff;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`

const Caption = styled.div`
  max-width: 80%;
  z-index: 10;

  p {
    color: #fff;
    margin-top: 1rem;
    font-size: 1.3rem;
    text-align: center;
  }
`

const ImageWrapper = styled.div`
  width: 1100px;
  max-width: 80%;
  background-color: rgba(0, 0, 0, 0.8);
  box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.8);
`
