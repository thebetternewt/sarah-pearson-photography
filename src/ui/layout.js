import styled from 'styled-components'

export const Section = styled.section`
  padding: 3rem 0;
  background-color: ${({ bgColor }) => bgColor};
`

export const Container = styled.div`
  width: 100%;
  max-width: ${({ maxWidth }) => (maxWidth || 960) + 'px'};
  margin: 0 auto;
  padding: 0 1rem;
`

export const GridRow = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin: 0 auto;
  max-width: ${({ width }) => `${width}px`};

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`

export const SimpleBorderDecorator = styled.div`
  position: absolute;
  border: ${({ color }) => `1px solid ${color || '#ccc'}`};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  ${({ xGap, yGap }) => {
    let styles = ''
    if (yGap) {
      styles += `
      top: -${yGap}px;
      height: calc(100% + ${2 * yGap}px);
      `
    }

    if (xGap) {
      styles += `
      left: -${xGap}px;
      width: calc(100% + ${2 * xGap}px);
      `
    }

    return styles
  }}

  @media screen and (max-width: 1000px) {
    ${({ hideMd }) => hideMd && `display: none;`}
  }
`
