import React from 'react';
import Logo from "../logo.tsx";
import "./topnav.css"

export default function TopNav() {

  function openDrawer(e: any) {
    const document = e.view.document;

    if (e.view.innerWidth <= 1000 && document.getElementById("drawer").style.width != "75%") {
      document.getElementById("drawer").style.width = "75%";
    } else {
      document.getElementById("drawer").style.width = "0px";
    }
  }

  return <header className="page-header">
    <Logo />
    <div className="drawer" id="drawer">
      <nav className="nav__itens">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </nav>
    </div>
    <a className="icon" onClick={openDrawer}>
      <i className="fa fa-bars"></i>
    </a>
  </header>
}