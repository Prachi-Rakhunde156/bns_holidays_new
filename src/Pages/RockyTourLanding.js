import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const RockyTourLanding = () => {
  return (
    <div className="usa-landing">

      {/* Hero */}
      <div className="hero-section">
        <img src="https://adventures.com/media/4793/canadian-rockies-mountains-nature-forest-lake-peaks-landscape-1.jpg?anchor=center&mode=crop&width=970&height=645&rnd=132622769740000000&format=jpg&quality=80" alt="" />
        <div className="hero-content">
          <h1>Rocky Mountains Tour</h1>
          <p>9 Days • 3 Cities • 1 Country</p>
          <Link to="/canada">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* Why Section */}
            <div className="why-section">
              <h2>Why Choose Rocky Mountains Tour?</h2>
      
              
<div className="why-grid">
  <div>🏔️ Breathtaking Mountain Landscapes</div>
  <div>🌲 Scenic National Parks</div>
  <div>🚗 Iconic Road Trips & Views</div>
  <div>🦌 Wildlife & Nature Experience</div>
              </div>
          
      
            {/* CTA Section */}
            <div className="cta-section">
               <h2>Plan Your Rocky Mountains Adventure</h2>
  <p>Book now and explore stunning peaks & natural beauty</p><br />
  <Link to="/rocky-mountains">
    <button className="book-now-btn">Book Now</button>
  </Link>
            </div>
            </div>
      

      {/* Itinerary */}
      <div className="itinerary-section">
        <h2>9 Days Canada Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/ZL4BLVTHLNNXZBLDOQRPYACG5A.jpg" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Canada</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://res.taketours.com/images/16by9/quebec-city-1.webp" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>City Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://cdn.inspiringvacations.com/114bd98b-6bc0-417c-9153-0aa520c2a5f4.jpeg" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Rocky Mountains Visit</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.remitly.com/blog/wp-content/uploads/2025/03/hendrik-cornelissen-qrcOR33ErA-unsplash.jpg" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Nature Exploration</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/a3/8b/5f/niagara-falls.jpg?w=500&h=400&s=1" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Sightseeing</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.cicnews.com/wp-content/uploads/2025/07/Quebec-City-2.jpg" alt="" />
            <div className="day-content">
              <h3>Day 6</h3>
              <p>Travel Between Cities</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://downtowncourtenay.com/wp-content/uploads/2025/06/Canada-Day-2024.jpg" alt="" />
            <div className="day-content">
              <h3>Day 7</h3>
              <p>Leisure Day</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://thumbs.dreamstime.com/b/eaton-mall-toronto-shopping-center-christmas-time-many-people-busy-christmas-gifts-escalators-seen-above-72945959.jpg" alt="" />
            <div className="day-content">
              <h3>Day 8</h3>
              <p>Shopping & Free Time</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://thumbs.dreamstime.com/b/vancouver-airport-richmond-british-columbia-canada-vancouver-airport-richmond-british-columbia-canada-oct-airport-departure-hall-424190301.jpg" alt="" />
            <div className="day-content">
              <h3>Day 9</h3>
              <p>Departure</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default RockyTourLanding;