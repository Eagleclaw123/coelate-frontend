import { useState } from "react";
import { FaPhoneAlt, FaRegThumbsUp, FaUser } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { MdCall } from "react-icons/md";
import appoinmentShape from "/images/contact_shape.png";
import aboutShape2 from '/images/about_shape4.png';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // For success/error messages

  // Handle input change dynamically
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await fetch("https://coelate.com:5053/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", number: "", message: "" }); // Clear form

        // Hide message after 3 seconds
        setTimeout(() => {
          setStatus("");
        }, 1000);
      } else {
        setStatus("❌ Failed to send message. Try again.");
      }
    } catch (error) {
      setStatus("⚠️ Something went wrong!");
      console.error("Error:", error);
    }
  };

  return (
   <section className="py-28 relative">
  <img
    src={aboutShape2}
    draggable='false'
    className='absolute -z-10 bottom-14 right-5 animate-wiggle hidden 2xl:block'
  />
  
  <div className="Container">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mt-[-50px] items-stretch"> {/* Changed items-center to items-stretch */}
      {/* Left Column - Contact Info */}
      <div className="p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"> {/* Added h-full and flex flex-col */}
        <h5 className="text-sm uppercase mb-3">GET IN TOUCH</h5>
        <h1 className="text-3xl font-bold mb-6">
          Where Vision Meets <span className="text-PrimaryColor2-0"> Execution</span>
        </h1>

        <div className="space-y-4 flex-grow"> {/* Added flex-grow */}
          <div className="flex gap-3 items-start">
            <div className="bg-blue-100 p-2 rounded-full">
              🏢
            </div>
            <div>
              <h5 className="font-medium text-[25px] text-PrimaryColor-0">Address:</h5><br/>  
              <h4 className="font-semibold text-[22px] text-TextColor2-0">Hyderabad, India</h4>
              <p>DSL Abacus IT Park, Survey Colony, Industrial Development Area,<br/> Uppal, Hyderabad, Telangana 500039</p>
              <br/>
              <p>Suite 205, Hiline Complex, Road No. 12, Banjara Hills, Hyderabad-500034</p>
              <br/>
{/*              <h4 className="font-semibold text-[22px] text-TextColor2-0">Dubai, UAE</h4>
              <p>Business Center 1, M Floor, The Meydan Hotel, Nad Al Sheba</p>
              <br/>
  */}           <h4 className="font-semibold text-[22px] text-TextColor2-0">Denver, USA</h4>
              <p>Suite 2229, 1312 17th Street, Denver CO 80202</p>
              <br/>
              <h4 className="font-semibold text-[22px] text-TextColor2-0">Canada</h4>
              <p>3700 Green Diamond Rd, Regina, SK, S4V 4B9</p>

            </div>
          </div>

          <div className="flex items-center gap-4 pt-6">
            <div className="bg-blue-100 p-2 rounded-full">
              ✉️
            </div>
            <div>
              <span className="font-medium text-[22px] text-PrimaryColor-0">Email: </span>
              <a href="mailto:sales@coelate.com" className="hover:underline pl-2">
                sales@coelate.com
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right Column - Contact Form */}
      <div className="relative h-full"> {/* Added h-full */}
        <img
          src={appoinmentShape}
          draggable="false"
          className="absolute top-0 right-6 animate-movebtn"
          alt="Appointment Shape"
        />
        <div className="relative z-20 bg-white shadow-shades pt-16 px-4 sm:px-6 md:px-[50px] lg:px-4 xl:px-10 2xl:px-[50px] rounded-md h-full"> {/* Added h-full */}
          <div className="text-center">
            <h5 className="font-FiraSans font-medium text-sm sm:text-base text-PrimaryColor-0 uppercase mb-3">
              CONTACT US
            </h5>
            <h1 className="font-FiraSans font-semibold text-gray-900 text-[32px]">
              Get In Touch With <span className="text-PrimaryColor2-0">Coelate</span>
            </h1>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-y-5 pt-11 pb-[60px]">
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="relative inline-block">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Name*"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="font-FiraSans text-TextColor2-0 placeholder:text-TextColor-0 text-l bg-transparent border border-HeadingColor2-0 rounded py-2 px-6 h-[54px] w-full"
                    />
                    <FaUser size={"14"} className="absolute text-PrimaryColor-0 top-1/2 -translate-y-1/2 right-5" />
                  </div>
                  <div className="relative inline-block">
                  <input
                    type="text"
                    name="number"
                    placeholder="Enter Number*"
                    required
                    value={formData.number}
                    onChange={handleChange}
                    className="font-FiraSans text-TextColor2-0 placeholder:text-TextColor-0 text-l bg-transparent border border-HeadingColor2-0 rounded py-2 px-6 h-[54px] w-full"
                  />
                  <MdCall size={"16"} className="absolute text-PrimaryColor-0 top-1/2 -translate-y-1/2 right-5" />
                </div>
                </div>
                   <div className="relative inline-block">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter E-Mail*"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="font-FiraSans text-TextColor2-0 placeholder:text-TextColor-0 text-l bg-transparent border border-HeadingColor2-0 rounded py-2 px-6 h-[54px] w-full"
                    />
                    <HiOutlineMailOpen size={"16"} className="absolute text-PrimaryColor-0 top-1/2 -translate-y-1/2 right-5" />
                  </div>
                

                <textarea
                  name="message"
                  placeholder="Write a short message..."
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="font-FiraSans text-TextColor2-0 placeholder:text-TextColor-0 text-l bg-transparent border border-HeadingColor2-0 rounded py-2 px-6 h-[120px] w-full resize-none"
                ></textarea>

                {/* Success/Error Message */}
                {status && (
                  <p className="text-center text-lg transition-opacity duration-500">
                    {status}
                  </p>
                )}

                <div className="inline-block mt-2">
                  <button type="submit" className="primary-btn2 !py-[15px]">
                    <FaRegThumbsUp />
                    {` Submit Now`}
                  </button>
                </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default Contact;
