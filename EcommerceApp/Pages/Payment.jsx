import React, { useState } from 'react';
import '../Styles/Payment.css'; // optional CSS file

const Payment = () => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    nameOnCard: '',
    expiry: '',
    cvv: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add validation or API call here
    alert('Payment submitted!');
  };

  return (
    <div className="payment-container">
      <h2>Credit Card Payment</h2>
      <form onSubmit={handleSubmit} className="payment-form">
        <label>
          Card Number
          <input
            type="text"
            name="cardNumber"
            maxLength="16"
            placeholder="1234 5678 9012 3456"
            value={formData.cardNumber}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Name on Card
          <input
            type="text"
            name="nameOnCard"
            placeholder="John Doe"
            value={formData.nameOnCard}
            onChange={handleChange}
            required
          />
        </label>

        <div className="row">
          <label>
            Expiry Date
            <input
              type="text"
              name="expiry"
              placeholder="MM/YY"
              value={formData.expiry}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            CVV
            <input
              type="password"
              name="cvv"
              maxLength="4"
              placeholder="123"
              value={formData.cvv}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default Payment;
