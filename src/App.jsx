import { useState } from "react";
import "./app.css";

const App = () => {
  const [color, setColor] = useState("");
  const [background, setBackground] = useState(
    `rgb(${random()}, ${random()}, ${random()})`
  );
  function random() {
    return Math.floor(Math.random() * 255) + 1;
  }

  function test(color) {
    let tester = document.createElement("div");
    tester.style.backgroundColor = color;
    return tester.style.backgroundColor !== "";
  }

  document.body.style.backgroundColor = background;
  return (
    <>
      <section class="text">
        <h1 class="classic">SCREEN SIZE NOT SUPPORTED</h1>
        <h1>Create Colors you wanna see</h1>
        <p>Name it,We have it . . .</p>
      </section>
      <section>
        <label for="color">Input Color:</label>
        <br />
        <br />
        <input
          type="text"
          name="color"
          id="color"
          placeholder="Input rgb,hex code or color name."
          onChange={(e) => {
            setColor(e.target.value);
          }}
        />
        <br />
        <br />
        <button
          onClick={() => {
            if (test(color)) {
              setBackground(color);
              document.querySelector("input").value = "";
            } else {
              alert(`'${color}' is not a valid color`);
              input2.value = "";
            }
          }}
        >
          <span style={{ color: background }}>GET COLOR</span>
        </button>
      </section>
    </>
  );
};

export default App;
