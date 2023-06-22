import React from "react";
import PropTypes from "prop-types";

export const Footer = (props) => {
  return (
    <footer className={`bg-${props.mode}`}>
      <div style={{ position: "relative", padding: "1rem" }}>
        <p
          className={`container text-center text-${
            props.mode === "light" ? "dark" : "light"
          }`}
        >
          {" "}
          &copy; Copyright @Textify 2022
        </p>
      </div>
    </footer>
  );
};
