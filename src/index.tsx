import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Use a non-null assertion operator to indicate that 'root' will not be null.
const rootElement = document.getElementById("root")!; 

// Create the root and render the App component
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
