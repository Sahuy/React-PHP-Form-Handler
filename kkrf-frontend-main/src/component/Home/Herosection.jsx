import React, { useState } from "react";
// import axios from "axios";

const Herosection = () => {
  const [close, setClose] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    company: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Submit form data to backend
  const handleSubmit = (e) => {
    e.preventDefault(); // Ensure the default form behavior is prevented
  
    console.log('Form data:', formData); // Debug log to check if this executes
  
    fetch('http://localhost/submit.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Ensure correct Content-Type
      },
      body: JSON.stringify(formData), // Convert formData to JSON
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok'); // Error handling
        }
        return response.json();
      })
      .then((data) => {
        console.log('Server response:', data); // Check server response
        setFormData({
          name: '',
          mobile: '',
          email: '',
          company: '',
        });
      })
      .catch((error) => {
        console.error('Fetch error:', error); // Log fetch errors
      });
  };
  

  return (
    <div className="h-[600px] relative bg-black">
      <div className="absolute w-full h-full bg-black/50 right-0 left-0">
        <div className="container grid lg:flex items-center h-full gap-9">
          <div className="text-4xl md:text-4xl lg:text-6xl text-white font-semibold lg:w-[70%]">
            <div>
              <span className="text-colorThree text-4xl lg:text-7xl leading-3 font-bold">Trusted</span> by largest brands for Website Designing
            </div>
            <button className="bg-colorThree mt-4 px-12 py-3 text-white font-semibold text-lg rounded-lg ">
              See More
            </button>
          </div>

          <div className="lg:block lg:w-[30%] hidden">
            <div className={`${close ? 'hidden' : ''}`}>
              <div className="p-6 bg-colorTwo text-white rounded-t-lg text-lg font-semibold relative flex justify-between items-center">
                <div>Request a callback</div>

                <svg
                  onClick={() => setClose(true)}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5"
                  />
                </svg>
              </div>
              <form
                onSubmit={handleSubmit} // Handle form submission
                className="space-y-6 shadow-2xl w-full bg-white p-6 rounded-b-lg relative"
              >
                <div>
                  <input
                    name="name"
                    placeholder="Name*"
                    type="text"
                    value={formData.name} // Connect input to state
                    onChange={handleChange} // Handle change
                  />
                </div>
                <div>
                  <input
                    name="mobile"
                    placeholder="Mobile No*"
                    type="number"
                    value={formData.mobile} // Connect input to state
                    onChange={handleChange} // Handle change
                  />
                </div>
                <div>
                  <input
                    name="email"
                    placeholder="Email ID*"
                    type="text"
                    value={formData.email} // Connect input to state
                    onChange={handleChange} // Handle change
                  />
                </div>
                <div>
                  <input
                    name="company"
                    placeholder="Company*"
                    type="text"
                    value={formData.company} // Connect input to state
                    onChange={handleChange} // Handle change
                  />
                </div>
                <button
                  type="submit" // Submit button
                  className="bg-colorThree mt-4 w-full rounded-xl py-3 text-white font-bold"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <img
        className="w-full h-full object-cover"
        src="herosec/herosecbg.jpg"
        alt="background img"
      />
    </div>
  );
};

export default Herosection;
