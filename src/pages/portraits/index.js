import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../../components/layout'
import Contact from '../../components/Contact'
import SEO from '../../components/seo'
import { H2, H3 } from '../../components/ui/text'
import { Section, Container, SimpleBorderDecorator } from '../../ui/layout'
import { BLUE, TEAL } from '../../ui/colors'
import Faq from '../../components/faq'
import PageHeader from '../../components/PageHeader'
import { script } from '../../ui/fonts'
import Divider from '../../ui/Divider'

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
    font-family: script;
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

const Portraits = props => {
  console.log(props)
  const headerImage = props.data.prismicWeddingsPage.data.featured_image
  const featuredGalleriesCards = props.data.prismicWeddingsPage.data.featured_galleries
    .slice(0, 3)
    .map(({ gallery }) => {
      const { data } = gallery.document[0]
      return (
        <Link to={`${data.category}/${gallery.uid}`} key={gallery.id}>
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

  const { faq } = props.data.prismicWeddingsPage.data

  return (
    <Layout>
      <SEO title="Portraits" />
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
        <H2>Portraits</H2>
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
      <Section
        style={{
          background:
            'url(https://images.pexels.com/photos/1024744/pexels-photo-1024744.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&w=500)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'none',
        }}
      >
        <Container
          style={{
            background: 'rgba(255,255,255,0.85)',
            padding: '3rem 1rem',
            textAlign: 'center',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h3
            style={{
              fontFamily: script,
              fontSize: '3.5rem',
              fontWeight: 'normal',
              textAlign: 'center',
              color: TEAL,
            }}
          >
            The Portrait Experience
          </h3>
          <Divider />
          <SliderContent>
            <h5>Let's Chat!</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              voluptatibus accusantium dignissimos ipsum illo assumenda
              officiis, aperiam, iste saepe illum id magni! Dolore, perspiciatis
              sed! Harum fugit incidunt vero nisi.
            </p>
          </SliderContent>
          <SimpleBorderDecorator xGap={15} yGap={30} />
          <SimpleBorderDecorator xGap={25} yGap={20} color="#fff" />
        </Container>
      </Section>

      {/* Investment Section */}
      <Section bgColor="#eee">
        <Container>
          <H3>Investment</H3>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section bgColor={BLUE}>
        <Container>
          <H3 style={{ color: '#fff' }}>F.A.Q.</H3>
          <Faq faq={faq} />
        </Container>
      </Section>
      {/* Videography Section */}
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

export default Portraits

export const query = graphql`
  query PortraitsPageQuery {
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
            uid
            url
            type
            tags
            document {
              data {
                category
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
        faq {
          question
          answer {
            html
            text
          }
        }
      }
    }
  }
`

const SliderContent = styled.div`
  max-width: 90vw;
  width: 400px;
  height: 200px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  h5 {
    text-align: center;
    font-family: 'Pinyon Script', Helvetica, Arial, sans-serif;
    font-size: 2rem;
    font-weight: normal;
    margin: 0.3em 0;
    color: ${BLUE};
  }

  p,
  li {
    font-size: 0.9rem;
  }
`
