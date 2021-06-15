import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Container, Section } from "../styles/gobalStyles"
import Project from "./Project"

export const query = graphql`
  {
    allContentfulProjects {
      nodes {
        id
        name
        url
        responsibilities
        techStack
        collaborators
        description
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const Projects = () => {
  const data = useStaticQuery(query)
  const projects = data.allContentfulProjects.nodes

  return (
    <Section largePadding>
      <Container nonFluid>
        {projects.map(project => {
          return <Project project={project} key={project.id} />
        })}
      </Container>
    </Section>
  )
}

export default Projects
