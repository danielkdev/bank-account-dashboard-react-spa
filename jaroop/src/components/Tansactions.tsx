import React, { useState, useEffect } from "react";
import moment from "moment";

export default function Tansactions() {
  type TTransaction = {
    id: number;
    created: Date;
    amount: number;
    type: string;
    description: string;
  };
  let [transactions, setTransactions] = useState<
    TTransaction[] | null | undefined
  >(null);
  let [sort, setSort] = useState<string>("asc");

  const toggleSort = () => {
    switch (sort) {
      case "asc":
        setSort("desc");
        break;
      case "desc":
        setSort("asc");
        break;
      default:
        setSort("asc");
        break;
    }
  };

  let [loading, setLoading] = useState(true);

  let transactionsUrl = `http://127.0.0.1:5000/api/account/1000/transcations`;

  useEffect(() => {
    fetch(transactionsUrl)
      .then((res) => res.json())
      .then((json) => {
        setTransactions(Object.values(json));
        setLoading(false);
      })
      .catch((error) => {
        alert("Error:" + error);
      });
  }, []);

  useEffect(() => {
    if (sort === "desc") {
      let sorted = transactions?.sort((a, b) => {
        if (a.created > b.created) {
          return -1;
        }
        return 1;
      });
      setTransactions(sorted);
    } else if (sort === "asc") {
      let sorted = transactions?.sort((a, b) => {
        if (a.created > b.created) {
          return 1;
        }
        return -1;
      });
      setTransactions(sorted);
    }
  }, [sort]);

  const transactionItems = transactions?.map((transaction) => (
    <tr key={transaction.id}>
      <td>{transaction.id}</td>
      <td>{moment(transaction.created).format("YYYY-MM-DD hh:mm:ss a")}</td>
      <td>{transaction.type}</td>
      <td>{transaction.description}</td>
    </tr>
  ));
  if (loading)
    return (
      <div className="loading">
        <i className="fa fa-spinner" aria-hidden="true"></i> Loading...
      </div>
    );
  return (
    <div className="transaction_table">
      <div className="row mb-3">
        <div className="col-12">
          <h4>Transaction History</h4>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th onClick={toggleSort}>
              Date{" "}
              <i
                className={
                  sort === "asc" ? "fa fa-sort-asc" : "fa fa-sort-desc"
                }
              ></i>
            </th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>{transactionItems}</tbody>
      </table>
    </div>
  );
}
