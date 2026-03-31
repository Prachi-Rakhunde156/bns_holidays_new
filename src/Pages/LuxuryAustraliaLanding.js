import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const LuxuryAustraliaLanding = () => {
  return (
    <div className="usa-landing">

      {/* Hero */}
      <div className="hero-section">
        <img src="https://cdn.kimkim.com/files/a/images/ad65eb65485e2bde29fe4f35f6856ef71230d4fd/original-8c170dff9e53c14605d565a22e4ff9dd.jpg" alt="" />
        <div className="hero-content">
          <h1>Luxury Australia Tour</h1>
          <p>10 Days • 4 Cities • Premium</p>
          <Link to="/australia">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Starting from ₹2,25,000</h2>
        <Link to="/australia">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary */}
<div className="itinerary-section">
  <h2>10 Days Itinerary</h2>

  <div className="itinerary-list">

    <div className="day-card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCEp0ZoXzIEUB6oGqpMhXZf1RY7Dp05VfiLQ&s" />
      <div className="day-content">
        <h3>Day 1</h3>
        <p>Arrival in Sydney</p>
      </div>
    </div>

    <div className="day-card">
      <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/96/5a/b5.jpg" />
      <div className="day-content">
        <h3>Day 2</h3>
        <p>Sydney City Tour</p>
      </div>
    </div>

    <div className="day-card">
      <img src="https://images.trvl-media.com/place/502962/a8e83996-3718-4763-a207-75030fc95ec2.jpg" />
      <div className="day-content">
        <h3>Day 3</h3>
        <p>Visit Opera House & Harbour Bridge</p>
      </div>
    </div>

    <div className="day-card">
      <img src="https://beaches-searcher.com/images/beaches/36201231/AU201231.jpg" />
      <div className="day-content">
        <h3>Day 4</h3>
        <p>Bondi Beach & Leisure</p>
      </div>
    </div>

    <div className="day-card">
      <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/71/a7/3b.jpg" />
      <div className="day-content">
        <h3>Day 5</h3>
        <p>Travel to Melbourne</p>
      </div>
    </div>

    <div className="day-card">
      <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6f/50/c1.jpg" />
      <div className="day-content">
        <h3>Day 6</h3>
        <p>Melbourne City Tour</p>
      </div>
    </div>

    <div className="day-card">
      <img src="https://melbprivatetours.com.au/wp-content/uploads/freshizer/96b221ae4dbee75192bc3d0e570b47ac_Melbourne-Private-Tours_Great-Ocean-Road-Day-tour-from-Melbourne-800-530-c.jpg" />
      <div className="day-content">
        <h3>Day 7</h3>
        <p>Great Ocean Road Trip</p>
      </div>
    </div>

    <div className="day-card">
      <img src="https://thetailor.com/wp-content/uploads/2024/10/gold-coast-city-aerial-southport-spit-scaled.jpg" />
      <div className="day-content">
        <h3>Day 8</h3>
        <p>Travel to Gold Coast</p>
      </div>
    </div>

    <div className="day-card">
      <img src="https://media.tacdn.com/media/attractions-splice-spp-720x480/15/71/a1/b2.jpg" />
      <div className="day-content">
        <h3>Day 9</h3>
        <p>Theme Parks & Adventure</p>
      </div>
    </div>

    <div className="day-card">
      <img src="https://images.livemint.com/img/2021/05/14/original/2021-05-01T003647Z_1_LYNXMPEH401FS_RTROPTP_3_HEALTH-CORONAVIRUS-AUSTRALIA_1620963821255.JPG" />
      <div className="day-content">
        <h3>Day 10</h3>
        <p>Departure</p>
      </div>
    </div>

  </div>
</div>

    </div>
  );
};

export default LuxuryAustraliaLanding;