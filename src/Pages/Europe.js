import React, { useState } from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const tours = [
  {
    title: "Best of Europe",
    days: "10 Days",
    countries: "5 Countries",
    cities: "8 Cities",
    dates: "12 Dates",
    price: "₹2,50,000",
    emi: "₹11,500/mo",
    image: "https://blog.dookinternational.com/images/post-media/Z4G0Z1682335149.jpg"
  },
  {
    title: "France & Switzerland",
    days: "7 Days",
    countries: "2 Countries",
    cities: "4 Cities",
    dates: "10 Dates",
    price: "₹2,10,000",
    emi: "₹9,800/mo",
    image: "https://imagecache.tourhub.co/uploads/J2VTTrk8QEehLCeIbSXk_Untitled%20(1080%20x%20600%20px)%20-%202025-04-12T104501.222.jpg"
  },
  {
    title: "Italy Highlights Tour",
    days: "8 Days",
    countries: "1 Country",
    cities: "4 Cities",
    dates: "8 Dates",
    price: "₹1,95,000",
    emi: "₹9,000/mo",
    image: "https://cdn.kimkim.com/files/a/images/c4b08e2d82a827182b8d140723539baff070c41c/big-c7991fc83155098557c887e72b30093f.jpg"
  },
  {
    title: "Eastern Europe Explorer",
    days: "9 Days",
    countries: "3 Countries",
    cities: "5 Cities",
    dates: "6 Dates",
    price: "₹2,20,000",
    emi: "₹10,200/mo",
    image: "https://modularassets.cdn.ignitetravel.com/modular_multisite/wp-content/uploads/sites/2/2024/12/16130036/Budapest-Hungary-2.jpg"
  },
  {
    title: "Luxury Europe Tour",
    days: "12 Days",
    countries: "6 Countries",
    cities: "10 Cities",
    dates: "5 Dates",
    price: "₹3,20,000",
    emi: "₹14,500/mo",
    image: "https://www.luxurygold.com/media/epsotnsb/czech-republic-luxury-tours-travel-guide.jpeg?center=0.4923572164072419%2C0.500010000200004&format=webp&mode=crop&width=900&height=600&quality=80"
  }
];

const Europe = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="tour-container">
      <h1>Europe Tour Packages</h1>

      {tours.map((tour, index) => (
        <div className="tour-card" key={index}>

          {/* IMAGE */}
          <div className="tour-image">
            <span className="badge">Popular Today</span>
            <img src={tour.image} alt={tour.title} />
          </div>

          {/* INFO */}
          <div className="tour-info">
           <h2>
  {tour.title === "Best of Europe" ? (
    <Link to="/europe-landing" className="title-link">{tour.title}</Link>
  ) : tour.title === "France & Switzerland" ? (
    <Link to="/france-swiss" className="title-link">{tour.title}</Link>
  ) : tour.title === "Italy Highlights Tour" ? (
    <Link to="/italy-tour" className="title-link">{tour.title}</Link>
  ) : tour.title === "Eastern Europe Explorer" ? (
    <Link to="/eastern-europe" className="title-link">{tour.title}</Link>
  ) : tour.title === "Luxury Europe Tour" ? (
    <Link to="/luxury-europe" className="title-link">{tour.title}</Link>
  ) : (
    tour.title
  )}
</h2>

            <div className="rating">
              ⭐⭐⭐⭐⭐ <span>120 Reviews</span>
            </div>

            <p 
              className="inclusive" 
              onClick={() => setShowModal(true)}
            >
              ∞ All Inclusive
            </p>

            <p className="details">
              {tour.days} • {tour.countries} • {tour.cities}, {tour.dates}
            </p>

            <p className="dates">Dates Filling Fast</p>
          </div>

          {/* PRICE */}
          <div className="tour-price">
            <p className="start">Starts from</p>
            <h2>{tour.price}</h2>
            <p className="emi">EMI from {tour.emi}</p>

            <button className="book-btn">Book Online</button>
            <button className="whatsapp-btn">Share on WhatsApp</button>
            <button className="details-btn">View Tour Details</button>
          </div>

        </div>
      ))}

      {/* MODAL */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">

            <div className="modal-header">
              <h2>Tour Includes</h2>
              <span className="close-btn" onClick={() => setShowModal(false)}>
                ✕
              </span>
            </div>

            <div className="icons-row">
              <div><span>🏨</span><p>Hotel</p></div>
              <div><span>🍽️</span><p>Meals</p></div>
              <div><span>✈️</span><p>Flight</p></div>
              <div><span>📷</span><p>Sightseeing</p></div>
              <div><span>🚌</span><p>Transport</p></div>
              <div><span>📄</span><p>Visa</p></div>
            </div>

            <div className="modal-content">
              <p>
                👨‍✈️ Tour includes the services of <b>BNS Holidays</b> .
              </p>

              <p className="note">
                *Except for joining/leaving. To & fro economy class airfare is included.
                <br />
                *Taxes Extra.
              </p>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default Europe;