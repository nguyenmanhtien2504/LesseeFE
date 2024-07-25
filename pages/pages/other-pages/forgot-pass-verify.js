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

  const { Uid } = router.query;

  console.log(Uid);

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
    const forgotVdata = {
      uId: Uid,
      password: value.password,
      cPassword: value.cPassword,

    };
    console.log(forgotVdata)

    try {
      // Gửi yêu cầu POST đến API đăng nhập
      const response = await fetch(`https://ehouseapi20230817222213.azurewebsites.net/api/User/ForgotPassword?id=${forgotVdata.uId}&newPassword=${forgotVdata.password}&confirmNewPassword=${forgotVdata.cPassword}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        // Xử lý đăng nhập thành công
        const responseText = await response.text();
        if (responseText === 'Forgot password success') {
          alert('Lấy lại mật khẩu thành công !')
          router.push('/pages/other-pages/login');
          } else {
            // Xử lý khi không thành công
            alert('Lấy lại mật khẩu thất bại, mời bạn kiểm tra lại: ' + responseText)
            console.log(responseText)
        }
      } else {
        // Xử lý đăng nhập thất bại
        alert('Lấy lại mật khẩu thất bại , lỗi sever');
        setError('Lấy lại mật khẩu thất bại , lỗi' + error);
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
          <Col xxl="8" xl="8" lg="5" md="6" sm="8" className="form-login">
            <Card className="card">
              <CardBody className="card-body">
                <div className="title-3 text-start">
                  <h2>Lấy lại mật khẩu</h2>
                </div>
                <Formik
                  initialValues={{
                    password: "",
                    cPassword: "",
                  }}
                  validationSchema={Yup.object().shape({
                    password: Yup.string().required("mật khẩu là bắt buộc..!")
                    .min(8, 'Mật khẩu phải có ít nhất 8 kí tự')
                    .max(12, 'Mật khẩu có độ dài không quá 12 kí tự')
                    .matches(/^(?=.*[a-zA-Z])(?=.*\d)/, 'Mật khẩu nên chứa chữ cái và số'),
                    cPassword: Yup.string().required("mật khẩu xác nhận là bắt buộc..!")
                    .min(8, 'mật khẩu xác nhận phải có ít nhất 8 kí tự')
                    .max(12, 'mật khẩu xác nhận có độ dài không quá 12 kí tự')
                    .matches(/^(?=.*[a-zA-Z])(?=.*\d)/, 'mật khẩu xác nhận nên chứa chữ cái và số'),
                  })}
                  
                  onSubmit={handleSubmit}
                >
                  {({ errors, touched }) => (
                    <Form>
                      <Row>
                        <Col xs="12" className="mb-2">
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
                        <Col xs="12" className="mb-2">
                          <div className="form-group">
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <Lock size={20} />
                              </div>
                              <Field
                                type={`${showpassword ? "text" : "password"}`}
                                name="cPassword"
                                id="pwd-input"
                                className={`form-control ${
                                  errors.cPassword && touched.cPassword
                                    ? "is-invalid"
                                    : ""
                                }`}
                                placeholder="Mời bạn nhập mật khẩu xác nhận"
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
                            {errors.cPassword && touched.cPassword && (
                              <div className="text-danger ms-4">
                                {errors.cPassword}
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
                          Lấy lại mật khẩu
                        </button>
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
