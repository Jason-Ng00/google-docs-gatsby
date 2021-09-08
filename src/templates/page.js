import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Container } from 'react-bootstrap'


const pageFromGDocs = ({
  data: {
    page: {
      name,
      cover,
      childMarkdownRemark: { html },
      description,
    },
  },
}) => {
  const pageTitle = name.split("_").pop();
  return (
    <Layout>
      <Seo title={pageTitle} description={description} />
      <Container>
        <h1>{pageTitle}</h1>
        {/*
        To add a cover:
        Add an image in your Google Doc first page header
        https://support.google.com/docs/answer/86629
      */}
        {cover && (
          <GatsbyImage
            image={cover.image.childImageSharp.gatsbyImageData}
            alt={cover.alt}
            title={cover.title}
          />
        )}
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Container>
    </Layout>
  );
};

export const pageQuery = graphql`
  query Page($path: String!) {
    page: googleDocs(slug: { eq: $path }) {
      name
      cover {
        alt
        title
        image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
      childMarkdownRemark {
        html
      }
      description
    }
  }
`;

export default pageFromGDocs;