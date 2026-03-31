import React from "react";
import "./IndiaDestinations.css";

const destinations = [
  { name: "Goa", img: "https://images.unsplash.com/photo-1587922546307-776227941871" },
  { name: "Kerala", img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944" },
  { name: "Rajasthan", img: "https://images.unsplash.com/photo-1599661046289-e31897846e41" },
  { name: "Kashmir", img: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d" },
  { name: "Manali", img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23" },
  { name: "Ladakh", img: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2" }
];

const IndiaDestinations = () => {
  const scrollItems = [...destinations, ...destinations]; // duplicate items

  return (
    <div className="india-section">
      <h2>India Destinations</h2>
      <div className="slider-wrapper">
        <div className="card-container">
          {scrollItems.map((item, index) => (
            <div className="card" key={index}>
              <div className="img-box">
                <img src={item.img} alt={item.name} />
                <p>{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndiaDestinations;