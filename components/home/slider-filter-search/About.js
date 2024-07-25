/**
 * It's a function that returns a section with a container, a row, a column, a div, a slider, and a map
 * function that returns a div, a row, two columns, two divs, a link, a span, a h6, a h3, a span, a p,
 * and another link
 * @returns The AboutSection component is being returned.
 */
import Link from "next/link";
import React from "react";
import { Eye, Heart, Mail } from "react-feather";
import Slider from "react-slick";
import { Col, Container, Row } from "reactstrap";
import { Agent, Connect, MeetOurAgent, ViewPortfolio } from "../../../constValues/constValues";
import { about1 } from "../../../data/slickSlider";
import NoSsr from "../../../utils/NoSsr";
import SocialAccounts from "../../elements/SocialAccounts";

const AboutSection = ({ value ,data1 }) => {
 const detail = [
  "Tìm kiếm ngôi nhà tạm gọi là trọ bình dân mà bạn gọi là 'tổ ấm' - Những lựa chọn thuê trọ với giá cả hợp lý, tiện ích cơ bản và không gian sống thoải mái chờ đón bạn tại những vị trí thuận tiện, giúp bạn tiết kiệm chi phí và tận hưởng cuộc sống đáng nhớ.",
  "Tạo nên ngôi nhà thứ hai tại trọ bình dân - Khám phá nhiều phòng trọ với tiện nghi đáng kinh ngạc, an ninh tốt và không gian chung ấm cúng, mang đến cho bạn cảm giác gia đình và niềm vui trong cuộc sống hàng ngày.",
  "Trọ bình dân - Mở ra cánh cửa cho cuộc sống độc lập và thú vị - Bạn sẽ không chỉ tìm thấy một chỗ ở, mà còn là môi trường văn hóa đa dạng và sôi động để giao lưu và kết bạn.",
  "Tiết kiệm không gian, tiết kiệm tiền - Tìm kiếm trọ bình dân với các phòng trọ thông minh, tận dụng tối đa diện tích và trang bị tiện nghi đủ dùng, giúp bạn tiết kiệm và sắp xếp cuộc sống hiệu quả.",
  "Trọ bình dân - Nơi tinh thần hòa mình với nhịp sống thành thị - Với môi trường sống đơn giản nhưng ấm cúng, bạn sẽ dễ dàng thích nghi và trở thành một phần của cộng đồng đầy tình thương.",
  "Chào đón bạn vào cộng đồng trọ bình dân đáng yêu - Tìm ngay phòng trọ rộng rãi và thoải mái, được chăm sóc chu đáo, tạo nên môi trường sống vui vẻ và ổn định.",
  "Thuê trọ bình dân - Bước vào thế giới của sự độc lập và hứa hẹn - Với các phòng trọ đáng yêu và tiện nghi cơ bản, bạn có thể tận hưởng cuộc sống độc lập mà không phải lo lắng về giá cả.",
  "Trọ bình dân, niềm tin vào cuộc sống đơn giản - Tìm ngôi nhà nhỏ xinh trong lòng thành phố, đem lại sự ổn định và sự hài lòng cho cuộc sống hàng ngày.",
  "Trọ bình dân - Tận hưởng cuộc sống thoải mái và tự do - Với các phòng trọ tiện nghi, bạn sẽ có không gian riêng tư và thư giãn sau những giờ làm việc căng thẳng.",
  "Trọ bình dân - Nơi bắt đầu những giấc mơ lớn - Tìm ngay căn phòng trọ phù hợp với tài chính và thú vị để bắt đầu cuộc hành trình đáng nhớ trong cuộc sống.",
  "Tìm kiếm ngôi nhà tạm gọi là trọ bình dân mà bạn gọi là 'tổ ấm' - Những lựa chọn thuê trọ với giá cả hợp lý, tiện ích cơ bản và không gian sống thoải mái chờ đón bạn tại những vị trí thuận tiện, giúp bạn tiết kiệm chi phí và tận hưởng cuộc sống đáng nhớ.",
  "Tạo nên ngôi nhà thứ hai tại trọ bình dân - Khám phá nhiều phòng trọ với tiện nghi đáng kinh ngạc, an ninh tốt và không gian chung ấm cúng, mang đến cho bạn cảm giác gia đình và niềm vui trong cuộc sống hàng ngày.",
  "Trọ bình dân - Mở ra cánh cửa cho cuộc sống độc lập và thú vị - Bạn sẽ không chỉ tìm thấy một chỗ ở, mà còn là môi trường văn hóa đa dạng và sôi động để giao lưu và kết bạn.",
  "Tiết kiệm không gian, tiết kiệm tiền - Tìm kiếm trọ bình dân với các phòng trọ thông minh, tận dụng tối đa diện tích và trang bị tiện nghi đủ dùng, giúp bạn tiết kiệm và sắp xếp cuộc sống hiệu quả.",
  "Trọ bình dân - Nơi tinh thần hòa mình với nhịp sống thành thị - Với môi trường sống đơn giản nhưng ấm cúng, bạn sẽ dễ dàng thích nghi và trở thành một phần của cộng đồng đầy tình thương.",
  "Chào đón bạn vào cộng đồng trọ bình dân đáng yêu - Tìm ngay phòng trọ rộng rãi và thoải mái, được chăm sóc chu đáo, tạo nên môi trường sống vui vẻ và ổn định.",
  "Thuê trọ bình dân - Bước vào thế giới của sự độc lập và hứa hẹn - Với các phòng trọ đáng yêu và tiện nghi cơ bản, bạn có thể tận hưởng cuộc sống độc lập mà không phải lo lắng về giá cả.",
  "Trọ bình dân, niềm tin vào cuộc sống đơn giản - Tìm ngôi nhà nhỏ xinh trong lòng thành phố, đem lại sự ổn định và sự hài lòng cho cuộc sống hàng ngày.",
  "Trọ bình dân - Tận hưởng cuộc sống thoải mái và tự do - Với các phòng trọ tiện nghi, bạn sẽ có không gian riêng tư và thư giãn sau những giờ làm việc căng thẳng.",
  "Trọ bình dân - Nơi bắt đầu những giấc mơ lớn - Tìm ngay căn phòng trọ phù hợp với tài chính và thú vị để bắt đầu cuộc hành trình đáng nhớ trong cuộc sống.",
  "Tìm kiếm ngôi nhà tạm gọi là trọ bình dân mà bạn gọi là 'tổ ấm' - Những lựa chọn thuê trọ với giá cả hợp lý, tiện ích cơ bản và không gian sống thoải mái chờ đón bạn tại những vị trí thuận tiện, giúp bạn tiết kiệm chi phí và tận hưởng cuộc sống đáng nhớ.",
  "Tạo nên ngôi nhà thứ hai tại trọ bình dân - Khám phá nhiều phòng trọ với tiện nghi đáng kinh ngạc, an ninh tốt và không gian chung ấm cúng, mang đến cho bạn cảm giác gia đình và niềm vui trong cuộc sống hàng ngày.",
  "Trọ bình dân - Mở ra cánh cửa cho cuộc sống độc lập và thú vị - Bạn sẽ không chỉ tìm thấy một chỗ ở, mà còn là môi trường văn hóa đa dạng và sôi động để giao lưu và kết bạn.",
  "Tiết kiệm không gian, tiết kiệm tiền - Tìm kiếm trọ bình dân với các phòng trọ thông minh, tận dụng tối đa diện tích và trang bị tiện nghi đủ dùng, giúp bạn tiết kiệm và sắp xếp cuộc sống hiệu quả.",
  "Trọ bình dân - Nơi tinh thần hòa mình với nhịp sống thành thị - Với môi trường sống đơn giản nhưng ấm cúng, bạn sẽ dễ dàng thích nghi và trở thành một phần của cộng đồng đầy tình thương.",
  "Chào đón bạn vào cộng đồng trọ bình dân đáng yêu - Tìm ngay phòng trọ rộng rãi và thoải mái, được chăm sóc chu đáo, tạo nên môi trường sống vui vẻ và ổn định.",
  "Thuê trọ bình dân - Bước vào thế giới của sự độc lập và hứa hẹn - Với các phòng trọ đáng yêu và tiện nghi cơ bản, bạn có thể tận hưởng cuộc sống độc lập mà không phải lo lắng về giá cả.",
  "Trọ bình dân, niềm tin vào cuộc sống đơn giản - Tìm ngôi nhà nhỏ xinh trong lòng thành phố, đem lại sự ổn định và sự hài lòng cho cuộc sống hàng ngày.",
  "Trọ bình dân - Tận hưởng cuộc sống thoải mái và tự do - Với các phòng trọ tiện nghi, bạn sẽ có không gian riêng tư và thư giãn sau những giờ làm việc căng thẳng.",
  "Trọ bình dân - Nơi bắt đầu những giấc mơ lớn - Tìm ngay căn phòng trọ phù hợp với tài chính và thú vị để bắt đầu cuộc hành trình đáng nhớ trong cuộc sống."
]
  return (
    <section className="about-section slick-between">
      <Container>
        <Row>
          <Col>
            <div className="title-1">
              <span className="label label-gradient">Người cho thuê</span>
              <h2>Thông tin những người cho thuê</h2>
              <hr />
            </div>
            <NoSsr>
              <Slider className="about-wrap arrow-white" {...about1}>
                {data1 &&
                  data1.map((data, i) => (
                    <div key={i}>
                      <Row className="about-content">
                        <Col xl="6">
                          <div className="about-image">
                            <img src={'/assets/images/avatar/5.png'} className="img-fluid" alt="" />
                            <div className="about-overlay"></div>
                            <div className="overlay-content">
                              <SocialAccounts />
                              <span>{Connect}</span>
                            </div>
                          </div>
                        </Col>
                        <Col xl="6">
                          <div className="our-details">
                              <h6 className="d-flex">
                                {data.fullName}
                              </h6>
                            <h3>{data.roleName}</h3>
                            <span className="font-roboto">
                              <Mail className="me-1" />
                              {data.gmail}
                            </span>
                            <p className="font-roboto">{detail[i]}</p>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  ))}
              </Slider>
            </NoSsr>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
