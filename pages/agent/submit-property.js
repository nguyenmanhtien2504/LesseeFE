import React, { useEffect, useState } from 'react'

import BodyContent from "../../components/agent/submitProperty";
import Breadcrumb from "../../layout/Breadcrumb/Breadcrumb";
import FooterOne from "../../layout/footers/FooterOne";
import NavbarThree from "../../layout/headers/NavbarThree";
import { useRouter } from "next/router";
import axios from "axios"; 



const SubmitProperty = () => {
  const router = useRouter();
  const { id } = router.query;

  const [value, setValue] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://ehouseapi20230817222213.azurewebsites.net/api/HouseRent/GetHouseRentsById/" + id);
        setValue(response.data); // Thêm .data vào response
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  console.log(value)

  return (
    <>
      <NavbarThree />
      <Breadcrumb />
      <BodyContent id ={id} value={value} />
      <FooterOne />
    </>
  );
};

export default SubmitProperty;
