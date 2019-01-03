import React from 'react'
import styled from 'styled-components'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Carousel from 'nuka-carousel'

const Slider = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
`

const HomepageSlider = props => {
  console.log('slider props:', props)
  const slideImages = props.slides.map(({ image }, id) => (
    <Img
      key={id}
      fluid={image.localFile.childImageSharp.fluid}
      alt={image.alt}
      style={{ maxWidth: 1600, margin: '0 auto' }}
    />
  ))

  return (
    <Carousel
      wrapAround
      autoplay
      autoplayInterval={5000}
      transitionMode="fade"
      speed={1500}
      withoutControls
      swiping
      pauseOnHover
      style={{
        width: '100vw',
        height: 700,
        backgroundColor: '#000',
      }}
    >
      {slideImages}
    </Carousel>
  )
}

export default HomepageSlider
