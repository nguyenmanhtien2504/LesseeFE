import React from "react";
import { Check } from "react-feather";
import { NavItem } from "reactstrap";

const WizrdSteps = ({ activeTab }) => {
  return (
    <div className="theme-card">
      <ul className="wizard-steps">
        <NavItem className={`step-container step-1 ${activeTab === 1 ? "active" : activeTab > 1 ? "disabled" : ""}`}>
          <div className="media">
            <div className="step-icon">
              <Check />
              <span>1</span>
            </div>
            <div className="media-body">
              <h5>Thông tin</h5>
              <h6>Thông tin nhà & Thanh toán</h6>
            </div>
          </div>
        </NavItem>
        <NavItem className={`step-container step-2 ${activeTab === 2 ? "active" : activeTab > 2 ? "disabled" : ""}`}>
          <div className="media">
            <div className="step-icon">
              <Check />
              <span>2</span>
            </div>
            <div className="media-body">
              <h5>Kiểm tra</h5>
              <h6>Kiểm tra đơn của bạn</h6>
            </div>
          </div>
        </NavItem>
        <NavItem className={`step-container step-3 ${activeTab === 3 ? "active" : activeTab > 3 ? "disabled" : ""}`}>
          <div className="media">
            <div className="step-icon">
              <Check />
              <span>3</span>
            </div>
            <div className="media-body">
              <h5>Thời gian</h5>
              <h6>Thời gian thuê</h6>
            </div>
          </div>
        </NavItem>
        <NavItem className={`step-container step-4 ${activeTab === 4 ? "active" : activeTab > 4 ? "disabled" : ""}`}>
          <div className="media">
            <div className="step-icon">
              <Check />
              <span>4</span>
            </div>
            <div className="media-body">
              <h5>Xác nhận</h5>
              <h6>Xác nhận người dùng</h6>
            </div>
          </div>
        </NavItem>
      </ul>
    </div>
  );
};

export default WizrdSteps;
