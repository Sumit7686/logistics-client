import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import { useHistory } from "react-router-dom";
import "../../css/OrderTrack.css";
import axios from "axios";

export default function OrderTrack() {
  const history = useHistory();

  const [userOrderStatus, setUserOrderStatus] = useState("");
  const [userOrderID, setUserOrderID] = useState("");
  const [userArea, setUserArea] = useState("");
  const [userCity, setUserCity] = useState("");
  const [userContact, setUserContact] = useState("");
  const [userPincode, setUserPincode] = useState("");

  const id = localStorage.getItem("TrackOrderId");

  const orderStatus = async () => {
    axios.get(`http://localhost:5000/auth/orderStatus/${id}`).then((result) => {
      setUserOrderStatus(result.data.message[0].order_status);
      setUserOrderID(result.data.message[0].order_id);
      setUserArea(result.data.message[0].order_user_area);
      setUserCity(result.data.message[0].order_user_city);
      setUserContact(result.data.message[0].order_user_contact);
      setUserPincode(result.data.message[0].order_user_pincode);
    });
  };

  const back = () => {
    localStorage.removeItem("TrackOrderId");
    history.push("/");
  };

  useEffect(() => {
    orderStatus();
  });

  return (
    <>
      <Navbar />

      <div className="py-5 items-center">
        <h2 className="text-center">Order Status</h2>
        <div className="profileCard">
          <h3 className="my-4 mt-3 pt-5">Order ID : {userOrderID}</h3>
          <p className="title">order user city : {userCity} </p>
          <p className="title">order user area : {userArea} </p>
          <p className="title">order user contact : {userContact} </p>
          <p className="title">order user Pincode : {userPincode} </p>
          <p className="title">order status : {userOrderStatus} </p>
          <button onClick={() => back()}>Back</button>
        </div>
      </div>
    </>
  );
}
