import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../components/layout'
import Contact from '../components/Contact'
import SEO from '../components/seo'
import { H2, H3 } from '../components/ui/text'
import { Section, Container } from '../components/ui/layout'
import { BLUE } from '../components/colors'
import WeddingExperienceSlider from '../components/WeddingExperienceSlider'

const PageHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
  color: #fff;
  overflow: hidden;

  h2 {
    font-size: 7rem;
    margin: 0;
  }
  @media screen and (max-width: 800px) {
    h2 {
      font-size: 5rem;
    }
  }
`

const FeaturedGalleryCardRow = styled.div`
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 2rem;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`

const FeaturedGalleryCardWrapper = styled.div`
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
const FeaturedGalleryCard = styled.div`
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

  /* &:hover {
    transform: scale(1.05);
  } */
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
    font-family: 'Lora', Helvetica, Arial, sans-serif;
    font-weight: normal;
    color: #fff;
    font-size: 2.5rem;
    text-align: center;
    margin: 0.5em 0 0.1em;
    letter-spacing: 0.1em;
    z-index: 1;
  }

  h5 {
    font-family: 'Pinyon Script', Helvetica, Arial, sans-serif;
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
    font-family: 'Lora', Helvetica, Arial, sans-serif;
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

const Weddings = props => {
  console.log(props)
  const headerImage = props.data.prismicWeddingsPage.data.featured_image
  const featuredGalleriesCards = props.data.prismicWeddingsPage.data.featured_galleries
    .slice(0, 3)
    .map(({ gallery }) => {
      const { data } = gallery.document[0]
      return (
        <Link to={gallery.url} key={gallery.id}>
          <FeaturedGalleryCardWrapper>
            <FeaturedGalleryCard
              bgImage={data.featured_image.localFile.childImageSharp.fluid.src}
            >
              <h4>{data.title.text}</h4>
              <h5>{gallery.tags[0]}</h5>
              {/* <button>View Gallery</button> */}
            </FeaturedGalleryCard>
          </FeaturedGalleryCardWrapper>
        </Link>
      )
    })

  return (
    <Layout>
      <SEO title="Weddings" />
      <PageHeader>
        <Img
          fluid={headerImage.localFile.childImageSharp.fluid}
          alt={headerImage.alt}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            minHeight: '100%',
            minWidth: '100%',
            zIndex: -1,
          }}
        />
        <H2>Weddings</H2>
      </PageHeader>

      {/* Featured Galleries Section */}
      <Section>
        <Container>
          <H3>Featured</H3>
          <FeaturedGalleryCardRow>
            {featuredGalleriesCards}
          </FeaturedGalleryCardRow>
        </Container>
      </Section>

      {/* Experience Section */}
      <Section>
        <Container>
          <H3>The Wedding Experience</H3>
          <WeddingExperienceSlider />
        </Container>
      </Section>

      {/* Investment Section */}
      <Section bgColor="#eee">
        <Container>
          <H3>Investment</H3>
        </Container>
      </Section>

      {/* Videography Section */}
      <Section bgColor={BLUE}>
        <Container>
          <H3 style={{ color: '#fff' }}>F.A.Q.</H3>
        </Container>
      </Section>
      <Section>
        <Container>
          <h4>Interested in videography?</h4>
          <button>Let us know!</button>
        </Container>
      </Section>

      {/* Contact Section */}
      <Contact />
    </Layout>
  )
}

export default Weddings

export const query = graphql`
  query WeddingsPageQuery {
    prismicWeddingsPage {
      data {
        title {
          html
        }
        featured_image {
          alt
          localFile {
            childImageSharp {
              fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        featured_galleries {
          gallery {
            id
            url
            tags
            document {
              data {
                title {
                  text
                }
                featured_image {
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 400) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
