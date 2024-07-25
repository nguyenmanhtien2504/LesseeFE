/**
 * It takes a locale and an array of namespaces, and returns an object with the translations for those
 * namespaces
 * @returns The return value of the function is an object with a props property.
 */
import React from "react";

import NavbarThree from "../../layout/headers/NavbarThree";


import FooterOne from "../../layout/footers/FooterOne";
import Breadcrumb from "../../layout/Breadcrumb/Breadcrumb";
import BodyContent from "../../components/contact/contactUs1";

const ContactUs1 = () => {
  return (
    <>
      <NavbarThree />
      <Breadcrumb />
      <BodyContent />
      <FooterOne />
    </>
  );
};

export default ContactUs1;
