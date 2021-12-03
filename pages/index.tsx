import React from 'react'
import About from "../components/about/about.tsx";
import Contact from "../components/contact/contact.tsx";
import HomePage from "../components/home_page/home_page.tsx";
import Projects from "../components/projects/projects.tsx";
import TopNav from "../components/topnav/topnav.tsx";

import '../style/index.css'

export default function Home() {
  return (
    <div className="page">
      <title>Odilon Damasceno</title>
      <TopNav />
      <HomePage />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}
