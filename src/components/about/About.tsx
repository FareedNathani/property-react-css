import React from "react";
import Back from "../common/Back";
import Heading from "../common/Heading";
import img from "../images/about.jpg";
import "./about.css";

const About: React.FC = () => {
  return (
    <>
      <section className="about">
        <Back name="About Us" title="About Us - Who We Are?" cover={img} />
        <div className="container flex mtop">
          <div className="left row">
            <Heading title="Our Agency Story" subtitle="Check out our company story and work process" />
            
            <p>
              Welcome to RentUP, where your property dreams come to life. With a commitment to integrity, expertise, and customer satisfaction, we specialize in connecting clients with their perfect homes and investment opportunities.
            </p>
            <p>
              Whether you're looking to buy, sell, or invest, our team of experienced real estate professionals is dedicated to guiding you through every step of the process. From luxurious homes to commercial properties, we provide a personalized approach to meet your unique needs and aspirations.
            </p>
            <p>
              At RentUP, we don’t just build properties—we build lasting relationships and trusted partnerships.
            </p>

            <button className="btn2">More About Us</button>
          </div>
          <div className="right row">
            <img src="./immio.jpg" alt="About Us" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
