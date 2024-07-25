/**
 * It returns the children of the component, the top title, the image section, the gallery box, the
 * single property section, the reviews desk box, the contact info, the exploration, the filter, the
 * featured, the recently added, the mortgage, and the related property
 * @param props - {
 * @returns A React component.
 */
import React from "react";
import { Col, Container, Row } from "reactstrap";
import TopTitle1 from "../stickyTabOrClassic/TopTitle1";
import Sidebar from "../../../layout/sidebarLayout/Sidebar";
import ReviewsDeskBox from "../stickyTabOrClassic/ReviewsDeskBox";
import ContactInfo from "../../../layout/sidebarLayout/ContactInfo";
import Exploration from "../../../layout/sidebarLayout/Exploration";
import Mortgage from "../../../layout/sidebarLayout/Mortgage";
import Featured from "../../../layout/sidebarLayout/Featured";
import Filter from "../../../layout/sidebarLayout/Filter";
import RecentlyAdded from "../../../layout/sidebarLayout/RecentlyAdded";
import RelatedProperty from "../stickyTabOrClassic/RelatedProperty";
import GalleryBox from "./GalleryBox";
import ImageSection from "./Image";
import SinglePropertySection from "./SinglePropertySection";
import Img from "../../../utils/BackgroundImageRatio";

const BodyContent = (props) => {
  return (
    <>
      {props.children}
      <section className="without-top property-main small-section">
        <TopTitle1 singleData1={props.singleData1}/>
      </section>
      <section className="single-property mt-0 pt-0">
        <Container>
          <Row className=" ratio_55">
            <Col xl="9" lg="8">
              <div className="description-section tab-description">
                {/* {props.imgSection && <ImageSection />} */}
                <GalleryBox exploration={props.exploration} singleData1={props.singleData1} />
                {/* <div className="gallery-for">
                  <div>
                    <Img src={'/assets/images/property/4.jpg'} className="bg-img" />
                  </div>
                </div> */}
                
                <SinglePropertySection singleData1={props.singleData1} />
                <ReviewsDeskBox id={props.id} />
              </div>
            </Col>
            <Sidebar>
              <ContactInfo singleData1={props.singleData1} />
              <Exploration singleData1={props.singleData1} />
              {/* <Filter /> */}
              {/* <Featured /> */}
              {/* <RecentlyAdded /> */}
              {/* <Mortgage /> */}
            </Sidebar>
          </Row>
        </Container>
        <div className="related-abjust">
          <RelatedProperty />
        </div>
      </section>
    </>
  );
};

export default BodyContent;
