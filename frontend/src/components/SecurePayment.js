```javascript
import React, { useState } from 'react';
import { TransactionService } from '../services/TransactionService';

const SecurePayment = () => {
  const [transaction, setTransaction] = useState(null);

  const handlePayment = async (paymentDetails) => {
    try {
      const response = await TransactionService.processPayment(paymentDetails);
      setTransaction(response.data);
    } catch (error) {
      console.error('Payment processing failed:', error);
    }
  };

  return (
    <div id="secure-payment">
      <h2>Secure Payment</h2>
      <form onSubmit={handlePayment}>
        <label>
          Card Number:
          <input type="text" name="cardNumber" required />
        </label>
        <label>
          Expiry Date:
          <input type="text" name="expiryDate" required />
        </label>
        <label>
          CVV:
          <input type="text" name="cvv" required />
        </label>
        <button type="submit">Pay Now</button>
      </form>
      {transaction && (
        <div>
          <h3>Payment Successful</h3>
          <p>Transaction ID: {transaction.id}</p>
        </div>
      )}
    </div>
  );
};

export default SecurePayment;
```