
import { Mail, Phone, User } from "react-feather";
import { Button, Col, Form, FormGroup, Input, InputGroup, InputGroupText, Row } from "reactstrap";
import { useRouter } from "next/router";


const LogInCard = () => {
  const router = useRouter();


  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Đơn của bạn đã được gửi, cảm ơn bạn đã đóng góp cho trang chúng tôi, chúng tôi sẽ sớm phản hồi cho bạn !')
    router.push('/home/slider-filter-search')
  }

  return (
    <div className='log-in theme-card'>
      <div className='title-3 text-start'>
        <h2>Đóng góp ý kiến</h2>
      </div>
      <Form onSubmit={handleSubmit}>
        <Row className='gx-3'>
          <FormGroup className='form-group'>
            <Col md='12'>
              <InputGroup className='input-group'>
                <div className='input-group-prepend'>
                  <InputGroupText>
                    <User />
                  </InputGroupText>
                </div>
                <Input type='text' className='form-control' required maxLength='20' placeholder='Nhập tên bạn' name='userName' />
              </InputGroup>
            </Col>
          </FormGroup>
          <FormGroup className='form-group col-md-6'>
            <InputGroup className='input-group'>
              <div className='input-group-prepend'>
                <InputGroupText>
                  <Phone />
                </InputGroupText>
              </div>
              <Input
                placeholder='Số điện thoại'
                className='form-control'
                name='mobnumber'
                id='tbNumbers'
                type='tel'
                maxLength='9'
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                required
              />
            </InputGroup>
          </FormGroup>
          <FormGroup className='form-group col-md-6'>
            <InputGroup className='input-group'>
              <div className='input-group-prepend'>
                <div className='input-group-text'>
                  <Mail />
                </div>
              </div>
              <Input type='email' className='form-control' placeholder='Địa chỉ email' required />
            </InputGroup>
          </FormGroup>
          <div className='form-group col-md-12'>
            <Input type='textarea' className='form-control' id='exampleFormControlTextarea1' rows='3' placeholder='Hãy viết gì đó' />
          </div>
          <div className='submit-btn with-captcha'>
            <div className='captcha'>
              <div className='spinner'>
                <label>
                  <Input type='checkbox' />
                  <span className='checkmark'>
                    <span>&nbsp;</span>
                  </span>
                </label>
              </div>
              <div className='text'>I'm not a robot</div>
              <div className='logo'>
                <img src='/assets/images/inner-pages/recaptcha.png' alt='' />
                <p>reCAPTCHA</p>
                <small>Privacy - Terms</small>
              </div>
            </div>
            <div></div>
            <Button className='btn btn-gradient btn-flat' type='submit'>
              Gửi
            </Button>
          </div>
        </Row>
      </Form>
    </div>
  );
};

export default LogInCard;
