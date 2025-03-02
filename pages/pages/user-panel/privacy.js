import React from "react";

import NavbarThree from "../../../layout/headers/NavbarThree";


import FooterThree from "../../../layout/footers/FooterThree";
import Breadcrumb from "../../../layout/Breadcrumb/Breadcrumb";
import BodyContent from "../../../components/pages/userPanel";

const Privacy = () => {
  return (
    <>
      <NavbarThree />
      <Breadcrumb />
      <BodyContent active={"Privacy"} />
      <FooterThree />
    </>
  );
};

export default Privacy;
