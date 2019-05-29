import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../components/layout'
import PageHeader from '../components/PageHeader'
import { Section, Container } from '../components/ui/layout'
import { FaTags } from 'react-icons/fa'
import { BLUE } from '../ui/colors'
import { normal, script } from '../ui/fonts'

const galleryPost = ({ data }) => {
  const post = data.prismicGalleryPost

  return (
    <Layout>
      <PageHeader>
        <Img
          fluid={post.data.featured_image.localFile.childImageSharp.fluid}
          alt={post.data.featured_image.alt}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            minHeight: '100%',
            width: '100%',
            maxWidth: 1200,
            zIndex: -1,
            transform: `translate3d(-50%,-50%, 0)`,
          }}
        />
        {/* <h2>{post.data.title.text}</h2>
          <h3>{post.data.subtitle.text}</h3> */}
      </PageHeader>
      <Section>
        <Container>
          <Post>
            <div className="detail">
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
            </div>
            <div className="heading">
              <h1>{post.data.title.text}</h1>
              <h2>{post.data.subtitle.text}</h2>
            </div>

            <div
              className="content"
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
          </Post>
        </Container>
      </Section>
    </Layout>
  )
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

export default galleryPost

const Post = styled.div`
  .heading {
    text-align: center;

    h1 {
      font-family: ${normal};
      font-weight: normal;
      margin: 3rem 0 0.3em;
      font-size: 4rem;
    }
    h2 {
      font-family: ${script};
    }
  }

  .detail {
    flex-grow: 1;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 800px) {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }

  .content {
    margin: 3rem 0;
  }
`

const Breadcrumbs = styled.p`
  font-family: 'Lora', 'Times New Roman', Times, serif;
  /* color: ${BLUE}; */
  opacity: 0.6;
  font-size: 1.1rem;
  margin: 0;

  span {
    padding: 10px;
  }

  @media screen and (max-width: 800px) {
    font-size: 1rem;
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

  @media screen and (max-width: 800px) {
    font-size: 0.8rem;
    display: none;
  }
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
