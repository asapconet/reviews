import React, { useState } from "react";
import reviewers from "./review-data";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const { image, name, role, info } = reviewers[index];

  const getReviews = (e) => {
    if (e > reviewers.length - 1) {
      return 0;
    }
    if (e < 0) {
      return reviewers.length - 1;
    }
    return e;
  };

  return (
    <section>
      <div className="img-container">
        <img src={image} alt={name} />
        <span className="quote">
          <FaQuoteRight />
        </span>
      </div>
      <h3>{name}</h3>
      <p className='role'>{role}</p>
      <p>{info}</p>
      <div>
        <button className="nav-btn">
          <FiChevronsLeft />
        </button>
        <button className="nav-btn">
          <FiChevronsRight />
        </button>
      </div>
      <div>
        <button className="rand-btn">show random reviewers</button>
      </div>
    </section>
  );
};
export default Reviews;
