import React, { useState } from "react";
import backgroundImage from "../img/image.jpg"; // import image from src/imgs

function Web() {
  const [formData, setFormData] = useState({
    amount: "",
    lanka_city: "",
    merchant_category: "",
    card_type: "",
    device_type: "",
    transaction_time: "",
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setResult(data.fraud_prediction === 1 ? "Fraud" : "Fraud Not Detected");
    } catch (err) {
      console.error(err);
      setResult("Error connecting to API");
    } finally {
      setLoading(false);
    }
  };

  // Use imported image in style
  const style = {
    minHeight: "100vh",
    backgroundImage: `url(${backgroundImage})`, // <- use imported image
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    color: "white",
    textShadow: "1px 1px 5px black",
    padding: "20px",
  };

  const inputStyle = {
    margin: "8px 0",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    width: "250px",
  };

  const buttonStyle = {
    padding: "10px 20px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#007bff",
    color: "white",
    cursor: "pointer",
    marginTop: "10px",
  };

  return (
    <div style={style}>
      <h1>Fraud Detection Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          style={inputStyle}
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
          required
        />
        <input
          style={inputStyle}
          type="text"
          name="lanka_city"
          placeholder="City"
          value={formData.lanka_city}
          onChange={handleChange}
          required
        />
        <input
          style={inputStyle}
          type="text"
          name="merchant_category"
          placeholder="Merchant Category"
          value={formData.merchant_category}
          onChange={handleChange}
          required
        />
        <input
          style={inputStyle}
          type="text"
          name="card_type"
          placeholder="Card Type"
          value={formData.card_type}
          onChange={handleChange}
          required
        />
        <input
          style={inputStyle}
          type="text"
          name="device_type"
          placeholder="Device Type"
          value={formData.device_type}
          onChange={handleChange}
          required
        />
        <input
          style={inputStyle}
          type="text"
          name="transaction_time"
          placeholder="Transaction Time (HH:MM)"
          value={formData.transaction_time}
          onChange={handleChange}
          required
        />
        <button style={buttonStyle} type="submit">
          {loading ? "Checking..." : "Check Fraud"}
        </button>
      </form>

      {result && (
        <h2
          style={{
            marginTop: "20px",
            color: result === "Fraud" ? "red" : "green",
          }}
        >
          {result}
        </h2>
      )}
    </div>
  );
}

export default Web;
