import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { Button, Col, Label, Row } from "reactstrap";
import {
  ReactstrapInput,
  ReactstrapSelect,
} from "../../../utils/ReactstrapInputsValidation";

const Step3 = ({ setActiveTab, setData }) => {
  return (
    <Formik
      initialValues={{
        TenancyPeriod: "1"
      }}
      validationSchema={Yup.object().shape({})}
      onSubmit={(values) => {
        setActiveTab((prev) => prev + 1);
        setData((prev) => ({ ...prev, ...values }));
      }}
      render={() => (
        <Form>
          <div className="wizard-step-3 ">
            <h2>Thời gian</h2>
            <p className="font-roboto">Chọn thời gian thuê</p>
            <Row className="gx-3">
              <div className="form-group col-sm-4">
                <Field
                  name="TenancyPeriod"
                  component={ReactstrapSelect}
                  type="text"
                  className="form-control"
                  label="Thời gian thuê / Tháng"
                  inputprops={{
                    options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
                  }}
                />
              </div>
            </Row>
            <div className="next-btn d-flex">
              <Button
                type="submit"
                className="btn btn-gradient color-2 next2 btn-pill"
              >
                Tiếp tục <i className="fas fa-arrow-right ms-2" />
              </Button>
            </div>
          </div>
        </Form>
      )}
    />
  );
};

export default Step3;
