/**
 * It fetches the translations from the server and passes them to the component as props
 * @returns The GoogleMap component is being returned.
 */
import React from "react";

import NavbarSix from "../../../../layout/headers/NavbarSix";


import FooterThree from "../../../../layout/footers/FooterThree";
import GridView from "../../../../components/listing/gridView/grid/GridView";
import Google from "../../../../components/listing/gridView/map/GoogleMap";

const GoogleMap = () => {
  return (
    <>
      <NavbarSix />
      <section className='layout-map header-map'>
        <Google />
      </section>
      <GridView side={"left"} size={2} gridType={"grid-view"} gridBar={true} />
      <FooterThree />
    </>
  );
};

export default GoogleMap;
