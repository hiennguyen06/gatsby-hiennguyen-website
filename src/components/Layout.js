import React, { useState } from "react"
import { createGlobalStyle } from "styled-components"
import "normalize.css"

import Header from "../components/Header"
import Info from "../components/Info"
import Footer from "../components/Footer"

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');


    * {
        text-decoration: none;
        margin: 0;
        padding: 0;
    }
    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }
    a {
      color: #000;
      text-decoration: none;
    }
    li {
      list-style: none;
    }
    html {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        font-size: 62.5%;
    }
    body {
        font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        overscroll-behavior: none;
        overflow-x: hidden;
        background-size: cover;
        background-repeat: no-repeat; 
        font-weight: 300;
        color: #000;
        font-size: 1.6rem;
        line-height: 1.45;

        @media (max-width: 768px) {
          font-size: 1.6rem;
        }
    }
    h1,h2,h3,h4,h5,h6,p {
        margin: 0;
        padding: 0;
    }

    button {
      background: transparent;
      border: none;
      outline: none;
      cursor: pointer;
    }

    .SectionBackground {
      background: red;
      color: #fff;
      width: 100vw;
      height: 200vh;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.5s ease;
    }

    .active-bg {
      background: #000;
      color: blue;
    }
`

const Layout = ({ children }) => {
  const [showInfo, setShowInfo] = useState(false)

  const handleShowInfo = () => {
    setShowInfo(!showInfo)
  }

  return (
    <>
      <GlobalStyle />
      <Header handleShowInfo={handleShowInfo} showInfo={showInfo} />
      <Info handleShowInfo={handleShowInfo} showInfo={showInfo} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
