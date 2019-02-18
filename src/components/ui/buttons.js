import styled from 'styled-components'

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1.5px solid #fff;
  height: 3rem;
  width: auto;
  font-family: 'Lora', Helvetica, Arial, sans-serif;
  text-decoration: none;
  color: #000;
  font-size: 1.2rem;
  letter-spacing: 0.1em;
  transition: all 150ms ease-out;
  text-decoration: none;
  padding: 0 1rem;
  ${({ align }) => {
    console.log(align)
    switch (align) {
      case 'center':
        return 'margin: 0 auto;'
      case 'right':
        return 'margin-left: auto;'
      default:
        return ''
    }
  }}

  &:hover {
    background-color: #fff;
    color: #000;
    opacity: 0.9;
    cursor: pointer;
  }

  &.dark {
    color: #000;
    border-color: #000;

    &:hover {
      background-color: #000;
      color: #fff;
    }
  }

  &.light {
    color: #555;
    border-color: #555;

    &:hover {
      background-color: #555;
      color: #fff;
    }
  }

  &.color {
    color: #fff;
    background-color: #9fbebc;
    border-color: #9fbebc;

    &:hover {
      background-color: #fff;
      color: #555;
    }
  }
`
