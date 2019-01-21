import React from 'react'
import styled from 'styled-components'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Carousel from 'nuka-carousel'
import { auto } from 'eol'

const Slider = styled(Carousel)`
  width: 100%;
  max-width: 1200px;
  background-color: #000;
  margin: 0 auto;
`

const HomepageSlider = props => {
  console.log('slider props:', props)
  const slideImages = props.slides.map(({ image }, id) => (
    <Img
      key={id}
      fluid={image.localFile.childImageSharp.fluid}
      alt={image.alt}
      style={{ margin: '0 auto' }}
    />
  ))

  return (
    <Slider
      wrapAround
      autoplay
      autoplayInterval={5000}
      transitionMode="fade"
      speed={1500}
      withoutControls
      swiping
      pauseOnHover
      style={
        {
          //width: '100vw',
          //maxHeight: 700,
          //backgroundColor: '#000',
          //overflow: 'hidden',
        }
      }
    >
      {slideImages}
    </Slider>
  )
}

export default HomepageSlider
