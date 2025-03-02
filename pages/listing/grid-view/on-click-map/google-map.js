import React, { useState } from "react";

import NavbarThree from "../../../../layout/headers/NavbarThree";


import FooterThree from "../../../../layout/footers/FooterThree";
import Breadcrumb from "../../../../layout/Breadcrumb/Breadcrumb";
import GridView from "../../../../components/listing/gridView/grid/GridView";
import Google from "../../../../components/listing/gridView/map/GoogleMap";

const GoogleMap = () => {
  const [mapModal, setMapModal] = useState(false);
  return (
    <>
      <NavbarThree />
      <Breadcrumb />
      <GridView side={"left"} size={2} gridType={"grid-view"} mapModal={true} mapView={true} gridBar={true} setMapModal={setMapModal}>
        <div className={`onclick-map ${mapModal ? "d-block" : "d-none"}`}>
          <Google />
        </div>
      </GridView>
      <FooterThree />
    </>
  );
};

export default GoogleMap;
