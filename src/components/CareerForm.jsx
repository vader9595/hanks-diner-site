import { useState } from 'react';
import './CareerForm.css';







//       vvvvv THIS FUNCTION NAME HAS TO MATCH THE COMPONENT NAME ("CareerForm")
function CareerForm() { 
  

  /* this is basically an array to hold the stuff in */
  const [formData, setFormData] = useState({

    name: '',
    lastName:'',
    email: '',
    resume: null
  
  });


  /* This updates your formData state object.
"...prev" keeps all the previous data (so nothing gets erased).

[name]: This uses the input's name attribute as the key to update the right
part of the state (name, email, or resume).

"files ? files[0] : value:"

If it's a file input (files exists), use the first file (files[0]).
If it's not a file input, use the text value the user typed., basically,
e.target will detect if it has a "files array and if it does then it's
a file bc regular text stuff doesn't have one" */

const handleChange = (e) => {
  
  /* vvvvv e.target is the form element (like <input>) that 
           triggered the event. */
    const { name, value, files } = e.target; 
  
    setFormData((prev) => ({
      ...prev,

      [name]: files ?    files[0] : value
  
    }));
  };


  const handleSubmit = (e) => {
  
    e.preventDefault(); /* this prevents the page from reloading */
  
    // For now, just log it. Replace with real backend API later.
    console.log('Submitted:', formData);

    alert('Resume submitted!');
  
    /* to see this, right-click, inspect page, AND THEN hit submit and 
    you'll see it under Messages, User Messages or Info */
  };





  
  
  
  return (
  <>
      
      <div className="super-big-text">

        Careers
        
      </div>



  <div className="pancakes-wrapper">

<img src= "/careerPic.jpeg" alt="left food pic" className ="careerPic-pic" />

  <div className="career-form-container">
  
    <h2 className="career-heading">   Join Our Team   </h2>
  
    <form onSubmit= { handleSubmit } 
        className= "career-form"
        name="job-application" 
        method="POST" 
        data-netlify="true" 
        data-netlify-honeypot="bot-field"
        enctype="multipart/form-data"
        
    >
        
      <input
        type="text"
        name="name"
        placeholder="First Name"
        value={formData.name}
        onChange={handleChange}
        required
      />


       <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
  
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <p className="resume-note">   Submit your resume:   </p>
  
      <input
        type="file"
        name="resume"
        accept=".pdf,.doc,.docx"
        onChange={handleChange}
        required
      />
  
      <button type="submit"> Submit </button>
  
    </form>
  </div>
</div>
</>
);
}

export default CareerForm;
