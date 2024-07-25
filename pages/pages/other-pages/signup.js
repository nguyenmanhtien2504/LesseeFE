import React, { useEffect, useState } from "react";
import {
  Lock,
  Mail,
  User,
  AtSign,
  Edit3,
  Map,
  Phone,
  Image,
} from "react-feather";
import * as Yup from "yup";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { format } from "date-fns";
import Link from "next/link";
import Breadcrumb from "../../../layout/Breadcrumb/Breadcrumb";
import FooterOne from "../../../layout/footers/FooterOne";
import NavbarThree from "../../../layout/headers/NavbarThree";
import { useRouter } from "next/router";
import { Field, Form, Formik } from "formik";
import {  getCookie  } from 'cookies-next';

const SignUp = () => {

  const [showpassword, setShowpassword] = useState(false);
  const router = useRouter();
  const [error, setError] = useState("");

  useEffect(() => {
    // Kiểm tra xem có token đã được lưu trong local storage hay chưa
    const storedToken = getCookie('token');
    if (storedToken) {
      // Xử lý trạng thái đã đăng nhập
      console.log('Người dùng đã đăng nhập!');
      router.push('/home/slider-filter-search');
    }
  }, []);

  const handleSubmit = async (value) => {
    const signUpdata = {
      uId: 0,
      fullName: value.fullName,
      dateofbirth: format(new Date(value.dateofbirth), "dd/MM/yyyy"),
      address: value.address,
      citizenIdentification: value.citizenIdentification.toString(),
      phoneNumber: value.phoneNumber.toString(),
      gender: value.gender,
      gmail: value.gmail,
      avatar: "/assets/images/avatar/5.png",
      username: value.username,
      password: value.password,
      rId: 3,
      roleName: "Lessee",
    };
    console.log(signUpdata.dateofbirth)

    try {
      // Gửi yêu cầu POST đến API đăng nhập
      const response = await fetch("https://ehouseapi20230817222213.azurewebsites.net/api/User/Register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signUpdata),
      });

      if (response.ok) {
        // Xử lý đăng nhập thành công
        const responseText = await response.text();
        if (responseText === 'SUCCESS') {
          alert('Đăng kí thành công, mời bạn vào gmail xác nhận')
          router.push('/pages/other-pages/login');
          } else {
            // Xử lý khi không thành công
            alert('Tài khoản bạn đăng kí đã có sẵn trên hệ thống, mời bạn kiểm tra lại: ' + responseText)
            console.log(responseText)
        }
      } else {
        // Xử lý đăng nhập thất bại
        alert('Đăng kí thất bại , lỗi sever')
        setError('Đăng kí thất bại , lỗi' + error);
      }

    } catch (error) {}
  };

  return (
    <>
      <NavbarThree />
      <Breadcrumb />
      <section>
      <Container fluid={true}>
        <Row className="log-in">
          <Col xxl="12" xl="12" lg="5" md="6" sm="8" className="form-login">
            <Card className="card">
              <CardBody className="card-body">
                <div className="title-3 text-start">
                  <h2>Đăng kí</h2>
                </div>
                <Formik
                  initialValues={{
                    fullName: "",
                    address: "",
                    citizenIdentification: undefined,
                    phoneNumber: undefined,
                    gender: "",
                    gmail: "",
                    username: "",
                    password: "",
                  }}
                  validationSchema={Yup.object().shape({
                    fullName: Yup.string().required("Họ và tên là bắt buộc..!"),
                    dateofbirth: Yup.string().required("ngày tháng năm sinh là bắt buộc..!"),
                    address: Yup.string().required("địa chỉ là bắt buộc..!"),
                    citizenIdentification: Yup.number().required(
                      "Căn cước công dân là bắt buộc..!"
                    ),
                    phoneNumber: Yup.number().required(
                      "Số diện thoại là bắt buộc..!"
                    ),
                    gender: Yup.string().required("Giới tính là bắt buộc..!")
                    .oneOf(["Nam", "Nữ"], "Giới tính không hợp lệ. Chỉ chấp nhận 'Nam' hoặc 'Nữ'."),
                    gmail: Yup.string()
                      .required("gmail là bắt buộc..!")
                      .matches(/\S+@\S+\.\S+/, "Phải là gmail hoàn chỉnh"),
                    username: Yup.string().required("Tên đăng nhập là bắt buộc..!")
                    .min(4, 'Tài khoản mới phải có ít nhất 4 kí tự')
                    .matches(/^[^\s]+$/, 'Tên đăng nhập không được chứa dấu cách'),
                    password: Yup.string().required("mật khẩu là bắt buộc..!")
                    .min(8, 'Mật khẩu phải có ít nhất 8 kí tự')
                    .max(12, 'Mật khẩu có độ dài không quá 12 kí tự')
                    .matches(/^(?=.*[a-zA-Z])(?=.*\d)/, 'Mật khẩu nên chứa chữ cái và số')
                  })}
                  onSubmit={handleSubmit}
                >
                  {({ errors, touched }) => (
                    <Form>
                      <Row>
                        <Col xs="6" className="mb-2">
                          <div className="form-group">
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <AtSign size={20} />
                              </div>
                              <Field
                                type="text"
                                name="fullName"
                                className={`form-control ${
                                  errors.fullName && touched.fullName
                                    ? "is-invalid"
                                    : ""
                                }`}
                                placeholder="Mời bạn nhập họ và tên"
                              />
                            </div>
                            {errors.fullName && touched.fullName && (
                              <div className="text-danger ms-4">
                                {errors.fullName}
                              </div>
                            )}
                          </div>
                        </Col>
                        <Col xs="6" className="mb-2">
                          <div className="form-group">
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <Mail size={20} />
                              </div>
                              <Field
                                type="email"
                                className={`form-control ${
                                  errors.gmail && touched.gmail
                                    ? "is-invalid"
                                    : ""
                                }`}
                                name="gmail"
                                placeholder="Mời bạn nhập địa chỉ email"
                              />
                            </div>
                            {errors.gmail && touched.gmail && (
                              <div className="text-danger ms-4">
                                {errors.gmail}
                              </div>
                            )}
                          </div>
                        </Col>
                        <Col xs="6" className="mb-2">
                          <div className="form-group">
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <Edit3 size={20} />
                              </div>
                              <Field
                                type="date"
                                name="dateofbirth"
                                className={`form-control ${
                                  errors.dateofbirth && touched.dateofbirth ? "is-invalid" : ""
                                }`}
                                placeholder="Mời bạn nhập ngày tháng năm sinh"
                              />
                            </div>
                            {errors.dateofbirth && touched.dateofbirth && (
                              <div className="text-danger ms-4">
                                {errors.dateofbirth}
                              </div>
                            )}
                          </div>
                        </Col>
                        <Col xs="6" className="mb-2">
                        <div className="form-group">
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <Edit3 size={20} />
                              </div>
                              <Field
                                type="text"
                                name="gender"
                                className={`form-control ${
                                  errors.gender && touched.gender
                                    ? "is-invalid"
                                    : ""
                                }`}
                                placeholder="Mời bạn nhập giới tính"
                              />
                            </div>
                            {errors.gender && touched.gender && (
                              <div className="text-danger ms-4">
                                {errors.gender}
                              </div>
                            )}
                          </div>
                        </Col>
                        <Col xs="6" className="mb-2">
                          <div className="form-group">
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <Edit3 size={20} />
                              </div>
                              <Field
                                type="number"
                                name="citizenIdentification"
                                className={`form-control ${
                                  errors.citizenIdentification &&
                                  touched.citizenIdentification
                                    ? "is-invalid"
                                    : ""
                                }`}
                                placeholder="Mời bạn nhập căn cước công dân"
                              />
                            </div>
                            {errors.citizenIdentification &&
                              touched.citizenIdentification && (
                                <div className="text-danger ms-4">
                                  {errors.citizenIdentification}
                                </div>
                              )}
                          </div>
                        </Col>
                        <Col xs="6" className="mb-2">
                          <div className="form-group">
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <Phone size={20} />
                              </div>
                              <Field
                                type="number"
                                name="phoneNumber"
                                className={`form-control ${
                                  errors.phoneNumber && touched.phoneNumber
                                    ? "is-invalid"
                                    : ""
                                }`}
                                placeholder="Mời bạn nhập số điện thoại"
                              />
                            </div>
                            {errors.phoneNumber && touched.phoneNumber && (
                              <div className="text-danger ms-4">
                                {errors.phoneNumber}
                              </div>
                            )}
                          </div>
                        </Col>
                        <Col xs="12" className="mb-2">
                        <div className="form-group">
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <Map size={20} />
                              </div>
                              <Field
                                type="text"
                                name="address"
                                className={`form-control ${
                                  errors.address && touched.address
                                    ? "is-invalid"
                                    : ""
                                }`}
                                placeholder="Mời bạn nhập địa chỉ"
                              />
                            </div>
                            {errors.address && touched.address && (
                              <div className="text-danger ms-4">
                                {errors.address}
                              </div>
                            )}
                          </div>
                        </Col>
                
                        <Col xs="6" className="mb-2">
                          <div className="form-group">
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <User size={20} />
                              </div>
                              <Field
                                type="text"
                                name="username"
                                className={`form-control ${
                                  errors.username && touched.username
                                    ? "is-invalid"
                                    : ""
                                }`}
                                placeholder="Mời bạn nhập tên tài khoản"
                              />
                            </div>
                            {errors.username && touched.username && (
                              <div className="text-danger ms-4">
                                {errors.username}
                              </div>
                            )}
                          </div>
                        </Col>
                        <Col xs="6" className="mb-2">
                          <div className="form-group">
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <Lock size={20} />
                              </div>
                              <Field
                                type={`${showpassword ? "text" : "password"}`}
                                name="password"
                                id="pwd-input"
                                className={`form-control ${
                                  errors.password && touched.password
                                    ? "is-invalid"
                                    : ""
                                }`}
                                placeholder="Mời bạn nhập mật khẩu"
                              />
                              <div className="input-group-apend">
                                <i
                                  id="pwd-icon"
                                  className={`far fa-eye${
                                    !showpassword ? "-slash" : ""
                                  }`}
                                  onClick={() => {
                                    setShowpassword(!showpassword);
                                  }}
                                />
                              </div>
                            </div>
                            {errors.password && touched.password && (
                              <div className="text-danger ms-4">
                                {errors.password}
                              </div>
                            )}
                          </div>
                        </Col>
                      </Row>
                      <div>
                        <button
                          type="submit"
                          className="btn btn-gradient btn-pill me-sm-3 me-2"
                        >
                          Đăng kí
                        </button>
                        <Link
                          href="/pages/other-pages/login"
                          className="btn btn-dashed btn-pill"
                        >
                          Đăng nhập
                        </Link>
                      </div>
                    </Form>
                  )}
                </Formik>
              </CardBody>
            </Card>
          </Col>
          {/* <Col xxl='7' xl='5' lg='6' className="offset-xxl-1 auth-img bg-size">
                        <Img src={`/assets/images/svg/2.jpg`} alt='' className='bg-img' />
                    </Col> */}
        </Row>
      </Container>
      </section>
      <FooterOne />
    </>
  );
};

export default SignUp;
