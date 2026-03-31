import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const BestCanadaLanding = () => {
  return (
    <div className="usa-landing">

      {/* Hero */}
      <div className="hero-section">
        <img src="https://images.unsplash.com/photo-1503614472-8c93d56e92ce" alt="" />
        <div className="hero-content">
          <h1>Best of Canada</h1>
          <p>8 Days • 3 Cities • 1 Country</p>
          <Link to="/canada">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* Why Section */}
            <div className="why-section">
             <h2>Why Choose Best of Canada Tour?</h2>

<div className="why-grid">
  <div>🏔️ Majestic Mountains & Lakes</div>
  <div>🌊 Niagara Falls Experience</div>
  <div>🏙️ Vibrant Cities</div>
  <div>🍁 Canadian Culture & Nature</div>
</div>
            </div>
      
            {/* CTA Section */}
            <div className="cta-section">
               <h2>Plan Your Dream Canada Trip</h2>
  <p>Book now and explore the best of Canada</p><br />
  <Link to="/canada">
    <button className="book-now-btn">Book Now</button>
  </Link>
            </div>
      

      {/* Itinerary */}
      <div className="itinerary-section">
        <h2>8 Days Canada Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://media.istockphoto.com/id/458709917/photo/toronto-pearson-international-airport.jpg?s=612x612&w=0&k=20&c=aVtt4vw5cQGqFIGNZy3AF9_b1Us9wQucCy_-7KYvqB0=" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Toronto</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/87/22/20.jpg" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Toronto City Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://cdn.aarp.net/content/dam/aarp/travel/destinations/2021/08/1140-journey-behind-the-falls.jpg" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Niagara Falls Visit</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://cdn.discoverholidays.io/media/general/y/yul-istock-1342531024.webp" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Travel to Montreal</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/0e/7d/be.jpg" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Montreal City Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://i.insider.com/6329d7784f9291001883d668?width=800&format=jpeg&auto=webp" alt="" />
            <div className="day-content">
              <h3>Day 6</h3>
              <p>Travel to Vancouver</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://c8.alamy.com/comp/CBYEG9/toronto-eaton-centre-shopping-mall-full-of-people-on-boxing-day-in-CBYEG9.jpg" alt="" />
            <div className="day-content">
              <h3>Day 7</h3>
              <p>Leisure & Shopping</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://thumbs.dreamstime.com/b/air-canada-airline-check-area-toronto-pearson-international-airport-bilingual-departure-arrival-signs-selective-397608360.jpg" alt="" />
            <div className="day-content">
              <h3>Day 8</h3>
              <p>Departure</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default BestCanadaLanding;