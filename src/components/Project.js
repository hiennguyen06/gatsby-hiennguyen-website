import React from "react"
import styled from "styled-components"
import { Heading } from "../styles/gobalStyles"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const SingleProjectStyles = styled.div`
  &:not(:last-child) {
    margin-bottom: 6rem;
    @media (max-width: 728px) {
      margin-bottom: 2rem;
    }
  }
  .overlay-container {
    position: relative;

    .project-overlay {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: absolute;
      padding: 2rem;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      color: #fff;
      background: #000;
      opacity: 0;
      transition: opacity 200ms linear;

      @media (max-width: 400px) {
        display: none;
      }

      &:hover {
        opacity: 1;
      }
      ul {
        margin-bottom: 3rem;
        @media (max-width: 568px) {
          margin-bottom: 2rem;

          li {
            @media (max-width: 568px) {
              font-size: 1.2rem;
            }
          }
        }
      }

      button {
        font-size: 1.2rem;
        font-weight: 700;
        text-transform: uppercase;
        color: #fff;
        text-decoration: none;
        border-bottom: 1px solid #fff;
        padding-bottom: 2px;
        transition: all 200ms linear;

        &:hover {
          color: #f1be36;
          border-bottom: 1px solid #f1be36;
        }
      }
    }
  }

  .project-detail {
    padding: 2rem 0;
  }
`

const Project = ({ project }) => {
  const image = getImage(project.image)

  return (
    <SingleProjectStyles>
      <div className="overlay-container">
        <GatsbyImage image={image} alt={project.name} />
        <a href={`${project.url}`} target="_blank" rel="noreferrer">
          <div className="project-overlay">
            <div>
              <Heading small>Responsibilities</Heading>
              <ul>
                {project.responsibilities.map((responsibility, index) => {
                  return <li key={index}>{responsibility}</li>
                })}
              </ul>
              <Heading small>Tech Stack</Heading>
              <ul>
                {project.techStack.map((stack, index) => {
                  return <li key={index}>{stack}</li>
                })}
              </ul>
            </div>
            <div>
              <button>Visit site</button>
            </div>
          </div>
        </a>
      </div>
      <div className="project-detail">
        <Heading small>{project.name}</Heading>
        <div>
          <p>{project.description}</p>
        </div>
      </div>
    </SingleProjectStyles>
  )
}

export default Project
