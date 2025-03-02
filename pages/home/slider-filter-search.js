/**
 * It returns the NavbarOne, BodyContent, and FooterOne components
 * @returns The NavbarOne, BodyContent, and FooterOne components are being returned.
 */

import { useEffect } from "react";
import BodyContent from "../../components/home/slider-filter-search";
import { ConfigDB } from "../../config/themeCustomizerConfig";
import FooterOne from "../../layout/footers/FooterOne";
import NavbarOne from "../../layout/headers/NavbarOne";



const SliderFilterSearch = () => {
  useEffect(() => {
    setTimeout(() => {
      !ConfigDB.PrimaryColor && document.documentElement.style.setProperty("--theme-default", "#2c2e97");
      !ConfigDB.SecondaryColor && document.documentElement.style.setProperty("--theme-default2", "#4b55c4");
    }, 0.1);
  }, []);
  return (
    <>
      <NavbarOne />
      <BodyContent />
      <FooterOne />
    </>
  );
};

export default SliderFilterSearch;
