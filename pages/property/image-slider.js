/**
 * It takes a locale and an array of namespaces, and returns an object with the translations for those
 * namespaces
 * @returns The data is being returned as an array of objects.
 */
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import BodyContent from "../../components/property/tabPanelPages";
import SliderSection from "../../components/property/tabPanelPages/Slider";
import FooterOne from "../../layout/footers/FooterOne";
import NavbarFive from "../../layout/headers/NavbarFive";
import axios from "axios";
import {getTokenFromCookie } from '../../utils/tokenUtils.js'


import { getData } from "../../utils/getData";

const View360 = () => {
  const router = useRouter();
  const { id } = router.query;
  const [value, setValue] = useState({});
  const token = getTokenFromCookie();

  useEffect(() => {
    getData(`${process.env.API_URL}/property`)
      .then((res) => {
        setValue(
          Object.keys(res.data)
            .map((key) => [res.data[key]])
            .flat(2)
            .filter((item) => item.id === id)
            .pop(),
        );
      })
      .catch((error) => console.log("Error", error));
  }, [id]);

    const [propertydata, setPropertydata] = useState([]);

    useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://ehouseapi20230817222213.azurewebsites.net/api/HouseRent/GetHouseRentsById/" + id
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
  }, [id]);

  console.log(propertydata);

  return (
    <>
      <NavbarFive />
      <BodyContent singleData={value} singleData1={propertydata} id={id}>
        {/* <SliderSection singleData={value?.img} /> */}
      </BodyContent>
      <FooterOne />
    </>
  );
};

export default View360;
