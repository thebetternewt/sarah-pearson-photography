import React, { useState } from 'react'
import styled from 'styled-components'

const Faq = ({ faq }) => {
  const [questionIndex, setQuestionIndex] = useState(0)

  return (
    <FaqWrapper>
      <div>
        <FaqQuestionList>
          {faq.map(({ question }, index) => (
            <Question
              key={index}
              active={index === questionIndex}
              onClick={() => setQuestionIndex(index)}
            >
              {question}
            </Question>
          ))}
        </FaqQuestionList>
      </div>
      <Answer
        dangerouslySetInnerHTML={{
          __html: faq[questionIndex].answer.html,
        }}
      />
    </FaqWrapper>
  )
}

const FaqWrapper = styled.div`
  display: flex;
`

const FaqQuestionList = styled.ul`
  flex-basis: 30%;
  font-size: 1.3rem;
  list-style: none;
  margin: 0;
  color: #fff;
  margin-bottom: 2rem;
  margin-right: 2rem;
  padding: 1rem 0;
`

const Question = styled.li`
  transition: all 150ms ease-in-out;
  cursor: pointer;
`

const Answer = styled.div`
  padding: 1rem 0;
  font-size: 1.3rem;
  color: #fff;
`

export default Faq
