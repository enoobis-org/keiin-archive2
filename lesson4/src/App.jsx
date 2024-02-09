import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [data, SetData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
  });
  const [showUserData, setShowUserData] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    SetData((prevData) => {
      if (name === "fullName") {
        return {
          fullName: value,
          phoneNumber: prevData.phoneNumber,
          email: prevData.email,
        };
      } else if (name === "phoneNumber") {
        return {
          fullName: prevData.fullName,
          phoneNumber: value,
          email: prevData.email,
        };
      } else if (name === "email") {
        return {
          fullName: prevData.fullName,
          phoneNumber: prevData.phoneNumber,
          email: value,
        };
      }
      return prevData;
    });
  };

  const showData = () => {
    setShowUserData(true);
  };

  return (
    <div className="registration__form">
      <h1 className="registration__form--title">Регистрация</h1>
      <form action="">
        <label htmlFor="FullName">Введите ФИО</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={data.fullName}
          onChange={handleChange}
          required
        />
        <label htmlFor="Number">Введите номер телефона</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={data.phoneNumber}
          onChange={handleChange}
          required
        />
        <label htmlFor="Email">Введите Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          required
        />
        <button type="submit" onClick={showData}>
          Submit
        </button>
      </form>
      {showUserData && (
        <div className="userData">
          <h3>Данные пользователя:</h3>
          <p>
            <strong>ФИО:</strong> {data.fullName}
          </p>
          <p>
            <strong>Номер телефона:</strong> {data.phoneNumber}
          </p>
          <p>
            <strong>Email адрес:</strong> {data.email}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
