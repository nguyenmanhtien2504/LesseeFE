/**
 * It fetches the translations from the server and passes them to the component as props
 * @returns A React component.
 */
import React from "react";

import NavbarThree from "../../../../layout/headers/NavbarThree";


import FooterThree from "../../../../layout/footers/FooterThree";
import Breadcrumb from "../../../../layout/Breadcrumb/Breadcrumb";
import GridView from "../../../../components/listing/gridView/grid/GridView";

const RightSidebar = () => {
  return (
    <>
      <NavbarThree />
      <Breadcrumb />
      <GridView side={"right"} size={2} gridType={"grid-view"} gridBar={true} />
      <FooterThree />
    </>
  );
};

export default RightSidebar;
