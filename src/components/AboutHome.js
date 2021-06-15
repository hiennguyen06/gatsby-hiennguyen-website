import React from "react"
import styled from "styled-components"
import { Container, Flex, Section, BodyText } from "../styles/gobalStyles"

const AboutHomeStyles = styled.div`
  background: #92c9c0;
  height: calc(100vh - 71px);
  width: 100vw;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    max-width: 770px;
    text-align: center;
    p {
      font-weight: 400;
    }
    a {
      border-bottom: 1px solid #000;
      padding-bottom: 2px;
      margin-left: 4px;
    }
  }
`

const AboutHome = () => {
  return (
    <Section>
      <AboutHomeStyles>
        <Container>
          <Flex justifyCenter>
            <div>
              <BodyText>
                With a background in customer service, I put myself in the
                client's shoes throughout the entire design and development
                process. To collaborate on a project, please
                <span>
                  <a href="mailto:info@hiennguyen.com.au">get in touch.</a>
                </span>
              </BodyText>
            </div>
          </Flex>
        </Container>
      </AboutHomeStyles>
    </Section>
  )
}

export default AboutHome
