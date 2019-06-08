import styled from 'styled-components'

import { TEAL } from '../ui/colors'
import { script, normal } from '../ui/fonts'

export const FeaturedGalleriesCollection = styled.div`
  display: flex;

  .col {
    flex-basis: 33.3%;
    margin: 5px;
    width: 400px;
    max-width: 100%;

    /* TODO: Remove later */
    width: 400px;
  }

  .gallery-card {
    width: 100%;
    height: 400px;
    position: relative;
    overflow: hidden;

    &.half {
      height: 195px;

      &:first-child {
        margin-bottom: 10px;
      }
    }

    img {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      min-width: 100%;
      height: 100%;
      max-width: none;
      margin: 0;
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      background-color: ${TEAL};
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      transition: opacity 150ms linear;
      z-index: 10;

      .number {
        font-size: 3rem;
        color: #fff;
      }

      .separator {
        width: 100px;
        height: 1px;
        background-color: #fff;
        margin: 0.2rem 0 1rem;
      }

      .title {
        font-size: 1.8rem;
        letter-spacing: 0.02em;
        /* margin-bottom: 1em */
      }

      &:hover {
        opacity: 0.95;
      }
    }
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;

    .gallery-card,
    .gallery-card.half {
      height: auto;
      /* width: 400px; */
      /* max-width: 90%; */
      margin: 0 auto;

      img {
        position: relative;
        top: auto;
        max-height: 200px;
        width: auto;
        min-width: 0;
      }

      .overlay {
        position: relative;
        height: auto;
        opacity: 1;
        background-color: transparent;
        color: #999;
        padding: 2rem;

        .number {
          color: ${TEAL};
          font-size: 2.5rem;
        }

        .title {
          font-size: 1.5rem;
        }

        .separator {
          background-color: #999;
          margin: 0.2rem 0 1rem;
        }
      }
    }
  }
`

export const FeaturedGalleryCardRow = styled.div`
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 2rem;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`

export const FeaturedGalleryCardWrapper = styled.div`
  padding-top: 100%;
  background-color: #eee;
  position: relative;

  @media screen and (max-width: 800px) {
    max-width: 400px;
    height: 400px;
    padding-top: 0;
    margin: 1rem auto;
  }
`

export const FeaturedGalleryCard = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eee;
  background-image: ${({ bgImage }) => `url(${bgImage})`};
  background-size: cover;
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.25);
  padding: 1rem;

  &:hover > button {
    opacity: 1;
  }

  &:hover::after {
    background-color: rgba(0, 0, 0, 0.7);
  }

  &::after {
    content: '';
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 0;
    transition: all 200ms ease-out;
  }

  h4 {
    font-family: ${normal};
    font-weight: normal;
    color: #fff;
    font-size: 2.5rem;
    text-align: center;
    margin: 0.5em 0 0.1em;
    letter-spacing: 0.1em;
    z-index: 1;
  }

  h5 {
    font-family: ${script};
    font-weight: normal;
    color: #fff;
    font-size: 2rem;
    text-align: center;
    margin: 0.5em 0 0.2em;
    letter-spacing: 0.1em;
    text-transform: capitalize;
    z-index: 1;
  }

  button {
    z-index: 1;
    margin-top: 15px;
    font-family: ${normal};
    border: 3px solid #fff;
    padding: 5px 12px;
    background: transparent;
    color: #fff;
    opacity: 0;
    transition: all 200ms ease-out;

    &:hover {
      background: #fff;
      color: #000;
      cursor: pointer;
    }
  }
`
