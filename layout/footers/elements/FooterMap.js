import React from "react";
import { Col } from "reactstrap";

const FooterMap = ({ isActive, setIsActive }) => {
  return (
    <Col xl='4' md='6' className='order-xl'>
      <div className='footer-links'>
        <h5
          className='footer-title'
          onClick={(e) => {
            e.preventDefault();
            setIsActive("OurLocation");
            isActive === "OurLocation" && setIsActive();
          }}>
          Trụ sở của chúng tôi:
          <span className='according-menu'>
            <i className='fas fa-chevron-down'></i>
          </span>
        </h5>
        <div className={`footer-content ${isActive === "OurLocation" ? "d-block" : "d-none d-md-block"}`}>
          <div className='footer-map'>
            <iframe
              width="600"
              height="450"
              title='realestate location'
              src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15343.455777404266!2d108.25238189416456!3d15.968479975189771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1689588753518!5m2!1svi!2s'
              allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default FooterMap;
