import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import Layout from '../../components/layout'
import PageHeader from '../../components/PageHeader'
import SEO from '../../components/seo'
import { Button } from '../../components/ui/buttons'
import {
  Container,
  Section,
  SimpleBorderDecorator,
} from '../../components/ui/layout'
import { H1, H3 } from '../../components/ui/text'
import { buildImageObj } from '../../lib/helpers'
import { imageUrlFor } from '../../lib/image-url'
import { normal, script } from '../../ui/fonts'
import ExperienceSection from '../../components/Weddings/ExperienceSection'
import {
  FeaturedGalleriesCollection,
  FeaturedGalleryCard,
  FeaturedGalleryCardRow,
  FeaturedGalleryCardWrapper,
} from '../../components/FeaturedGalleriesCollection'

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
        {/* <img
          src={imageUrlFor(buildImageObj(mainImage))
            .width(2000)
            // .height(900)
            .fit('crop')
            .url()}
          alt={mainImage.alt}
        /> */}
        <Img
          fluid={mainImage.asset.fluid}
          alt={mainImage.alt}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            minHeight: '100%',
            width: '100%',
            // maxWidth: 1200,
            zIndex: -1,
            transform: `translate3d(-50%,-50%, 0)`,
          }}
        />
      </PageHeader>

      {/* Featured Galleries Section */}
      <Section>
        <Container>
          <h1
            style={{
              marginBottom: '0.8em',
              fontFamily: normal,
              fontSize: '5rem',
              fontWeight: 'normal',
              textAlign: 'center',
            }}
          >
            Weddings
          </h1>
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
      <ExperienceSection bgImage={data.sunset} />

      {/* Investment Section */}
      {/* <Section bgColor="#eee">
        <Container>
          <H3>Investment</H3>
        </Container>
      </Section> */}

      {/* FAQ Section */}
      {/* <Section bgColor={TEAL}>
        <Container>
          <H3 style={{ color: '#fff' }}>F.A.Q.</H3>
          <Faq faq={faq} />
        </Container>
      </Section> */}
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
      {/* <Contact /> */}
    </Layout>
  )
}

export default Weddings

export const query = graphql`
  query WeddingsPageQuery {
    sunset: file(name: { eq: "sunset" }) {
      id
      name
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

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
          fluid {
            ...GatsbySanityImageFluid
          }
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
