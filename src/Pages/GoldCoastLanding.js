import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const GoldCoastLanding = () => {
  return (
    <div className="usa-landing">

      {/* Hero */}
      <div className="hero-section">
        <img src="https://dynamic-media.tacdn.com/media/photo-o/30/3b/6c/1f/caption.jpg" alt="" />
        <div className="hero-content">
          <h1>Gold Coast Fun Tour</h1>
          <p>5 Days • 1 City • 1 Country</p>
          <Link to="/australia">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Starting from ₹1,20,000</h2>
        <Link to="/australia">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary */}
      <div className="itinerary-section">
        <h2>5 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://www.shutterstock.com/image-photo/gold-coast-australia-april-27-260nw-2636264551.jpg" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival at Gold Coast</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.shutterstock.com/image-photo/gold-coast-australia-april-13-600nw-2643640397.jpg" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Theme Parks Visit</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://res.klook.com/image/upload/w_500,h_313,c_fill,q_85/activities/kpwwrjxcuch0mtfiav2n.jpg" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Beach Activities</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.shutterstock.com/image-photo/sydney-new-south-wales-australia-600nw-2521462995.jpg" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Shopping & Leisure</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://i.guim.co.uk/img/media/5bc8563e60bee28be7e598da0ea9ba2b0aa5df74/628_0_6258_5009/master/6258.jpg?width=465&dpr=1&s=none&crop=none" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Departure</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default GoldCoastLanding;