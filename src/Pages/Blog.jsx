import { useEffect, useState } from "react";
import axios from "axios";
import { FaUserCircle } from "react-icons/fa";
import { LuMessageSquare } from "react-icons/lu";
import { IoShareSocialOutline } from "react-icons/io5";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const baseURL = "http://127.0.0.1:8000"; // 👈 Base URL added

  const loadData=()=>{
    axios
      .get(`${baseURL}/fifthCaroImg/`)
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    loadData()
  }, []);

  return (
    <div className="bg-white w-full" style={{marginBottom:"2%"}}>
      <div className="bg-black text-white text-center py-4 mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl">Blog</h1>
      </div>

      <div className="px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl mx-auto">
        {blogs.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded overflow-hidden"
          >
            <div className="relative">
              <img
                src={`${baseURL}${item.image}`} // ✅ Full image path
                alt="blog"
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-2 left-2 bg-white p-1 text-center text-sm font-semibold shadow-md w-12">
                <div className="text-lg">18</div>
                <div className="uppercase text-gray-600 text-xs">Jun</div>
              </div>
              <div className="absolute bottom-2 left-2">
                <span className="bg-black text-white px-2 py-1 text-xs font-semibold rounded">
                  {item.category || "Personal Care"}
                </span>
              </div>
            </div>

            <div className="p-4 text-gray-800 text-sm space-y-2">
              <h2 className="font-semibold text-base leading-snug">
                The Ultimate Guide to Multani Mitti Powder: Benefits, Uses, and
                Tips
              </h2>
              <p className="flex items-center gap-2 text-gray-500 text-xs">
                By <FaUserCircle className="inline" /> Admin{" "}
                <LuMessageSquare className="ml-2 inline" />{" "}
                <IoShareSocialOutline className="inline" />
              </p>
              <p className="text-xs text-gray-500">
                Introduction Multan mitti is...
              </p>
              <a
                href="#"
                className="text-black font-semibold text-xs hover:underline"
              >
                CONTINUE READING
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
