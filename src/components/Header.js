import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Container, Flex } from "../styles/gobalStyles"

const HeaderStyles = styled.header`
  background: transparent;
  padding: 2rem 0;
  position: fixed;
  width: 100%;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
`

const Logo = styled.h1`
  font-size: 2.2rem;
  font-weight: 400;
  a {
    color: ${({ showInfo }) => (showInfo ? "#fff" : "#000")};
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`

const Menu = styled.div`
  font-size: 2.2rem;
  button {
    color: ${({ showInfo }) => (showInfo ? "#fff" : "#000")};
  }
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`

const Header = ({ handleShowInfo, showInfo }) => {
  return (
    <HeaderStyles>
      <Container>
        <Flex spaceBetween>
          <Logo showInfo={showInfo}>
            <Link to="/">Hien Nguyen</Link>
          </Logo>
          <Menu showInfo={showInfo}>
            <button onClick={handleShowInfo}>{`${
              showInfo ? "Close" : "Info"
            }`}</button>
          </Menu>
        </Flex>
      </Container>
    </HeaderStyles>
  )
}

export default Header
