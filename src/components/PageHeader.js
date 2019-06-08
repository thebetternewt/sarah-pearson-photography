import styled from 'styled-components'
import { script } from '../ui/fonts'

const PageHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  height: 480px;
  color: #fff;
  overflow: hidden;
  flex-direction: column;
  /* text-align: center; */

  h2 {
    font-family: ${script};
    font-size: 7rem;
    margin: 0;
    font-weight: normal;
    color: inherit;
    margin: -1rem 0 0.2em;
    text-align: center;
  }
  h3 {
    font-family: ${script};
    font-weight: normal;
    font-size: 3rem;
    color: inherit;
    margin: 0;
    text-align: center;
  }

  img {
    min-width: 100%;
    max-width: none;
  }

  @media screen and (max-width: 800px) {
    h2 {
      font-size: 5rem;
    }
    h3 {
      font-size: 3rem;
    }

    /* img {
      width: auto;
      height: 100%;
    } */
  }
`

export default PageHeader
