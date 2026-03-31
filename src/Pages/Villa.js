import React from "react";
import "./Villa.css";

const villas = [
  {
    title: "Beachside Villa",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQauccFtimC-npwmfS8XDltIOrK4TcSr1jVZQ&s",
    desc: "Enjoy a luxurious stay with stunning sea views and private beach access."
  },
  {
    title: "Mountain View Villa",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxbv5vQoMf_0QjJaZDbT_K0PCewIHt-OPDyA&s",
    desc: "Relax in peaceful mountains with fresh air and scenic beauty."
  },
  {
    title: "Private Pool Villa",
    img: "https://gos3.ibcdn.com/7f3d994c-7500-4dde-93a5-57092dcf6afe.jpg",
    desc: "Experience comfort with your own private pool and modern amenities."
  },
  {
    title: "Luxury Forest Villa",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiwkTvhBnntnOs2FC2ixShiWAr9RgxUcZWyg&s",
    desc: "Stay surrounded by lush greenery and calm nature."
  },
  {
    title: "Modern Glass Villa",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT78yqE1SMF9LJzxMIOna7bSsOkXwB5Nz3tig&s",
    desc: "Contemporary design with full glass views and elegance."
  },
  {
    title: "Desert Retreat Villa",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRP4pA4VHBpViLbr7eX9yzQt8YFk207-YIAw&s",
    desc: "Unique experience in desert landscapes with luxury comfort."
  },
  {
    title: "Island Paradise Villa",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTGv0t4wXSHqYZRvfJF4hb32ektT8qYCAQGw&s",
    desc: "Private island villa with crystal clear water views."
  },
  {
    title: "Cliffside Villa",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS5JXduWDtSiKw6FN2PqvAJdSeAWHvp8kP3g&s",
    desc: "Breathtaking views from the top of scenic cliffs."
  },
  {
    title: "Countryside Villa",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVVWCFkEb3uqlGJfOe1KB6dbdq-zUM3gF2dA&s",
    desc: "Peaceful countryside living with modern facilities."
  },
  {
    title: "Royal Heritage Villa",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcoY0J_p9gYkFbehT8TMu0I8vKcBGCHtUUOg&s",
    desc: "Experience royal living with traditional architecture."
  }
];

const Villa = () => {
  return (
    <div className="villa-container">
      <h1 className="villa-title">Luxury Villas</h1>
      <p className="villa-subtitle">
        Explore the best villas for your perfect vacation stay.
      </p>

      <div className="villa-grid">
        {villas.map((villa, index) => (
          <div className="villa-card" key={index}>
            <img src={villa.img} alt={villa.title} />
            <div className="villa-content">
              <h3>{villa.title}</h3>
              <p>{villa.desc}</p>
              <button>View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Villa;