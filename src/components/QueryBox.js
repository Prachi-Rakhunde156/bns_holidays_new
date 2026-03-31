import React, { useState } from "react";
import "./QueryBox.css";

const QueryBox = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSend = () => {
    const subject = `Query from ${form.name}`;
    const body = `Name: ${form.name}%0AEmail: ${form.email}%0A%0AMessage: ${form.message}`;

    // window.location.href = `mailto:your@email.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="query-section">
      <h2>Send Your Query</h2>

      <div className="query-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Your Query..."
          value={form.message}
          onChange={handleChange}
        ></textarea>

        <button onClick={handleSend}>Send Message</button>
      </div>
    </div>
  );
};

export default QueryBox;