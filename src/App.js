import React, { Fragment, useState } from "react";
import text from "./data";
import classes from "./App.module.css";

function App() {
  const [count, setCount] = useState(0);
  const [lorem, setLorem] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 9) {
      amount = 9;
    }
    setCount(0);

    setLorem(text.slice(0, amount));
  };
  if (lorem.length > 0) {
    return (
      <section className={classes.section}>
        <h1>lorem ipsum generator</h1>
        <form onSubmit={submitHandler} className={classes.form}>
          <label htmlFor="amount">paragraphs :</label>
          <input
            type="number"
            id="amount"
            name="count"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <button type="submit" className={classes.btn}>
            Generate
          </button>
        </form>
        <article>
          {lorem.map((item, index) => {
            return (
              <div key={index} className={classes.article}>
                <p>{item}</p>
                {/* <button onClick={() => setLorem([])}>Clear all</button> */}
              </div>
            );
          })}
          <div className={classes.btnwrapper}>
            <button onClick={() => setLorem([])} className={classes.clearbtn}>
              Clear all
            </button>
          </div>
        </article>
      </section>
    );
  }
  return (
    <Fragment>
      <main className={classes.section}>
        <form onSubmit={submitHandler} className={classes.form}>
          <label htmlFor="amount">paragraphs :</label>
          <input
            type="number"
            id="amount"
            name="count"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <button type="submit" className={classes.btn}>
            Generate
          </button>
        </form>
      </main>
    </Fragment>
  );
}
export default App;
