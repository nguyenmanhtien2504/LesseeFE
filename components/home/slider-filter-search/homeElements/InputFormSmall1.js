/**
 * It takes in a label, lg, and sm, and returns a row with a dropdown input field, a range input field,
 * and a button
 * @returns an object with the key of the property and the value of the property.
 */

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "reactstrap";
import { getData } from "../../../../utils/getData";
import { DropdownInputFields } from "../../../elements/DropdownInputFieldsTest";
import RangeInputFields from "../../../elements/RangeInputFields";
import RangeInputFields2 from "../../../elements/RangeInputFields2";
import { useRouter } from "next/router";

const InputForm = ({ label, lg, sm, lastSm }) => {
  const router = useRouter();

    const [selectedOptions, setSelectedOptions] = useState({
    "Điều hòa": true,
    "Nóng lạnh": true,
    "Wifi": true,
    "Máy giặt": true,
    "Sân đỗ": true,
    "Tủ Lạnh": true,
    "Nhà Bếp": true,
  });

  // State để lưu giá trị min và max mới từ component FilterSlider
  const [amountFilter, setAmountFilter] = useState([0, 10000000]);
  const [distanceFilter, setDistanceFilter] = useState([0, 500]);

  // Hàm callback để nhận các giá trị min và max mới từ component FilterSlider và log ra
  const handleFilterChange = (filter) => {
    setAmountFilter(filter.amount); // Cập nhật state amountFilter
    setDistanceFilter(filter.distance); // Cập nhật state distanceFilter
  };

  const handleClick = () => {
    router.push(`/listing/grid-view/map-modal/pigeon-map/?miA=${amountFilter[0]}&maA=${amountFilter[1]}&miD=${distanceFilter[0]}&maD=${distanceFilter[1]}&dh=${selectedOptions["Điều hòa"]}&nl=${selectedOptions["Nóng lạnh"]}&wf=${selectedOptions["Wifi"]}&mg=${selectedOptions["Máy giặt"]}&sd=${selectedOptions["Sân đỗ"]}&tl=${selectedOptions["Tủ Lạnh"]}&nb=${selectedOptions["Nhà Bếp"]}`);
  };


  const handleOptionSelect = (data) => {
    setSelectedOptions(data);
  }; 


  return (
    <Row className="gx-3">
      <DropdownInputFields selectedOptions={selectedOptions} onSelect={handleOptionSelect}/>
      <RangeInputFields2 onFilterChange={handleFilterChange} />
      <Col lg={lg || 12}>
        <button onClick={handleClick} className="btn btn-gradient mt-3">
            Tìm
        </button>
      </Col>
    </Row>
  );
};

export default InputForm;
