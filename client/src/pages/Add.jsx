import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Add component for adding new books
// This component will have a form to input book details
// and will send a POST request to the server to add the book to the database
// The form will have fields for title, author, price, and cover image URL
// The component will use useState to manage the form state
const Add = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    price: null,
    cover: "",
  });

  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.placeholder]: e.target.value }));
  };

  // Handle form submission when add button is clicked
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3333/books", book);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  console.log(book);
  return (
    <div className="form">
      <h1>Add new book</h1>
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
        Add
      </button>
    </div>
  );
};

export default Add;
