import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img3 from "../../public/images/img3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "react-bootstrap/Button";
import { FaUserCircle } from "react-icons/fa";
import Slider from "react-slick";
import { LuMessageSquare } from "react-icons/lu";
import { IoShareSocialOutline } from "react-icons/io5";
const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,

  };
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <>
      <div style={{ overflowX: "hidden", overflowY: "hidden", marginRight: "10px", marginLeft: "10px" }}>
        <div className="carousel">
          <Carousel style={{ position: "relative" }}>
            <Carousel.Item>
              <img src={img3} width="100%" alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="../../public/images/img4.jpg" width="100%" alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="../../public/images/img2.jpg" width="100%" alt="" />
            </Carousel.Item>
          </Carousel>
        </div>
        {/* ==================== Second Caro ================= */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between px-4 py-6">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <div className="left">
              <h3 align="center">Amazing Apperal</h3>
            </div>
          </div>

          <div className="w-full h-full pl-6 pr-6 md:w-2/3 md:pr-9 bg-gray-300">
            <div>
              <Slider {...settings}>
                <div>
                  <img

                    src="../../public/images/a1.jpg"
                    className="p-2 w-full md:w-[350px] object-cover"
                    alt=""
                  />
                </div>
                <div>
                  <img

                    src="../../public/images/a4.jpg"
                    className="p-2 w-full md:w-[350px] object-cover"
                    alt=""
                  />
                </div>
                <div>
                  <img

                    src="../../public/images/a3.jpg"
                    className="p-2 w-full md:w-[350px] object-cover"
                    alt=""
                  />
                </div>
                <div>
                  <img

                    src="../../public/images/a5.jpg"
                    className="p-2 w-full md:w-[350px] object-cover"
                    alt=""
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
        {/* ============================ Image and Youtube Video =========================== */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 px-4 py-8">
          <div className="w-full md:w-1/2 lg:w-5/12">
            <img
              src="../../public/images/a2.jpg"
              className="w-full h-auto rounded-lg shadow-md"
              alt="Featured image"
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-7/12">
            <div className="relative w-full overflow-hidden pt-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
                src="https://www.youtube.com/embed/Vt2ifIxk4Gs?autoplay=1&mute=1&loop=1&playlist=Vt2ifIxk4Gs"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* ================== Third Caro ========================== */}
        <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between px-4 py-6">
          <div className="w-full bg-gray-300 pl-6 pr-6 md:w-2/3 mt-6 md:mt-0">
            <div>
              <Slider {...settings}>
                <div>
                  <img
                    className="p-2 w-full md:w-[350px] object-cover"
                    src="5345.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="p-2 w-full md:w-[350px] object-cover"
                    src="3535353.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="p-2 w-full md:w-[350px] object-cover"
                    src="3-3-300x300-1.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="p-2 w-full md:w-[350px] object-cover"
                    src="5345.png"
                    alt=""
                  />
                </div>
              </Slider>
            </div>
          </div>
          <div className="w-full md:w-1/3 md:pl-6 text-center md:text-right">
            <h3 align="center">Gentlemen's Apparel</h3>
          </div>
        </div>

        {/* ================================== Image ================================= */}

        <div className="shopNow">
          <img
            src="/a6.jpg"

            alt=""
          />
        </div>
        {/* ================================ Fourth Caro ============================ */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between px-4 py-6">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h1 align="center">product's page</h1>
          </div>

          <div className="w-full md:w-2/3 bg-gray-300 pr-6 pl-6">
            <div>
              <Slider {...settings}>
                <div>
                  <img
                    className="p-2 w-full md:w-[350px] object-cover"
                    src="/PersonalCare.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="p-2w-full md:w-[350px] object-cover"
                    src="/PersonalCare2.jpeg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="p-2 w-full md:w-[350px] object-cover"
                    src="/PersonalCare3.jpeg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="p-2 w-full md:w-[350px] object-cover"
                    src="/PersonalCare4.jpg"
                    alt=""
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>

        {/* ============================== Image ============================= */}

        <div class="row no-gutters" style={{ marginTop: "2%" }}>
          <div class="col-12 col-sm-6 col-md-12">
            <img style={{ height: "400px" }} src="/nature.png" alt="" width="100%" />
          </div>

        </div>

        {/* =============================== ================================== */}

        <div className="w-full flex flex-col lg:flex-row items-start justify-between px-4 py-8">
          {/* Left Side - Wardrobe Essentials */}
          <div style={{ marginTop: "10%" }} className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Wardrobe Essentials</h1>
            <p className="text-sm md:text-base mb-8 mx-auto lg:mx-0 max-w-lg">
              100% authentic handmade products 💎 💎 ⭐ Ethnic |designer wear|
              wedding 👗 👉Worldwide order✈️ 👉💰Bank |COD
            </p>
            <div>
              <button className="border border-gray-400 px-8 py-2 uppercase text-sm font-medium hover:bg-gray-50 transition-colors">
                VIEW MORE
              </button>
            </div>
          </div>

          {/* Right Side - Newsletter Form */}
          <div className="w-full lg:w-1/2">
            <div className="bg-green-200 rounded-xl p-8 text-center">
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                  Join Our<br />
                  Newsletter Now
                </h2>
                <p className="text-sm md:text-base mb-6">
                  A client that's unhappy for a reason is a problem, a client<br className="hidden md:block" />
                  that's unhappy though can't.
                </p>
              </div>

              <div className="mb-6">
                <div className="mb-1 text-left">
                  Email <span className="text-red-500">*</span>
                </div>
                <div>
                  <input
                    type="email"
                    placeholder=""
                    className="w-full px-4 py-2 rounded bg-white"
                  />
                </div>
              </div>

              <div className="mb-6">
                <div className="flex justify-center">
                  <div className="g-recaptcha" data-sitekey="your-recaptcha-site-key"></div>
                </div>
              </div>

              <div className="mb-6">
                <button className="bg-black text-white px-6 py-2 rounded-full font-medium">
                  Submit
                </button>
              </div>

              <p className="text-xs">
                Will be used in accordance with our <span className="font-medium">Privacy Policy</span>
              </p>
            </div>
          </div>
        </div>

        {/* ======================================================================== */}

        <div className="text-center mt-12 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="m-5">
              <div className="flex flex-col items-center">
                <div className="mb-4">
                  <img src="images/shopping.png" alt="" className="max-w-full h-auto" />
                </div>
                <div className="px-2">
                  <h2 className="text-xl font-semibold mb-2">Free Shipping</h2>
                  <p className="text-sm">
                    "Experience complimentary shipping on every order with a minimum
                    purchase of just 300. Start shopping now to seize the savings!"
                  </p>
                </div>
              </div>
            </div>

            <div className="m-5">
              <div className="flex flex-col items-center">
                <div className="mb-4">
                  <img src="images/support.png" alt="" className="max-w-full h-auto" />
                </div>
                <div className="px-2">
                  <h2 className="text-xl font-semibold mb-2">Support Team</h2>
                  <p className="text-sm">
                    "Our dedicated support team is here for you. Reach out anytime for prompt assistance and personalized solutions."
                  </p>
                </div>
              </div>
            </div>

            <div className="m-5">
              <div className="flex flex-col items-center">
                <div className="mb-4">
                  <img src="/images/payments.png" alt="" className="max-w-full h-auto" />
                </div>
                <div className="px-2">
                  <h2 className="text-xl font-semibold mb-2">Online Payments</h2>
                  <p className="text-sm">
                    "Seamless online payment for your convenience and peace of mind. Trust in our secure payment gateway for hassle-free transactions."
                  </p>
                </div>
              </div>
            </div>

            <div className="m-5">
              <div className="flex flex-col items-center">
                <div className="mb-4">
                  <img src="/images/protect.png" alt="" className="max-w-full h-auto" />
                </div>
                <div className="px-2">
                  <h2 className="text-xl font-semibold mb-2">Safe & Secure</h2>
                  <p className="text-sm">
                    "Rest assured, your safety and security are our top priorities. With state-of-the-art encryption ."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =============================== New Artical ============================== */}

        {/* <!-- Simplified Responsive Article Section with Tailwind CSS --> */}
<div class="w-full px-4 md:px-8 lg:px-16 py-8">
  {/* <!-- Header Section --> */}
  <div class="text-center mb-6 md:mb-10">
    <h2 class="text-2xl md:text-3xl lg:text-4xl font-medium mb-3">Our New Article</h2>
    <p class="text-gray-600 text-sm md:text-base mx-auto">
      Commercial publishing platforms and content management systems that you can show
      different text, different the web workers toolbox.
    </p>
  </div>

  {/* <!-- Articles Grid --> */}
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    
    {/* <!-- Article Card Template (Reused for all 4 articles) --> */}
    {/* <!-- Article 1: Multani Mitti --> */}
    <div class="mb-6 md:mb-0">
      {/* <!-- Image Container with Overlays --> */}
      <div class="relative mb-4">
        {/* <!-- Date Badge --> */}
        <div class="absolute top-2 left-2 bg-white p-2 text-center rounded shadow-sm">
          <div class="text-xl font-bold">18</div>
          <div class="text-xs">JUN</div>
        </div>
        
        {/* <!-- Logo Badge --> */}
        <div class="absolute top-2 right-2">
          <div class="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center">
            <svg viewBox="0 0 100 100" class="w-8 h-8 text-green-600">
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" stroke-width="5" />
              <path d="M 50,30 Q 30,50 50,70 Q 70,50 50,30" fill="currentColor" />
            </svg>
          </div>
        </div>
        
        {/* <!-- Category Badge --> */}
        <div class="absolute bottom-4 left-0">
          <span class="bg-black text-white px-3 py-1 text-xs font-semibold uppercase">Personal Care</span>
        </div>
        
        {/* <!-- Article Image --> */}
        <img src="/d5.jpg" alt="Multani Mitti" class="w-full h-52 md:h-56 object-cover" />
      </div>
      
      {/* <!-- Article Content --> */}
      <h3 class="text-base md:text-lg font-medium text-center mb-3">
        The Ultimate Guide to Multani Mitti Powder: Benefits, Uses, and Tips
      </h3>
      
      <div class="flex items-center justify-center text-gray-500 text-xs mb-2">
        <svg class="w-4 h-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path>
        </svg>
        <span class="mr-2">Admin</span>
        
        <svg class="w-4 h-4 mx-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
        </svg>
        
        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
        </svg>
      </div>
      
      <p class="text-gray-600 text-sm text-center mb-3">Introduction Multan...</p>
      
      <div class="text-center">
        <a href="#" class="text-xs md:text-sm font-semibold tracking-wider uppercase">Continue Reading</a>
      </div>
    </div>

    {/* <!-- Article 2: Cotton Kurtis --> */}
    <div class="mb-6 md:mb-0">
      <div class="relative mb-4">
        <div class="absolute top-2 left-2 bg-white p-2 text-center rounded shadow-sm">
          <div class="text-xl font-bold">16</div>
          <div class="text-xs">JUN</div>
        </div>
        
        <div class="absolute top-2 right-2">
          <div class="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center">
            <svg viewBox="0 0 100 100" class="w-8 h-8 text-green-600">
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" stroke-width="5" />
              <path d="M 50,30 Q 30,50 50,70 Q 70,50 50,30" fill="currentColor" />
            </svg>
          </div>
        </div>
        
        <div class="absolute bottom-4 left-0">
          <span class="bg-black text-white px-3 py-1 text-xs font-semibold uppercase">Women</span>
        </div>
        
        <img src="/d3.jpg" alt="Cotton Kurtis" class="w-full h-52 md:h-56 object-cover" />
      </div>
      
      <h3 class="text-base md:text-lg font-medium text-center mb-3">
        The Journey of Cotton Kurtis: From Field to Fashion
      </h3>
      
      <div class="flex items-center justify-center text-gray-500 text-xs mb-2">
        <svg class="w-4 h-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path>
        </svg>
        <span class="mr-2">Admin</span>
        <svg class="w-4 h-4 mx-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
        </svg>
        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
        </svg>
      </div>
      
      <p class="text-gray-600 text-sm text-center mb-3">Introduction Cotton...</p>
      
      <div class="text-center">
        <a href="#" class="text-xs md:text-sm font-semibold tracking-wider uppercase">Continue Reading</a>
      </div>
    </div>

    {/* <!-- Article 3: Camisole --> */}
    <div class="mb-6 md:mb-0">
      <div class="relative mb-4">
        <div class="absolute top-2 left-2 bg-white p-2 text-center rounded shadow-sm">
          <div class="text-xl font-bold">11</div>
          <div class="text-xs">JUN</div>
        </div>

        {/* =========================================================================== */}
        
        <div class="absolute bottom-4 left-0">
          <span class="bg-black text-white px-3 py-1 text-xs font-semibold uppercase">Women</span>
        </div>
        
        <img src="/d4.jpg" alt="Camisole" class="w-full h-52 md:h-56 object-cover" />
      </div>
      
      <h3 class="text-base md:text-lg font-medium text-center mb-3">
        Discover the Perfect Camisole in 30 Stunning Colors for Every Wardrobe
      </h3>
      
      <div class="flex items-center justify-center text-gray-500 text-xs mb-2">
        <svg class="w-4 h-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path>
        </svg>
        <span class="mr-2">Admin</span>
        <svg class="w-4 h-4 mx-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
        </svg>
        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
        </svg>
      </div>
      
      <p class="text-gray-600 text-sm text-center mb-3">Are you tired of the same old wardrobe staples? Elevate your style with o...</p>
      
      <div class="text-center">
        <a href="#" class="text-xs md:text-sm font-semibold tracking-wider uppercase">Continue Reading</a>
      </div>
    </div>

    {/* <!-- Article 4: Men's Cotton Kurtas --> */}
    <div class="mb-6 md:mb-0">
      <div class="relative mb-4">
        <div class="absolute top-2 left-2 bg-white p-2 text-center rounded shadow-sm">
          <div class="text-xl font-bold">09</div>
          <div class="text-xs">JUN</div>
        </div>
        
        <div class="absolute top-2 right-2">
          <div class="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center">
            <svg viewBox="0 0 100 100" class="w-8 h-8 text-green-600">
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" stroke-width="5" />
              <path d="M 50,30 Q 30,50 50,70 Q 70,50 50,30" fill="currentColor" />
            </svg>
          </div>
        </div>
        
        <div class="absolute bottom-4 left-0">
          <span class="bg-black text-white px-3 py-1 text-xs font-semibold uppercase">Men</span>
        </div>
        
        <img src="/d2.jpg" alt="Men's Cotton Kurtas" class="w-full h-52 md:h-56 object-cover" />
      </div>
      
      <h3 class="text-base md:text-lg font-medium text-center mb-3">
        The Ultimate Guide to Men's Cotton Kurtas: Style, Comfort, and Versatility
      </h3>
      
      <div class="flex items-center justify-center text-gray-500 text-xs mb-2">
        <svg class="w-4 h-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path>
        </svg>
        <span class="mr-2">Admin</span>
        <svg class="w-4 h-4 mx-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
        </svg>
        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
        </svg>
      </div>
      
      <p class="text-gray-600 text-sm text-center mb-3">Welcome to our comprehensive guide on men's cotton kurtas! Whether you're...</p>
      
      <div class="text-center">
        <a href="#" class="text-xs md:text-sm font-semibold tracking-wider uppercase">Continue Reading</a>
      </div>
    </div>
    
  </div>
</div>
      </div>
    </>
  );
};

export default Home;