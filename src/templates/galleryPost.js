import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../components/layout'
import PageHeader from '../components/PageHeader'
import { Section, Container } from '../components/ui/layout'
import { BLUE } from '../components/colors'
import { FaTags } from 'react-icons/fa'

const PostDetails = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`

const Breadcrumbs = styled.p`
  font-family: 'Lora', 'Times New Roman', Times, serif;
  color: ${BLUE};
  font-size: 1.8rem;
  margin: 0;

  span {
    padding: 10px;
  }

  @media screen and (max-width: 800px) {
    font-size: 1.2rem;
    margin-bottom: 0.8em;
  }
`

const Tags = styled.div`
  display: flex;
  ul {
    list-style: none;
    margin: 0;
    display: flex;
    li {
      margin: 0;
      span {
        display: block;
        background: #ddd;
        padding: 3px 8px;
        border-radius: 3px;
        margin: 0 5px;
      }
    }
  }
`

const PostContent = styled.div`
  margin: 3rem 0;
`

const Gallery = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-auto-rows: minmax(250px, 1fr);
  grid-template-columns: 1fr;

  @media screen and (min-width: 800px) {
    grid-template-columns: repeat(2, 1fr);

    & > * {
      &:first-child {
        grid-column: 1/2;
        grid-row: 1/3;
      }
      &:nth-child(2) {
        grid-column: 2/3;
        grid-row: 1/2;
      }
      &:nth-child(3) {
        grid-column: 2/3;
        grid-row: 2/4;
      }
      &:nth-child(4) {
        grid-column: 1/2;
        grid-row: 3/4;
      }
    }
  }
`

export default class galleryPost extends Component {
  render() {
    console.log(this.props)

    const post = this.props.data.prismicGalleryPost

    return (
      <Layout>
        <PageHeader>
          <Img
            fluid={post.data.featured_image.localFile.childImageSharp.fluid}
            alt={post.data.featured_image.alt}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              minHeight: '100%',
              minWidth: '100%',
              zIndex: -1,
            }}
          />
          <h2>{post.data.title.text}</h2>
          <h3>{post.data.subtitle.text}</h3>
        </PageHeader>
        <Section>
          <Container>
            <PostDetails>
              <Breadcrumbs>
                Blog<span>/</span>
                {post.data.category}
              </Breadcrumbs>
              <Tags>
                <FaTags size="28" color="#aaa" />
                <ul>
                  {post.tags.map(tag => (
                    <li key={tag}>
                      <span>{tag}</span>
                    </li>
                  ))}
                </ul>
              </Tags>
            </PostDetails>
            <PostContent
              dangerouslySetInnerHTML={{ __html: post.data.body.html }}
            />
            <Gallery>
              {post.data.gallery.map(({ image: { alt, localFile } }) => (
                <Img
                  key={localFile.id}
                  alt={alt}
                  fluid={localFile.childImageSharp.fluid}
                />
              ))}
            </Gallery>
          </Container>
        </Section>
      </Layout>
    )
  }
}

export const query = graphql`
  query GalleryPost($id: String!) {
    prismicGalleryPost(id: { eq: $id }) {
      type
      id
      uid
      tags
      first_publication_date
      data {
        category
        title {
          text
        }
        subtitle {
          text
        }
        body {
          html
        }
        featured_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
        }

        gallery {
          image {
            localFile {
              id
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
        }
      }
    }
  }
`
