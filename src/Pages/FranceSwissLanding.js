import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const FranceSwissLanding = () => {
  return (
    <div className="usa-landing">

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://continenthop.com/wp-content/uploads/2023/06/France-and-Switzerland-Itinerary-10-days-Continent-Hop-7.jpg"
          alt="France Switzerland"
        />
        <div className="hero-content">
          <h1>France & Switzerland</h1>
          <p>7 Days • 2 Countries • 4 Cities</p>
          <Link to="/europe">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* Highlights */}
      <div className="highlights">
        <h2>Top Destinations</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://img.freepik.com/premium-photo/eiffel-tower-aerial-view-paris_78361-12651.jpg" alt="" />
            <p>Paris</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.winalist.com/blog/wp-content/uploads/2025/06/26135640/adobestock-124544062-1500x760.jpeg" alt="" />
            <p>Zurich</p>
          </div>

          <div className="highlight-card">
            <img src="https://i.natgeofe.com/n/36f8f284-b6c7-4206-91fd-ac03856aa1b2/Weggis_Fruhling-Beat-Brechbuhl-Lucerne-Tourism_2x1.jpg" alt="" />
            <p>Lucerne</p>
          </div>

          <div className="highlight-card">
            <img src="https://t3.ftcdn.net/jpg/06/60/31/80/360_F_660318032_vryLt8k1eDOQUVhv4f77kD05wU1AWs9w.jpg" alt="" />
            <p>Geneva</p>
          </div>
        </div>
      </div>

      {/* Why Section */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🗼 Eiffel Tower Experience</div>
          <div>🏔️ Swiss Alps Views</div>
          <div>🚄 Scenic Train Journeys</div>
          <div>🍷 Culture & Cuisine</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Plan Your Dream Trip</h2>
        <p>Starting from ₹2,10,000</p><br />
        <Link to="/europe">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary */}
      <div className="itinerary-section">
        <h2>7 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://thumbs.dreamstime.com/b/paris-orly-ory-airport-terminal-sud-france-june-257726796.jpg" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Paris</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://veatravel-rks.com/wp-content/uploads/2023/11/97.jpg" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Paris City Tour & Eiffel Tower</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0e/93/06/5c.jpg" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Travel to Zurich</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://cdn-imgix.headout.com/media/images/51a30458cacd9fda414b522d66b1f5ae-12409-Mount-Titlis-Lucerne-To-Mount-Titlis-01.JPG?auto=format&q=90&fit=crop&crop=faces" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Lucerne & Mt. Titlis</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://oracleoftime.com/wp-content/uploads/2021/03/Why-Any-Watch-Lover-Should-Visit-Geneva.jpg" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Visit Geneva</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://thumbs.dreamstime.com/b/central-big-shopping-mall-xmas-event-105712491.jpg" alt="" />
            <div className="day-content">
              <h3>Day 6</h3>
              <p>Shopping & Leisure</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://thumbs.dreamstime.com/b/passenger-waiting-flight-airport-departure-terminal-happy-traveler-waiting-flight-airport-departure-terminal-113664679.jpg" alt="" />
            <div className="day-content">
              <h3>Day 7</h3>
              <p>Departure</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default FranceSwissLanding;