import React from "react";

import FooterThree from "../../layout/footers/FooterThree";
import NavbarThree from "../../layout/headers/NavbarThree";


import BodyContent from "../../components/modules/fullBanner";

const FullBanner = () => {
  return (
    <>
      <NavbarThree />
      <BodyContent />
      <FooterThree />
    </>
  );
};

export default FullBanner;
