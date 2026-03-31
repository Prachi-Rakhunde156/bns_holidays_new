import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const LuxuryUSALanding = () => {
  return (
    <div className="usa-landing">

      {/* Hero */}
      <div className="hero-section">
        <img src="https://media.assettype.com/freepressjournal/2022-11/6c75573c-9216-4143-9e3c-daa41b33f620/Ahwanhee_Hotel_Yosemite_Mariposa_California_2.jpg" alt="" />
        <div className="hero-content">
          <h1>Luxury USA Tour</h1>
          <p>12 Days • 5 Cities • Premium Experience</p>
          <Link to="/usa">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Starting from ₹2,80,000</h2>
        <Link to="/usa">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary */}
      <div className="itinerary-section">
        <h2>12 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://dims.apnews.com/dims4/default/c86cfa9/2147483647/strip/true/crop/4861x3241+0+0/resize/319x213!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F7a%2Fc9%2Fe344d5c63761558e4026cf800bf9%2F9d5ad57243e44715a52738c552eef555" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in New York</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media.istockphoto.com/id/495067064/photo/statue-of-liberty-tourist-boat.jpg?s=612x612&w=0&k=20&c=o8saNRpksAGE-ynqTmmXFySN0T_vsco2cfGTwWe0B5g=" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>City Tour & Statue of Liberty</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/31/36/3a/02/caption.jpg?w=1200&h=-1&s=1&cx=1920&cy=1080&chk=v1_f32899465968fe60f87a" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Washington D.C.</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://justmuddlingthroughlife.com/wp-content/uploads/2024/02/IMG_8064-1024x768.jpeg" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Las Vegas</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.lot.com/content/dam/lot/lot-com/destination-photos/usa/los-angeles/downtown-los-angeles-usa-olenka-kotyk-9TUkYXQKXec-unsplash.jpg" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Los Angeles</p>
            </div>
          </div>

          {/* You can continue till Day 12 same way */}

        </div>
      </div>

    </div>
  );
};

export default LuxuryUSALanding;