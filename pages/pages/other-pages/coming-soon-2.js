import React from "react";
import { Container } from "reactstrap";

import Link from "next/link";
import NavbarThree from "../../../layout/headers/NavbarThree";



const ComingSoon2 = () => {
  return (
    <>
      <NavbarThree />
      <section className="coming-simple h-auto">
        <Container>
          <div className="row log-in">
            <div className="col-lg-6 ratio2_3 order-lg-1">
              <img src="/assets/images/inner-pages/1.svg" className="img-fluid bg-size" alt="" />
            </div>
            <div className="col-lg-6 m-0">
              <div className="title-3 text-start">
                <h6>E-Home</h6>
                <h2>Sắp ra mắt</h2>
              </div>
              <div className="site-construction">
                <h4>Trang Làm việc đang được xây dựng , chúng tôi hiện đang quá trình tạo</h4>
                <p className="font-roboto">TRang này hiện chưa được mở ,các cư dân thuê nhà có thể sử dụng các trang hiện hữu khác , bạn có thể điền Gmail các bạn vào ô dưới đây, khi trang này ra mắt chúng tôi sẽ thống báo qua bạn qua Gmail này, Xin cảm ơn</p>
              </div>
              <form action="#" className="theme-form w-100">
                <div className="form-group">
                  <input type="email" name="email" id="name" className="form-control" placeholder="Nhập địa chỉ Gmail của bạn" required />
                  <button type="submit" className="btn btn-gradient btn-pill">
                    Gửi
                  </button>
                </div>
              </form>
              <Link href="/home/slider-filter-search" className="btn btn-gradient btn-pill mt-4">
                <i className="fas fa-arrow-left me-2"></i> Trở về nhà
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ComingSoon2;
