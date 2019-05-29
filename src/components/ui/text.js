import styled from 'styled-components'
import { playfair, script } from '../../ui/fonts'

export const H1 = styled.h1`
  ${playfair};
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: inherit;
  font-size: 4rem;
  text-align: center;
  margin: 0.5em 0 0.2em;
`

export const H2 = styled.h2`
  font-family: ${script};
  font-weight: normal;
  color: inherit;
  font-size: 3.5rem;
  text-align: center;
  margin: 0.5em 0 0.2em;
`

export const H3 = styled.h3`
  font-family: ${script};
  font-weight: normal;
  color: #9fbebc;
  font-size: 3rem;
  text-align: center;
  margin: 0.5em 0 0.2em;
`
