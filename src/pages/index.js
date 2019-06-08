import { graphql, Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Button from '../ui/elements/Button'
import {
  Container,
  GridRow,
  Section,
  SimpleBorderDecorator,
} from '../ui/layout'
import msMagazineLogo from '../images/MississippiMagazineLogo.png'
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import { script, display, normal } from '../ui/fonts'
import Divider from '../ui/elements/Divider'
import { desktopOnly, mobileOnly } from '../utils/hide'

const IndexPage = ({ data }) => {
  const {
    mainImage,
    welcomeImage,
    portraitsImage,
    weddingsImage,
    welcomeText,
  } = data.sanityHomepage

  return (
    <Layout>
      <SliderSection>
        <img
          src={imageUrlFor(buildImageObj(mainImage))
            // .width(2000)
            .width(1600)
            .fit('crop')
            .url()}
          alt={mainImage.alt}
        />
      </SliderSection>
      <SEO title="Home" keywords={[`weddings`, `portraits`, `photography`]} />
      {/* Welcome Section */}
      <WelcomeSection>
        <Container>
          <div className="mobile-heading">
            <h3>Welcome</h3>
            <h4 className="greeting">Meet Sarah</h4>
            <Divider />
          </div>
          <div className="row">
            <div>
              <div className="image-wrapper">
                <img
                  src={imageUrlFor(buildImageObj(welcomeImage))
                    .width(600)
                    // .height(450)
                    .fit('crop')
                    .url()}
                  alt={welcomeImage.alt}
                />
                <SimpleBorderDecorator yGap={18} xGap={10} />
                <SimpleBorderDecorator yGap={10} xGap={18} />
              </div>
            </div>
            <div>
              <div className="desktop-heading">
                <h3>Welcome</h3>
                <h4 className="greeting">Meet Sarah</h4>
                <hr />
              </div>
              <WelcomeMessage>
                {welcomeText}
                <Link to="/sarah" style={{ marginTop: '2rem' }}>
                  <Button className="color" align="center">
                    Learn More About Me
                  </Button>
                </Link>
              </WelcomeMessage>
            </div>
          </div>
        </Container>
      </WelcomeSection>

      {/* Categories Section */}
      <section>
        <GridRow>
          <CategoryLinkCard dark>
            <img
              src={imageUrlFor(buildImageObj(portraitsImage))
                .width(1000)
                .height(400)
                .fit('crop')
                .url()}
              alt={portraitsImage.alt}
            />
            <CategoryCardContent>
              <CategoryCardTitle>Portraits</CategoryCardTitle>
              <CategoryLink to="/portraits" className="dark">
                Gallery
              </CategoryLink>
            </CategoryCardContent>
          </CategoryLinkCard>
          <CategoryLinkCard>
            <img
              src={imageUrlFor(buildImageObj(weddingsImage))
                .width(1000)
                .height(400)
                .fit('crop')
                .url()}
              alt={weddingsImage.alt}
            />
            <CategoryCardContent>
              <CategoryCardTitle>Weddings</CategoryCardTitle>
              <CategoryLink to="/weddings">Gallery</CategoryLink>
            </CategoryCardContent>
          </CategoryLinkCard>
        </GridRow>
      </section>

      {/* As Seen In Section */}
      <AsSeenInSection>
        <h3>As Seen In</h3>
        <LogosRow>
          <img src={msMagazineLogo} alt="Mississippi Magazine" />
        </LogosRow>
      </AsSeenInSection>
    </Layout>
  )
}

const SliderSection = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  /* height: 400px; */
  height: calc(100vh - 264px);
  position: relative;
  overflow: hidden;

  img {
    max-width: none;
    height: 100%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  @media screen and (max-width: 800px) {
    img {
      max-width: none;
    }
  }
`

const WelcomeSection = styled(Section)`
  .row {
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;
    align-items: center;
    text-align: center;
    margin: 0 auto;
    padding: 2rem 1rem;
    max-width: 960px;

    @media screen and (max-width: 800px) {
      grid-template-columns: 1fr;
    }

    img {
      margin: 0;
    }
  }

  .image-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 460px;
    margin: 0 auto;
  }

  .desktop-heading,
  .mobile-heading {
    h3 {
      color: #9fbebc;
      font-family: ${script};
      font-weight: normal;
      font-size: 3rem;
      text-align: center;
      margin: 0.5em 0 0.2em;
    }
  }

  .mobile-heading {
    ${mobileOnly}
  }

  .desktop-heading {
    ${desktopOnly}
  }

  .greeting {
    font-family: ${display};
    text-transform: uppercase;
    font-size: 2.4rem;
    letter-spacing: 0.08em;
    text-align: center;
  }

  @media screen and (max-width: 800px) {
    .image-wrapper {
      max-width: 90%;
      margin-bottom: 2rem;
    }

    button {
      font-size: 1rem;
    }
  }
`

const WelcomeMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: ${normal};

  margin-bottom: 2rem;
  text-align: center;

  p {
    text-align: center;
  }
`

const CategoryLinkCard = styled.div`
  display: block;
  position: relative;
  height: 400px;
  color: ${({ dark }) => (dark ? '#000' : '#fff')};
  background-color: ${({ dark }) => (dark ? '#fff' : '#000')};
  overflow: hidden;
  text-align: center;

  img {
    opacity: 0.6;
    min-height: 100%;
    min-width: 100%;
    max-width: none;
    margin: 0 auto;
  }
`

const CategoryCardContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const CategoryCardTitle = styled.h3`
  color: inherit;
  font-family: ${display};
  font-size: 3rem;
  font-weight: normal;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`

const CategoryLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #fff;
  height: 3rem;
  width: 200px;
  font-family: ${normal};
  text-decoration: none;
  color: inherit;
  font-size: 1.2rem;
  letter-spacing: 0.1em;
  transition: all 150ms ease-out;

  &:hover {
    background-color: #fff;
    color: #000;
    opacity: 0.9;
    cursor: pointer;
  }

  &.dark {
    border-color: #000;

    &:hover {
      background-color: #000;
      color: #fff;
    }
  }
`

const AsSeenInSection = styled(Section)`
  h3 {
    color: #9fbebc;
    font-family: ${script};
    font-weight: normal;
    font-size: 3rem;
    text-align: center;
    margin: 0.5em 0 0.2em;
  }
`

const LogosRow = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0;

  img {
    height: 60px;
    margin: 0 2rem;
    opacity: 0.6;
  }
`

export default IndexPage

export const query = graphql`
  query HomepageQuery {
    sanityHomepage {
      welcomeText
      mainImage {
        crop {
          _key
          _type
          top
          bottom
          left
          right
        }
        hotspot {
          _key
          _type
          x
          y
          height
          width
        }
        asset {
          _id
        }
        alt
      }
      welcomeImage {
        crop {
          _key
          _type
          top
          bottom
          left
          right
        }
        hotspot {
          _key
          _type
          x
          y
          height
          width
        }
        asset {
          _id
        }
        alt
      }
      portraitsImage {
        crop {
          _key
          _type
          top
          bottom
          left
          right
        }
        hotspot {
          _key
          _type
          x
          y
          height
          width
        }
        asset {
          _id
        }
      }
      weddingsImage {
        crop {
          _key
          _type
          top
          bottom
          left
          right
        }
        hotspot {
          _key
          _type
          x
          y
          height
          width
        }
        asset {
          _id
        }
      }
    }
  }
`
