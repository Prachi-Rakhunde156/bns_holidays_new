import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const VegasGrandLanding = () => {
  return (
    <div className="usa-landing">

      {/* Hero */}
      <div className="hero-section">
        <img src="https://baladodiscovery.com/public/assets/upload_pic/resized_1704406788.jpeg" alt="" />
        <div className="hero-content">
          <h1>Las Vegas & Grand Canyon</h1>
          <p>5 Days • 2 Cities • 1 Country</p>
          <Link to="/usa">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Starting from ₹1,60,000</h2>
        <Link to="/usa">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary */}
      <div className="itinerary-section">
        <h2>5 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://www.vanderlande.com/wp-content/uploads/2023/03/Las_Vegas_McCarran_12671_cutout.jpg" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Las Vegas</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media.istockphoto.com/id/486167453/photo/people-enjoy-fremont-street-in-las-vegas-nevada-by-night.jpg?s=612x612&w=0&k=20&c=-SFLgR5vm25nICs2CULNS42X7rTjX-DlfVAfbvt_p3w=" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Las Vegas Strip & Nightlife</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://graylinelasvegas.com/wp-content/uploads/2023/11/The-Ultimate-Grand-Canyon-Tour-Guide-for-2024.jpg" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Grand Canyon Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.tripsavvy.com/thmb/KB86wr_YSEbgCTGl6kzzO0q8kws=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/IMG_0313-5c4b6c57c9e77c000138023d.jpg" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Shopping & Leisure</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://live.staticflickr.com/77/188695693_41ed49cf7a_b.jpg" alt="" />
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

export default VegasGrandLanding;