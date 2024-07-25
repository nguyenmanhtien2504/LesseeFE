import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Col, Form, Input, Label, Modal, ModalBody,FormText, ModalFooter, ModalHeader, Row } from "reactstrap";
import {getTokenFromCookie } from '../../../../utils/tokenUtils.js'


const EditProfile = ({ toggle, setModal, profileDetail }) => {
  const [inputs, setInputs] = useState({ ...profileDetail });

  const token = getTokenFromCookie();

  const [showpassword, setShowpassword] = useState(false);
  const [showpassword1, setShowpassword1] = useState(false);
  const [showpassword2, setShowpassword2] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    setInputs({ ...profileDetail });
  }, [profileDetail]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    if (name === "newPassword" || name === "confirmNewPassword") {
      if (!/^(?=.*[A-Za-z])(?=.*\d).{1,12}$/.test(value)) {
        setPasswordError("Mật khẩu phải chứa ít nhất một ký tự số và một ký tự chữ cái, và có độ dài tối đa là 12.");
      } else {
        setPasswordError("");
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setModal(false);

    if (passwordError) {
      alert(passwordError);
      return;
    }

    console.log("Form values:", inputs);
    console.log(token)

    try {
      // Gửi yêu cầu POST đến API đăng nhập
      const response = await fetch(`https://ehouseapi20230817222213.azurewebsites.net/api/User/ChangePassword?username=${inputs.username}&password=${inputs.password}&newPassword=${inputs.newPassword}&confirmNewPassword=${inputs.confirmNewPassword}`, {
        method: "POST",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        alert('Thay đổi mật khẩu thành công !')
        window.location.reload();
      } else {
        const responseText = await response.text();
        if (responseText === "Wrong password or username") {
          alert('Lỗi bạn đã nhập sai tài khoản hoặc mật khẩu');
        } else {
          alert('Lỗi mật khẩu không trùng với mật khẩu xác nhận');
        }
      }
    } catch (error) {
      alert("lỗi sever " + error);
    }    
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
                <Col md="6" className="form-group col-md-6">
                  <Label htmlFor="last">Tên đăng nhập</Label>
                  <Input
                    name="username"
                    type="text"
                    className="form-control"
                    placeholder="Tên đăng nhập"
                    value={inputs.username || "Loading ..."}
                    onChange={handleChange} // Thêm sự kiện onChange
                  />
                  
                </Col>
                <Col md="6" className="form-group col-md-6">
                <Label htmlFor="last">Mật khẩu</Label>
                  <div className="input-group">
                    <Input
                      name="password"
                      type={showpassword ? "text" : "password"} // Sử dụng showpassword
                      className="form-control"
                      placeholder="Mật khẩu"
                      onChange={handleChange}
                    />
                    <div className="input-group-apend">
                      <i
                        id="pwd-icon"
                        className={`far fa-eye${!showpassword ? "-slash" : ""}`}
                        onClick={() => {
                          setShowpassword(!showpassword);
                        }}
                      />
                    </div>
                  </div>
                </Col>
                <Col md="12" className="form-group col-md-12">
                <Label htmlFor="last">Mật khẩu mới</Label>
                  <div className="input-group">
                    <Input
                      name="newPassword"
                      type={showpassword1 ? "text" : "password"} // Sử dụng showpassword1
                      className={`form-control ${passwordError ? "is-invalid" : ""}`}
                      placeholder="Mật khẩu mới"
                      onChange={handleChange}
                    />
                    <div className="input-group-apend">
                      <i
                        id="pwd-icon"
                        className={`far fa-eye${!showpassword1 ? "-slash" : ""}`}
                        onClick={() => {
                          setShowpassword1(!showpassword1);
                        }}
                      />
                    </div>
                  </div>
                  {passwordError && <div className="invalid-feedback">{passwordError}</div>}
                </Col>
                <Col md="12" className="form-group col-md-12">
                <Label htmlFor="last">Xác nhận khẩu mới</Label>
                  <div className="input-group">
                    <Input
                      name="confirmNewPassword"
                      type={showpassword2 ? "text" : "password"} // Sử dụng showpassword2
                      className={`form-control ${passwordError ? "is-invalid" : ""}`}
                      placeholder="Xác nhận khẩu mới"
                      onChange={handleChange}
                    />
                    <div className="input-group-apend"> 
                      <i
                        id="pwd-icon"
                        className={`far fa-eye${!showpassword2 ? "-slash" : ""}`}
                        onClick={() => {
                          setShowpassword2(!showpassword2);
                        }}
                      />
                    </div>
                  </div>
                  {passwordError && <div className="invalid-feedback">{passwordError}</div>}
                </Col>
              </Row>
            </Form>
          </ModalBody>
          <ModalFooter className="modal-footer">
          <p className="important-note" >Chú ý : Mật khẩu mới phải chứa ít nhất một ký tự số và một ký tự chữ cái, và có độ dài tối đa là 12.</p>
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
