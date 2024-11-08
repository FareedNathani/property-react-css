import React from "react";

// Define types for the props
interface HeadingProps {
  title: string;
  subtitle: string;
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle }) => {
  return (
    <>
      <div className="heading">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </>
  );
};

export default Heading;
