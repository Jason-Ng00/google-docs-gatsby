import React from 'react'
import * as styles from './Header.module.scss'
import { Container } from 'react-bootstrap'
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"


export default function Header() {
  return (
    <Container className={styles.header}>

      <Link to="http://www.lib.nus.edu.sg/">
      <StaticImage
        src={"../../images/NUSL_logo.png"}
        alt="NUS LOGO"
        layout="fixed"
        position="0 0"
        objectFit="contain"
      />

      </Link>

      </Container>

  )
}
