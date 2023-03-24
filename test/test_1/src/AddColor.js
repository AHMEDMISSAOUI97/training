import React from "react";
import colorNames from "colornames";

const AddColor = ({ colorValue, setColorValue, setHexaValue , isDarkText , setIsDarkText}) => {
  return (
    <form action="" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="">Add Color Name</label>
      <input
        autoFocus
        type="text"
        id="color_name"
        placeholder="Add color name"
        required
        value={colorValue}
        onChange={(e) => 
            {
                setColorValue(e.target.value)
                setHexaValue(colorNames(e.target.value))
            }}
      />
      <button
        type="button"
        onClick={() => setIsDarkText(! isDarkText)}
      >
        Toggle text Color
      </button>
    </form>
  );
};

export default AddColor;
