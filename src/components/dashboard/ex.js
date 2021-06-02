import React, { useState, useEffect } from "react";
import Navbar from "../navbar/Navbar";
import "../../css/OrderTrack.css";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Ex() {
  const history = useHistory();

  const [data, setData] = useState({
    order_id: "",
    status: "",
  });

  const [pickUp, setPickUp] = useState("status_line pb-5 mb-4");
  const [cityWareHouse, setCityWareHouse] = useState("status_line pb-5 mb-4");
  const [areaWareHouse, setAreaWareHouse] = useState("status_line pb-5 mb-4");
  const [shipped, setShipped] = useState("status_line pb-5 mb-4");
  const [done, setDone] = useState("status_line");

  const back = () => {
    localStorage.removeItem("TrackOrderId");
    localStorage.removeItem("status");
    history.push("/");
  };

  useEffect(() => {
    const id = localStorage.getItem("TrackOrderId");

    axios.get(`http://localhost:5000/auth/orderStatus/${id}`).then((result) => {
      setData({
        order_id: result.data.message[0].order_id,
        status: result.data.message[0].order_status,
      });
      localStorage.setItem("status", result.data.message[0].order_status);
    });

    if (localStorage.getItem("status") === "pich_up") {
      setPickUp("status_line pb-5 mb-4 current");
    } else if (localStorage.getItem("status") === "City_Ware_House") {
      setPickUp("status_line pb-5 mb-4 step-completed");
      setCityWareHouse("status_line pb-5 mb-4 current");
    } else if (localStorage.getItem("status") === "Area_Ware_House") {
      setPickUp("status_line pb-5 mb-4 step-completed");
      setCityWareHouse("status_line pb-5 mb-4 step-completed");
      setAreaWareHouse("status_line pb-5 mb-4 current");
    } else if (localStorage.getItem("status") === "Shipped") {
      setPickUp("status_line pb-5 mb-4 step-completed");
      setCityWareHouse("status_line pb-5 mb-4 step-completed");
      setAreaWareHouse("status_line pb-5 mb-4 step-completed");
      setShipped("status_line pb-5 mb-4 current");
    } else if (localStorage.getItem("status") === "Done") {
      setPickUp("status_line pb-5 mb-4 step-completed");
      setCityWareHouse("status_line pb-5 mb-4 step-completed");
      setAreaWareHouse("status_line pb-5 mb-4 step-completed");
      setShipped("status_line pb-5 mb-4 step-completed");
      setDone("status_line current");
    }
  }, []);

  return (
    <>
      <Navbar />

      <section className="status">
        <div className="container mx-auto">
          <div className="status-box w-75 mx-auto">
            <div className="d-flex items-center justify-content-between">
              <h5 className="text-xl font-weight-bold">
                Track Delivery Status
              </h5>
              <h6 className="bg-white px-2 py-1 rounded text-success">
                {data.order_id}
              </h6>
            </div>
            <ul className="pt-4" style={{ listStyle: "none" }}>
              <li className={pickUp}>
                <span>Pick Up</span>
              </li>
              <li className={cityWareHouse}>
                <span>City Ware House</span>
              </li>
              <li className={areaWareHouse}>
                <span>Area Ware House</span>
              </li>
              <li className={shipped}>
                <span>Shipped</span>
              </li>
              <li className={done}>
                <span>Done</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="container mt-5">
          <button onClick={() => back()}>Back</button>
        </div>
      </section>
    </>
  );
}

export default Ex;
