import React, { useState } from "react";
import Values from 'values.js';

const Form = ({setColors}) => {
  const [color, setColor] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setColors(new Values(color).all(10))
  };
  return (
    <section className="container">
      <h4>Color Generator</h4>
      <form className="color-form" onSubmit={handleSubmit}>
        {/* INFO: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/color */}
        <input
          onChange={(e) => setColor(e.target.value)}
          type="color"
          value={color}
        />
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="#f15025"
        />
        <button style={{ background: color }} className="btn">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Form;
