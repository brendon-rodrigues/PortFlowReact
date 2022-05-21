import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
  FaYoutube
} from "react-icons/fa";

import React from "react";
import "../styles.css";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <footer>
      <Container>
        <nav>
          <Row>
            <Col>
              <ul className="footerUl">
                <li className="iconFa">
                  <FaFacebookSquare />
                </li>
                <li className="iconFa">
                  <FaTwitter />
                </li>
                <li className="iconFa">
                  <FaInstagram />
                </li>
                <li className="iconFa">
                  <FaTelegram />
                </li>
                <li className="iconFa">
                  <FaWhatsapp />
                </li>
                <li className="iconFa">
                  <FaYoutube />
                </li>
              </ul>{" "}
            </Col>
          </Row>
        </nav>
      </Container>
    </footer>
  );
}
