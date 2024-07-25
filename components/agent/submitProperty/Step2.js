import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "reactstrap";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import {
  ReactstrapInput,
  ReactstrapSelect,
} from "../../../utils/ReactstrapInputsValidation";
import axios from "axios";

const Step2 = ({ setActiveTab, setData, data }) => {
  
  const [paymentStatus, setPaymentStatus]  = useState(null);
  const [statusPay, setStatusPay] = useState(false);

  let statusPayment = {};

  console.log(data);

  const handleCheck = async () => {

    try {
      const response = await axios.post('https://ehouseapi20230817222213.azurewebsites.net/api/Payment/CheckOrder', {
        appId: 0,
        appTransId: data.appTransId,
      });

      if (response.data.returnCode === 1) {
        setPaymentStatus('thanh toán thành công');
        statusPayment = response.data;
        setStatusPay(true)
      } else if (response.data.returnCode === 2 || response.data.returnCode === 3) {
        setPaymentStatus('thanh toán bạn chưa thành công');
        setStatusPay(false)
      }
    } catch (error) {
      console.error('Lỗi khi gọi API:', error);
      setPaymentStatus(null);
      setStatusPay(false)
    }
  };
  
  const handleClick = () => {
    if(statusPay){
      setActiveTab((prev) => prev + 1);
    setData((prev) => ({ ...prev, ...statusPayment }));
    }
    if(!statusPay){
      alert('Bạn phải thanh toán trước khi qua bước tiếp theo !')
    }
  }
  return (
    <>
      <div>
        <button
          className="btn btn-gradient next1 btn-pill"
          onClick={handleCheck}
        >
          Kiểm tra tình trạng thanh toán
          <i className="fas ms-2" />
        </button>
      </div>
      <br />
      {paymentStatus && <p className={statusPay ? 'text-success' : 'text-danger'}>{paymentStatus}</p>}
      <div className="next-btn text-end">
        <button
          type="button"
          className="btn btn-dashed color-2 prev1 btn-pill"
          onClick={() => setActiveTab((prev) => prev - 1)}
        >
          <i className="fas fa-arrow-left me-2" /> Quay về
        </button>
        <button
          type="submit"
          className="btn btn-gradient color-2 next2 btn-pill"
          onClick={handleClick}
        >
          Tiếp tục <i className="fas fa-arrow-right ms-2" />
        </button>
      </div>
    </>
  );
};

export default Step2;
