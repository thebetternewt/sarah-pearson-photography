import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'
import { script } from '../ui/fonts'

const Instawidget = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;

  p {
    font-family: ${script};
    font-size: 2.5rem;
    text-align: center;
    line-height: 1em;
    margin: 0;
  }
  @media screen and (max-width: 800px) {
    align-items: center;
    flex-wrap: wrap;
    /* flex-direction: column-reverse; */

    p {
      /* margin-bottom: 0.7rem; */
    }
  }
`

const InstaLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;

  .smallImage {
    display: none;
  }

  @media screen and (max-width: 800px) {
    justify-content: center;

    .smallImage {
      display: block;
    }

    .largeImage {
      display: none;
    }
  }
`

export default () => (
  <StaticQuery query={INSTAGRAM_QUERY}>
    {data => {
      console.log('Inst data', data)

      const images = data.allInstaNode.edges.map(({ node }) => {
        return (
          <a
            key={node.id}
            href="https://www.instagram.com/sarahpearsonphoto/"
            target="_blank"
            rel="noreferrer noopener"
            className="largeImage"
          >
            <Img
              fixed={node.localFile.childImageSharp.fixed}
              style={{
                margin: '0 3px',
                width: 140,
                height: 140,
              }}
            />
          </a>
        )
      })

      const smallImages = data.allInstaNode.edges.map(({ node }) => {
        return (
          <a
            key={node.id}
            href="https://www.instagram.com/sarahpearsonphoto/"
            target="_blank"
            rel="noreferrer noopener"
            className="smallImage"
          >
            <Img
              fixed={node.localFile.childImageSharp.fixed}
              style={{
                margin: '0 3px',
                width: 110,
                height: 110,
                maxWidth: '100%',
              }}
            />
          </a>
        )
      })

      return (
        <Instawidget>
          <InstaLinkContainer>
            {images}
            {smallImages}
          </InstaLinkContainer>
        </Instawidget>
      )
    }}
  </StaticQuery>
)

const INSTAGRAM_QUERY = graphql`
  query InstagramQuery {
    allInstaNode(limit: 6) {
      edges {
        node {
          id
          localFile {
            childImageSharp {
              fixed(width: 400, height: 400) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`
