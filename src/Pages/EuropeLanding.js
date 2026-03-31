import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const EuropeLanding = () => {
  return (
    <div className="usa-landing">

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://images.indianexpress.com/2024/07/Recognised-for-its-exceptional-beauty-and-cultural-significance-the-Taj-Mahal-a-UNESCO-World-Heritage-Site-in-Agra-India-has-also-been-featured-in-the-list-in-the-22nd-position.-Here-are-th.jpg"
          alt="Europe"
        />
        <div className="hero-content">
          <h1>Best of Europe</h1>
          <p>10 Days • 5 Countries • 8 Cities</p>
          <Link to="/europe">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="highlights">
        <h2>Top Destinations</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34" alt="" />
            <p>Paris</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9" alt="" />
            <p>Switzerland</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.emperortraveline.com/wp-content/uploads/2022/09/Italy.jpg" alt="" />
            <p>Italy</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.holland.com/upload_mm/c/b/7/80160_fullimage_rondvaartboot%20vaart%20onder%20brug%20door%20met%20mooie%20wolkenlucht%20%C2%A9%20illusion-x%20via%20pixabay_560x560_438x353.jpg" alt="" />
            <p>Amsterdam</p>
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="why-section">
        <h2>Why Choose Europe Tours?</h2>

        <div className="why-grid">
          <div>🏰 Historic Landmarks</div>
          <div>🌍 Multi-Country Experience</div>
          <div>🍝 Food & Culture</div>
          <div>🚆 Scenic Travel</div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <h2>Plan Your Dream Europe Trip</h2>
        <p>Starting from ₹2,50,000</p><br />
        <Link to="/europe">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary Section */}
      <div className="itinerary-section">
        <h2>10 Days Europe Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://img.freepik.com/premium-photo/plane-landing-paris-airport_1276941-27702.jpg?w=360" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Paris</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://thumbs.dreamstime.com/b/people-walking-park-around-eiffel-tower-france-people-walking-park-around-eiffel-tower-france-paris-104501921.jpg" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Paris City Tour & Eiffel Tower</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://res.klook.com/image/upload/q_85/c_fill,w_750/v1663298566/blog/pdft6kvmqwdxk0witkcd.jpg" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Travel to Switzerland</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/d6/c6/f7.jpg" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Mount Titlis Visit</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://mrhudsonexplores.com/wp-content/uploads/2020/01/Photo-Dan-Novac.jpg" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Travel to Italy</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.vaticantour.com/assets/frontend/images/banner-1.jpg" alt="" />
            <div className="day-content">
              <h3>Day 6</h3>
              <p>Rome & Vatican Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://d3dqioy2sca31t.cloudfront.net/Projects/cms/production/000/001/980/original/6dd853366a0748fe3097e8c60d12b34b/netherlands-country-canal-amsterdam.jpg" alt="" />
            <div className="day-content">
              <h3>Day 7</h3>
              <p>Travel to Netherlands</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://thingstodoinamsterdam.com/wp-content/uploads/2024/06/Canal-Cruise-Amsterdam.jpg" alt="" />
            <div className="day-content">
              <h3>Day 8</h3>
              <p>Amsterdam Canal Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media.licdn.com/dms/image/v2/C4D12AQGuom_9W_KcQw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1599893291314?e=2147483647&v=beta&t=D1lH9V3VZ_z5BB-BpFFoH4YnJg_3ew49_Aec4XZXVIg" alt="" />
            <div className="day-content">
              <h3>Day 9</h3>
              <p>Shopping & Leisure</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://thumbs.dreamstime.com/b/passenger-waiting-flight-airport-departure-terminal-happy-traveler-waiting-flight-airport-departure-terminal-113664679.jpg" alt="" />
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

export default EuropeLanding;