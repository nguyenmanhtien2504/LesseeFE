import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Col, Form, Input, Label, Modal, ModalBody,FormText, ModalFooter, ModalHeader, Row } from "reactstrap";
import {getTokenFromCookie } from '../../../../utils/tokenUtils.js'


const EditProfile = ({ toggle, setModal, profileDetail }) => {
  const [inputs, setInputs] = useState({ ...profileDetail });

  const token = getTokenFromCookie();

  useEffect(() => {
    setInputs({ ...profileDetail });
  }, [profileDetail]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setModal(false);
    console.log("Form values:", inputs);

    axios.put("https://ehouseapi20230817222213.azurewebsites.net/api/User/UpdateUser", inputs , {
      headers: {
          Authorization: token,
      }
    })
    .then((response) => {
      // Xử lý response thành công
      alert("Cập nhập thông tin thành công");
      window.location.reload();
    })
    .catch((error) => {
      // Xử lý lỗi khi request thất bại
      alert("Cập nhập thông tin không thành công");
    });
  };

  return (
    <div className="modal fade edit-profile-modal" id="edit-profile">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <Modal className="modal-content" isOpen={toggle} size="lg">
          <ModalHeader className="modal-header">
            <p className="modal-title">Chỉnh sửa</p>
            <Button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setModal(false)}>
              <span aria-hidden="true">×</span>
            </Button>
          </ModalHeader>
          <ModalBody className="modal-body">
            <Form id="modal-form" onSubmit={handleSubmit}>
              <Row className=" gx-3">
                <Col md="6" className="form-group">
                  <Label htmlFor="first">Họ và tên</Label>
                  <Input
                    name="fullName"
                    type="text"
                    className="form-control"
                    placeholder="Họ và tên"
                    value={inputs.fullName || "Loading ..."}
                    onChange={handleChange} // Thêm sự kiện onChange
                  />
                </Col>
                <Col md="6" className="form-group col-md-6">
                  <Label htmlFor="last">Ngày tháng năm sinh</Label>
                  <Input
                    name="dateofbirth"
                    type="text"
                    className="form-control"
                    placeholder="Ngày tháng năm sinh"
                    value={inputs.dateofbirth || "Loading ..."}
                    onChange={handleChange} // Thêm sự kiện onChange
                  />
                </Col>
                <Col md="6" className="form-group col-md-6">
                  <Label htmlFor="last">Số điện thoại</Label>
                  <Input
                    name="phoneNumber"
                    type="text"
                    className="form-control"
                    placeholder="Số điện thoại"
                    value={`(+84 )`+inputs.phoneNumber || "Loading ..."}
                    onChange={handleChange} // Thêm sự kiện onChange
                  />
                </Col>
                <Col md="6" className="form-group col-md-6">
                  <Label htmlFor="last">Gmail</Label>
                  <Input
                    name="gmail"
                    type="email"
                    className="form-control"
                    placeholder="Gmail"
                    value={inputs.gmail || "Loading ..."}
                    onChange={handleChange} // Thêm sự kiện onChange
                  />
                </Col>
                {/* <Col md="6" className="form-group col-md-6">
                  <Label htmlFor="last">Tên đăng nhập</Label>
                  <Input
                    name="username"
                    type="text"
                    className="form-control"
                    placeholder="Tên đăng nhập"
                    value={inputs.username || "Loading ..."}
                    onChange={handleChange} // Thêm sự kiện onChange
                    readOnly
                  />
                </Col>
                <Col md="6" className="form-group col-md-6">
                  <Label htmlFor="last">Mật khẩu</Label>
                  <Input
                    name="password"
                    type="text"
                    className="form-control"
                    placeholder="Tên đăng nhập"
                    value={inputs.password || "Loading ..."}
                    onChange={handleChange} // Thêm sự kiện onChange
                    readOnly
                  />
                </Col> */}
                <Col md="12" className="form-group col-md-12">
                  <Label htmlFor="last">Địa chỉ</Label>
                  <Input
                    name="address"
                    type="text"
                    className="form-control"
                    placeholder="Địa chỉ"
                    value={inputs.address || "Loading ..."}
                    onChange={handleChange} // Thêm sự kiện onChange
                  />
                </Col>
                {/* <div className="form-group col-md-6">
                  <Label htmlFor="gender">gender</Label>
                  <select name="gender" id="gender" className="form-control" value={inputs.gender}>
                    <option>female</option>
                    <option>male</option>
                  </select>
                </div>
                <div className="form-group col-md-6">
                  <Label>Birthday</Label>
                  <Input name="birthDay" type="date" className="form-control" placeholder="18 april" id="datepicker" value={new Date(inputs.birthDay) || ""} />
                </div>
                <div className="form-group col-12">
                  <Label htmlFor="inputAddress">Address</Label>
                  <Input name="address" type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" value={inputs.address || ""} />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputCity">City</label>
                  <input name="city" type="text" className="form-control" id="inputCity" value={inputs.city || ""} />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputState">State</label>
                  <select name="state" id="inputState" className="form-control" value={inputs.state}>
                    <option>IL</option>
                    <option>PL</option>
                    <option>GL</option>
                  </select>
                </div> */}
              </Row>
            </Form>
          </ModalBody>
          <ModalFooter className="modal-footer">
            <Button
              type="button"
              className="btn btn-dashed btn-pill"
              data-bs-dismiss="modal"
              onClick={() => {
                setModal(false);
              }}
            >
              hủy
            </Button>
            <Button type="submit" className="btn btn-gradient btn-pill" data-bs-dismiss="modal" form="modal-form">
              Lưu thay đổi
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
};

export default EditProfile;
