/**
 * It takes a locale and an array of namespaces, and returns an object with the translations for those
 * namespaces
 * @returns The PigeonMap component is being returned.
 */
import React from "react";

import NavbarThree from "../../../../layout/headers/NavbarThree";


import FooterOne from "../../../../layout/footers/FooterOne";
import GridView from "../../../../components/listing/gridView/grid/GridView";
import Pigeon from "../../../../components/listing/gridView/map/PigeonMap";

const PigeonMap = () => {
  return (
    <>
      <NavbarThree />
      <section className='layout-map header-map'>
        <Pigeon />
      </section>
      {/* <GridView side={"left"} size={2} gridType={"grid-view"} gridBar={true} /> */}
      <FooterOne />
    </>
  );
};

export default PigeonMap;
