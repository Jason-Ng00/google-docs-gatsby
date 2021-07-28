/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Header from "./Header/Header.js"
import Navbar from "./Navbar/Navbar.js"
import { motion } from "framer-motion"
import * as styles from "./layout.module.scss"
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Footer/Footer.js"

const Layout = ({ children }) => {


  return (
    <Container className={styles.layout}>
    <Header />
    <Navbar />
    <motion.main className={styles.contentContainer}
         initial={{ opacity: 0, x: -200 }}
         animate={{ opacity: 1, x: 0 }}
         exit={{ opacity: 0, x: 200 }}
         transition={{
           type: "spring",
           mass: 0.35,
           stiffness: 75,
           duration: 1.0
           }}>
      <Link
          to="/"
          sx={{
            color: "inherit",
            textDecoration: "none",
            fontSize: [1, 3, 4],
            textAlign: "center",
          }}
        >
          {"gatsby-source-google-docs"}
        </Link>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>

      </div>
      
      </motion.main>
      <Footer />
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
