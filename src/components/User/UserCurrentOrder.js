import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import UserNavbar from "../navbar/UserNavbar";

export default function UserCurrentOrder({ setAuth }) {
  const [value, setValue] = useState([]);

  const id = localStorage.getItem("UserId");

  const getOrderData = () => {
    axios
      .get(`http://localhost:5000/user/userPersoalOrder/${id}`)
      .then((result) => {
        setValue(result.data.message);
      });
  };

  useEffect(() => {
    getOrderData();
  });

  return (
    <>
      <UserNavbar setAuth={setAuth} />

      <div className="pt-4 container">
        <h3 className="my-3 text-center">User Current Order</h3>
        <table id="table-to-xls" className="table table-hover table-dark">
          <thead>
            <tr className="text-center">
              <th scope="col">user_id</th>
              <th scope="col">order_status</th>
              <th scope="col">order_user_city</th>
              <th scope="col">order_id</th>
              <th scope="col">awb_number</th>
            </tr>
          </thead>
          <tbody>
            {value.length > 0 &&
              value.map((element, inx) => (
                <tr key={inx} className="text-center">
                  {element.order_status === "Done" ? (
                    ""
                  ) : (
                    <>
                      <td>{element.user_id}</td>
                      <td>{element.order_status}</td>
                      <td>{element.order_user_city}</td>
                      <td>{element.order_id}</td>
                      <td>{element.awb_number}</td>
                    </>
                  )}
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div className="container mt-5 pt-3">
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="download-table-xls-button"
          table="table-to-xls"
          filename="user-current-order"
          sheet="tablexls"
          buttonText="Download as XLS"
        />
      </div>

      <div className="text-center mt-3 container">
        <a href="/UserOrderList" style={{ textDecoration: "none" }}>
          <button>Back</button>
        </a>
      </div>
    </>
  );
}
