import React, { useState } from "react";
import { Container } from "reactstrap";

import Breadcrumb from "../../../layout/Breadcrumb/Breadcrumb";
import FooterOne from "../../../layout/footers/FooterOne";
import NavbarThree from "../../../layout/headers/NavbarThree";



const PrivacyPolicy = () => {
  const [active, setActive] = useState("1");

  return (
    <>
      <NavbarThree />
      <Breadcrumb />
      <section className='user-dashboard terms-section'>
        <Container>
          <div className='row log-in'>
            <div className='col-xl-3 col-lg-4'>
              <div className='sidebar-user sticky-cls'>
                <div className='dashboard-list'>
                  <h5>Các chính sách</h5>
                  <ul className='nav nav-tabs right-line-tab'>
                    <li className='nav-item'>
                      <a className={`nav-link ${active === "1" ? "active" : ""}`} onClick={() => setActive("1")} href='#intro'>
                      Xác thực và Đăng ký Khách hàng
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a className={`nav-link ${active === "2" ? "active" : ""}`} href='#howuse' onClick={() => setActive("2")}>
                      Hợp đồng Thuê Nhà
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a className={`nav-link ${active === "3" ? "active" : ""}`} href='#thirdparty' onClick={() => setActive("3")}>
                      Bảo trì và Sửa chữa
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a className={`nav-link ${active === "4" ? "active" : ""}`} href='#advertising' onClick={() => setActive("4")}>
                      Pháp lý và Tuân thủ
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a className={`nav-link ${active === "5" ? "active" : ""}`} href='#dpr' onClick={() => setActive("5")}>
                      Quyền riêng tư và Bảo mật Thông tin:
                      </a>
                    </li>
                  </ul>
                  <div className='terms-bottom-content'>
                    <img src='/assets/images/others/1.svg' alt='' className='img-fluid' />
                    <a href='/assets/privacy.txt' className='btn btn-gradient btn-pill' download>
                      Tải chính sách
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-9 col-lg-8 col-12'>
              <div className='theme-card'>
                <h2>Chính sách dịch vụ chúng tôi</h2>
                <div className='terms-wrap'>
                  <div className='terms-wrapper'>
                    <p>Chào mừng đến với E-Home. Chúng tôi cam kết cung cấp dịch vụ thuê nhà chuyên nghiệp và tôn trọng quyền riêng tư của khách hàng. Dưới đây là những chính sách pháp lý và thủ tục liên quan đến dịch vụ thuê nhà của chúng tôi:</p>
                    <p>
                    Nếu bạn có thêm câu hỏi hoặc yêu cầu thêm thông tin về Chính sách quyền riêng tư của chúng tôi, vui lòng liên hệ với chúng tôi qua email tại <a>EHome@gmail.com</a>
                    </p>
                  </div>
                  <div className='terms-wrapper' id='intro'>
                    <h4>Xác thực và Đăng ký Khách hàng:</h4>
                    <p>Khách hàng cần cung cấp thông tin cá nhân chính xác và đầy đủ để đảm bảo quá trình xác thực và đăng ký được thực hiện một cách chính xác.</p>
                    <p>Chúng tôi cam kết bảo mật thông tin cá nhân của khách hàng và không tiết lộ cho bất kỳ bên thứ ba nào.</p>
                  </div>
                  <div className='terms-wrapper' id='howuse'>
                    <h4>Hợp đồng Thuê Nhà:</h4>
                    <p>Mỗi giao dịch thuê nhà sẽ được thực hiện qua hợp đồng chính thức và có rõ ràng các điều khoản và điều kiện.</p>
                    <p>Hợp đồng thuê nhà sẽ bao gồm mô tả chi tiết về căn nhà, giá thuê, thời hạn thuê, và các điều khoản khác liên quan đến việc thuê nhà.</p>
                    <p>Thanh toán và Đặt cọc:</p>
                    <ul>
                      <li>Khách hàng cần thanh toán tiền thuê nhà và đặt cọc theo quy định trong hợp đồng thuê nhà.</li>
                      <li>Đặt cọc sẽ được hoàn lại cho khách hàng khi hợp đồng thuê kết thúc, tuân thủ các điều kiện và trạng thái của căn nhà.</li>
                    </ul>
                    <p>Hủy Hợp đồng:</p>
                    <ul>
                      <li>Quá trình hủy hợp đồng thuê cần tuân thủ các điều kiện và điều khoản được quy định trong hợp đồng.</li>
                      <li>Chúng tôi có quyền hủy hợp đồng nếu khách hàng vi phạm các quy định quan trọng trong hợp đồng thuê.</li>
                    </ul>
                  </div>
                  <div className='terms-wrapper' id='thirdparty'>
                    <h4>Bảo trì và Sửa chữa:</h4>
                    <p>Chúng tôi cam kết duy trì chất lượng căn nhà và cung cấp dịch vụ bảo trì và sửa chữa định kỳ.</p>
                    <p>Khách hàng cần thông báo ngay lập tức về bất kỳ sự cố hoặc vấn đề liên quan đến căn nhà để nhận được hỗ trợ kịp thời.</p>
                  </div>
                  <div className='terms-wrapper' id='advertising'>
                    <h4>Pháp lý và Tuân thủ:</h4>
                    <p>Chúng tôi tuân thủ các quy định pháp luật liên quan đến cho thuê nhà và đảm bảo tuân thủ đúng qui định của cơ quan quản lý.</p>
                    <p>Khách hàng cũng cần tuân thủ các quy định pháp luật và các quy định của dự án thuê nhà.</p>
                  </div>
                  <div className='terms-wrapper' id='dpr'>
                    <h4>Quyền riêng tư và Bảo mật Thông tin:</h4>
                    <p>Chúng tôi cam kết bảo vệ quyền riêng tư của khách hàng và đảm bảo an toàn thông tin cá nhân của họ.</p>
                    <p>Thông tin cá nhân của khách hàng sẽ được bảo mật và sử dụng chỉ cho mục đích liên quan đến dịch vụ thuê nhà.</p>
                  </div>
                  <div className='terms-wrapper' id='end'>
                    <h4>Lời kết:</h4>
                    <p>Chúng tôi hi vọng rằng các chính sách và thủ tục này sẽ đảm bảo quyền lợi của khách hàng và tạo môi trường thuê nhà chuyên nghiệp và tin cậy. Mọi vấn đề hoặc thắc mắc về chính sách và thủ tục này đều được chúng tôi sẵn lòng giải đáp và hỗ trợ bạn một cách tận tâm.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <FooterOne />
    </>
  );
};

export default PrivacyPolicy;
