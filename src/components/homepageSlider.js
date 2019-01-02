import React from 'react'
import styled from 'styled-components'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import family from '../images/pearson-family.jpg'

const Slider = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
`

const HomepageSlider = props => {
  console.log('slider props:', props)
  const slideImage = props.slides[0].image
  return (
    <Slider>
      <Img
        fluid={slideImage.localFile.childImageSharp.fluid}
        alt={slideImage.alt}
        style={{ width: '100vw' }}
      />
    </Slider>
  )
}

export default HomepageSlider
