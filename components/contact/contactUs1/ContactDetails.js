/**
 * It returns a section with a container with a row with three columns, each of which has a div with a
 * contact icon, a heading, and a paragraph
 * @returns The ContactDetailsSection component is being returned.
 */
import React from "react";
import { Mail, MapPin } from "react-feather";
import { Col, Container, Row } from "reactstrap";

const ContactDetailsSection = () => {
  return (
    <section className='small-section contact_section pt-0 contact_bottom'>
      <Container>
        <Row>
          <Col lg='6' sm='6'>
            <div className='contact_wrap'>
              <MapPin />
              <h4>Chúng tôi ở</h4>
              <p className='font-roboto'>
                Ngũ Hành Sơn,  <br />
                Đà Nẵng, Việt Nam <br />
                +84 967273516
              </p>
            </div>
          </Col>
          <Col lg='6' sm='6'>
            <div className='contact_wrap'>
              <Mail />
              <h4>Dịch vụ hỗ trọ online</h4>
              <ul>
                <li>Gmail: EHome@gmail.com</li>
                <li>Hỗ trợ: EhomeTeamSupport@gmail.com</li>
                <li>+84 967273516</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactDetailsSection;
