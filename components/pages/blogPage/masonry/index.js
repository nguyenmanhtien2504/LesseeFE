/**
 * It takes an array of items and returns a new array with the items in a random order
 * @returns The return value of the function is the value of the last expression executed by the
 * function.
 */
import React, { useEffect, useState } from "react";
import { MasonryGrid } from "@egjs/react-grid";
import { Col, Container, Row } from "reactstrap";
import BlogWrapBox from "../../../elements/propertyBoxs/BlogWrapBox";
import axios from "axios";

const BodyContent = ({ side }) => {
  const value = [
    {
      img: "/assets/images/property/new.png",
      title: "Những dấu hiệu cho thấy bạn nên bán nhà sớm",
      place: "Ngũ hành sơn, Đà Nẵng",
      detail: "Việc bán nhà có thể là một quyết định khó khăn và cảm xúc, nhưng đôi khi, điều đó là cần thiết để tạo ra những cơ hội mới và cải thiện tình hình tài chính. Dưới đây là những dấu hiệu cho thấy bạn nên xem xét việc bán nhà sớm để đảm bảo bạn đưa ra quyết định đúng đắn và thuận lợi cho tương lai:",
      date: 18,
      month: "Tháng bảy",
      id: "30",
    },
    {
      img: "/assets/images/blog/new.png",
      title: "Lợi nhuận gấp đôi so với trước khi bạn kinh doanh",
      place: " Hải châu, Đà nẵng",
      detail: "Kinh doanh trong lĩnh vực bất động sản, đặc biệt là nhà ở, luôn có tiềm năng mang đến lợi nhuận lớn và ổn định trong tương lai. Nhiều nhà đầu tư thông minh đã đạt được thành công đáng kể với kế hoạch kinh doanh đúng đắn và quản lý thông minh. Dưới đây là những bài học kinh nghiệm từ những người đã thành công trong việc thu được lợi nhuận gấp đôi sau khi kinh doanh nhà ở.",
      date: 19,
      month: "Tháng Sáu",
      id: "31",
    },
    {
      img: "/assets/images/blog/new.png",
      title: "Điểm Tín Dụng Là Gì và Tại Sao Chúng Lại Quan Trọng Trong Lĩnh Vực Nhà Ở",
      place: "Quảng Nam",
      detail: "Điểm tín dụng là một yếu tố quan trọng đối với những ai muốn mua nhà hoặc tham gia vào các giao dịch tài chính liên quan đến bất động sản. Điểm tín dụng thể hiện mức độ đáng tin cậy của một người trong việc trả nợ và quản lý tài chính cá nhân. Dưới đây là một cái nhìn tổng quan về điểm tín dụng và lý do tại sao chúng lại quan trọng trong lĩnh vực nhà ở.",
      date: 18,
      month: "Tháng Năm",
      id: "32",
    },
    {
      img: "/assets/images/property/new.png",
      title: "Những điều cần chú ý khi xem tài sản.",
      place: "Ngủ hành sơn, Đà Nẵng",
      detail: "Việc xem tài sản nhà ở là một bước quan trọng trong quá trình mua bất động sản. Đây là cơ hội để bạn có cái nhìn chân thực về ngôi nhà và đảm bảo rằng nó đáp ứng đủ các tiêu chuẩn và yêu cầu của bạn. Dưới đây là những điều cần chú ý khi xem tài sản nhà ở để đảm bảo bạn đưa ra quyết định đúng đắn và thực hiện giao dịch mua bán thành công.",
      date: 26,
      month: "Tháng Hai",
      id: "33",
    },
    {
      img: "/assets/images/blog/new.png",
      title: "Bất động sản xanh: Hướng dẫn đầu tư vào nhà ở thân thiện với môi trường",
      place: "Liên chiểu, Đà Nẵng",
      detail: "Nhà ở xanh đang trở thành một xu hướng phổ biến trong thị trường bất động sản ngày nay. Với tầm quan trọng ngày càng gia tăng về bảo vệ môi trường và sự thay đổi khí hậu, nhu cầu về những căn nhà tiết kiệm năng lượng và thân thiện với môi trường ngày càng tăng cao. Trong bài viết này, chúng ta sẽ tìm hiểu về khái niệm bất động sản xanh và những lợi ích khi đầu tư vào loại hình nhà ở này.",
      date: 26,
      month: "Tháng Hai",
      id: "33",
    },
    {
      img: "/assets/images/blog/new.png",
      title: "Những Xu Hướng Thiết Kế Nhà ở Hiện Đại Cho Cuộc Sống Tiện Nghi và Hài Hòa",
      place: "Hải châu, Đà nẵng",
      detail: "Thiết kế nhà ở đã trải qua nhiều sự biến đổi và cải tiến trong suốt thời gian qua. Với sự phát triển của công nghệ và xu hướng cuộc sống hiện đại, những ngôi nhà đương đại ngày nay được thiết kế với sự tập trung vào tiện nghi, tính thẩm mỹ và hài hòa với môi trường xung quanh. Trong bài viết này, chúng ta sẽ tìm hiểu về những xu hướng thiết kế nhà ở hiện đại đáng chú ý trong thời gian gần đây.",
      date: 18,
      month: "Tháng Bảy",
      id: "34",
    },
    {
      img: "/assets/images/blog/new.png",
      title: "Nhà Ở Nhỏ - Xu Hướng Lựa Chọn Sống Tối Giản và Bền Vững",
      place: " Huế",
      detail: "Nhà ở nhỏ (Tiny House) đang trở thành một xu hướng phổ biến trong thế giới nhà ở ngày nay. Đối mặt với thực tế của tăng dân số và giới hạn tài nguyên, nhiều người đang chọn sống tối giản và bền vững thông qua việc xây dựng nhà nhỏ như một giải pháp thích ứng và tiết kiệm. Trong bài viết này, chúng ta sẽ tìm hiểu về xu hướng nhà ở nhỏ và lý do tại sao nó đang trở nên hấp dẫn đối với nhiều người.",
      date: 18,
      month: "Tháng Năm",
      id: "35",
    },
  ];

  return (
    <section>
      <Container> 
        <Row>
          {/* {side && (
            <Sidebar side={side}>
              <Category />
              <RecentlyAdded />
              <PopularTags />
            </Sidebar>
          )} */}
          <Col xl={side ? "9" : "12"} lg={side ? "8" : "12"}>
            <Row className='blog-grid  grid'>
              <MasonryGrid className='masonry-spacing'>
                {value?.map((data, i) => (
                  <Col sm={side ? "6" : "4"} className='grid-item wow fadeInUp ' key={i}>
                    <BlogWrapBox data={data} masonry={true} />
                  </Col>
                ))}
              </MasonryGrid>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BodyContent;
