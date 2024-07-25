/**
 * It fetches data from the API and then renders the data in the UI
 * @returns The return value of the function is the value of the last expression in the function body.
 */
import React, { useEffect, useState } from "react";
import { getData } from "../../../utils/getData";
import { AppPropertyData } from "../../../data/appPropertyData";
import AboutSection from "./About";
import BannerSection from "./Banner";
import BrandSection from "./Brand";
import CitiesWisePropertySection from "./CitiesWiseProperty";
import FeatureSection from "./Feature";
import HomeBannerSection from "./HomeBanner";
import OfferSection from "./Offer";
import PropertySection from "./Property";
import SalePropertySection from "./SaleProperty";
import TestimonialSection from "./Testimonial";
import axios from "axios";
import {getTokenFromCookie } from '../../../utils/tokenUtils.js'

const BodyContent = () => {
  const [value, setValue] = useState();
  const [clientData, setClientData] = useState();
  const [lessor, setLessor] = useState([]);
  const token = getTokenFromCookie();

  useEffect(() => {
    getData(`${process.env.API_URL}/property`)
      .then((res) => {
        setValue(res.data);
      })
      .catch((error) => console.log("Error", error));
    getData(`${process.env.API_URL}/client-agent`)
      .then((res) => {
        setClientData(res.data);
      })
      .catch((error) => console.log("Error", error));
  }, []);

  const [propertydata, setPropertydata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://ehouseapi20230817222213.azurewebsites.net/api/HouseRent/GetHouseRentsByHouseStatus?houseStatus=false"
          , {
            headers: {
              Authorization: token,
            }
          });
        setPropertydata(response.data); // Thêm .data vào response

        const response1 = await axios.get(
          "https://ehouseapi20230817222213.azurewebsites.net/api/User/GetLessors"
          , {
            headers: {
              Authorization: token,
            }
          });
        setLessor(response1.data); // Thêm .data vào response
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <HomeBannerSection />
      {/* <SalePropertySection value={value?.LatestForSalePropertyData} /> */}
      <FeatureSection value={value?.FeaturedProperty} data1={propertydata}/>
      <PropertySection value={value?.LatestPropertyData} data1={propertydata}/>
      {/* <OfferSection value={AppPropertyData.OurNewOffer} /> */}
      {/* <CitiesWisePropertySection value={value?.FindPropertiesInTheseCities} /> */}
      {/* <BannerSection /> */}
      <AboutSection value={clientData?.MeetOurAgent} data1={lessor} />
      {/* <TestimonialSection value={clientData?.HappyClient} normal={true} /> */}
      <BrandSection />
    </>
  );
};

export default BodyContent;
