import React from "react";
import { Link, Mail, MapPin, PhoneCall } from "react-feather";
import { Col, Container, Row } from "reactstrap";
import Img from "../../../utils/BackgroundImageRatio";

const BodyContent = () => {
  return (
    <section className="agent-section property-section agent-profile-wrap">
      <Container>
        <Row className=" ratio_55">
          <Col xl="9" lg="8" className=" property-grid-2">
            <div className="our-agent theme-card">
              <Row>
                <Col sm="6" className=" ratio_landscape">
                  <div className="agent-image bg-size">
                    <Img src="/assets/images/avatar/5.jpg" className="img-fluid bg-img" alt="" />
                    <span className="label label-shadow">4 Tìa sản</span>
                  </div>
                </Col>
                <Col sm="6">
                  <div className="our-agent-details">
                    <h3 className="f-w-600">Nguyen Tien</h3>
                    <h6>Đã định danh người dùng</h6>
                    <ul>
                      <li>
                        <div className="media">
                          <div className="icons-square">
                            <MapPin />
                          </div>
                          <div className="media-body">
                            <h6>Đà Nẵng</h6>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="media">
                          <div className="icons-square">
                            <PhoneCall />
                          </div>
                          <div className="media-body">
                            <h6>(+84) 967273516</h6>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="media">
                          <div className="icons-square">
                            <Mail />
                          </div>
                          <div className="media-body">
                            <h6>Tien@gmail.com</h6>
                          </div>
                        </div>
                      </li>
                      <li className="with-link">
                        <div className="media">
                          <div className="icons-square">
                            <Link />
                          </div>
                          <div className="media-body">
                            <h6>
                              <a>https://www.google.com</a>
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <ul className="agent-social">
                    <li>
                      <a href="https://www.facebook.com/" className="facebook">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/" className="twitter">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://account.google.com" className="google">
                        <i className="fab fa-google"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/" className="linkedin">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>
            <div className="about-agent theme-card">
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BodyContent;
