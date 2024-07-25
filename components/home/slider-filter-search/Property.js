/**
 * It takes in an array of objects and returns a row of property boxes
 * @returns A section with a container, row, and col.
 */
import React from "react";
import { Col, Container, Row } from "reactstrap";
import { LatestForSale, Rent } from "../../../constValues/constValues";
import PropertyBox1 from "../../elements/propertyBoxs/PropertyBox1";

const PropertySection = ({ value, range, data1 }) => {
  console.log(data1);
  return (
    <section className='property-section'>
      <Container>
        <Row className='ratio_55'>
          <Col>
            <div className='title-1'>
              <span className='label label-gradient'>Nhà Thuê</span>
              <h2>Đang xu hướng</h2>
              <hr />
            </div>
            <Row className='property-2 column-space'>
              {data1 &&
                data1.slice(`${range ? range[0] : 0}`, `${range ? range[1] : 6}`).map((data, i) => (
                  <Col xl='4' md='6' className='wow fadeInUp' key={i}>
                    <PropertyBox1 data={data} />
                  </Col>
                ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PropertySection;
