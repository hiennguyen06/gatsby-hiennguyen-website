import React from "react"
import { Container, Section, Flex } from "../styles/gobalStyles"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const NotFound = () => {
  return (
    <Layout>
      <SEO title="404" />
      <Section>
        <Flex>
          <Container>Sorry, nothing to see here</Container>
        </Flex>
      </Section>
    </Layout>
  )
}

export default NotFound
