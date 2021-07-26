import React from 'react'
import * as styles from './Footer.module.scss'
import { Nav, Row, Col, Container, ListGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow, faPhoneAlt,faEnvelope, faCircle} from '@fortawesome/free-solid-svg-icons'
import { StaticImage } from "gatsby-plugin-image"

// #TODO add commit hash
// const commitHash = process.env.REACT_APP_VERSION || 'dev'

export default function Footer(props) {
  return (
  <Container className={styles.footer}>
    <Container className={styles.footerTop}>
    <Row>
      <Col xs={4} sm={4} lg={4} className="d-none d-sm-none d-lg-block">
        <h2>Resource Librarians</h2>
          <ListGroup className={styles.footer_listItem}>
            <li> <a href="http://libguides.nus.edu.sg/areastudies" target="_blank" rel="noopener noreferrer">Area Studies</a></li>
            <li> <a href="http://libguides.nus.edu.sg/business" target="_blank" rel="noopener noreferrer">Business</a></li>
            <li> <a href="http://libguides.nus.edu.sg/sde" target="_blank" rel="noopener noreferrer">Design &amp; Environment</a></li>
            <li> <a href="http://libguides.nus.edu.sg/sb.php?subject_id=32292" target="_blank" rel="noopener noreferrer">Reference Management</a></li>
            <li> <a href="http://libguides.nus.edu.sg/engineering" target="_blank" rel="noopener noreferrer">Engineering &amp; Computer Science</a></li>
            <li> <a href="http://libguides.nus.edu.sg/humanities" target="_blank" rel="noopener noreferrer">Humanities</a></li>
            <li> <a href="http://libguides.nus.edu.sg/sb.php?subject_id=32284" target="_blank" rel="noopener noreferrer">Law</a></li>
            <li> <a href="http://libguides.nus.edu.sg/sb.php?subject_id=32285" target="_blank" rel="noopener noreferrer">Medicine, Pharmacy, &amp; Nursing</a></li>
            <li> <a href="http://libguides.nus.edu.sg/sb.php?subject_id=32286" target="_blank" rel="noopener noreferrer">Music</a></li>
            <li> <a href="http://libguides.nus.edu.sg/sb.php?subject_id=32293" target="_blank" rel="noopener noreferrer">Patents</a></li>
            <li> <a href="https://libguides.nus.edu.sg/rdm" target="_blank" rel="noopener noreferrer">Research Data Management</a></li>
            <li> <a href="https://libguides.nus.edu.sg/researchimpact " target="_blank" rel="noopener noreferrer">Research Impact Measurement</a></li>
            <li> <a href="http://libguides.nus.edu.sg/science" target="_blank" rel="noopener noreferrer">Science</a></li>
            <li> <a href="http://libguides.nus.edu.sg/socialscience" target="_blank" rel="noopener noreferrer">Social Sciences</a></li>
            <li> <a href="http://libguides.nus.edu.sg/yale-nus" target="_blank" rel="noopener noreferrer">Yale-NUS College</a></li>
          </ListGroup>
      </Col>



      <Col xs={4} sm={4} lg={4} className="d-none d-sm-none d-lg-block">
        <h2>Libraries</h2>
          <ListGroup className={styles.footer_listItem}>
            <li> <a href="/frontend/ms/central-library/about-central-library" target="_self">Central Library</a></li>
            <li> <a href="/frontend/ms/chinese-library-ch/about-chinese-library" target="_self">Chinese Library</a></li>
            <li> <a href="/frontend/ms/c-j-koh-law-library/about-c-j-koh-law-library" target="_self">C J Koh Law Library</a></li>
            <li> <a href="/frontend/ms/hon-sui-sen-memorial-library/about-hon-sui-sen-memorial-library" target="_self">Hon Sui Sen Memorial Library</a></li>
            <li> <a href="/frontend/ms/medical-library/about-medical-library" target="_self">Medical Library</a></li>
            <li> <a href="/frontend/ms/music-library/about-music-library" target="_self">Music Library</a></li>
            <li> <a href="/frontend/ms/science-library/about-science-library" target="_self">Science Library</a></li>
            <li> <a href="http://library.yale-nus.edu.sg" target="_blank" rel="noopener noreferrer">Yale-NUS College Library</a></li>
          </ListGroup>
      </Col>


      <Col xs={12} sm={12} lg={4} className="d-none d-sm-none d-lg-block">
      <Col className={styles.footerMin}>
        <Row className={styles.footerMinContent}>
          <ListGroup className={styles.footer_listItem}>
          <h2>NUS Libraries</h2>
            <li>  <FontAwesomeIcon icon={faLocationArrow} className={styles.icon}/>
              <pre className={styles.address}>Central Library{'\n'}
              12 Kent Ridge Crescent{'\n'}
              Singapore 119275</pre>
              </li>
            <li><FontAwesomeIcon icon={faPhoneAlt} className={styles.icon}/><span>+65 6516 2028</span></li>
            <li><FontAwesomeIcon icon={faEnvelope} className={styles.icon}/>
              <span><a href="mailto:askalib@nus.edu.sg" target="_self">askalib@nus.edu.sg</a><br /></span>
            </li>
          </ListGroup> 
        </Row>

        <Row className={styles.footerMinContent}>
          <Nav>
            <Nav.Link href="https://www.facebook.com/NUSLibraries" target="_blank" className={styles.img}>      
              <StaticImage
                src="../../images/facebook.png"
                alt="facebook"
                height={32}
                width={32}
                layout="fixed"
                loading="eager"
                position="0 0"
                objectFit="contain"
              />
            </Nav.Link>
            <Nav.Link href="https://twitter.com/NUSlibraries" target="_blank" className={styles.img}>              
              <StaticImage
                  src="../../images/twitter.png"
                  alt="twitter"
                  height={32}
                  width={32}
                  layout="fixed"
                  loading="eager"
                  position="0 0"
                  objectFit="contain"
                />
            </Nav.Link>
            <Nav.Link href="https://instagram.com/nuslibraries" target="_blank" className={styles.img}>
              <StaticImage
                  src="../../images/instagram.png"
                  alt="instagram"
                  height={32}
                  width={32}
                  layout="fixed"
                  loading="eager"
                  position="0 0"
                  objectFit="contain"
                />
            </Nav.Link>
            <Nav.Link href="http://blog.nus.edu.sg/linus/" target="_blank" className={styles.img}>
              <StaticImage
                    src="../../images/word.png"
                    alt="word"
                    height={32}
                    width={32}
                    layout="fixed"
                    loading="eager"
                    position="0 0"
                    objectFit="contain"
                  />
            </Nav.Link>
            <Nav.Link href="https://www.youtube.com/user/nuslibraries" target="_blank" className={styles.img}>
              <StaticImage
                      src="../../images/youtube.png"
                      alt="youtube"
                      height={32}
                      width={32}
                      layout="fixed"
                      loading="eager"
                      position="0 0"
                      objectFit="contain"
                    />
            </Nav.Link>
            <Nav.Link href="https://www.flickr.com/photos/nuslibraries" target="_blank" className={styles.img}>
              <StaticImage
                      src="../../images/flickr.png"
                      alt="flickr"
                      height={32}
                      width={32}
                      layout="fixed"
                      loading="eager"
                      position="0 0"
                      objectFit="contain"
                    />
            </Nav.Link>
          </Nav>
        </Row>
        </Col>
      </Col>

      <Col className="d-block d-sm-block= d-lg-none">
        <Row className={styles.footerMinContent}>
          <ListGroup className={styles.footer_listItemMin}>
          <h2 className={styles.footerMinContentHeader}>NUS Libraries</h2>
            <li>  <FontAwesomeIcon icon={faLocationArrow} className={styles.icon}/>
              <pre className={styles.address}>Central Library{'\n'}
              12 Kent Ridge Crescent{'\n'}
              Singapore 119275</pre>
              </li>
            <li><FontAwesomeIcon icon={faPhoneAlt} className={styles.icon}/><span style={{whiteSpace: 'pre-wrap'}}>+65 6516 2028</span></li>
            <li><FontAwesomeIcon icon={faEnvelope} className={styles.icon}/>
              <span><a href="mailto:askalib@nus.edu.sg">askalib@nus.edu.sg</a><br /></span>
            </li>
          </ListGroup> 
        </Row>

        <Row className={styles.footerMinContent}>
        <Nav>
            <Nav.Link href="https://www.facebook.com/NUSLibraries" target="_blank" className={styles.img}>      
              <StaticImage
                src="../../images/facebook.png"
                alt="facebook"
                height={32}
                width={32}
                layout="fixed"
                loading="eager"
                position="0 0"
                objectFit="contain"
              />
            </Nav.Link>
            <Nav.Link href="https://twitter.com/NUSlibraries" target="_blank" className={styles.img}>              
              <StaticImage
                  src="../../images/twitter.png"
                  alt="twitter"
                  height={32}
                  width={32}
                  layout="fixed"
                  loading="eager"
                  position="0 0"
                  objectFit="contain"
                />
            </Nav.Link>
            <Nav.Link href="https://instagram.com/nuslibraries" target="_blank" className={styles.img}>
              <StaticImage
                  src="../../images/instagram.png"
                  alt="instagram"
                  height={32}
                  width={32}
                  layout="fixed"
                  loading="eager"
                  position="0 0"
                  objectFit="contain"
                />
            </Nav.Link>
            <Nav.Link href="http://blog.nus.edu.sg/linus/" target="_blank" className={styles.img}>
              <StaticImage
                    src="../../images/word.png"
                    alt="word"
                    height={32}
                    width={32}
                    layout="fixed"
                    loading="eager"
                    position="0 0"
                    objectFit="contain"
                  />
            </Nav.Link>
            <Nav.Link href="https://www.youtube.com/user/nuslibraries" target="_blank" className={styles.img}>
              <StaticImage
                      src="../../images/youtube.png"
                      alt="youtube"
                      height={32}
                      width={32}
                      layout="fixed"
                      loading="eager"
                      position="0 0"
                      objectFit="contain"
                    />
            </Nav.Link>
            <Nav.Link href="https://www.flickr.com/photos/nuslibraries" target="_blank" className={styles.img}>
              <StaticImage
                      src="../../images/flickr.png"
                      alt="flickr"
                      height={32}
                      width={32}
                      layout="fixed"
                      loading="eager"
                      position="0 0"
                      objectFit="contain"
                    />
            </Nav.Link>
          </Nav>
        </Row>
      </Col>
      

      </Row>
    </Container>


    <Container className={styles.footerCopyright} style={{display:'flex'}}>
      <Col>
        <Row className={styles.footerBottom}>
            <p>©<a href="http://www.nus.edu.sg">National University of Singapore</a>. All Rights Reserved.</p>
        </Row>
        <Row className={styles.footerBottom}>
          <Nav>
              <li><a href="http://www.nus.edu.sg/legal-information-notices" target="_blank" rel="noopener noreferrer">Legal</a></li><FontAwesomeIcon icon={faCircle} className={styles.pseudoIcon}/>
              <li><a href="http://www.nus.edu.sg/identity" target="_blank" rel="noopener noreferrer">Branding guidelines</a></li><FontAwesomeIcon icon={faCircle} className={styles.pseudoIcon}/>
              <li><a href="http://www.nus.edu.sg/contact" target="_blank" rel="noopener noreferrer">Contact us</a></li><FontAwesomeIcon icon={faCircle} className={styles.pseudoIcon}/>
              <li><a href="http://cn.nus.edu.sg/" target="_blank" rel="noopener noreferrer">中文</a></li>
          </Nav>
        </Row>
      </Col>
    </Container>

</Container>
  )
}