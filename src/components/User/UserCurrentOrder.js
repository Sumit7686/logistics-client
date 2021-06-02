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
        <div className="d-flex align-items-center" data-aos="zoom-out">
          <div>
            <a
              href="/UserOrderList"
              style={{
                textDecoration: "none",
                fontSize: "45px",
                color: "black",
              }}
            >
              <i class="las la-angle-double-left"></i>
            </a>
          </div>
          <div style={{ position: "absolute", right: "0%" }}>
            <ReactHTMLTableToExcel
              id="test-table-xls-button"
              className="download-table-xls-button"
              table="table-to-xls"
              filename="user-current-order"
              sheet="tablexls"
              buttonText="Download as XLS"
            />
          </div>
        </div>

        <h3 className="my-3 text-center" data-aos="zoom-out-down">
          User Current Order
        </h3>
        <table
          id="table-to-xls"
          className="table table-hover table-dark"
          data-aos="zoom-out-up"
        >
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
    </>
  );
}
