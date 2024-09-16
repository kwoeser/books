import React from "react";
import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Update component for updating existing books
// This component will have a form to input updated book details
// and will send a POST request to the server to update the book in the database
// SAME LOGIC AND FUNCTIONALY AS THE Add.jsx file
const Update = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    price: null,
    cover: "",
  });

  const navigate = useNavigate();

  const location = useLocation();
  const bookId = location.pathname.split("/")[2];
  console.log(location.pathname.split("/")[2]);

  // Handle input changes
  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.placeholder]: e.target.value }));
  };

  // Handle form submission when Update button is clicked
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:3333/books/" + bookId, book);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  console.log(book);
  return (
    <div className="form">
      <h1>Update book</h1>
      <input
        type="text"
        onChange={handleChange}
        placeholder="title"
        name="title"
      />
      <input
        type="text"
        onChange={handleChange}
        placeholder="author"
        name="author"
      />
      <input
        type="text"
        onChange={handleChange}
        placeholder="price"
        name="price"
      />
      <input
        type="text"
        onChange={handleChange}
        placeholder="cover"
        name="cover"
      />

      <button className="formButton" onClick={handleClick}>
        Update
      </button>
    </div>
  );
};

export default Update;
