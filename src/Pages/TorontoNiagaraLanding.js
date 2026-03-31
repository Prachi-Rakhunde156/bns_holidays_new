import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const TorontoNiagaraLanding = () => {
  return (
    <div className="usa-landing">

      <div className="hero-section">
        <img src="https://www.tripsavvy.com/thmb/n5D_Lx3ChNqaSGDvfPFf2ycTKgM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/canada-and-usa--ontario-and-new-york-state--niagara--elevated-view-of-niagara-falls-548748511-59b4a4349abed5001101f17d.jpg" alt="" />
        <div className="hero-content">
          <h1>Toronto & Niagara Falls</h1>
          <p>6 Days • 2 Cities • 1 Country</p>
          <Link to="/canada">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>
       {/* Why Section */}
            <div className="why-section">
              <h2>Why Choose Toronto & Niagara Falls Tour?</h2>
      
              <div className="why-grid">
                 <div>🏙️ Explore Toronto City Life</div>
  <div>🌊 Iconic Niagara Falls Experience</div>
  <div>🚤 Hornblower Boat Ride Adventure</div>
  <div>🌆 Skyline Views from CN Tower</div>
              </div>
            </div>
      
            {/* CTA Section */}
            <div className="cta-section">
              <h2>Plan Your Toronto & Niagara Falls Trip</h2>
              <p>Starting from ₹1,70,000</p><br />
              <Link to="/canada">
                <button className="book-now-btn">Book Now</button>
              </Link>
            </div>

      {/* <div className="cta-section">
        <h2>Starting from ₹1,70,000</h2>
        <Link to="/canada">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div> */}

      <div className="itinerary-section">
        <h2>6 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i1P2vSOePrFI/v2/-1x-1.webp" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Toronto</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://magicbuscompany.com/wp-content/uploads/2015/01/Toronto-City-Tour11.png" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Toronto City Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.niagarafallslive.com/wp-content/uploads/journey-behind-the-falls-summer-1325x800-250k.jpg" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Niagara Falls Visit</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://cdn.getyourguide.com/img/tour/59fb37a60cce39d04bcf1a1b3cbe7eb968760121aea957c7b85d089d823b2bc8.jpg/68.jpg" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Leisure Day</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media.gettyimages.com/id/1332084549/video/timelapse-view-torontos-underground-walkway.jpg?s=640x640&k=20&c=tlBJHLBLm2yvleoXCrtR5K8wq9aSWcdLMNPBoQt3Lb4=" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Shopping & Free Time</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://thumbs.dreamstime.com/b/air-canada-airline-check-area-toronto-pearson-international-airport-bilingual-departure-arrival-signs-selective-397608360.jpg" alt="" />
            <div className="day-content">
              <h3>Day 6</h3>
              <p>Departure</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default TorontoNiagaraLanding;