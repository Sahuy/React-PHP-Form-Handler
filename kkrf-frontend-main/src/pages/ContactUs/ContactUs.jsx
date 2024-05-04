import React, { useState } from "react";
import axios from "axios";

const ContactUs = () => {
  const [userdata, setData] = useState({
    name: "",
    phno: "",
    email: "",
    query: "",
  });

  const collectData = (e) => {
    // console.log(  e.target.value )

    setData({ ...userdata, [e.target.name]: e.target.value });
  };

  const submitData = async (e) => {
    e.preventDefault();

    if (userdata.name === "") {
      return alert("please fill all form");
    }

    if (userdata.email === "" || !userdata.email.includes("@")) {
      return alert("please fill email correct");
    }

    if (userdata.phno === "") {
      return alert("please type phno");
    }

    if (userdata.query === "") {
      return alert("please type query");
    }

    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:4000/user/addForm",
        userdata
      );

      if (data.sucess === true) {
        alert(data.message);
      } else {
        alert(data.message);
      }
    } catch (e) {
      alert(data.message);
    }
  };

  return (
    <div className="container h-screen">
      <div className=" h-full mt-16">
        <div>
          <h1 className="text-colorTwo font-bold text-6xl">Contact us</h1>
          <div className="mt-4 text-xl">
            "Reach out to us. Your message matters"
          </div>
        </div>

        <div className="h-full rounded-lg overflow-hidden mt-9 md:max-w-[600px]">
          <form onSubmit={submitData} action="" className="space-y-6">
            <div>
              <div>Name</div>
              <input
                type="text"
                className="border border-gray-500 p-3"
                placeholder="your name"
                name="name"
                id=""
                onChange={(e) => collectData(e)}
              />
            </div>

            <div>
              <div>Email</div>
              <input
                type="text"
                className="border border-gray-500 p-3"
                name="email"
                id=""
                placeholder="your email"
                onChange={(e) => collectData(e)}
              />
            </div>

            <div>
              <div>Phone</div>
              <input
                type="number"
                className="border border-gray-500 p-3"
                name="phno"
                id=""
                placeholder="your phno"
                onChange={(e) => collectData(e)}
              />
            </div>

            <div>
              <div>Query</div>
              <textarea
                id=""
                cols="30"
                rows="10"
                onChange={(e) => collectData(e)}
                name="query"
                className="border w-full rounded-2xl border-gray-500 p-3"
              ></textarea>
            </div>

            <button className="bg-colorThree  px-8 py-3 text-white font-semibold  text-xs rounded-full  mt-9 inline-block">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
