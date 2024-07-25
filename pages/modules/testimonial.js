import React from "react";

import FooterThree from "../../layout/footers/FooterThree";
import NavbarThree from "../../layout/headers/NavbarThree";


import Breadcrumb from "../../layout/Breadcrumb/Breadcrumb";
import BodyContent from "../../components/modules/testimonial";

const Testimonial = () => {
  return (
    <>
      <NavbarThree />
      <Breadcrumb />
      <BodyContent />
      <FooterThree />
    </>
  );
};

export default Testimonial;
