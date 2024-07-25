import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const RangeInputFields1 = ({ onFilterChange }) => { // Thay đổi tên prop thành onFilterChange
  const [amountValues, setAmountValues] = useState([0, 10000000]);
  const [distanceValues, setDistanceValues] = useState([0, 500]);

  const handleAmountRangeChange = (newValues) => {
    setAmountValues(newValues);
    onFilterChange({ amount: newValues, distance: distanceValues }); // Gọi hàm callback onFilterChange với giá trị mới
  };

  const handleDistanceRangeChange = (newValues) => {
    setDistanceValues(newValues);
    onFilterChange({ amount: amountValues, distance: newValues }); // Gọi hàm callback onFilterChange với giá trị mới
  };

  // Format the amount values for display
  const formattedAmountValues = amountValues.map((value) => `${value.toLocaleString()} VND`);

  // Format the distance values for display
  const formattedDistanceValues = distanceValues.map((value) => `${value.toLocaleString()} m2`);

  return (
    <div>
      <br />
      <Slider
        range
        min={0}
        max={10000000}
        value={amountValues}
        onChange={handleAmountRangeChange}
      />
      <span style={{ color: '#000' }}>Giá Tiền: {formattedAmountValues[0]} - {formattedAmountValues[1]}</span>
      <br />
      <br />

      <Slider
        range
        min={0}
        max={500}
        value={distanceValues}
        onChange={handleDistanceRangeChange}
      />
      <span style={{ color: '#000' }}>Diện tích: {formattedDistanceValues[0]} - {formattedDistanceValues[1]}</span>
      <br />

      {/* <button onClick={handleFilterButtonClick}>Filter</button> */}
    </div>
  );
};

export default RangeInputFields1;
