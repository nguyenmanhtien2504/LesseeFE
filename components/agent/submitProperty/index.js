// import dynamic from 'next/dynamic';
import React, { useEffect, useState } from "react";
import { Col, Container, Row, TabContent, TabPane } from "reactstrap";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import WizrdSteps from "./WizrdSteps";
import axios from 'axios';
import { getCookie, setCookie } from "cookies-next";


// const DynamicBodyContent = dynamic(() => import('./WizrdSteps'), {
//   ssr: false,
// });

const BodyContent = ({id, value}) => {
  const [activeTab, setActiveTab] = useState(1);
  const [data, setData] = useState();

  const [Lessee, setLessee] = useState({});

  const uId = getCookie('uid')

  const expires = new Date();
  expires.setDate(expires.getDate() + 1);


  useEffect(() => {
    axios.get('https://ehouseapi20230817222213.azurewebsites.net/api/User/GetLesseeByUserId/' + uId,)
      .then((response) => {
        setLessee(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [uId]);
  
  setCookie('lesseeId', Lessee.lesId, {expires} )

  console.log(data);

  return (
    <>
      <section className="property-wizard">
        <Container>
          <Row className=" wizard-box">
            <Col sm="12">
              <Row className="wizard-step-container ">
                <Col xxl="3" lg="4">
                  <WizrdSteps activeTab={activeTab} />
                </Col>
                <Col xxl="9" lg="8" className="wizard-form-details ">
                  <div className="theme-card my-3">
                    <TabContent activeTab={activeTab}>
                      <TabPane tabId={1}>
                        <Step1 id={id} setActiveTab={setActiveTab} setData={setData} />
                      </TabPane>
                      <TabPane tabId={2}>
                        <Step2 data={data} setActiveTab={setActiveTab} setData={setData} />
                      </TabPane>
                      <TabPane tabId={3}>
                        <Step3 setActiveTab={setActiveTab} setData={setData} />
                      </TabPane>
                      <TabPane tabId={4} id ={id}>
                        <Step4 value={value} setActiveTab={setActiveTab} data={data} setData={setData}/>
                      </TabPane>
                    </TabContent>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BodyContent;
