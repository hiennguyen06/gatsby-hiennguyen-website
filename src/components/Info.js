import React from "react"
import styled from "styled-components"
import { BodyText, Container, Heading } from "../styles/gobalStyles"

const InfoStyles = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
  width: 100vw;
  height: 100vh;
  background: #000;
  color: #fff;
  opacity: ${({ showInfo }) => (showInfo ? "1" : "0")};
  pointer-events: ${({ showInfo }) => (showInfo ? "auto" : "none")};
  transition: all 0.3s ease;
`

const InfoAbout = styled.div`
  position: relative;
  top: 0;
  bottom: 0;
  padding: 20px 0;
  width: 80%;
  max-width: 72rem;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 6rem;

  @media (max-width: 768px) {
    margin-bottom: 0rem;
  }

  span {
    visibility: hidden;
    font-weight: 400;
  }
`

const InfoBio = styled.div`
  display: grid;
  grid-gap: 6rem 0;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  color: #fff;
  font-weight: 300;
  padding-bottom: 6rem;

  ul {
    li {
      a {
        color: #fff;
      }
    }
  }

  @media (max-width: 768px) {
    grid-gap: 2rem 0;
  }
`

const Info = ({ showInfo }) => {
  return (
    <InfoStyles showInfo={showInfo}>
      <Container>
        <InfoAbout>
          <BodyText>
            <span>Hien Nguyen</span> is a front end web developer based in
            Melbourne who focuses on designing and building websites that people
            will really enjoy. He is currently freelancing and working with
            Stark Communications.
          </BodyText>
        </InfoAbout>
        <InfoBio>
          <div className="contact">
            <Heading small>Contact</Heading>
            <ul>
              <li>
                <a
                  href="mailto:info@hiennguyen.com.au"
                  target="_blank"
                  rel="noreferrer"
                >
                  info@hiennguyen.com.au
                </a>
              </li>
              <li>
                <a href="tel:+61466363548" target="_blank" rel="noreferrer">
                  +61 466 363 548
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/hiennguyen06"
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
          <div className="services">
            <Heading small>Services</Heading>
            <ul>
              <li>Front End Development</li>
              <li>Webflow Development</li>
              <li>WordPress Development</li>
              <li>Email Development</li>
              <li>Web Design</li>
              <li>Copywriting</li>
              <li>Web Hosting & Domain</li>
            </ul>
          </div>
          <div className="skills">
            <Heading small>Skills</Heading>
            <ul>
              <li>React JS</li>
              <li>Gatsby JS</li>
              <li>Webflow</li>
              <li>WordPress</li>
              <li>Figma</li>
              <li>Google Analytics</li>
              <li>Good Ad Manager</li>
            </ul>
          </div>
        </InfoBio>
      </Container>
    </InfoStyles>
  )
}

export default Info
