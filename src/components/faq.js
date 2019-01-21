import React, { Component } from 'react'
import styled from 'styled-components'

import { GridRow } from './ui/layout'
import { GOLD } from './colors'

const FaqQuestionList = styled.ul`
  list-style: none;
  margin: 0;
  color: #fff;
  border-bottom: 3px solid ${GOLD};
  margin-bottom: 2rem;
  padding: 1rem 0;

  @media screen and (min-width: 800px) {
    border-right: 3px solid ${GOLD};
    border-bottom: 0;
    margin-bottom: 0;
    padding-right: 2rem;
  }
`

const Question = styled.li`
  transition: all 150ms ease-in-out;
  color: ${({ active }) => (active ? GOLD : '#fff')};

  &:hover,
  &:active {
    transform: scale(1.1) translateX(7%);
    cursor: pointer;

    @media screen and (min-width: 800px) {
      transform: scale(1.1) translateX(-30px);
    }
  }

  @media screen and (min-width: 800px) {
    text-align: right;
  }
`

const Answer = styled.div`
  color: #fff;

  @media screen and (min-width: 800px) {
    padding: 0 2rem;
  }
`

class Faq extends Component {
  state = {
    activeQuestionIndex: 0,
  }

  setActiveQuestion = index => this.setState({ activeQuestionIndex: index })

  render() {
    const { faq } = this.props
    const { activeQuestionIndex } = this.state

    return (
      <GridRow>
        <div>
          <FaqQuestionList>
            {faq.map(({ question }, index) => (
              <Question
                key={index}
                active={index === activeQuestionIndex}
                onClick={() => this.setActiveQuestion(index)}
              >
                {question}
              </Question>
            ))}
          </FaqQuestionList>
        </div>
        <Answer
          dangerouslySetInnerHTML={{
            __html: faq[activeQuestionIndex].answer.html,
          }}
        />
      </GridRow>
    )
  }
}

export default Faq
