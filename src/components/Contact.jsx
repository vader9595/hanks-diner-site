import React from "react";
import './contact.css';





function Contact() {



  return (
<>

    <section id="contact" className="contact">

      <div className = "contact-wrapper">
      


            <div className="contact-info">

                <h3>  Contact Us  </h3>

                <p>  123 Main St, Breakfastville, USA  </p>
                <p>  555-123-4567  </p>

              </div>



              <div className="hours">

                <h3>  Hours of Operation  </h3>

                <p>  Monday – Friday:   6a.m. – 2p.m.    </p>
                <p>  Saturday – Sunday:   7a.m. – 3p.m.  </p>

              </div>

      </div>

    </section>





    <div>
      
      <h1>  About the Owner  </h1>


          <div className="ownerArea">

                  <img src="/nick.jpg" alt="nick pic" className="nick-img" />


                          <div className="ownerInfo"> 
                            
                            <h2> "I'm Awesome." </h2>
                          
                          </div>
          </div>
          
    </div>

</>

);
}

export default Contact;
