import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"
import ProductCard from "./ProductCard"
import Navbar from "./Navbar"
import '../styles/global.css'

const Layout = ({ isHomePage, children }) => {
  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)

  return (
    <div className="layout">
       <Navbar/>
    {/* <div className="global-wrapper" data-is-root-path={isHomePage}> */}
      {/* <Navbar/> */}
      {/* <header className="global-header">
        {isHomePage ? (
          <h1 className="main-heading">
            <Link to="/">{parse(title)}</Link>
          </h1>
        ) : (
          <Link className="header-link-home" to="/">
            {title}
          </Link>
        )}
      </header> */}

      {/* <Navbar/> */}
      <ProductCard/>
      <main>{children}</main>

      <footer className="footer">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
        {` `}
        , <a href="https://wordpress.org/">WordPress</a>{` `}by Sim. 
        My Portfolio: <a href="https://graceful-fenglisu-60ca4c.netlify.app/">Illuminatingmedia</a>
      </footer>
    </div>
    // </div>
   
  )
}

export default Layout
