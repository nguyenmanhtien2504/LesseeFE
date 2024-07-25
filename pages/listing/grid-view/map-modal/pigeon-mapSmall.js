/**
 * It's a function that returns
 * @returns a React component.
 */
import React, { useState } from "react";

import NavbarThree from "../../../../layout/headers/NavbarThree";


import FooterOne from "../../../../layout/footers/FooterOne";
import Breadcrumb from "../../../../layout/Breadcrumb/Breadcrumb";
import GridView from "../../../../components/listing/gridView/grid/GridViewSmall";
import MapModal from "../../../../components/listing/gridView/MapModalSmall";
import Pigeon from "../../../../components/listing/gridView/map/PigeonMap";
import { useRouter } from "next/router";

const PigeonMap = () => {
  const [mapModal, setMapModal] = useState(false);
  const router = useRouter();
  const { miA, maA, miD, maD, dh, nl, wf, mg, sd, tl, nb} = router.query;

  const miANumber = parseInt(miA);
  const maANumber = parseInt(maA);
  const miDNumber = parseInt(miD);
  const maDNumber = parseInt(maD);
  // var dhb = JSON.parse(dh);
  // var nlb = JSON.parse(nl);
  // var wfb = JSON.parse(wf);
  // var mgb = JSON.parse(mg);
  // var sdb = JSON.parse(sd);
  // var tlb = JSON.parse(tl);
  // var nbb = JSON.parse(nb);

  const filter ={
    miANumber : miANumber,
    maANumber : maANumber,
    miDNumber : miDNumber,
    maDNumber : maDNumber,
    dh : dh,
    nl : nl,
    wf : wf,
    mg : mg,
    sd : sd,
    tl : tl,
    nb : nb,
  }; 
  console.log(filter);

  return ( 
    <>
      <NavbarThree />
      <Breadcrumb />
      <GridView side={"left"} size={2} gridType={"grid-view"} mapModal={true} mapView={true} gridBar={true} setMapModal={setMapModal} setfilter1={filter} />
      <MapModal mapModal={mapModal} setMapModal={setMapModal}>
        <Pigeon />
      </MapModal>
      <FooterOne />
    </>
  );
};

export default PigeonMap;
