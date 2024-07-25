import React from "react";
import { Container, Row } from "reactstrap";
import Img from "../../../../utils/BackgroundImageRatio";

const AboutUsSection = () => {
  return (
    <section className='about-main ratio_36'>
      <Container>
        <Row>
          <div className='col'>
            <div className='title-2'>
              <h2>Về chúng tôi</h2>
              <p className='font-roboto'>Ở đâu là nhà - Tạo nơi dừng chân hoàn hảo với dịch vụ cho thuê nhà độc đáo và chuyên nghiệp của chúng tôi!</p>
            </div>
            <div className='user-about'>
              <Row>
                <div className='col-xl-5 col-lg-7'>
                  <div className='about-content'>
                    <h3>
                      Chúng tôi <br />
                      Tìm ngôi nhà của bạn - Hãy cho thuê cùng chúng tôi!
                    </h3>
                    <p className='font-roboto'>Chúng tôi là một đội ngũ nhiệt tâm và chuyên nghiệp, cam kết mang đến cho khách hàng những trải nghiệm thuê nhà tuyệt vời và không gì sánh bằng. Với nền tảng kiến thức sâu rộng trong lĩnh vực bất động sản, chúng tôi hiểu rõ nhu cầu và mong muốn của khách hàng khi tìm kiếm ngôi nhà mơ ước.</p>
                  </div>
                  
                </div>
                <div className='col-xl-7 map-image col-lg-5'>
                  <Img src='/assets/images/about/map.png' className='img-fluid bg-img' alt='' />
                  <div className='marker-icons'>
                    <ul>
                      <li>
                        <img className='img-fluid marker-1' src='/assets/images/leaflet/marker-icon.png' alt='' />
                      </li>
                      <li>
                        <img className='img-fluid marker-2' src='/assets/images/leaflet/marker-icon.png' alt='' />
                      </li>
                      <li>
                        <img className='img-fluid marker-3' src='/assets/images/leaflet/marker-icon.png' alt='' />
                      </li>
                      <li>
                        <img className='img-fluid marker-4' src='/assets/images/leaflet/marker-icon.png' alt='' />
                      </li>
                    </ul>
                  </div>
                </div>
              </Row>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUsSection;
