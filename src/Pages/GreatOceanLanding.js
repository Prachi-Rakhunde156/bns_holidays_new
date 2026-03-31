import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const GreatOceanLanding = () => {
  return (
    <div className="usa-landing">

      {/* Hero */}
      <div className="hero-section">
        <img src="https://live-production.wcms.abc-cdn.net.au/895a9108c851938c42dd12e65c1afd1c?impolicy=wcms_crop_resize&cropH=1689&cropW=3000&xPos=0&yPos=308&width=862&height=485" alt="" />
        <div className="hero-content">
          <h1>Great Ocean Road Trip</h1>
          <p>7 Days • 2 Cities • 1 Country</p>
          <Link to="/australia">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Starting from ₹1,55,000</h2>
        <Link to="/australia">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary */}
      <div className="itinerary-section">
        <h2>7 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://www.grabatour.net/wp-content/uploads/2023/01/melbourne-arrival-package-melbourne-city-tour-melbourne-arrival-pack-australia-arrival-package-Melbourne-australia-arrival-package-Oz-melbourne-arrival-gap-year-package-Aussie.jpg" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival & City Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media.istockphoto.com/id/529329973/photo/the-twelve-apostles-and-great-ocean-road-from-the-air.jpg?s=612x612&w=0&k=20&c=bhA2KjxAhdKMzPC1qzDQxjytmJTrBNc8M8u5-1vIxIY=" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Great Ocean Drive</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://om.gokite.travel/wp-content/uploads/2025/07/Top-10-Must-Visit-Tourist-Attractions-in-Australia.webp" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Coastal Sightseeing</p>
            </div>
          </div>

          {/* Continue same till Day 7 */}

        </div>
      </div>

    </div>
  );
};

export default GreatOceanLanding;