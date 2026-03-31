import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const BestAustraliaLanding = () => {
  return (
    <div className="usa-landing">

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://api.nomadsworld.com/wp-content/uploads/2017/08/australia_kangaroos.jpg"
          alt="Australia"
        />
        <div className="hero-content">
          <h1>Best of Australia</h1>
          <p>8 Days • 3 Cities • 1 Country</p>
          <Link to="/australia">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* Highlights */}
      <div className="highlights">
        <h2>Top Destinations</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://www.goindigo.in/content/dam/s6web/in/en/assets/Destinations/international/sydney/Sydney%20Opera%20House%20Large.jpeg" alt="" />
            <p>Sydney</p>
          </div>

          <div className="highlight-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Gold_Coast_skyline_%28Unsplash%29.jpg" alt="" />
            <p>Gold Coast</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.tripsavvy.com/thmb/2AGo509kDat7XpEKPCAw2pQhRzk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cityscape-of-melbourne-city-of-australia-during-the-sunset--873409300-8db98cef20b44200abfb339188d801f7.jpg" alt="" />
            <p>Melbourne</p>
          </div>
        </div>
      </div>

      {/* Why Section */}
      <div className="why-section">
        <h2>Why Choose Australia Tours?</h2>

        <div className="why-grid">
          <div>🏖️ Beautiful Beaches</div>
          <div>🌆 Modern Cities</div>
          <div>🐨 Wildlife Experience</div>
          <div>🎢 Adventure Activities</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Plan Your Dream Australia Trip</h2>
        <p>Starting from ₹1,75,000</p><br />
        <Link to="/australia">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary */}
      <div className="itinerary-section">
        <h2>8 Days Australia Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://c8.alamy.com/comp/G40MAE/arrival-departure-gates-at-at-sydney-kingsford-smith-airport-mascot-G40MAE.jpg" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Sydney</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://i.etsystatic.com/12444060/r/il/7bf66a/2537403876/il_fullxfull.2537403876_23mh.jpg" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Sydney Opera House & Harbour Bridge</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://executivetransfers.net.au/wp-content/uploads/2024/11/greenmount-beach-during-sunset-on-queensland-1024x683.jpg" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Travel to Gold Coast</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://res.klook.com/image/upload/fl_lossy.progressive,w_1200,h_630,c_fill,q_85/v1687158056/cbugqm8rx1xbhsyeeydu.jpg" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Theme Parks & Beach Fun</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/ba/8d/94/caption.jpg?w=900&h=900&s=1&cx=497&cy=317&chk=v1_ab88dcb18086a45b38ae" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Travel to Melbourne</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/8b/40/c1/the-newly-built-extension.jpg?w=500&h=500&s=1" alt="" />
            <div className="day-content">
              <h3>Day 6</h3>
              <p>City Tour & Shopping</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.gocheapcampervans.com.au/wp-content/uploads/2023/10/3-Taronga-Zoo-New-South-Wales-Wild-Encounters-Await.jpg" alt="" />
            <div className="day-content">
              <h3>Day 7</h3>
              <p>Leisure & Exploration</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media.istockphoto.com/id/458961179/tr/foto%C4%9Fraf/sydney-airport-departures.jpg?s=612x612&w=0&k=20&c=dqhZoR_QfjS3E8TZIOqP6odYMJerFZQEHbrPi3oUShs=" alt="" />
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

export default BestAustraliaLanding;