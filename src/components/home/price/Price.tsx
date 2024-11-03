import React from "react";
import Heading from "../../common/Heading";
import "./price.css";
import PriceCard from "./PriceCard";

const Price: React.FC = () => {
  return (
    <>
      <section className="price padding">
        <div className="container">
          <Heading title="Select Your Package" subtitle="Choose the best package that fits your needs and budget for a seamless experience." />
          <PriceCard />
        </div>
      </section>
    </>
  );
};

export default Price;
