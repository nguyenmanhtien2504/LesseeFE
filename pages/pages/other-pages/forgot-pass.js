import React, { useEffect, useState } from "react";
import { Mail, User } from "react-feather";
import * as Yup from "yup";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import Breadcrumb from "../../../layout/Breadcrumb/Breadcrumb";
import FooterOne from "../../../layout/footers/FooterOne";
import NavbarThree from "../../../layout/headers/NavbarThree";
import { useRouter } from "next/router";
import { Field, Form, Formik } from "formik";
import { getCookie } from "cookies-next";
import Link from "next/link";


const SignUp = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  useEffect(() => {
    // Kiểm tra xem có token đã được lưu trong local storage hay chưa
    const storedToken = getCookie("token");
    if (storedToken) {
      // Xử lý trạng thái đã đăng nhập
      console.log("Người dùng đã đăng nhập!");
      router.push("/home/slider-filter-search");
    }
  }, []);

  const handleSubmit = async (value) => {
    const forgotData = {
      gmail: value.gmail,
      username: value.username,
    };
    console.log(forgotData);

    try {
      // Gửi yêu cầu POST đến API đăng nhập
      const response = await fetch(
        `https://ehouseapi20230817222213.azurewebsites.net/api/User/ForgotPasswordRequest?username=${forgotData.username}&gmail=${forgotData.gmail}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const responseText = await response.text();

      if (response.ok) {
        alert(
          "Quên mật khẩu thành công, mời bạn kiểm tra mail để lấy lại mật khẩu"
        );
        router.push("/pages/other-pages/login");
      } else {
        // Xử lý đăng nhập thất bại
        alert("Quên mật khẩu thất bại, mời bạn kiểm tra lại : " + responseText);
        setError("Quên mật khẩu thất bại , lỗi" + error);
      }
    } catch (error) {
      setError(error);
    }
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
                    <h2>Quên mật khẩu</h2>
                  </div>
                  <Formik
                    initialValues={{
                      gmail: "",
                      username: "",
                    }}
                    validationSchema={Yup.object().shape({
                      gmail: Yup.string()
                        .required("gmail là bắt buộc..!")
                        .matches(/\S+@\S+\.\S+/, "Phải là gmail hoàn chỉnh"),
                      username: Yup.string()
                        .required("Tên đăng nhập là bắt buộc..!")
                        .min(4, "Tài khoản mới phải có ít nhất 4 kí tự")
                        .matches(
                          /^[^\s]+$/,
                          "Tên đăng nhập không được chứa dấu cách"
                        ),
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
                          <Col xs="12" className="mb-2">
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
                        </Row>
                        <div>
                          <button
                            type="submit"
                            className="btn btn-gradient btn-pill me-sm-3 me-2"
                          >
                            Gửi
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
