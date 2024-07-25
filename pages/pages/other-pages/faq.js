import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "react-feather";
import { Container, Row } from "reactstrap";

import Breadcrumb from "../../../layout/Breadcrumb/Breadcrumb";
import FooterOne from "../../../layout/footers/FooterOne";
import NavbarThree from "../../../layout/headers/NavbarThree";



const Faq = () => {
  const [active, setActive] = useState(0);
  const handleClick = (value) => {
    setActive(value);
    active === value && setActive();
  };

  const data = [
    {
      title: "Tôi làm thế nào để tìm căn nhà phù hợp với nhu cầu của mình?",
      details: "Để tìm căn nhà phù hợp, bạn có thể sử dụng công cụ tìm kiếm trên trang web của chúng tôi để lọc theo vị trí, diện tích, loại nhà, mức giá và các tiện ích khác. Nếu bạn cần hỗ trợ thêm, đừng ngần ngại liên hệ với đội ngũ chúng tôi để được tư vấn và hỗ trợ.",
    },
    {
      title: "Tôi phải làm gì nếu tôi quan tâm đến một căn nhà?",
      details: "Nếu bạn quan tâm đến một căn nhà, hãy liên hệ với chúng tôi qua số điện thoại hoặc email được cung cấp trên trang chi tiết căn nhà. Chúng tôi sẽ sắp xếp cuộc hẹn để thăm nhà và cung cấp thông tin chi tiết hơn về nó.",
    },
    {
      title: "Tôi cần đáp ứng những yêu cầu gì khi thuê nhà?",
      details:
        "Để thuê nhà, bạn cần cung cấp giấy tờ nhận dạng hợp lệ, thông tin về thu nhập và một số thông tin cá nhân khác. Chúng tôi sẽ tiến hành kiểm tra thông tin và xác nhận để đảm bảo tính xác thực trước khi ký hợp đồng thuê nhà.",
    },
    {
      title: "Tôi có thể hủy hợp đồng thuê trước thời hạn được không?",
      details:
        "Điều khoản hủy hợp đồng thuê sẽ được quy định trong hợp đồng thuê cụ thể của bạn. Trong nhiều trường hợp, việc hủy hợp đồng trước thời hạn sẽ có một số hậu quả tài chính. Vui lòng tham khảo hợp đồng của bạn hoặc liên hệ với chúng tôi để biết thêm thông tin chi tiết.",
    },
    {
      title: "Tôi có thể yêu cầu sửa chữa trong nhà nếu cần thiết không?",
      details:
        "  Đương nhiên, bạn có thể yêu cầu sửa chữa trong nhà nếu cần thiết. Hãy liên hệ với chúng tôi ngay khi gặp vấn đề để chúng tôi có thể tiến hành xem xét và sửa chữa một cách nhanh chóng và hiệu quả.",
    },
    {
      title: "Tôi có thể đàm phán về giá thuê không?",
      details:
        "Chúng tôi luôn sẵn lòng lắng nghe và cân nhắc đề xuất của bạn. Tuy nhiên, giá thuê được đề xuất có thể phụ thuộc vào nhiều yếu tố, bao gồm vị trí, diện tích, tiện ích và thị trường hiện tại. Liên hệ với chúng tôi để bàn bạc thêm về giá thuê và điều kiện.",
    },
  ];
  return (
    <>
      <NavbarThree />
      <Breadcrumb />
      <section className='faq-section log-in'>
        <Container>
          <Row>
            <div className='col-lg-6 order-lg-1'>
              <div className='faq-image text-center'>
                <img src='/assets/images/inner-pages/3.svg' className='img-fluid' alt='' />
                <h3>Bạn có bất kỳ câu hỏi?</h3>
                <p className='font-roboto'>Bạn có thể hỏi bất cứ điều gì bạn muốn biết</p>
              </div>
              <form>
                <div className='form-group mb-0'>
                  <label>Hãy cho tôi biết</label>
                  <input type='text' className='form-control' placeholder='Đặt một câu hỏi' required />
                </div>
                <button type='submit' className='btn btn-gradient'>
                  Gửi
                </button>
              </form>
            </div>
            <div className='col-lg-6'>
              <div className='faq-questions'>
                <div className='title-3 text-start'>
                  <h2>câu hỏi thường gặp</h2>
                </div>

                <div id='accordion' className='accordion'>
                  {data.map((data, i) => (
                    <div className='card' key={i}>
                      <div className='card-header'>
                        <a className='card-link ' onClick={() => handleClick(i)}>
                          {data.title}
                          {active === i ? <ChevronDown className='float-end' /> : <ChevronRight className='float-end' />}
                        </a>
                      </div>
                      <div className={`collapse ${active === i ? "show" : ""}`}>
                        <div className='card-body'>{data.details}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>
      <FooterOne />
    </>
  );
};

export default Faq;
