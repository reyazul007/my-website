import React from 'react';

const Trainings = () => {
  return (
    <section id="trainings" className="trainings">
      <div className="training-content">
        {/* Review Content */}
        <p className="review-text">
          The Coffee House Coffee house had the best coffee around Pokhara. The shop is quiet, clean and has an outdoor sitting area to enjoy your coffee and people watch. The staff are very friendly and very helpful. The muffins here are also very good.
        </p>

        {/* Author Information */}
        <div className="author-info">
          <div className="author-image">
            <img src="/images/sample.jpg" alt="Jhon Doe" />
          </div>
          <div className="author-details">
            <h3>Jhon Doe</h3>
            <p>Student</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trainings;