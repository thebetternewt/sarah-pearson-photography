import React from 'react'
import styled from 'styled-components'

import { GridRow } from '../ui/layout'
import { GOLD } from '../ui/colors'
import { normal } from '../ui/fonts'

const Form = styled.form`
  input,
  label,
  select,
  textarea {
    display: block;
    width: 100%;
  }

  label {
    margin-bottom: 0.5em;
  }

  input,
  select,
  textarea {
    margin-bottom: 15px;
    border: 1px solid ${GOLD};
    padding: 3px;
  }

  button[type='submit'] {
    align-self: flex-end;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${GOLD};
    background-color: ${GOLD};
    height: 3rem;
    width: 200px;
    font-family: ${normal};
    text-decoration: none;
    color: #fff;
    font-size: 1.2rem;
    letter-spacing: 0.1em;
    transition: all 150ms ease-out;

    &:hover {
      background-color: #fff;
      color: #000;
      cursor: pointer;
    }
  }
`
const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;

  @media screen and (max-width: 800px) {
    padding: 0;
  }
`

export default () => (
  <Form>
    <GridRow style={{ gridGap: '2rem' }}>
      <FormSection>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" />
        <label htmlFor="interest">Interested in</label>
        <select name="interest">
          <option value="Child, Senior, & Family Session">
            Child, Senior, & Family Session
          </option>
          <option value="Engagement & Wedding Packages">
            Engagement & Wedding Packages
          </option>
          <option value="Maternity, Birth & Newborn Session">
            Maternity, Birth & Newborn Session
          </option>
          <option value="Commercial Photography">Commercial Photography</option>
          <option value="Other">Other</option>
        </select>
      </FormSection>
      <FormSection>
        <label htmlFor="message">Message</label>
        <textarea name="message" rows="5" />
        <button type="submit">Send Message</button>
      </FormSection>
    </GridRow>
  </Form>
)
