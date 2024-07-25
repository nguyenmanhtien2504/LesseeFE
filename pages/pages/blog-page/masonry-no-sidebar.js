/**
 * It takes a locale and an array of namespaces and returns an object with the translations for those
 * namespaces
 * @returns a React component.
 */
import React from "react";

import NavbarThree from "../../../layout/headers/NavbarThree";


import Breadcrumb from "../../../layout/Breadcrumb/Breadcrumb";
import FooterOne from "../../../layout/footers/FooterOne";
import BodyContent from "../../../components/pages/blogPage/masonry";

const MasonryNoSidebar = () => {
  return (
    <>
      <NavbarThree />
      <Breadcrumb />
      <BodyContent side={false} />
      <FooterOne />
    </>
  );
};

export default MasonryNoSidebar;
