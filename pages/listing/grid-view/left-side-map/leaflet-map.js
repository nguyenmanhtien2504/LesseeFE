/* A way to import a component that is not SSR friendly. */
import React from "react";
import dynamic from "next/dynamic";

import NavbarThree from "../../../../layout/headers/NavbarThree";


import Breadcrumb from "../../../../layout/Breadcrumb/Breadcrumb";
import FooterThree from "../../../../layout/footers/FooterThree";
import MapView from "../../../../components/listing/gridView/map/MapView";

const MyAwesomeMap = dynamic(() => import("../../../../components/listing/gridView/map/LeafletMap"), { ssr: false });

const LeafletMap = () => {
  return (
    <>
      <NavbarThree />
      <Breadcrumb />
      <MapView gridType={"grid-view"} side={"left"}>
        <MyAwesomeMap />
      </MapView>
      <FooterThree />
    </>
  );
};

export default LeafletMap;
