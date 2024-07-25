import React, { useEffect, useState } from 'react'
import {  Col, Row } from "reactstrap";
import axios from "axios"; 
import {getTokenFromCookie } from '../../../utils/tokenUtils.js'


const Step1 = ({ setActiveTab, setData, id }) => {

  const [value, setValue] = useState({});

  const token = getTokenFromCookie();


  const numberWithCommas = (number) => {
    return number?.toLocaleString();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://ehouseapi20230817222213.azurewebsites.net/api/HouseRent/GetHouseRentsById/${id}`);
        setValue(response.data); // Thêm .data vào response
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  const handlePayment = async (e) => {
    e.preventDefault()

    let payment = {};

    const objectJSON = {
      appId: 0,
      appUser: "",
      appTime: 0, 
      amount: value.rentPrice,
      appTransId: "",
      embedData: "",
      item: "",
      description: "",
      bankCode: ""
    }

    try {
      const response = await fetch(`https://ehouseapi20230817222213.azurewebsites.net/api/Payment/CreateOrder`, {
        method: 'POST',
        headers: {
            Authorization: token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(objectJSON),
      });
      if (response.ok) {
        const responseJson = await response.json();
        payment = responseJson;
        const urlPay = responseJson.orderUrl;
        window.open(urlPay, "_blank");
      } else {
        // Xử lý đăng nhập thất bại
        alert('Thanh toán nhà thuê không thành công')
        window.location.reload()
        setError('Thanh toán thất bại');
      }
    } catch (error) {
      alert('Thanh toán nhà thuê không thành công, Lỗi sever');
      console.log(error);
      window.location.reload();
    }

    setActiveTab((prev) => prev + 1);
    setData((prev) => ({ ...prev, ...payment }));
  }
  return (

    <form >
      <div className="wizard-step-1 d-block">
        <h2>Thông tin</h2>
        <p className="font-roboto">Thông tin chi tiết</p>
        <Row className="gx-2 gx-sm-3">
          <Col sm="6" className="form-group">
            <label>Tên nhà</label>
            <input
              id="houseRentName"
              name="houseRentName"
              type="text"
              className="form-control"
              value={value.houseRentName}
              readOnly
            />
          </Col>
          <Col sm="6" className="form-group">
            <label>Tiền thuê nhà/ Tháng</label>
            <input
              id="rentPrice"
              name="rentPrice"
              type="text"
              className="form-control"
              value={numberWithCommas(value.rentPrice)}
              readOnly
            />
          </Col>
          <Col sm="4" className="form-group">
            <label>Diện tích/m2</label>
            <input
              id="area"
              name="area"
              type="text"
              className="form-control"
              value={value.area}
              readOnly
            />
          </Col>
          <Col sm="4" className="form-group">
            <label>Tiền điện / 1 số</label>
            <input
              id="electricityPrice"
              name="electricityPrice"
              type="text"
              className="form-control"
              value={numberWithCommas(value.electricityPrice)}
              readOnly
            />
          </Col>
          <Col sm="4" className="form-group">
            <label>Tiền nước / m3</label>
            <input
              id="waterPrice"
              name="waterPrice"
              type="text"
              className="form-control"
              value={numberWithCommas(value.waterPrice)}
              readOnly
            />
          </Col>
          <Col sm="12" className="form-group">
            <label>Chi tiết nhà</label>
            <input
              id="detail"
              name="detail"
              type="text"
              className="form-control"
              value={value.detail}
              readOnly
            />
          </Col>
          <Col sm="12" className="form-group">
            <label>Qui định hợp đồng</label>
            <input
              id="detail1"
              name="detail1"
              type="text"
              className="form-control"
              value={"Nộp trước tiền cọc nhà 1 tháng"}
              readOnly
            />
          </Col>
          <div className="next-btn text-end">
            <button onClick={handlePayment} className="btn btn-gradient next1 btn-pill">
              Thanh toán cọc <i className="fas fa-arrow-right ms-2" />
            </button>
          </div>
        </Row>
      </div>
    </form>

    // <Formik
    //   initialValues={{
    //     houseRentName: value.houseRentName,
    //     area: value.area,
    //     electricityPrice: value.electricityPrice,
    //     waterPrice: value.waterPrice,
    //     rentPrice: value.rentPrice,
    //     detail: value.detail,
    //     address: value.address
    //   }}
    // //   validationSchema={Yup.object().shape({
    // //     houseRentName: Yup.string().required(),
    // //     area: Yup.number().required(),
    // //     electricityPrice: Yup.number().required(),
    // //     waterPrice: Yup.number().required(),
    // //     rentPrice: Yup.number().required(),
    // //     detail: Yup.string().required(),
    // //     address: Yup.string().required(),
    // // })}
    //   onSubmit={handlePayment}
    //   render={() => (
    //     <Form>
    //       <div className="wizard-step-1 d-block">
    //         <h2>Thông tin</h2>
    //         <p className="font-roboto">Thông tin chi tiết</p>
    //         <Row className="gx-2 gx-sm-3">
    //           <Col sm="6" className="form-group">
    //             <Field name="houseRentName" component={ReactstrapInput} type="text" className="form-control" label="Tên nhà"/>
    //           </Col>
    //           <Col sm="6" className="form-group ">
    //             <Field
    //               name="area"
    //               component={ReactstrapInput}
    //               type="text"
    //               className="form-control"
    //               label="Diện tích m2"
    //             />
    //           </Col>
    //           <Col sm="6" className="form-group ">
    //             <Field
    //               name="electricityPrice"
    //               component={ReactstrapInput}
    //               type="text"
    //               className="form-control"
    //               label="Tiền điện"
    //             />
    //           </Col>
    //           <Col sm="6" className="form-group ">
    //             <Field
    //               name="waterPrice"
    //               component={ReactstrapInput}
    //               type="text"
    //               className="form-control"
    //               label="Tiền nước"
    //             />
    //           </Col>
    //           <Col sm="6" className="form-group ">
    //             <Field
    //               name="rentPrice"
    //               component={ReactstrapInput}
    //               type="text"
    //               className="form-control"
    //               label="Tiền thuê"
    //             />
    //           </Col>
    //           <Col sm="6" className="form-group ">
    //             <Field
    //               name="detail"
    //               component={ReactstrapInput}
    //               type="text"
    //               className="form-control"
    //               label="Chi tiết"
    //             />
    //           </Col>
    //           <div className="next-btn text-end">
    //             <Button type="submit" className="btn btn-gradient next1 btn-pill">
    //               Thanh toán cọc <i className="fas fa-arrow-right ms-2" />
    //             </Button>
    //           </div>
    //         </Row>
    //       </div>
    //     </Form>
    //   )}
    // />
  );
};

export default Step1;
