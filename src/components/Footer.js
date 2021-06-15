import React from "react"

import styled from "styled-components"
import { Section } from "../styles/gobalStyles"

const FooterStyles = styled.div`
  background: #92c9c0;
  font-size: 1.2rem;
  font-weight: 300;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column-reverse;

    div {
      p {
        text-align: center;
      }
    }
  }

  ul {
    display: flex;
    align-items: center;
    height: 100%;
    @media (max-width: 728px) {
      margin-bottom: 2rem;
    }
    li {
      font-size: 2.2rem;
      font-weight: 400;
      @media (max-width: 768px) {
        font-size: 1.6rem;
      }
      &:not(:last-child) {
        margin-right: 2rem;
      }
    }
  }
`

const Footer = () => {
  return (
    <Section>
      <FooterStyles>
        <div>
          <p>Design & development by Hien Nguyen</p>
          <p>Copyright © {new Date().getFullYear()} Hien Nguyen.</p>
        </div>
        <div>
          <ul>
            <li>
              <a
                href="mailto:info@hiennguyen.com.au"
                target="_blank"
                rel="noreferrer"
              >
                Email
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/hien-nguyen06/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/hien-nguyen06/"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </FooterStyles>
    </Section>
  )
}

export default Footer
