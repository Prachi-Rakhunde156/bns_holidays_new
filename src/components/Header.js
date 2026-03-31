import React, { useState } from "react";
import "./Header.css";
import logo from "./images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeCategory, setActiveCategory] = useState("north");
  const [activeInternational, setActiveInternational] = useState("europe");
  const [activeFixed, setActiveFixed] = useState("trending");
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const destinations = [

  ];
  const fixedDestinations = [
    { name: "USA", path: "/Pages/USA" },
    { name: "Australia", path: "/Pages/Australia" },
    { name: "Canada", path: "/Pages/Canada" },
    { name: "Europe", path: "/Pages/Europe" },
  ];

  const indiaData = {
    north: [
      { title: "Himachal Pradesh", items: ["Manali", "Shimla", "Spiti Valley"] },
      { title: "Kashmir", items: ["Srinagar", "Gulmarg", "Pahalgam"] }
    ],
    south: [
      { title: "Kerala", items: ["Munnar", "Alleppey", "Kochi"] },
      { title: "Tamil Nadu", items: ["Ooty", "Chennai"] }
    ],
    east: [
      { title: "Sikkim", items: ["Gangtok"] },
      { title: "Assam", items: ["Guwahati"] }
    ],
    west: [
      { title: "Rajasthan", items: ["Jaipur", "Udaipur"] },
      { title: "Goa", items: ["North Goa", "South Goa"] }
    ]
  };

  const internationalData = {
    europe: [
      { title: "Western Europe", items: ["France", "Germany", "Italy", "Switzerland"] },
      { title: "Eastern Europe", items: ["Hungary", "Poland", "Czech Republic"] }
    ],
    asia: [
      { title: "Southeast Asia", items: [{name: "Thailand" , path: "/Pages/Thailand"}, {name:"Singapore" , path: "/Pages/Singapore"}, "Malaysia", "Bali"] },
      { title: "Middle East", items: ["Dubai", "Abu Dhabi"] }
    ],
    americas: [
      { title: "North America", items: [{ name: "USA", path: "/Pages/USA" },
      { name: "Canada", path: "/Pages/Canada" }] }
    ],
    oceania: [
      { title: "Australia & NZ", items: [{ name: "Australia", path: "/Pages/Australia" }, { name: "New Zealand", path: "/Pages/NewZealand" }] }
    ]
  };


  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);

    const filtered = destinations.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    setResults(value ? filtered : []);
  };

  const handleSelect = (path) => {
    navigate(path);
    setSearch("");
    setResults([]);
  };

  const closeDropdown = () => setOpenDropdown(null);

  return (
    <header>
      <div className="main-header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search destinations..."
            value={search}
            onChange={handleSearch}
          />

          <button className="search-btn">
            <FontAwesomeIcon icon={faSearch} />
          </button>

          {results.length > 0 && (
            <ul className="search-results">
              {results.map((item, index) => (
                <li key={index} onClick={() => handleSelect(item.path)}>
                  {item.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="top-navbar">
        <ul>
          <li><Link to="/">Home</Link></li>

          {/* INDIA */}
          <li
            className="nav-item"
            onMouseEnter={() => setOpenDropdown("india")}
            onMouseLeave={closeDropdown}
          >
            India ▾
            {openDropdown === "india" && (
              <div className="mega-menu">
                <div className="mega-left">
                  <p className={activeCategory === "north" ? "active" : ""} onMouseEnter={() => setActiveCategory("north")}>North India ›</p>
                  <p className={activeCategory === "south" ? "active" : ""} onMouseEnter={() => setActiveCategory("south")}>South India ›</p>
                  <p className={activeCategory === "east" ? "active" : ""} onMouseEnter={() => setActiveCategory("east")}>East & North East India ›</p>
                  <p className={activeCategory === "west" ? "active" : ""} onMouseEnter={() => setActiveCategory("west")}>West India ›</p>
                </div>

                <div className="mega-right">
                  {indiaData[activeCategory].map((section, i) => (
                    <div className="mega-column" key={i}>
                      <h4>{section.title}</h4>
                      {section.items.map((item, j) => <p key={j}>{item}</p>)}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </li>

          {/* INTERNATIONAL */}
          <li
            className="nav-item"
            onMouseEnter={() => setOpenDropdown("international")}
            onMouseLeave={closeDropdown}
          >
            International ▾
            {openDropdown === "international" && (
              <div className="mega-menu">
                <div className="mega-left">
                  <p className={activeInternational === "europe" ? "active" : ""} onMouseEnter={() => setActiveInternational("europe")}>Europe ›</p>
                  <p className={activeInternational === "asia" ? "active" : ""} onMouseEnter={() => setActiveInternational("asia")}>Asia ›</p>
                  <p className={activeInternational === "americas" ? "active" : ""} onMouseEnter={() => setActiveInternational("americas")}>Americas ›</p>
                  <p className={activeInternational === "oceania" ? "active" : ""} onMouseEnter={() => setActiveInternational("oceania")}>Australia ›</p>
                </div>

                <div className="mega-right">
                  {internationalData[activeInternational].map((section, i) => (
                    <div className="mega-column" key={i}>
                      <h4>{section.title}</h4>
                      {section.items.map((item, j) => (
  <p key={j}>
    {typeof item === "string" ? (
      item
    ) : (
      <Link to={item.path}>{item.name}</Link>
    )}
  </p>
))}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </li>

          {/* FIXED DEPARTURE */}
          <li
  className="nav-item"
  onMouseEnter={() => setOpenDropdown("fixed")}
  onMouseLeave={closeDropdown}
>
  Fixed Departure ▾
  {openDropdown === "fixed" && (
    <div className="fixed-dropdown">
      {fixedDestinations.map((dest, index) => (
        <p key={index}>
          <Link to={dest.path}>{dest.name} ›</Link>
        </p>
      ))}
    </div>
  )}
</li>

          <li><Link to="/villa">Villa</Link></li>
          <li><Link to="/visa">Visa</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;