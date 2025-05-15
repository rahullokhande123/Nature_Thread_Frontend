import { useState } from "react";
import axios from "axios";

const Contacts = () => {
  const [input, setInput] = useState({});

  const handleChange = (e) => {
    let name=e.target.name;
    let value=e.target.value
    setInput(values=>({...values,[name]:value}))
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let url="http://127.0.0.1:8000/contactform/";
    axios.post(url,input).then((res)=>{
      alert("DATA POSTED SUCCESSFULLY")
      setInput({});
    }).catch((err)=>{
       console.error("Submission failed:", err);
      alert("Something went wrong. Try again!");
    })
  };

  return (
    <div className="bg-white w-full">
      {/* 🔝 Top Banner Image */}
      <div className="w-full h-64 sm:h-80 md:h-[400px] lg:h-[500px] overflow-hidden">
        <img
          src="/Baner.jpg" // 👈 Use your actual image path
          alt="Contact Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* 📩 Contact Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 style={{marginBottom:"40px"}} className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-800">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6" method="POST">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={input.name}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={input.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={input.subject}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={input.message}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-black"
            required
          ></textarea>
          <div className="text-center">
            <button
              type="submit"
              className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-all mt-3"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
