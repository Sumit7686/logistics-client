import React, { useState, useEffect } from "react";
import axios from "axios";
import UserNavbar from "../navbar/UserNavbar";
import "../../css/ProfileCard.css";

export default function UserProfile({ setAuth }) {
  const [id, setId] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [pincode, setPincode] = useState("");
  // const [password, setPassword] = useState("");

  const profileDetail = async () => {
    setId(localStorage.getItem("UserId"));
    await axios
      .get(`http://localhost:5000/user/userPersonalData/${id}`)
      .then((result) => {
        setRole(result.data.message.role);
        setEmail(result.data.message.email);
        setName(result.data.message.name);
        setContact(result.data.message.contact);
        setPincode(result.data.message.pincode);
        // setPassword(result.data.message.password);
      })
      .catch((err) => {
        console.log("admin profile err :", err);
      });
  };

  useEffect(() => {
    profileDetail();
  });

  return (
    <>
      <UserNavbar setAuth={setAuth} />

      <div
        className="px-3 py-3 items-center profileCard"
        data-aos="flip-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <h2 className="text-center">User Profile Card</h2>
        <div className="profileCard">
          <img src="/photos/profile/1.jpg" alt="profile" className="w-100" />
          <h3 className="my-4">{name}</h3>
          <p className="title">Role : {role}</p>
          <p className="title">Email : {email} </p>
          <p className="title">Contact : {contact} </p>
          <p className="title">Pincode :{pincode} </p>
          {/* <p className="title">Password : {password}</p> */}
          {/* <button>Change Password</button> */}
        </div>
      </div>
    </>
  );
}
