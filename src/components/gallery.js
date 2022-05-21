import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Img1 from "../assets/img1.png";
import Img2 from "../assets/img2.png";
import Img3 from "../assets/img3.png";
import Img4 from "../assets/img4.png";
import Img5 from "../assets/img5.png";
import Img6 from "../assets/img6.png";
import Img7 from "../assets/img7.png";
import Img8 from "../assets/img8.png";
import Img9 from "../assets/img9.png";
import Img10 from "../assets/img10.png";
import Img11 from "../assets/img11.png";
import Img12 from "../assets/img12.png";

export default class Gallery extends Component {
  state = {
    imgs: [
      {
        img: Img1
      },
      {
        img: Img2
      },
      {
        img: Img3
      },
      {
        img: Img4
      },
      {
        img: Img5
      },
      {
        img: Img6
      },
      {
        img: Img7
      },
      {
        img: Img8
      },
      {
        img: Img9
      },
      {
        img: Img10
      },
      {
        img: Img11
      },
      {
        img: Img12
      }
    ]
  };

  render() {
    return (
      <>
        <Container>
          <Row>
            <Col>
              <img src={Img1} />
            </Col>
            <Col>
              <img src={Img2} />
            </Col>
            <Col>
              <img src={Img3} />
            </Col>
            <Col>
              <img src={Img4} />
            </Col>
            <Col>
              <img src={Img5} />
            </Col>
            <Col>
              <img src={Img6} />
            </Col>
            <Col>
              <img src={Img7} />
            </Col>
            <Col>
              <img src={Img8} />
            </Col>
            <Col>
              <img src={Img9} />
            </Col>
            <Col>
              <img src={Img10} />
            </Col>
            <Col>
              <img src={Img11} />
            </Col>
            <Col>
              <img src={Img12} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
