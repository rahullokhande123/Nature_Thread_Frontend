import React, { useState } from 'react';
import axios from 'axios';

const About = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/contact/', formData);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      alert('Failed to send message.');
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      {/* Top Banner */}
      <img src="/about.png" alt="About Banner" className="w-full object-cover" />

      {/* About Section */}
      <div style={{marginTop:"50px"}} className="flex flex-col md:flex-row p-4 md:p-12 max-w-7xl w-full">
        <div className="md:w-1/2">
          <img src="/Kila.png" alt="About" className="w-full rounded-xl" />
        </div>
        <div className="md:w-1/2 md:pl-12 pt-6 md:pt-0">
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We are a passionate team committed to delivering the best online shopping experience. Our mission is to bring top-quality products to your doorstep while offering excellent customer support. Founded in 2023, our team combines creativity, technology, and user-first thinking to revolutionize e-commerce.
          </p>
        </div>
      </div>


      {/* Our Team Section */}
      
<div className="py-12 px-6 max-w-7xl w-full">
  <h2 style={{marginBottom:"50px"}} className="text-3xl font-bold text-center mb-10">Our Team</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {[
      {
        name: "Aviana Plummer",
        title: "CEO / FOUNDER",
        img: "/a1.jpg",
      },
      {
        name: "Aviana Plummer",
        title: "CEO / FOUNDER",
        img: "/a1.jpg",
      },
      {
        name: "Braydon Wilkerson",
        title: "CEO / FOUNDER",
        img: "/a2.jpg",
      },
      {
        name: "Kristin Watson",
        title: "CEO / FOUNDER",
        img: "/a3.jpg",
      },
    ].map((member, idx) => (
      <div key={idx} className="bg-white rounded-xl shadow p-6 text-center">
        <img
          src={member.img}
          alt={member.name}
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
        />
        <h3 className="text-xl font-semibold">{member.name}</h3>
        <p className="text-gray-500">{member.title}</p>
        <div className="flex justify-center space-x-4 mt-4 text-gray-600">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    ))}
  </div>
</div>


      {/* Carousel Section */}
      
    </div>
  );
};

export default About;
