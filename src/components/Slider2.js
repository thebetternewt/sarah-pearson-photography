import React from 'react'
import SlickSlider from 'react-slick'
import styled from 'styled-components'

const Slider = styled(SlickSlider)``

const HomepageSlider = ({ slides }) => {
  const slideImages = slides.map(({ image }, id) => (
    <div style={{ height: 200 }}>
      <img key={id} src={image.localFile.publicURL} alt={image.alt} />
    </div>
  ))

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // adaptiveHeight: true,
  }

  return <Slider {...settings}>{slideImages}</Slider>
}

export default HomepageSlider
