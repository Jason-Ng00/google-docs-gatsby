import {Link, graphql} from "gatsby"
import React from "react"
import { GatsbyImage } from "gatsby-plugin-image";
import { Jumbotron } from 'react-bootstrap'

const Page = () => ({
  data: {
    page: {
      name,
      cover,
      childMarkdownRemark: {html},
    },
  },
}) => {
  return (
    <>
      <Link to="/">
        <button>{"Home"}</button>
      </Link>
      <h1>{name}</h1>
      {/*
        To add a cover:
        Add an image in your Google Doc first page header
        https://support.google.com/docs/answer/86629
      */}
      {cover && 
        <Jumbotron style={{ marginTop: 0, marginBottom: 20,padding:0 }}>
      <GatsbyImage
            image={cover.image.childImageSharp.gatsbyImageData}
            alt={cover.alt}
            title={cover.title}
          />
        </Jumbotron>
      }
      <div dangerouslySetInnerHTML={{__html: html}} />
    </>
  )
}

export const pageQuery = graphql`
  query Page($path: String!) {
    page: googleDocs(slug: {eq: $path}) {
      name
      cover {
        title
        alt
        image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
      childMarkdownRemark {
        html
      }
    }
  }
`

export default Page