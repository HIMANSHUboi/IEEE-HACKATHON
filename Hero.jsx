import React from "react";
import Typical from "react-typical"; // Import the typing effect library
import Slider from "react-slick";
import img from "../../assets/hero/AI.png"; // Import your image

const ImageList = [
  {
    id: 1,
    title: "ANALYSING",
    image: img, // Add image for ANALYSING
  },
  {
    id: 2,
    title: "IMPROVISING",
    image: img, // Add the same or a different image for IMPROVISING
  },
  {
    id: 3,
    title: "SUMMARISING",
    image: img, // Add the same or a different image for SUMMARISING
  },
];

const Hero = ({ handleOrderPopup }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-slate-950 dark:text-white duration-200">
      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-10"></div>
      
      {/* hero section */}
      <div className="container pb-8 sm:pb-0 relative z-10">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  >
                    <Typical
                      steps={[data.title, 1000]}
                      loop={Infinity}
                      wrapper="span"
                    />
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm"
                  >
                    {/* No description, just the typing effect */}
                  </p>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2 flex justify-center items-center">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.image} // Use the image from the ImageList
                      alt={data.title} // Provide alt text
                      className="object-contain w-1/2 h-1/2 opacity-80 transition-opacity duration-500" // Adjust the size and opacity
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
