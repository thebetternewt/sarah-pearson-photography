import { graphql, Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { TEAL } from '../../components/colors'
import Contact from '../../components/Contact'
import Faq from '../../components/faq'
import Layout from '../../components/layout'
import PageHeader from '../../components/PageHeader'
import SEO from '../../components/seo'
import { Button } from '../../components/ui/buttons'
import {
  Container,
  Section,
  SimpleBorderDecorator,
} from '../../components/ui/layout'
import { H3 } from '../../components/ui/text'
import { buildImageObj } from '../../lib/helpers'
import { imageUrlFor } from '../../lib/image-url'

const FeaturedGalleriesCollection = styled.div`
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
        height: 200px;
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

const Weddings = ({ data }) => {
  console.log(data.sanityWeddingsPage)

  const { featuredGalleries } = data.sanityWeddingsPage

  const headerImage = data.prismicWeddingsPage.data.featured_image
  const featuredGalleriesCards = data.prismicWeddingsPage.data.featured_galleries
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

  const { faq } = data.prismicWeddingsPage.data

  const { mainImage } = data.sanityWeddingsPage

  return (
    <Layout>
      <SEO title="Weddings" />
      <PageHeader>
        <img
          src={imageUrlFor(buildImageObj(mainImage))
            .width(2000)
            // .height(900)
            .fit('crop')
            .url()}
          alt={mainImage.alt}
        />
      </PageHeader>

      {/* Featured Galleries Section */}
      <Section>
        <Container>
          <H3>Featured</H3>
          {/* <FeaturedGalleryCardRow>
            {featuredGalleriesCards}
          </FeaturedGalleryCardRow> */}
          <FeaturedGalleriesCollection>
            <div className="col">
              <Link to="/weddings">
                <div className="gallery-card">
                  <div className="overlay">
                    <div className="number">01.</div>
                    <div className="separator" />
                    <div className="title">{featuredGalleries[0].title}</div>
                  </div>
                  <img
                    src={imageUrlFor(
                      buildImageObj(featuredGalleries[0].featuredImage)
                    )
                      .height(900)
                      .fit('crop')
                      .url()}
                    alt={featuredGalleries[0].alt}
                  />
                </div>
              </Link>
            </div>
            <div className="col">
              <Link to="/weddings">
                <div className="gallery-card half">
                  <div className="overlay">
                    <div className="number">02.</div>
                    <div className="separator" />
                    <div className="title">{featuredGalleries[0].title}</div>
                  </div>
                  <img
                    src={imageUrlFor(buildImageObj(mainImage))
                      .height(500)
                      .fit('crop')
                      .url()}
                    alt={mainImage.alt}
                  />
                </div>
              </Link>
              <Link to="/weddings">
                <div className="gallery-card half">
                  <div className="overlay">
                    <div className="number">03.</div>
                    <div className="separator" />
                    <div className="title">{featuredGalleries[0].title}</div>
                  </div>
                  <img
                    src={imageUrlFor(buildImageObj(mainImage))
                      .height(500)
                      .fit('crop')
                      .url()}
                    alt={mainImage.alt}
                  />
                </div>
              </Link>
            </div>
            <div className="col">
              <Link to="/weddings">
                <div className="gallery-card">
                  <div className="overlay">
                    <div className="number">04.</div>
                    <div className="separator" />
                    <div className="title">{featuredGalleries[0].title}</div>
                  </div>
                  <img
                    src={imageUrlFor(buildImageObj(mainImage))
                      .height(900)
                      .fit('crop')
                      .url()}
                    alt={mainImage.alt}
                  />
                </div>
              </Link>
            </div>
          </FeaturedGalleriesCollection>
        </Container>
      </Section>

      {/* Experience Section */}
      <Section>
        <Container>
          <div
            className="slider-placeholder"
            style={{ position: 'relative', margin: '1rem' }}
          >
            <H3>The Wedding Experience</H3>
            {/* <WeddingExperienceSlider /> */}

            <SimpleBorderDecorator xGap={25} yGap={23} />
            <SimpleBorderDecorator xGap={18} yGap={30} />
          </div>
        </Container>
      </Section>

      {/* Investment Section */}
      <Section bgColor="#eee">
        <Container>
          <H3>Investment</H3>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section bgColor={TEAL}>
        <Container>
          <H3 style={{ color: '#fff' }}>F.A.Q.</H3>
          <Faq faq={faq} />
        </Container>
      </Section>
      {/* Videography Section */}
      <Section>
        <Container>
          <p
            style={{
              fontSize: '2rem',
              margin: '1rem auto',
              textAlign: 'center',
            }}
          >
            Interested in videography?
          </p>
          <Button className="dark" style={{ margin: '1rem auto' }}>
            Let us know!
          </Button>
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
    sanityWeddingsPage {
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
      featuredGalleries {
        title
        featuredImage {
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
      }
    }
  }
`
