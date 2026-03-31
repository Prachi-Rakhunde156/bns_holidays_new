import React from "react";
import "./Visa.css";

const visas = [
  {
    country: "USA Visa",
    img: "https://blog.onevasco.com/wp-content/uploads/Reasons-to-Visit-USA.png",
    desc: "Apply for tourist, business, and student visas for the USA."
  },
  {
    country: "UK Visa",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyIeGhnXqIoAlpCE-vgWP6LMC-BNZPvQxwKA&s",
    desc: "Get assistance for UK visa applications with easy processing."
  },
  {
    country: "Dubai Visa",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJx3OHNrm2hcC6SujxjwOZFXzldEggJLieRQ&s",
    desc: "Fast and easy Dubai visa services for your travel plans."
  },
  {
    country: "Schengen Visa",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkMJtST7WlU9vFIvULPGgn5U7ygCmf0iLs2w&s",
    desc: "Travel across Europe with Schengen visa assistance."
  },
  {
    country: "Australia Visa",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyWOuUEmzZbeZhxQScrX3R_8Wj1QzxC2dNEg&s",
    desc: "Apply for Australia tourist and work visas hassle-free."
  },
  {
    country: "Canada Visa",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8UQkuhgkqlt9uKhraz1dAnegae1p7tsmYRQ&s",
    desc: "Complete support for Canada visa applications."
  }
];

const Visa = () => {
  return (
    <div className="visa-container">
      <h1 className="visa-title">Visa Services</h1>
      <p className="visa-subtitle">
        Get visa assistance for all countries with quick and easy processing.
      </p>

      <div className="visa-grid">
        {visas.map((visa, index) => (
          <div className="visa-card" key={index}>
            <img src={visa.img} alt={visa.country} />
            <div className="visa-content">
              <h3>{visa.country}</h3>
              <p>{visa.desc}</p>
              <button>Apply Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Visa;