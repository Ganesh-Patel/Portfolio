import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Footer.css';
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    return (

        <div className="footer">
            <div className="footer-item1">
                <h3>Designed and Developed by Ganesh Patel</h3>
            </div>
            <div className="footer-item2">
                <h3>Copyright © {year} GP</h3>
            </div>
            <div className="footer-item3">
                <ul className="footer-icons">
                    <li>
                        <a
                            href="https://github.com/Ganesh-Patel/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <AiFillGithub />
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <AiOutlineTwitter />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/mr-ganesh-a305a51b3/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedinIn />
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <AiFillInstagram />
                        </a>
                    </li>
                </ul>
            </div>
        </div>

    );
}

export default Footer;
