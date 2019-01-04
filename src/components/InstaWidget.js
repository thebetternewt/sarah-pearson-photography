import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Instawidget = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 2rem 0;

  p {
    font-family: 'Lora', Helvetica, Arial, sans-serif;
    text-align: right;
    letter-spacing: 0.1em;
  }
  @media screen and (max-width: 800px) {
    align-items: center;
    flex-direction: column-reverse;

    p {
      margin-bottom: 0.7rem;
    }
  }
`

const InstaLinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
    justify-content: center;
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
          >
            <Img
              fixed={node.localFile.childImageSharp.fixed}
              style={{ margin: '0 5px', width: 120, height: 150 }}
            />
          </a>
        )
      })

      return (
        <Instawidget>
          <InstaLinkContainer>{images}</InstaLinkContainer>
          <p>Follow along on Instagram</p>
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
              fixed(width: 240, height: 300) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`
