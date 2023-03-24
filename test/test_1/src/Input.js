import React from "react";

const Input = ({ colorValue, hexaValue, isDarkText }) => {
  return (
    <section
      className="square"
      style={{
        backgroundColor: colorValue,
        color: isDarkText ? "#000" : "#FFF",
      }}
    >
      <p>{colorValue ? colorValue : "Empty Value"}</p>
      <p>{hexaValue ? hexaValue : null}</p>
    </section>
  );
};

Input.defaultProps = {
  colorValue: "Empty Color Value",
};

export default Input;
