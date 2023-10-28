import React, { useState } from 'react';
import TransactionService from '../services/TransactionService';

const PurchasePersona = ({ persona }) => {
  const [transaction, setTransaction] = useState(null);

  const purchasePersona = async () => {
    try {
      const response = await TransactionService.purchasePersona(persona);
      setTransaction(response.data);
      window.dispatchEvent(new CustomEvent('PERSONA_PURCHASED', { detail: response.data }));
    } catch (error) {
      console.error('Failed to purchase persona:', error);
    }
  };

  return (
    <div id="purchase-persona">
      <h2>Purchase Persona</h2>
      <p>{persona.name}</p>
      <p>{persona.price}</p>
      <button onClick={purchasePersona}>Purchase</button>
      {transaction && (
        <div>
          <h3>Transaction Details</h3>
          <p>Transaction ID: {transaction.id}</p>
          <p>Amount: {transaction.amount}</p>
          <p>Status: {transaction.status}</p>
        </div>
      )}
    </div>
  );
};

export default PurchasePersona;