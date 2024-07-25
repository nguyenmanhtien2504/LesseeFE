import React, { useState } from "react";
import { Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

const DropdownInputFields = ({ selectedOptions, onSelect }) => {
  const [dropdownStates, setDropdownStates] = useState({});

  const InputForm = [
    { name: "Điều hòa", options: [true, false], chose : ['có', 'không'] },
    { name: "Nóng lạnh", options: [true, false], chose : ['có', 'không'] },
    { name: "Wifi", options: [true, false], chose : ['có', 'không'] },
    { name: "Máy giặt", options: [true, false], chose : ['có', 'không'] },
    { name: "Sân đỗ", options: [true, false], chose : ['có', 'không'] },
    { name: "Tủ Lạnh", options: [true, false], chose : ['có', 'không'] },
    { name: "Nhà Bếp", options: [true, false], chose : ['có', 'không'] },
  ];

  const toggleDropdown = (name) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  const handleOptionSelect = (name, option) => {
    const updatedOptions = { ...selectedOptions, [name]: option };
    onSelect(updatedOptions);
    toggleDropdown(name); // Đóng dropdown sau khi chọn option
  };

  return (
    <>
      <form>
        {InputForm.map((item) => (
          <div key={item.name}>
            <label htmlFor={item.name}>{item.name}:</label>
            <Dropdown isOpen={dropdownStates[item.name]} toggle={() => toggleDropdown(item.name)}>
              <DropdownToggle caret>
                {selectedOptions[item.name] ? "có" : "không"}
              </DropdownToggle>
              <DropdownMenu>
                {item.chose.map((option, index) => (
                  <DropdownItem
                    key={index}
                    onClick={() => handleOptionSelect(item.name, option === "có")}
                  >
                    {option}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </div>
        ))}
      </form>
    </>
  );
};

export { DropdownInputFields };
