import React from "react"
import "./style.css"
import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer>
        <Container>
          <Row className="footer-row">
            <Col md={3} sm={5} className='box'>
              <div className="logo">
                  <ion-icon name="bag"></ion-icon>
                  <h1>Art Parfumerie</h1>
              </div>
              <p>Art Perfumery takes pride in having the largest inventory of brand names, vast variety of fragrances
                 including exclusivity to designer fragrances and as well as many discontinued products.</p>
              <div className="social-media">
                <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>  &nbsp;
                <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>  &nbsp;
                <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
              </div>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>About Us</h2>
              <ul>
                <li>Careers</li>
                <li>Our Stores</li>
                <li>Our Cares</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>Customer Care</h2>
              <ul>
                <li>Help Center </li>
                <li>How to Buy </li>
                <li>Track Your Order </li>
                <li>Corporate & Bulk Purchasing </li>
                <li>Returns & Refunds </li>
              </ul>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>Contact Us</h2>
              <ul className="contact">
  <li className="contact-item">Sidi Maarouf Res Chaimaa , Morocco.</li>
  <li className="contact-item">Email: eauParfum@gmail.com</li>
  <li className="contact-item">Phone: +2126 03 27 16 53</li>
</ul>

            </Col>
          </Row>
        </Container>
    </footer>
  )
}

export default Footer
