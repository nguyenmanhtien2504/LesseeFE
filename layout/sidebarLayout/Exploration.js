/**
 * It's a React component that renders a form with a submit button
 * @returns A function that returns a div.
 */
import React, { useState } from "react";
import { useRouter } from "next/router";
import { Button, Form, FormGroup, Input, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import Link from "next/link";
import {  hasCookie  } from 'cookies-next';

const Exploration = ({singleData1}) => {
  const router = useRouter();
  const [inputs, setInputs] = useState({ name: "", email: "", tbNumbers: "", message: "" });
  const [modal, setModal] = useState(false);

  // const handleChange = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   setInputs((values) => ({ ...values, [name]: value }));
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (hasCookie('token')) {
      router.push(`/agent/submit-property/?id=${singleData1.hoId}`);
    } else {
      alert('bạn phải đăng nhập mới có thể thuê nhà')
      router.push(`/pages/other-pages/login`);
    }
    
  };
  return (
    <div className="advance-card">
      <h6>Đơn Đăng kí</h6>
      <div className="category-property">
        <Form onSubmit={handleSubmit}>
          {singleData1.houseStatus ? (
            <p className="m-1">Ngôi nhà này đã được thuê, không thể đăng kí thuê</p>
          ):(
            <Button type="submit" className="btn btn-gradient btn-block btn-pill">Đăng kí thuê nhà
          </Button>
          )}
        </Form>
      </div>
    </div>
  );
};

export default Exploration;
