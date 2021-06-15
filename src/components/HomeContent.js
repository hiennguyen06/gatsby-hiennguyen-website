import React from "react"
import styled from "styled-components"
import {
  Heading,
  Container,
  Flex,
  Section,
  ButtonPrimary,
} from "../styles/gobalStyles"

const HomeStyles = styled.div`
  background: ${({ changeBg }) => (changeBg ? "#fff" : "#f1be36")};
  width: 100vw;
  height: 100vh;
  transition: all 0.5s ease;
  opacity: ${({ changeBg }) => (changeBg ? "0" : "1")};
`

const HomeAbout = styled.div`
  text-align: center;

  div {
    margin-top: 2rem;
  }
`

const HomeContent = ({ changeBg }) => {
  return (
    <Section>
      <HomeStyles changeBg={changeBg}>
        <Container>
          <Flex justifyCenter>
            <HomeAbout>
              <Heading large>
                Hi, I’m Hien. Melbourne-based Front End Developer.
              </Heading>
              <div>
                <a href="mailto:info@hiennguyen.com.au">
                  <ButtonPrimary>Let's collaborate</ButtonPrimary>
                </a>
              </div>
            </HomeAbout>
          </Flex>
        </Container>
      </HomeStyles>
    </Section>
  )
}

export default HomeContent
