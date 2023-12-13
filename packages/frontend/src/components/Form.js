import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const Form = () => {
  const [form, setForm] = useState({ resturant: "", review: "", id: null });
  const [reviews, setReviews] = useState({  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
 };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews([...reviews, form]);
    setForm({ restaurant: "", review: "", id: null });
  };

    // set Form = form['restaurant] = output of resturant review stuff I typed
    return (
      <form onSubmit={handleSubmit}>
        <h2> Leave a review </h2>
        <label htmlFor="restaurant">Restuarant</label>
        <input
          type="text"
          placeholder="Restaurant name"
          id="restaurant"
          name="restaurant"
          autoComplete="off"
          value={form.restuarant}
          onChange={handleChange}
        />
        <label htmlFor="review">Review</label>
        <textarea
          value={form.review}
          placeholder="What do you think? "
          id="review"
          name="review"
          onChange={handleChange}
        />
        <Button type="submit">Submit</Button>
      </form>
    );
 
};

export default Form;
