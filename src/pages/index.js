import React, { useState, useEffect } from "react"

import Layout from "../components/Layout"
import HomeContent from "../components/HomeContent"
import Projects from "../components/Projects"
import AboutHome from "../components/AboutHome"
import SEO from "../components/SEO"

const Home = () => {
  const [changeBg, setChangeBg] = useState(false)

  const handleChangeBg = e => {
    if (window.scrollY > window.innerHeight / 3) {
      setChangeBg(true)
    } else {
      setChangeBg(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleChangeBg)
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <HomeContent changeBg={changeBg} />
      <Projects />
      <AboutHome />
    </Layout>
  )
}

export default Home
