/**
 * It fetches the translations from the server and passes them to the component as props
 * @returns A React component.
 */
import React from "react";

import NavbarThree from "../../../../layout/headers/NavbarThree";


import FooterOne from "../../../../layout/footers/FooterOne";
import Breadcrumb from "../../../../layout/Breadcrumb/Breadcrumb";
import GridView from "../../../../components/listing/gridView/grid/GridViewAll";

const NoSidebar = () => {
  return (
    <>
      <NavbarThree />
      <Breadcrumb />
      <GridView side={false} size={3} gridType={"grid-view"} listSize={2} gridBar={true} />
      <FooterOne />
    </>
  );
};

export default NoSidebar;
