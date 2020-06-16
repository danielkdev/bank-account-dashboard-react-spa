import React, { useState, useEffect } from "react";

export default function Balance() {
  let [balance, setBalance] = useState<Number | null>(null);
  let [loading, setLoading] = useState(true);
  let balanceUrl = "http://127.0.0.1:5000/api/account/1000/balance";
  useEffect(() => {
    fetch(balanceUrl)
      .then((res) => res.json())
      .then((json) => {
        setBalance(json.balance);
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
    <div className="balance-info">
      <span>Total Balance</span>
      <h4 className="balance">${balance}</h4>
    </div>
  );
}
