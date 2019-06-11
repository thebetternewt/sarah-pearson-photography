import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import BlockContent from '@sanity/block-content-to-react'

import Layout from '../components/layout'
import PageHeader from '../components/PageHeader'
import { Section, Container } from '../ui/layout'
import { FaTags, FaChevronRight } from 'react-icons/fa'
import { BLUE } from '../ui/colors'
import { normal, script, display } from '../ui/fonts'
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import ShadowBox from '../components/ShadowBox'

const GalleryPost = ({ data }) => {
  const [selectedImage, setSelectedImage] = useState()

  console.log('selectedImage:', selectedImage)

  console.log('post data:', data)
  const post = data.sanityPost

  return (
    <Layout>
      <PageHeader>
        {/* <Img
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
        /> */}
        {/* <h2>{post.data.title.text}</h2>
          <h3>{post.data.subtitle.text}</h3> */}
        <img
          src={imageUrlFor(buildImageObj(post.mainImage))
            .width(1600)
            .height(400)
            .fit('crop')
            .url()}
          alt={post.mainImage.alt}
        />
      </PageHeader>
      <Section>
        <Container>
          <Post>
            <div className="detail">
              <Breadcrumbs>
                Blog <FaChevronRight size={10} /> {post.category.title}
              </Breadcrumbs>
              {/* <Tags>
                <FaTags size="28" color="#aaa" />
                <ul>
                  {post.tags.map(tag => (
                    <li key={tag}>
                      <span>{tag}</span>
                    </li>
                  ))}
                </ul>
              </Tags> */}
            </div>
            <div className="heading">
              <h1>{post.title}</h1>
              {/* <h2>{post.data.subtitle.text}</h2> */}
            </div>

            <div className="content">
              <BlockContent blocks={post._rawBody} />
            </div>
            <Gallery>
              {post.gallery.images.map(({ asset }) => (
                <div
                  key={asset._id}
                  className="image-container"
                  onClick={() => setSelectedImage(asset)}
                >
                  <Img
                    alt={asset.caption}
                    fluid={asset.fluid}
                    style={{ height: '100%' }}
                  />
                </div>
              ))}
            </Gallery>
            {selectedImage && (
              <ShadowBox
                image={selectedImage}
                close={() => setSelectedImage(null)}
              />
            )}
          </Post>
        </Container>
      </Section>
    </Layout>
  )
}

export const query = graphql`
  query GalleryPost($id: String!) {
    sanityPost(id: { eq: $id }) {
      id
      title
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
          url
        }
        alt
      }
      category {
        id
        title
      }
      _rawBody
      gallery {
        title
        description
        images {
          caption
          asset {
            _id
            fluid(maxWidth: 1200) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`

export default GalleryPost

const Post = styled.div`
  .heading {
    text-align: center;

    h1 {
      font-family: ${display};
      text-transform: uppercase;
      font-weight: normal;
      margin: 3rem 0 0.3em;
      font-size: 3rem;
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
  font-family: ${display};
  /* color: ${BLUE}; */
  opacity: 0.6;
  margin: 0;
  text-transform: uppercase;

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

  .image-container {
    cursor: pointer;
  }

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
