import React from "react";
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; // ← import cart icon
import "./Header.css";





function Header() {
  




  return (

    
    
 <header>

<div className="navs">

                        <nav>
                          <Link to="/">        Home   </Link>
                          <Link to="/career">  Careers  </Link>

                          <Link to="/cart">   <FaShoppingCart size={32} />   </Link>
                        </nav>
                  </div>



      <div className="headerArea">

        <img src="/hanksDinerLogo.jpeg" alt="Hank's Diner Logo" />



            <div className="dinerName">

              Hank's Diner

            </div>


      </div>
                
           
     
      
    </header>
  );
}

export default Header;
