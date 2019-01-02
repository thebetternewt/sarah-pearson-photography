import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import { Section, Container, GridRow } from '../components/ui/layout'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Slider from '../components/homepageSlider'

import { GOLD } from '../components/colors'
import { H3 } from '../components/ui/text'

import msMagazineLogo from '../images/MississippiMagazineLogo.png'
import watercolor from '../images/blue-watercolor.jpg'
import ContactForm from '../components/ContactForm'
import InstaWidget from '../components/InstaWidget'
import Nav from '../components/Nav'

const WelcomeMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-family: 'Lora', Helvetica, Arial, sans-serif;
  padding: 0 1rem;

  p {
    text-align: center;
  }
`

const CategoryLinkCard = styled.div`
  display: block;
  position: relative;
  height: 500px;
  color: ${({ dark }) => (dark ? '#000' : '#fff')};
  background-color: ${({ dark }) => (dark ? '#fff' : '#000')};
  overflow: hidden;
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
  font-family: 'Playfair Display', Helvetica, Arial, sans-serif;
  font-size: 3rem;
  font-weight: normal;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`

const CategoryLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${({ dark }) => (dark ? '#000' : '#fff')};
  height: 3rem;
  width: 200px;
  font-family: 'Lora', Helvetica, Arial, sans-serif;
  text-decoration: none;
  color: inherit;
  font-size: 1.2rem;
  letter-spacing: 0.1em;
  transition: all 150ms ease-out;

  &:hover {
    background-color: ${({ dark }) => (dark ? '#000' : '#fff')};
    color: ${({ dark }) => (dark ? '#fff' : '#000')};
    opacity: 0.85;
    cursor: pointer;
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

const ContactSection = styled.section`
  background-image: url(${watercolor});
  background-size: cover;
  padding: 1rem 0;
`

const IndexPage = props => {
  console.log(props)
  const slides =
    props.data.prismicHomepage.data.home_slider.document[0].data.slides
  const familyPortrait =
    props.data.prismicHomepage.data.family_portrait.localFile.childImageSharp
      .fluid
  const portraitsBgImage =
    props.data.prismicHomepage.data.portraits_link_background_image.localFile
      .childImageSharp.fluid
  const weddingsBgImage =
    props.data.prismicHomepage.data.weddings_link_background_image.localFile
      .childImageSharp.fluid
  const welcomeMessage = props.data.prismicHomepage.data.welcome_message.html
  return (
    <Layout>
      <Slider slides={slides} />
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      {/* Welcome Section */}
      <Section>
        <Container>
          <GridRow>
            <div style={{ padding: '0 15px' }}>
              <Img
                fluid={familyPortrait}
                style={{
                  border: `2px solid ${GOLD}`,
                  margin: '0 auto',
                }}
              />
            </div>
            <div>
              <H3>Welcome</H3>
              <WelcomeMessage
                dangerouslySetInnerHTML={{ __html: welcomeMessage }}
              />
            </div>
          </GridRow>
        </Container>
      </Section>

      {/* Categories Section */}
      <section>
        <GridRow>
          <CategoryLinkCard dark>
            <Img
              fluid={portraitsBgImage}
              style={{ opacity: 0.6, minHeight: '100%', minWidth: '100%' }}
            />
            <CategoryCardContent>
              <CategoryCardTitle>Portraits</CategoryCardTitle>
              <CategoryLink to="/portraits" dark>
                Gallery
              </CategoryLink>
            </CategoryCardContent>
          </CategoryLinkCard>
          <CategoryLinkCard>
            <Img
              fluid={weddingsBgImage}
              style={{ opacity: 0.6, minHeight: '100%', minWidth: '100%' }}
            />
            <CategoryCardContent>
              <CategoryCardTitle>Weddings</CategoryCardTitle>
              <CategoryLink to="/weddings">Gallery</CategoryLink>
            </CategoryCardContent>
          </CategoryLinkCard>
        </GridRow>
      </section>

      {/* As Seen In Section */}
      <Section>
        <H3>As Seen In</H3>
        <LogosRow>
          <img src={msMagazineLogo} alt="Mississippi Magazine" />
        </LogosRow>
      </Section>

      {/* Contact Section */}
      <ContactSection>
        <Container>
          <H3>Contact</H3>
          <ContactForm />
          <InstaWidget />
          <Nav />
          <footer>
            <p style={{ textAlign: 'center', margin: '2rem 0 1rem' }}>
              Copyright 2019 Sarah Pearson Photography
            </p>
            <p style={{ textAlign: 'center', margin: '1rem 0' }}>
              Built by Relate Media & Design
            </p>
          </footer>
        </Container>
      </ContactSection>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query HomepageQuery {
    prismicHomepage {
      id
      data {
        home_slider {
          id
          document {
            data {
              slides {
                image {
                  alt
                  url
                  localFile {
                    id
                    childImageSharp {
                      fluid(maxWidth: 2000) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
          }
        }
        family_portrait {
          localFile {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        welcome_message {
          html
        }
        portraits_link_background_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        weddings_link_background_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
