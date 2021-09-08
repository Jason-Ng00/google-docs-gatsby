import React, {useState} from 'react'
import * as styles from './Navbar.module.scss'
import { Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import {graphql, useStaticQuery, Link} from "gatsby"


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

export default React.memo(function NavBar({ menuItems }) {
    const data = useStaticQuery(graphql`
    query MenuQuery {
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

    var menuData = []
    var menuItem = []
    data.pagesPath.edges.map((edge) => {
      if(edge.node.breadcrumb.length === 1) {
        menuData.push(edge.node.breadcrumb)
      } else {
          if(!menuItem.includes(edge.node.breadcrumb[0].name)){
            menuItem.push(edge.node.breadcrumb[0].name)
            menuData.push(edge.node.breadcrumb)
          } else {
            for( var i =1; i < menuData.length; i++) {
              if(menuData[i][0].name === edge.node.breadcrumb[0].name) {
                menuData[i].push(edge.node.breadcrumb[1])
              }
           }
          }
      }
      return edge
  })

  const activeStyles={borderBottom: "3px solid #ef7c00", color:"#003D7C"};

  return (
    <Container className={styles.navbar}>
        <Container>
        <Navbar expand="sm">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            
            <Nav className="me-auto">
                <Link className={styles.navItemNoDropdown} activeStyle={activeStyles} to="/">Home</Link>
                
                {menuData.map((navItem) => {
                  if(navItem.length === 1) {
                      return <Link key={navItem[0].name} className={styles.navItemNoDropdown} activeStyle={activeStyles} to={navItem[0].slug}>{navItem[0].name}</Link>
                  } else { 
                      var rows=[];
                      var dropdownItem=[];
                      for( var i =1; i < navItem.length; i++) {
                        if(!dropdownItem.includes(navItem[i].name)){
                          rows.push(<Link key={navItem[i].name} className={styles.navDropdown} to={navItem[i].slug} target="_self">{navItem[i].name}</Link>)
                          dropdownItem.push(navItem[i].name)
                      }
                  }
                return  <Link to={"/"+navItem[0].name.toLowerCase()+"/"} className={styles.navItemDropdown} activeStyle={activeStyles} partiallyActive={true}> 
             <HoverControlledDropdown key={navItem[0].name} className={styles.navItem} title={navItem[0].name}>
                {rows}
             </HoverControlledDropdown>
             </Link>
            }
     })}
     
            </Nav>
            </Navbar.Collapse>

        </Navbar>
        </Container>
    </Container>

  )
}
)
