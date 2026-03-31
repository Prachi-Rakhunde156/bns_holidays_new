import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const USALanding = () => {
  return (
    <div className="usa-landing">

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://www.travelam.in/img/Location/ZpYiSpoQ0l/usa-tour.jpeg"
          alt="USA"
        />
        <div className="hero-content">
          <h1>Explore USA</h1>
          <p>Dream. Discover. Travel.</p>
          <Link to="/usa">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/*  Highlights Section */}
      <div className="highlights">
        <h2>Top Destinations</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?cs=srgb&dl=pexels-burst-374710.jpg&fm=jpg" alt="" />
            <p>New York</p>
          </div>

          <div className="highlight-card">
            <img src="https://media.timeout.com/images/105236338/image.jpg" alt="" />
            <p>California</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFzJTIwdmVnYXN8ZW58MHx8MHx8fDA%3D" alt="" />
            <p>Las Vegas</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.grayline.com/wp-content/uploads/2023/04/Grand-Canyon-1-scaled.jpg" alt="" />
            <p>Grand Canyon</p>
          </div>
        </div>
      </div>

      {/*  Why Choose Section */}
      <div className="why-section">
        <h2>Why Choose USA Tours?</h2>

        <div className="why-grid">
          <div>🌆 World Famous Cities</div>
          <div>🎢 Entertainment & Adventure</div>
          <div>🛍️ Shopping Paradise</div>
          <div>🍔 Food & Culture</div>
        </div>
      </div>

      {/* 📞 CTA Section */}
      <div className="cta-section">
        <h2>Plan Your Dream USA Trip</h2>
        <p>Book now and get best deals on USA tours</p><br />
        <Link to="/usa">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>
     <div className="itinerary-section">
  <h2>10 Days USA Itinerary</h2>

  <div className="itinerary-list">

    <div className="day-card">
      <img src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?cs=srgb&dl=pexels-burst-374710.jpg&fm=jpg" alt="Day 1" />
      <div className="day-content">
        <h3>Day 1</h3>
        <p>Arrival in New York & City Orientation</p>
      </div>
    </div>

    <div className="day-card">
      <img src="https://www.newyorkbyrail.com/wp-content/uploads/2017/12/Central-Park-New-York-City-New-York-By-Rail-1200x650.jpg.webp" alt="Day 2" />
      <div className="day-content">
        <h3>Day 2</h3>
        <p>Statue of Liberty, Times Square, Central Park</p>
      </div>
    </div>

    <div className="day-card">
      <img src="https://offloadmedia.feverup.com/secretdc.com/wp-content/uploads/2023/08/13051314/shutterstock_343675700-1.jpg" alt="Day 3" />
      <div className="day-content">
        <h3>Day 3</h3>
        <p>Travel to Washington D.C. & Sightseeing</p>
      </div>
    </div>

    <div className="day-card">
      <img src="https://thumbs.dreamstime.com/b/white-house-washington-d-c-united-states-national-landmark-washington-white-house-126009942.jpg" alt="Day 4" />
      <div className="day-content">
        <h3>Day 4</h3>
        <p>Visit White House, Lincoln Memorial</p>
      </div>
    </div>

    <div className="day-card">
      <img src="https://www.bigbustours.com/media/wysiwyg/lasvegas/13-about-usp-info-general/USP_Adult_Night_Tour.jpg" alt="Day 5" />
      <div className="day-content">
        <h3>Day 5</h3>
        <p>Fly to Las Vegas & Night Tour</p>
      </div>
    </div>

    <div className="day-card">
      <img src="https://nationalparkexpress.com/wp-content/uploads/2022/05/grand-canyon-west-1.jpg" alt="Day 6" />
      <div className="day-content">
        <h3>Day 6</h3>
        <p>Grand Canyon Tour</p>
      </div>
    </div>

    <div className="day-card">
      <img src="https://milesopedia.com/wp-content/uploads/2022/08/Los-Angeles-Santa-Monica-1024x683.jpg" alt="Day 7" />
      <div className="day-content">
        <h3>Day 7</h3>
        <p>Travel to Los Angeles</p>
      </div>
    </div>

    <div className="day-card">
      <img src="https://res.cloudinary.com/simpleview/image/upload/v1612197440/clients/anaheimca/uni_studios_hollywood_max_res_default2_3f15e0a6-8283-470c-8870-1f2a89c02952.jpg" alt="Day 8" />
      <div className="day-content">
        <h3>Day 8</h3>
        <p>Hollywood, Universal Studios</p>
      </div>
    </div>

    <div className="day-card">
      <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/d9/0a/76/cf-toronto-eaton-centre.jpg?w=500&h=500&s=1" alt="Day 9" />
      <div className="day-content">
        <h3>Day 9</h3>
        <p>Shopping & Leisure Day</p>
      </div>
    </div>

    <div className="day-card">
      <img src="https://c8.alamy.com/comp/2A8K5DN/a-man-reads-information-from-electronic-information-boards-in-the-departures-lounge-at-fort-worth-airport-in-dallas-texas-usa-2A8K5DN.jpg" alt="Day 10" />
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

export default USALanding;