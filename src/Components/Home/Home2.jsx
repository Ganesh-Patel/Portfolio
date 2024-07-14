import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  const themeColor = "#CD5EF8";

  return (
    <Container fluid className="home-about-section" id="about" style={{ padding: "2rem 0" ,color: "white" }}>
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span style={{ color: themeColor }}> INTRODUCE </span> MYSELF
            </h1>
            <p style={{ fontSize: "1.2em", lineHeight: "1.6" }}>
              I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b style={{ color: themeColor }}> Java, Javascript and C++. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b style={{ color: themeColor }}>Web Technologies and Products </b> and
                also in areas related to{" "}
                <b style={{ color: themeColor }}>Banking Solutions.</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b style={{ color: themeColor }}>Node.js</b> and
              <i>
                <b style={{ color: themeColor }}> Modern Javascript Library and Frameworks</b>
              </i>
              &nbsp; like
              <i>
                <b style={{ color: themeColor }}> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar" style={{ textAlign: "center" }}>
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" style={{ borderRadius: "50%", maxWidth: "100%", height: "auto" }} />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social" style={{ textAlign: "center", marginTop: "4rem",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center" }}>
            <h1 style={{ color: "white" }}>FIND ME ON</h1>
            <p style={{ }}>
              Feel free to <span style={{ color: themeColor }}>connect </span>with me
            </p>
            <ul className="home-about-social-links" style={{ listStyleType: "none", padding: 0 }}>
              <li className="social-icons" style={{ display: "inline-block", margin: "0 10px" }}>
                <a
                  href="https://github.com/Ganesh-Patel/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: themeColor, fontSize: "2rem" }}
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons" style={{ display: "inline-block", margin: "0 10px" }}>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: themeColor, fontSize: "2rem" }}
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons" style={{ display: "inline-block", margin: "0 10px" }}>
                <a
                  href="https://www.linkedin.com/in/mr-ganesh-a305a51b3/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: themeColor, fontSize: "2rem" }}
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons" style={{ display: "inline-block", margin: "0 10px" }}>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: themeColor, fontSize: "2rem" }}
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
