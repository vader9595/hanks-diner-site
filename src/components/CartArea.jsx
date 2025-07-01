import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./CartArea.css";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe("your-publishable-key");




function CartArea() {
  const { cart, removeFromCart } = useContext(CartContext);

  // Inside CartArea component

const TAX_RATE = 0.0825;

const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
const tax = subtotal * TAX_RATE;
const total = subtotal + tax;




  return (
    <>
      <h2>Your Cart</h2>

      {cart.length === 0 && <p>Cart is empty</p>}
      

      <ul>

        {cart.map((item, index) => (

          <li key={index}>

            {item.name} - ${item.price.toFixed(2)} 
              {/* to 2 decimal places*/}
              
            <button style={{ marginLeft: '20px' }} onClick={() => removeFromCart(index)}> Remove </button>

          </li>

        ))}

      </ul>
      
      <div>

        
        <p className="subtotal">     Subtotal:     ${subtotal.toFixed(2)}  </p>

        <p>                          Tax (8.25%):  ${tax.toFixed(2)}       </p>
        
        <h3>                         Total:        ${total.toFixed(2)}     </h3>

      </div>

  <Elements stripe={stripePromise}>

      <CheckoutForm />
    
    </Elements>

    </>
  );
}

export default CartArea;
