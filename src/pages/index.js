import * as React from "react"
import HeroBanner from "../components/HeroBanner"
import Menubar from "../components/Menubar"
import Tutoriallist from "../components/Tutoriallist"
import Filter from "../components/Filter"
import '../styles/global.css'


const IndexPage = () => {
  return (
    <>
      <Menubar />
      <HeroBanner />
      <Filter />
      <Tutoriallist />

    </>
  )
}

export default IndexPage
