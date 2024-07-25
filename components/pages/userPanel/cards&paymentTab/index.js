import React, { useState } from "react";

const CardsPaymentTab = () => {
  const [data, setData] = useState([
    { id: 1, paymentCard: "master", cardType: "Credit", cardNumber: "XXXX-XXXX-XXXX-3401", date: "03/25/2015", name: "Nguyen Manh Tien", cvv: 123 },
    { id: 2, paymentCard: "visa", cardType: "Credit", cardNumber: "XXXX-XXXX-XXXX-3401", date: "03/25/2021", name: "Nguyen Manh Tien", cvv: 123 },
    { id: 3, paymentCard: "american-express", cardType: "Credit", cardNumber: "XXXX-XXXX-XXXX-3401", date: "03/25/2019", name: "Nguyen Manh Tien", cvv: 123 },
  ]);

  return (
    <div className="dashboard-content">
      <div className="payment-user" id="payment">
        <div className="common-card">
          <div className="common-header">
            <h5>Cards & payment</h5>
          </div>
          <div className="row card-payment g-3">
            {data.map((elem, i) => (
              <div className="col-xl-4 col-sm-6" key={i}>
                <div className={`payment-card  ${elem.paymentCard}`}>
                  <div className="card-details">
                    <div className="text-end">
                      <h6>{elem.cardType || "credit"}</h6>
                    </div>
                    <div className="card-number">
                      <div>
                        <img src="/assets/images/icon/chip.png" className="img-fluid" alt="" />
                        <img src="/assets/images/icon/wifi.png" className="img-fluid" alt="" />
                      </div>
                      <h3>XXXX-XXXX-XXXX-3401</h3>
                    </div>
                    <div className="valid-detail">
                      <div className="title">
                        <span>valid</span>
                        <span>thru</span>
                      </div>
                      <div className="date">
                        <h3>{new Date(elem.date).getDate() + "/" + (Number(new Date(elem.date).getMonth()) + 1)}</h3>
                      </div>
                    </div>
                    <div className="name-detail">
                      <div className="name">
                        <h5>{elem.name}</h5>
                      </div>
                      <div>
                        {"american-express" === elem.paymentCard ? (
                          <img src={`/assets/images/icon/american.jpg`} className="img-fluid" alt="" />
                        ) : (
                          <img src={`/assets/images/icon/${elem.paymentCard}.png`} className="img-fluid" alt="" />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="edit-card">
                    <a onClick={() => setData((prev) => prev.filter((data) => data.id !== elem.id))}>Xóa</a>
                  </div>
                </div>
              </div>
            ))}

            <div className="col-xl-4 col-sm-6">
              <div className="payment-card add-card">
                <div className="card-details">
                  <div>
                    <i className="fas fa-plus-circle"></i>
                    <h5>Thêm thẻ mới</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsPaymentTab;
