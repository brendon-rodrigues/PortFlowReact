import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Gallery from "./gallery.js";
import Footer from "./footer.js";

import "../styles.css";
export default class Main extends Component {
  render() {
    return (
      <>
        <header className="headerContainer">
          <Container>
            <Row>
              <Col>
                <div className="headerText">
                  <h2>
                    Imagine,
                    <br /> Discute,
                    <br /> Desenhe.
                  </h2>
                  <h3> FALE CONOSCO </h3>
                </div>
                <div></div>
              </Col>
            </Row>
          </Container>
        </header>
        <Gallery />
        <Footer />
      </>
    );
  }
}
