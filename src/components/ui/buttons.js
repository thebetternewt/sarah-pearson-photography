import styled from 'styled-components'

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #fff;
  height: 3rem;
  width: 200px;
  font-family: 'Lora', Helvetica, Arial, sans-serif;
  text-decoration: none;
  color: inherit;
  font-size: 1.2rem;
  letter-spacing: 0.1em;
  transition: all 150ms ease-out;

  &:hover {
    background-color: #fff;
    color: #000;
    opacity: 0.9;
    cursor: pointer;
  }

  &.dark {
    border-color: #000;

    &:hover {
      background-color: #000;
      color: #fff;
    }
  }
`
