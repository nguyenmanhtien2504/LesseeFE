/**
 * It takes an array of objects, and returns a new array of objects with the same keys, but with the
 * values transformed by the function you pass in
 * @returns The data is being returned as an array of objects.
 */
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { getData } from "../../../utils/getData";
import PropertyBox from "../../elements/propertyBoxs/PropertyBox1";
import axios from "axios";

const RelatedProperty = () => {
  const [propertydata, setPropertydata] = useState([]);

  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://ehouseapi20230817222213.azurewebsites.net/api/HouseRent/GetHouseRents");
      setPropertydata(response.data); // Thêm .data vào response
    } catch (error) {
      console.log(error);
    }
  };
  fetchData();
}, []);

console.log(propertydata); 

  return (
    <section className="property-section pt-0">
      <Container>
        <div className="title-3 text-start inner-title">
          <h2>Các nhà liên quan</h2>
        </div>
        <Row className=" ratio_55">
          <Col sm="12" className=" property-grid-3">
            <Row className="property-2  column-sm zoom-gallery property-label property-grid">
              {propertydata &&
                propertydata.slice(0, 3).map((data, i) => (
                  <Col xl="4" md="6" className="wow fadeInUp" key={i}>
                    <PropertyBox data={data} />
                  </Col>
                ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default RelatedProperty;
