import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcAmex,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#f9f0eb", fontFamily: "'Poppins', sans-serif", padding: "40px 0" }}>
      <Container>
        <Row className="text-center text-md-start">
          {/* Left Section */}
          <Col md={3} className="mb-4" style={{top:"0px"}}>
            <img src="/NT-logo.png" alt="Nature Thread"  />
            <p className="mt-3" style={{ fontSize: "14px" }}>
              Nature Thread<sup>®</sup> is a women oriented business. In our company 98% of the employees and workers are women.
            </p>
            <div className="d-flex justify-content-center justify-content-md-start gap-3 fs-4 mt-3">
              <a href="https://api.whatsapp.com/send?phone=916307000109" target="_blank" rel="noreferrer"><FaWhatsapp color="#25D366" /></a>
              <a href="https://www.instagram.com/nature__thread/?igsh=MWN4eW1yMXBmbzY3MQ%3D%3D#" target="_blank" rel="noreferrer"><FaInstagram color="#E1306C" /></a>
              <a href="https://www.youtube.com/channel/UCNV6Meq8MpKpQucpYjy0x3w" target="_blank" rel="noreferrer"><FaYoutube color="#FF0000" /></a>
              <a href="https://www.facebook.com/nature.thread/" target="_blank" rel="noreferrer"><FaFacebookF color="#3b5998" /></a>
            </div>
          </Col>

          {/* Contact Us */}
          <Col md={3} className="mb-4">
            <h5>Contact us</h5>
            <p className="mb-2"><strong>Our phone number:</strong><br />+91 522-3178349</p>
            <p className="mb-2"><strong>Our Address:</strong><br />Lucknow GolDarwaza, Chowk.</p>
            <p className="mb-0"><strong>Our Email:</strong><br />contact@naturethread.in</p>
          </Col>

          {/* Useful Links */}
          <Col md={3} className="mb-4">
            <h5>Useful Links</h5>
            <ul className="list-unstyled" style={{ fontSize: "14px" }}>
              <li><a href="/terms" className="text-dark text-decoration-none">📎 Terms & Conditions</a></li>
              <li><a href="/shipping" className="text-dark text-decoration-none">📎 Shipping - policy</a></li>
              <li><a href="/privacy" className="text-dark text-decoration-none">📎 Privacy Policy</a></li>
              <li><a href="/refund" className="text-dark text-decoration-none">📎 Cancellation & Refund Policy</a></li>
              <li><a href="/track-order" className="text-dark text-decoration-none">📎 Track Your Order</a></li>
              <li><a href="/news" className="text-dark text-decoration-none">📎 Latest News</a></li>
              <li><a href="/sitemap" className="text-dark text-decoration-none">📎 Our Sitemap</a></li>
              <li><a href="/contact" className="text-dark text-decoration-none">📎 Contact Us</a></li>
            </ul>
          </Col>

          {/* Newsletter */}
          <Col md={3} className="mb-4">
            <h5>GET LATEST MINIMALISM NEWS</h5>
            <p>Newsletter Subscribe</p>
            <Form>
              <Form.Group controlId="formEmail" className="mb-2">
                <Form.Label>Email <span className="text-danger">*</span></Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <div className="mb-2">
                {/* reCAPTCHA placeholder */}
                <div style={{
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  padding: "10px",
                  backgroundColor: "#fff"
                }}>
                  <input type="checkbox" /> I'm not a robot
                </div>
              </div>
              <Button variant="success" type="submit" style={{ backgroundColor: "#5cb85c", border: "none" }}>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>

        {/* Certificates & Payments */}
        <Row className="mt-4 text-center align-items-center">
          {/* <Col md={6} className="mb-3">
            <p className="mb-1 fw-bold">Certificates</p>
            <img src="/cert1.png" alt="cert1" style={{ height: "30px", marginRight: "10px" }} />
            <img src="/cert2.png" alt="cert2" style={{ height: "30px" }} />
          </Col> */}
          <Col md={16}>
            <p className="mb-1 fw-bold">Payment Partners</p>
            <div className="d-flex justify-content-center gap-3 fs-3">
              <FaCcVisa />
              <FaCcMastercard />
              <FaCcPaypal />
              <FaCcAmex />
            </div>
          </Col>
        </Row>

        <hr />

        {/* Bottom */}
        <Row>
          <Col className="text-center">
            <small>Naturethread<sup>®</sup> | © 2022 All rights reserved.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
