import React from "react";
import { Container, Row } from "reactstrap";

import Link from "next/link";
import NavbarFive from "../layout/headers/NavbarFive";



const Page404 = () => {
  return (
    <>
      <NavbarFive />
      <section className="error-section small-section">
        <Container>
          <Row>
            <div className="col text-center not-found">
              <img src="/assets/images/inner-pages/2.svg" className="img-fluid" alt="" />
              <h2>Ồ có điều sai sót ở đây !</h2>
              <p className="font-roboto">chúng tôi xin lỗi nhưng trang bạn đang tìm kiếm không tồn tại hoặc đã bị xóa. vui lòng kiểm tra hoặc tìm kiếm lại.</p>
              <div className="btns">
                <Link href="/home/slider-filter-search" className="btn btn-gradient">
                  Trở về nhà
                </Link>
                <a className="btn btn-dashed ms-2">Báo cáo lỗi</a>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Page404;
