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
`

const InstaLinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`

export default () => (
  <StaticQuery query={INSTAGRAM_QUERY}>
    {data => {
      console.log('Inst data', data)

      const images = data.allInstaNode.edges.map(({ node }) => {
        return (
          <a
            href="https://www.instagram.com/sarahpearsonphoto/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Img
              key={node.id}
              fixed={node.localFile.childImageSharp.fixed}
              style={{ margin: '0 5px' }}
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
    allInstaNode(limit: 7) {
      edges {
        node {
          id
          localFile {
            childImageSharp {
              fixed(width: 120, height: 150) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`
