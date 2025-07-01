
import './Menu.css'; // if you want to style it separately
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';


const menuItems = [

  { id: 1,   name: 'Pancakes',     price: 5.99 },
  { id: 2,   name: 'Waffles',      price: 6.99 },
  { id: 3,   name: 'Bacon & Eggs', price: 7.99 },

];

const BurgersAndSandwiches = [

  {id: 4,   name: 'Classic Cheeseburger',   price: 8.99},
  {id: 5,   name: 'Grilled Cheese',         price: 5.99},
  {id: 6,   name: 'BLT',                    price: 6.49},
  {id: 7,   name: 'Chicken Sandwhich',      price: 7.99},

];



const sides = [

  {id: 8,   name: 'Fries',         price: 2.99},
  {id: 9,   name: 'Onion Rings',   price: 3.49},
  {id: 10,  name: 'Hash Browns',   price: 2.49},

];


const drinks = [

  {id: 11,   name: 'Coffee',      price: 1.99},
  {id: 12,   name: 'Sweet Tea',   price: 1.99},
  {id: 13,   name: 'Soda',        price: 1.99},
  {id: 14,   name: 'Milk Shake',  price: 3.99},

];

const MenuPreview = () => {

  const { addToCart } = useContext(CartContext);








  return (
  <>

<div className="center-layout">
  

  <div className="center-text">  Our Menu  </div>

  
</div>



<div className="breakfastArea">

  <img src="/pancakes.avif" alt="Left" className="side-img" />


  <div className="breakfastList"> 
    
    <h2> Breakfast </h2>

  {menuItems.map(item => (

            <div key={item.id} className="menu-item">

             {item.name} - ${item.price.toFixed(2)}
            
             <button style={{ marginLeft: '20px' }} onClick={() => addToCart(item)}> Add </button>

           </div>
                                  ))}  

  </div>
</div>




<div className="lunchArea">
  

  <div className="lunchList"> 
    
    <h2> Lunch </h2>

  {BurgersAndSandwiches.map(item => (

            <div key={item.id} className="menu-item">

             {item.name} - ${item.price.toFixed(2)}
            
             <button style={{ marginLeft: '20px' }} onClick={() => addToCart(item)}> Add </button>

           </div>
                                  ))}  

  </div>

  <img src="/burger.jpeg" alt="left" className="burger-img" />
  
</div>




<div className="sidesArea">

  <img src="/fries.jpeg" alt="Left" className="fries-img" />


  <div className="sidesList"> 
    
    <h2> Sides </h2>

  {sides.map(item => (

            <div key={item.id} className="menu-item">

             {item.name} - ${item.price.toFixed(2)}
            
             <button style={{ marginLeft: '20px' }} onClick={() => addToCart(item)}> Add </button>

           </div>
                                  ))}  

  </div>
</div>





<div className="drinksArea">
  

  <div className="drinksList"> 
    
    <h2> Drinks </h2>

  {drinks.map(item => (

            <div key={item.id} className="menu-item">

             {item.name} - ${item.price.toFixed(2)}
            
             <button style={{ marginLeft: '20px' }} onClick={() => addToCart(item)}> Add </button>

           </div>
                                  ))}  

  </div>

  <img src="/coffee.jpeg" alt="left" className="coffee-img" />
  
</div>



</>    
  );
};

export default MenuPreview;
