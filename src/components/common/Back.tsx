import React from "react";

// Define props with specific types
interface BackProps {
  name: string;
  title: string;
  cover: string;
}

const Back: React.FC<BackProps> = ({ name, title, cover }) => {
  return (
    <>
      <div className="back">
        <div className="container">
          <span>{name}</span>
          <h1>{title}</h1>
        </div>
        <img src={cover} alt={title} />
      </div>
    </>
  );
};

export default Back;
