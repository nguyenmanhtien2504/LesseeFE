import React, { useEffect } from 'react';
import { User, Lock } from 'react-feather';
import { Col, Container, Row } from 'reactstrap';
import Link from 'next/link';
import Breadcrumb from '../../../layout/Breadcrumb/Breadcrumb';
import FooterOne from '../../../layout/footers/FooterOne';
import NavbarThree from '../../../layout/headers/NavbarThree';
import { useRouter } from 'next/router';
import { getCookie, setCookie } from 'cookies-next';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  const router = useRouter();

  const expires = new Date();
  expires.setDate(expires.getDate() + 1);

  useEffect(() => {
    const storedToken = getCookie('token');
    if (storedToken) {
      // Xử lý trạng thái đã đăng nhập
      console.log('Người dùng đã đăng nhập!');
      router.push('/home/slider-filter-search');
    }
  }, []);

  const handleSubmit = async (values) => {

    // Tạo một đối tượng chứa thông tin đăng nhập
    const loginData = {
      uId: 0,
      fullName: '',
      dateofbirth: "",
      address: '',
      citizenIdentification: '',
      phoneNumber: '',
      gender: '',
      gmail: '',
      avatar: '',
      username : values.username,
      password : values.password,
      rId: 0,
      roleName: '',
    };
    
    try {
      // Gửi yêu cầu POST đến API đăng nhập
      const response = await fetch('https://ehouseapi20230817222213.azurewebsites.net/api/User/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        // Xử lý đăng nhập thành công
        const responseJson = await response.json();
        const token = responseJson.token; // Giả sử token trả về từ BE được lưu trong thuộc tính "token"
        setCookie('token', token, {expires} );
        console.log('Đăng nhập thành công!');
        router.push('/home/slider-filter-search');
      } else {
        // Xử lý đăng nhập thất bại
        alert('Đăng nhập thất bại. Vui lòng kiểm tra lại tên đăng nhập và mật khẩu.');
      }
    } catch (error) {
      alert('Đăng nhập thất bại, lỗi sever')
      console.error('Đã xảy ra lỗi:', error);
    }    
  };

  const initialValues = {
    username: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Vui lòng nhập tên tài khoản'),
    password: Yup.string().required('Vui lòng nhập mật khẩu'),
  });

  const inputGroupStyle = {
    marginBottom: '15px',
    position: 'relative',
  };

  const iconStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    left: '10px',
  };

  const errorMessageStyle = {
    color: 'red',
    fontSize: '14px',
    marginTop: '5px',
  };

  return (
    <>
      <NavbarThree />
      <Breadcrumb />
      <section className="login-wrap">
        <Container>
          <Row className="log-in">
            <Col xl="5" lg="6" md="8" sm="10">
              <div className="theme-card">
                <div className="title-3 text-start">
                  <h2>Đăng nhập</h2>
                </div>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  <Form>
                    <div className="form-group">
                      <div className="input-group">
                        <div className="input-group-prepend"  style={inputGroupStyle}>
                          <div className="input-group-text" style={iconStyle}>
                            <User />
                          </div>
                        </div>
                        <Field
                          type="text"
                          className="form-control"
                          placeholder="Nhập tên tài khoản"
                          name="username"
                        />
                        <ErrorMessage name="username" component="div" className="error-message" style={errorMessageStyle}/>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                        <div className="input-group-prepend" style={inputGroupStyle}>
                          <div className="input-group-text" style={iconStyle}>
                            <Lock />
                          </div>
                        </div>
                        <Field
                          type="password"
                          className="form-control"
                          placeholder="Nhập mật khẩu"
                          name="password"
                        />
                        <ErrorMessage name="password" component="div" className="error-message" style={errorMessageStyle}/>
                      </div>
                      <div className="important-note">Mật khẩu phải có tối thiểu 8 ký tự và phải chứa các chữ cái và số</div>
                    </div>
                    <div className="d-flex">
                      <label className="d-block mb-0" htmlFor="chk-ani">
                      </label>
                      <Link href="/pages/other-pages/forgot-pass" className="font-rubik">
                        quên mật khẩu ?
                      </Link>
                    </div>
                    <div>
                      <button type="submit" className="btn btn-gradient btn-pill me-sm-3 me-2">
                        Đăng nhập
                      </button>
                      <Link href="/pages/other-pages/signup" className="btn btn-dashed btn-pill">
                        Đăng kí
                      </Link>
                    </div>
                    <div className="divider">
                      <h6>Hoặc</h6>
                    </div>
                    <div>
                      <h6>Chuyến hướng sang trang đăng nhập cho thuê</h6>
                      <div className="row social-connect">
                        <div className="col-6">
                          <a href="https://lessorpage.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-gradient btn-pill me-sm-3 me-2">
                            <span>Chuyển hướng</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </Form>
                </Formik>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <FooterOne />
    </>
  );
};

export default Login;
