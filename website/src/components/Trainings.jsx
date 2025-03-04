import React from 'react';

const Review = () => {
  return (
    <div className="review-container">
      <img 
        className="review-image" 
        src="\images\sample.jpg" 
        alt="Review Image" 
      />
      <div className="reviewer-name">John Doe</div>
      <div className="reviewer-occupation">Student</div>
      <div className="review-stars">🌟🌟🌟🌟🌟</div>
      <div className="review-content">
        "The Coffee House had the best coffee around Pokhara. The place is quiet and clean and has an outdoor sitting area. The staff are very friendly and helpful. The muffins are also very good."
      </div>
    </div>
  );
};

export default Review;