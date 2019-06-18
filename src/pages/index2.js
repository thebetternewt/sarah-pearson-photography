import React from 'react'
import styled from 'styled-components'

import { display, script } from '../ui/fonts'

import brideWindow from '../images/bride-window.jpg'
import sunset from '../images/sunset.jpg'
import baby from '../images/baby.jpg'

const Home = () => {
  return (
    <div>
      <HomeSection className="story">
        <Heading>
          Sarah Pearson <span>Photography</span>
        </Heading>
        <div className="cta story-cta">
          <h2 className="headline">
            Tell your <br />
            <span>Story...</span>
          </h2>
          <button>Learn More</button>
          <img
            className="bg-image"
            src={brideWindow}
            alt="Bride looking out window"
          />
        </div>
      </HomeSection>
      <HomeSection className="weddings">
        <Heading>
          Sarah Pearson <span>Photography</span>
        </Heading>
        <div className="cta weddings-cta">
          <h2 className="headline">Weddings &amp; Engagements</h2>
          <h3 className="subline">the telling of how two became one...</h3>
          <button>View Gallery</button>
          <img
            className="bg-image"
            src={sunset}
            alt="Couple kissing in the sunset"
          />
        </div>
      </HomeSection>
      <HomeSection className="portraits">
        <Heading>
          Sarah Pearson <span>Photography</span>
        </Heading>
        <div className="cta portraits-cta">
          <h2 className="headline">Portraits</h2>
          <h3 className="subline">family. graduation. cherish the moment...</h3>
          <button>View Gallery</button>
          <img className="bg-image" src={baby} alt="Baby with blue eyes" />
        </div>
      </HomeSection>
    </div>
  )
}

export default Home

const HomeSection = styled.section`
  height: 100vh;
  overflow: hidden;
  position: relative;

  &.weddings {
    color: #fff;
  }

  .bg-image {
    position: absolute;
    bottom: 0;
    left: 0;
    min-width: 120%;
    min-height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  .cta {
    &.story-cta {
      margin-top: 40vh;
      margin-left: 180px;
    }

    &.weddings-cta {
      margin-top: 250px;
      margin-left: 180px;

      .headline {
        font-size: 4rem;
        font-family: ${display};
        text-transform: uppercase;
      }

      .subline {
        font-family: ${script};
        font-size: 2rem;
        font-weight: normal;
        padding-left: 5px;
      }

      button {
        border-color: #fff;

        &:hover {
          background: #fff;
          color: #333;
        }
      }
    }

    &.portraits-cta {
      margin-top: 50vh;
      margin-left: 100px;

      .headline {
        font-size: 4rem;
        font-family: ${display};
        text-transform: uppercase;
      }

      .subline {
        font-family: ${script};
        font-size: 2rem;
        font-weight: normal;
        padding-left: 10px;
      }

      /* button {
        border-color: #fff;

        &:hover {
          background: #fff;
          color: #333;
        }
      } */
    }

    .headline {
      font-family: ${script};
      font-weight: normal;
      font-size: 3rem;

      span {
        font-size: 2em;
        padding-left: 60px;
      }
    }

    button {
      font-size: 1.5rem;
      border: 2px solid #555;
      background-color: transparent;
      width: 300px;
      height: 80px;
      margin-top: 2rem;
      color: inherit;
      cursor: pointer;
      transition: 300ms all ease;

      &:hover {
        background: #111;
        color: #fff;
      }
    }
  }
`

const Heading = styled.h1`
  margin: 3rem 2rem 0;
  font-family: ${display};
  text-transform: uppercase;
  font-weight: normal;
  font-size: 2.3rem;
  letter-spacing: 0.7px;

  span {
    font-family: ${script};
    text-transform: capitalize;
    font-size: 0.7em;
    display: block;
    margin-top: 0.5em;
    letter-spacing: 0;
  }
`
