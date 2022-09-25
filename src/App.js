import "./App.css";
import React, { Fragment, useState } from "react";
import text from "./data";

function App() {
  const [count, setCount] = useState(0);
  const [lorem, setLorem] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 15;
    }
    setLorem(text.slice(0, amount));
  };
  if (lorem.length > 0) {
    return (
      <section>
        <form onSubmit={submitHandler}>
          <input
            type="number"
            id="amount"
            name="count"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <button type="submit">Generate</button>
        </form>
        {lorem.map((item, index) => {
          return (
            <div key={index}>
              <p>{item}</p>
              {/* <button onClick={() => setLorem([])}>Clear all</button> */}
            </div>
          );
        })}
        <button onClick={() => setLorem([])}>Clear all</button>
      </section>
    );
  }
  return (
    <Fragment>
      <form onSubmit={submitHandler}>
        <input
          type="number"
          id="amount"
          name="count"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit">Generate</button>
      </form>
      <section>
        {lorem.map((item, index) => {
          return (
            <div key={index}>
              <p>{item}</p>
              {/* <button onClick={() => setLorem([])}>Clear all</button> */}
            </div>
          );
        })}
      </section>
    </Fragment>
  );
}
export default App;
