import styled from 'styled-components'

const PageHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
  color: #fff;
  overflow: hidden;
  flex-direction: column;

  h2 {
    font-family: 'Pinyon Script', Helvetica, Arial, sans-serif;
    font-size: 7rem;
    margin: 0;
    font-weight: normal;
    color: inherit;
    margin: -1rem 0 0.2em;
    text-align: center;
  }
  h3 {
    font-family: 'Pinyon Script', Helvetica, Arial, sans-serif;
    font-weight: normal;
    font-size: 3rem;
    color: inherit;
    margin: 0;
    text-align: center;
  }

  @media screen and (max-width: 800px) {
    h2 {
      font-size: 5rem;
    }
    h3 {
      font-size: 3rem;
    }
  }
`

export default PageHeader
