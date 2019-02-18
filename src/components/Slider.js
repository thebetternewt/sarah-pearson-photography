import Carousel from 'nuka-carousel';
import React from 'react';
import styled from 'styled-components';

const Slider = styled(Carousel)`
  height: 450px;
  max-width: 1200px;
  background-color: #000;
  margin: 0 auto;
  overflow: hidden;

  img {
    height: 450px;
  }
`

const HomepageSlider = props => {
  console.log('slider props:', props)
  const slideImages = props.slides.map(({ image }, id) => (
    <img key={id} src={image.localFile.publicURL} alt={image.alt} />
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
    >
      {slideImages}
    </Slider>
  )
}

export default HomepageSlider
