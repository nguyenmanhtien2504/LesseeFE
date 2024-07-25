import React from "react";

import NavbarThree from "../../../layout/headers/NavbarThree";


import FooterThree from "../../../layout/footers/FooterThree";
import Breadcrumb from "../../../layout/Breadcrumb/Breadcrumb";
import BodyContent from "../../../components/pages/userPanel";

const MyListing = () => {
  return (
    <>
      <NavbarThree />
      <Breadcrumb />
      <BodyContent active={"Listing"} />
      <FooterThree />
    </>
  );
};

export default MyListing;
