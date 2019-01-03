import styled from 'styled-components'

export const Section = styled.section`
  padding: 3rem 0;
  background-color: ${({ bgColor }) => bgColor};
`

export const Container = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
`
export const GridRow = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin: 0 auto;
  /* max-width: 1100px; */
`
