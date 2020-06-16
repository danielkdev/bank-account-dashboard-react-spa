import React, { useState, useEffect } from "react";
import Transactions from "../components/Tansactions";
import Balance from "../components/Balance";

type TAccount = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  created: Date;
  balance: number;
};
type TTransaction = {
  id: number;
  created: Date;
  amount: number;
  type: string;
  description: string;
};

export default function Dashboard() {
  let [account, setAccount] = useState<TAccount | null>(null);
  let [loading, setLoading] = useState(true);

  let accountUrl = "http://127.0.0.1:5000/api/account/1000";
  useEffect(() => {
    fetch(accountUrl)
      .then((res) => res.json())
      .then((json) => {
        setAccount(json);
        setLoading(false);
      })
      .catch((error) => {
        alert("Error:" + error);
      });
  }, []);

  if (loading)
    return (
      <div className="loading">
        <i className="fa fa-spinner" aria-hidden="true"></i> Loading...
      </div>
    );
  return (
    <div>
      <div className="wrapper">
        <div className="dash_container">
          <div className="welcome-box">
            <h2>Welcome back, {account?.firstName}</h2>
            <p>Welcome to our online banking portal.</p>
          </div>
          <div className="account-information">
            <div className="row">
              <div className="col-12">
                <div className="row align-content-center">
                  <div className="col-6">
                    <div className="user-info">
                      <h3 className="username">
                        {account?.firstName} {account?.lastName}
                      </h3>
                      <h4 className="account_no">Account No: {account?.id}</h4>
                      <ul>
                        <li>
                          <span>Email:</span>
                          <p>{account?.email}</p>
                        </li>
                        <li>
                          <span>Phone:</span>
                          <p>{account?.phone}</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-6">
                    <Balance />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Transactions />
        </div>
      </div>
    </div>
  );
}
