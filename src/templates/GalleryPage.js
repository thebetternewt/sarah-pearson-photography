import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import BlockContent from '@sanity/block-content-to-react'

import Layout from '../components/layout'
import PageHeader from '../components/PageHeader'
import { Section, Container } from '../ui/layout'
import { FaTags } from 'react-icons/fa'
import { BLUE } from '../ui/colors'
import { normal, script } from '../ui/fonts'
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'

const GalleryPage = props => {
  console.log('gallery props:', props)
  const gallery = props.data.sanityGallery
  return (
    <Layout>
      <PageHeader>
        <img
          src={imageUrlFor(buildImageObj(gallery.featuredImage))
            .width(1600)
            .height(400)
            .fit('fillmax')
            .url()}
          alt={gallery.featuredImage.alt}
        />
      </PageHeader>
      <Section>
        <Container>
          <Post>
            {/* <div className="detail">
              <Breadcrumbs>
                Blog<span>/</span>
                {post.category.title}
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
            </div> */}
            <div className="heading">
              <h1>{gallery.title}</h1>
              {/* <h2>{post.data.subtitle.text}</h2> */}
            </div>

            <Gallery>
              {gallery.images.map(({ asset }) => (
                <Img key={asset._id} alt={asset.caption} fluid={asset.fluid} />
              ))}
            </Gallery>
          </Post>
        </Container>
      </Section>
    </Layout>
  )
}

export const query = graphql`
  query Gallery($id: String!) {
    sanityGallery(id: { eq: $id }) {
      id
      title
      description
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
          url
        }
        alt
      }
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
`

export default GalleryPage

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
