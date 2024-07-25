/**
 * It takes in an array of objects and returns a slider with each object as a slide
 * @returns The FeatureSection component is being returned.
 */
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import { Col, Container, Row } from "reactstrap";
import { Featured, FeaturedProperty } from "../../../constValues/constValues";
import { feature1 } from "../../../data/slickSlider";
import Img from "../../../utils/BackgroundImageRatio";
import NoSsr from "../../../utils/NoSsr";
import AddToWhishList from "../../elements/AddToWhishList";

const FeatureSection = ({ value, data1 }) => {

  const nha = [
    '/assets/images/property/nha1.png',
    '/assets/images/property/nha2.png',
    '/assets/images/property/nha3.png',
    '/assets/images/property/nha4.png',
    '/assets/images/property/nha5.png'
  ]

  const numberWithCommas = (number) => {
    return number.toLocaleString();
  };

  console.log(data1);
  return (
    <section className="feature-section banner-4">
      <Container>
        <Row>
          <Col>
            <div className="title-1 text-white">
              <span className="label label-gradient">Quảng cáo</span>
              <h2>Những căn nhà đẹp</h2>
              <hr />
            </div>
            <NoSsr>
              <Slider className="feature-1 arrow-light" {...feature1}>
                {data1 &&
                  data1.slice(0, 5).map((data, i) => (
                    <div key={i}>
                      <div className="feature-wrapper">
                        <Row>
                          <Col xl="4" lg="3">
                            <div className="feature-left">
                              <div className="property-details">
                                <span className="font-roboto">{data.address}</span>
                                <Link href={`/property/image-slider/?id=${data.hoId}`}>
                                  <h3 className="d-flex">
                                    {data.houseRentName}
                                    <span>
                                      <span className="label label-dark label-pill">{data?.houseStatus ? ('Nhà đã thuê'):('Nhà chưa thuê')}</span>
                                    </span>
                                  </h3>
                                </Link>
                                <h6>{numberWithCommas(data.rentPrice)} VND</h6>
                                <p className="font-roboto">{data.detail}</p>
                                <ul>
                                  <li>
                                    <img src="/assets/images/svg/icon/double-bed.svg" className="img-fluid" alt="" />
                                    Giường : {data.bed ||  "Loading ..."}
                                  </li>
                                  <li>
                                    <img src="/assets/images/svg/icon/bathroom.svg" className="img-fluid" alt="" />
                                   Vệ sinh : {data.restroom ||  "Loading ..."}
                                  </li>
                                  <li>
                                    <img src="/assets/images/svg/icon/square-ruler-tool.svg" className="img-fluid ruler-tool" alt="" />
                                    Diện tích : {data.area ||  "Loading ..."} m2
                                  </li>
                                </ul>
                                <div className="property-btn">
                                  <Link href={`/property/image-slider/?id=${data.hoId}`} className="btn btn-dashed btn-pill" tabIndex="0">
                                    Chi tiết
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </Col>
                          <Col xl="8" lg="9" className="order-md">
                            <div className="feature-image">
                              <Img src={nha[i]} className="bg-img" />
                              <h4>{'E-Home'}</h4>
                              <span className="box-color"></span>
                              <span className="signature">
                                <img src="/assets/images/signature/1.png" alt="" />
                              </span>
                            </div>
                          </Col>
                        </Row>
                      </div>
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

export default FeatureSection;
