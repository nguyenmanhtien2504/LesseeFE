/**
 * It takes in a bunch of props, and returns a bunch of JSX
 * @returns The return value of the function is the value of the last expression in the function body.
 */
import React, { useEffect, useReducer, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Pagination from "../../../../layout/Pagination";
import Category from "../../../../layout/sidebarLayout/Category";
import ContactInfo from "../../../../layout/sidebarLayout/ContactInfo";
import Filter from "../../../../layout/sidebarLayout/FilterSmall";
import Header from "../../../../layout/sidebarLayout/Header";
import RecentlyAdded from "../../../../layout/sidebarLayout/RecentlyAdded";
import Sidebar from "../../../../layout/sidebarLayout/Sidebar";
import { getData } from "../../../../utils/getData";
import FilterTag from "../../elements/FilterTag";
import GridLayout from "../../elements/GridLayout";
import { gridReducer, initialGrid } from "./gridReducer";
import axios from 'axios';
import {getTokenFromCookie } from '../../../../utils/tokenUtils.js'

const GridView = ({setfilter1, side, size, gridType, listSize, mapModal, mapView, relativeSlider, gridBar, video, tabHeader, setMapModal, children, AdvancedSearchShow, infiniteScroll, myList, setSearch }) => {
  const [value, setValue] = useState();
  const [grid, gridDispatch] = useReducer(gridReducer, initialGrid);
  const [propertydata, setPropertydata] = useState([]);
  const token = getTokenFromCookie();
  useEffect(() => {
    gridDispatch({ type: "gridSize", payload: size });
    gridDispatch({ type: "gridStyle", payload: gridType });
  }, []);

  useEffect(() => {
    getData(`${process.env.API_URL}/property`)
      .then((res) => {
        relativeSlider
          ? setValue(res.data?.LatestPropertyListingInEnterprise)
          : setValue(
              Object.keys(res.data)
                .map((key) => [res.data[key]])
                .flat(2)
                .filter((arrData) => Array.isArray(arrData.img)),
            );
      })
      .catch((error) => console.log("Error", error));
  }, [relativeSlider]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://ehouseapi20230817222213.azurewebsites.net/api/HouseRent/FilterHouseRent?minArea=${setfilter1.miDNumber}&maxArea=${setfilter1.maDNumber}&minRentPrice=${setfilter1.miANumber}&maxRentPrice=${setfilter1.maANumber}&airConditioning=${setfilter1.dh}&waterHeater=${setfilter1.nl}&wifi=${setfilter1.wf}&washingMachine=${setfilter1.mg}&parking=${setfilter1.sd}&refrigerator=${setfilter1.tl}&kitchen=${setfilter1.nb}&houseStatus=false`
          , {
            headers: {
              Authorization: token,
            }
          });
        setPropertydata(response.data); // Thêm .data vào response
      } catch (error) {
        console.log(error);
      }
    }; 
    fetchData();
  }, [setfilter1?.miDNumber]);

  return (
    <section className={`property-section  ${mapView && mapModal === "view" ? "section-sm" : ""}  ${relativeSlider ? "property-list-thumbnail" : ""}`}>
      <Container>
        <Row className=" ratio_63">
          {side && (
            <Sidebar side={side}>
              <Filter value={value} sm={12} lg={12} /> 
              {/* <Category value={value} /> */}
              {/* <ContactInfo /> */}
              {/* <RecentlyAdded /> */}
            </Sidebar>
          )}

          <Col xl={side ? "9" : ""} lg={side ? "8" : ""} className={`${relativeSlider ? "property-grid-3" : "property-grid-2"}  property-grid-slider`}>
            <Header grid={grid} gridDispatch={gridDispatch} title={"Danh sách nhà"} mapModal={mapModal} gridBar={gridBar} tabHeader={tabHeader} AdvancedSearchShow={AdvancedSearchShow} value={value} setMapModal={setMapModal} />
            {/* <FilterTag /> */}
            {children}
            <div className={`property-wrapper-grid ${grid.gridStyle ? "list-view" : ""}`}>
              <GridLayout grid={grid} myList={myList} value={propertydata} listSize={listSize} relativeSlider={relativeSlider} video={video} gridDispatch={gridDispatch} infiniteScroll={infiniteScroll} />
            </div>
            
              <a className="btn btn-solid btn-flat load-more" onClick={() => gridDispatch({ type: "toPage", payload: grid.toPage + 0.5 })}>
                Tiếp theo
              </a>
              <a className="btn btn-solid btn-flat load-more" onClick={() => gridDispatch({ type: "toPage", payload: grid.toPage - 0.5 })}>
                Trước đó
              </a>
            
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GridView;
