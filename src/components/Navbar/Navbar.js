import React, {useState } from 'react'
import * as styles from './Navbar.module.scss'
import { Container, Row, Col, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import {graphql, useStaticQuery} from "gatsby"
import {MDXRenderer} from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"

function HoverControlledDropdown(props) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <NavDropdown
            {...props}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            show={isHovered}
        />
    );
}

export default function NavBar({ menuItems }) {
    const data = useStaticQuery(graphql`
    query MenuQuery {
      menu: googleDocs(name: {eq: "Menu"}) {
        childMdx {
          body
        }
      }
      pagesPath: allGoogleDocs {
        edges {
          node {
            breadcrumb {
              name
              slug
            }
          }
        }
      }
    }
  `)


  return (
    <Container className={styles.navbar}>

      <Navbar expand="lg"
      >
      {/* <MDXProvider
      components={{
        // Map HTML element tag to React component
        // ul: ({props}) => (<HoverControlledDropdown className={styles.navItem} title={props}><li>{props}</li></HoverControlledDropdown>),
        li: NavDropdown.Item,
        // h5: props => <Container>{props}</Container>,
        ul: HoverControlledDropdown,

        p: NavDropdown.Item,
        // strong: 
      }}
    >
        <MDXRenderer>{data.menu.childMdx.body}</MDXRenderer>
        </MDXProvider> */}

     {data.pagesPath.edges.map((edge) => {
         if(edge.node.breadcrumb.length == 1) {
             return <Nav.Link className={styles.navItemHome} href={edge.node.breadcrumb[0].slug}>{edge.node.breadcrumb[0].name}</Nav.Link>
         } else {
             var rows=[];
             for( var i =1; i < edge.node.breadcrumb.length; i++) {
                rows.push(<NavDropdown.Item href={edge.node.breadcrumb[i].slug} target="_self">{edge.node.breadcrumb[i].name}</NavDropdown.Item>
)
             }
             return  <HoverControlledDropdown className={styles.navItem} title={edge.node.breadcrumb[0].name}>
                {rows}
             </HoverControlledDropdown>
            }
     })}

      </Navbar>

        <Container>
        <button
        onClick={() => {
         alert(JSON.stringify(data.pagesPath.edges[0].node))
        }} />
        <Navbar expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link className={styles.navItemHome} href="/">Home</Nav.Link>

                <HoverControlledDropdown className={styles.navItem} title="Education">
                    <NavDropdown.Item href="https://libportal.nus.edu.sg/frontend/ms/teachingandlearning/about" target="_self">Teaching &amp; Learning</NavDropdown.Item>
                    <NavDropdown.Item href="https://libportal.nus.edu.sg/frontend/ms/tel-imaginarium/about-tel-imaginarium" target="_self">TEL-Imaginarium</NavDropdown.Item>
                </HoverControlledDropdown>

                <HoverControlledDropdown className={styles.navItem} title="Research">
                <Row>
                <Col>
                    <h5>Skills &amp; Guides</h5>
                    <NavDropdown.Item href="http://libguides.nus.edu.sg/?sg=s" target="_blank">Subject Guides</NavDropdown.Item>
                    <NavDropdown.Item href="http://libguides.nus.edu.sg/" target="_blank">Resource Guides</NavDropdown.Item>
                    <NavDropdown.Item href="http://libguides.nus.edu.sg/citation" target="_blank">Citation Styles</NavDropdown.Item>
                    <NavDropdown.Item href="https://libportal.nus.edu.sg/frontend/ms/teachingandlearning/about" target="_self">Scholarly Communication</NavDropdown.Item>
                    <NavDropdown.Item href="http://libds.nus.edu.sg" target="_blank">Digital Scholarship</NavDropdown.Item>
                    <NavDropdown.Item href="https://libportal.nus.edu.sg/frontend/ms/researcher-unbound/about-ru" target="_self">Researcher Unbound</NavDropdown.Item>
                </Col>
                <Col>
                    <h5>Tools</h5>
                    <NavDropdown.Item href="http://libguides.nus.edu.sg/findfulltext/proxybookmark" target="_blank">Proxy Bookmarklet</NavDropdown.Item>
                    <NavDropdown.Item href="http://libguides.nus.edu.sg/citationmanagers" target="_blank">Citation Managers</NavDropdown.Item>
                    <NavDropdown.Item href="http://libguides.nus.edu.sg/findfulltext/findit" target="_blank">Find It! @ NUS Libraries with Google Scholar</NavDropdown.Item>
                    <NavDropdown.Item href="http://libguides.nus.edu.sg/Browzine" target="_blank">BrowZine</NavDropdown.Item>
                </Col>
                </Row>
                </HoverControlledDropdown>

                <HoverControlledDropdown className={styles.navItem} title="Services">
                    <NavDropdown.Item href="https://libportal.nus.edu.sg/frontend/e-forms/services-undergraduates?formType=Forms+for+Undergraduate+Students&formName=Undergraduate+Students&cid=630946" target="_self">Undergraduate Students</NavDropdown.Item>
                    <NavDropdown.Item href="https://libportal.nus.edu.sg/frontend/e-forms/services-honours-students?formType=Forms+for+Honours+Students&formName=Honours+Students&cid=630946" target="_self">Honours Students</NavDropdown.Item>
                    <NavDropdown.Item href="https://libportal.nus.edu.sg/frontend/e-forms/services-graduate-students?formType=Forms+for+Graduate+Students&formName=Graduate+Students&cid=630946" target="_self">Graduate Students</NavDropdown.Item>
                    <NavDropdown.Item href="https://libportal.nus.edu.sg/frontend/e-forms/services-acad-staff?formType=Form+for+Academic%2FExecutive%2FProfessional+Staff&formName=Academic%2FExecutive%2FProfessional+Staff&cid=630946" target="_self">Academic/Executive/Professional Staff</NavDropdown.Item>
                    <NavDropdown.Item href="https://libportal.nus.edu.sg/frontend/e-forms/services-non-acad-staff?formType=Forms+for+Non-Academic+Staff&formName=Non-Academic+Staff&cid=630946" target="_self">Non-Academic Staff</NavDropdown.Item>
                    <NavDropdown.Item href="https://libportal.nus.edu.sg/frontend/web/alumni" target="_self">Alumni</NavDropdown.Item>
                    <NavDropdown.Item href="https://libportal.nus.edu.sg/frontend/e-forms/services-external?formType=Forms+for+External+Members&formName=External+Members&cid=630946" target="_self">External Members</NavDropdown.Item>
                </HoverControlledDropdown>

                <HoverControlledDropdown className={styles.navItem} title="About">
                <Row>
                <Col>
                    <h5>NUS Libraries</h5>
                    <NavDropdown.Item href="https://libportal.nus.edu.sg/frontend/web/about-nus-libraries/our-libraries" target="_blank">Libraries</NavDropdown.Item>
                    <NavDropdown.Item href="https://libportal.nus.edu.sg/frontend/web/about-nus-libraries/vision-mission" target="_blank">Mission, Vision &amp; Promise</NavDropdown.Item>
                    <NavDropdown.Item href="https://libportal.nus.edu.sg/frontend/web/about-nus-libraries/highlights" target="_blank">Highlights</NavDropdown.Item>
                    <NavDropdown.Item href="https://libguides.nus.edu.sg/nusltimeline" target="_self">Milestones</NavDropdown.Item>
                    <NavDropdown.Item href="http://libds.nus.edu.sg" target="_blank">User Survey</NavDropdown.Item>
                    <NavDropdown.Item href="/frontend/ms/researcher-unbound/about-ru" target="_self">Donors' Gallery</NavDropdown.Item>
                    <NavDropdown.Item href="/frontend/ms/researcher-unbound/about-ru" target="_self">Online Art Galleries</NavDropdown.Item>
                </Col>
                <Col>
                    <h5>Tools</h5>
                    <NavDropdown.Item href="http://libguides.nus.edu.sg/findfulltext/proxybookmark" target="_blank">Proxy Bookmarklet</NavDropdown.Item>
                    <NavDropdown.Item href="http://libguides.nus.edu.sg/citationmanagers" target="_blank">Citation Managers</NavDropdown.Item>
                    <NavDropdown.Item href="http://libguides.nus.edu.sg/findfulltext/findit" target="_blank">Find It! @ NUS Libraries with Google Scholar</NavDropdown.Item>
                    <NavDropdown.Item href="http://libguides.nus.edu.sg/Browzine" target="_blank">BrowZine</NavDropdown.Item>
                </Col>
                </Row>                
                </HoverControlledDropdown>

                <HoverControlledDropdown className={styles.navItem} title="Contact &amp; Help">
                    <NavDropdown.Item href="/frontend/e-resources" target="_self">Opening Hours &amp; Directions</NavDropdown.Item>
                    <NavDropdown.Item href="http://libfaq.nus.edu.sg/" target="_blank">FAQs</NavDropdown.Item>
                    <NavDropdown.Item href="/frontend/web/contact-us" target="_self">Call / EMail</NavDropdown.Item>
                    <NavDropdown.Item href="http://libfaq.nus.edu.sg/" target="_blank">Staff Directory</NavDropdown.Item>
                    <NavDropdown.Item href="/frontend/web/contact-us" target="_self">Comments &amp; Suggestions</NavDropdown.Item>
                </HoverControlledDropdown>

            </Nav>

            </Navbar.Collapse>

        </Navbar>
        </Container>
    </Container>

  )
}

