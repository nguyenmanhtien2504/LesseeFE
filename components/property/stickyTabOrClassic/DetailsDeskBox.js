import React from "react";
import { Col, Row } from "reactstrap";

const DetailsDeskBox = ({singleData1}) => {
  return (
    <div className='desc-box' id='details'>
      <div className='page-section'>
        <h4 className='content-title'>
          Chi tiết nhà thuê
          {/* <a
            href='https://www.google.com/maps/place/New+York,+NY,+USA/@40.697488,-73.979681,8z/data=!4m5!3m4!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!8m2!3d40.7127753!4d-74.0059728?hl=en'
            target='_blank'
            rel='noreferrer'>
            <i className='fa fa-map-marker-alt'></i> view on map
          </a> */}
        </h4>
        <Row>
          <Col md='6' xl='4'>
            <ul className='property-list-details'>
              <li>
                <span>Tên Nhà :</span> {singleData1.houseRentName}
              </li>
              <li>
                <span>Diện tích :</span> {singleData1.area}
              </li>
              <li>
                <span>Điều hòa :</span> {singleData1.airConditioning ? ('Có') : ('Không')}
              </li>
              <li>
                <span>Máy nóng lạnh :</span> {singleData1.waterHeater ? ('Có') : ('Không')}
              </li>
              <li>
                <span>Wi-Fi :</span> {singleData1.wifi ? ('Có') : ('Không')}
              </li>
              <li>
                <span>Máy giặt :</span> {singleData1.washingMachine ? ('Có') : ('Không')}
              </li>
            </ul>
          </Col>
          <Col md='6' xl='4'>
            <ul className='property-list-details'>
              <li>
                <span>Gường ngủ :</span> {singleData1.bed}
              </li>
              <li>
                <span>Nơi đổ xe :</span> {singleData1.parking ? ('Có') : ('Không')}
              </li>
              <li>
                <span>Tủ lạnh :</span> {singleData1.refrigerator ? ('Có') : ('Không')}
              </li>
              <li>
                <span>Nhà vệ sinh :</span> {singleData1.restroom}
              </li>
              <li>
                <span>Nhà bếp :</span> {singleData1.kitchen ? ('Có') : ('Không')}
              </li>
            </ul>
          </Col>
          <Col md='6' xl='4'>
            <ul className='property-list-details'>
              <li>
                <span>Tiền điện:</span> {singleData1.electricityPrice}
              </li>
              <li>
                <span>Tiền nước :</span> {singleData1.waterPrice}
              </li>
              <li>
                <span>Tiền nhà :</span> {singleData1.rentPrice}
              </li>
              <li>
                <span>Chi tiết :</span> {singleData1.detail}
              </li>
              <li>
                <span>Địa chỉ :</span> {singleData1.address}
              </li>
            </ul>
          </Col>
        </Row>
        {/* <h4 className='content-title mt-4'>Attachments</h4>
        <a className='attach-file'>
          <i className='far fa-file-pdf'></i>Demo Property Document{" "}
        </a> */}
      </div>
    </div>
  );
};

export default DetailsDeskBox;
