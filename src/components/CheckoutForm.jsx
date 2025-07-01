import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import { useState } from 'react';

import "./CheckoutForm.css";



function CheckoutForm() {

  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      setError(error.message);

    } 
      else {
        console.log('PaymentMethod:', paymentMethod);
        // Send paymentMethod.id to backend
    }
  };



  return (
    
    <div className="checkout-form">

      <form onSubmit={ handleSubmit }>

        <div className="card-element-wrapper">
          
          <label htmlFor="card-element">  Card Information  </label>

          <CardElement id="card-element" />

        </div>
        
        <button type="submit" disabled={!stripe}>  Pay    </button>

        {error && <p>{error}</p>}

      </form>

    </div>
  );
}

export default CheckoutForm;
