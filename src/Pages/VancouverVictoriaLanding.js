import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const VancouverVictoriaLanding = () => {
  return (
    <div className="usa-landing">

      <div className="hero-section">
        <img src="https://www.travel-british-columbia.com/wp-content/uploads/2018/06/Victoria-Parliament-Buildings-and-Inner-Harbour-Photo-Destination-BC-Reuben-Krabbe.jpg" alt="" />
        <div className="hero-content">
          <h1>Vancouver & Victoria</h1>
          <p>7 Days • 2 Cities • 1 Country</p>
          <Link to="/canada">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>
       {/*  Why Choose Section */}
      <div className="why-section">
        <h2>Why Choose Vancouver & Victoria Tour?</h2>

<div className="why-grid">
  <div>🏔️ Stunning Mountain Views</div>
  <div>🌊 Beautiful Coastal Cities</div>
  <div>🌲 Nature & Wildlife</div>
  <div>🚢 Scenic Ferry Experience</div>
  </div>

      <div className="cta-section">
        <h2>Plan Your Vancouver & Victoria Trip</h2>
  <p>Book now and explore Canada’s natural beauty</p><br />
  <Link to="/canada">
    <button className="book-now-btn">Book Now</button>
  </Link>
      </div>

      <div className="itinerary-section">
        <h2>7 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://c8.alamy.com/comp/CB593M/inside-the-main-arrivals-foyer-vancouver-international-airport-terminal-CB593M.jpg" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Vancouver</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.canadiancrafttours.ca/cdn/shop/files/20211010_172711_Original.jpg?v=1712873165" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Vancouver City Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://travel.destinationcanada.com/_next/image?url=https%3A%2F%2Fadmin.destinationcanada.com%2Fsites%2Fdefault%2Ffiles%2F2023-05%2Fvictoria-bc-butchart-gardens-min.jpg&w=1920&q=75" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Visit Victoria Island</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.gokite.travel/wp-content/uploads/2025/02/1.-Banff-National-Park-Alberta.webp" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Sightseeing</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.shutterstock.com/image-photo/rockwood-on-canada-august-19-600nw-2708984941.jpg" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Leisure Day</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/d9/0a/76/cf-toronto-eaton-centre.jpg?w=500&h=500&s=1" alt="" />
            <div className="day-content">
              <h3>Day 6</h3>
              <p>Shopping</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://thumbs.dreamstime.com/b/air-canada-airline-check-area-toronto-pearson-international-airport-bilingual-departure-arrival-signs-selective-397608360.jpg" alt="" />
            <div className="day-content">
              <h3>Day 7</h3>
              <p>Departure</p>
            </div>
          </div>

        </div>
      </div>

  </div>
  </div>
  );
};

export default VancouverVictoriaLanding;