import { useState } from "react";
import "./App.css";

function App() {
  const [factors, setFactors] = useState();
  const [number, setNumber] = useState();
  const [displayNumber, setDisplayNumber] = useState();

  function findFactors(event) {
    if (event) event.preventDefault();

    setDisplayNumber(isNaN(number) ? `${number} is not a number.` : number);

    const tempFactors = [];

    for (let i = number; i > 0; i--) {
      if (number % i === 0) {
        tempFactors.push(+i);
      }
    }

    setFactors([...tempFactors]);
  }

  return (
    <div className="App">
      <h1>Alacrity Coding Challenge</h1>
      <section className="info__container section">
        <p>Enter a number to see if it is a prime number.<br/> 
          If it isn't, it's factors will be revealed.<br/>
          Positive numbers only</p>
      </section>
      <main className="main__container">
        <form onSubmit={findFactors} className="section">
          <h2>Enter a number</h2>
          <input
            type="text"
            className="main__input input-group mb-3 w-50"
            onChange={(event) => setNumber(event.target.value)}
          />
          <button className="btn btn-primary">Start</button>
        </form>

        {displayNumber && (
          <h2>
            {displayNumber}
            {factors && factors.length === 2
              ? `is a prime number!`
              : factors && !isNaN(displayNumber) ?
                `is not a prime number.` : <div>Please enter a valid number</div>}
          </h2>
        )}

        {factors && factors.length > 2 && (
          <div className="factors__list">
            <h2>Factors of {displayNumber}</h2>
            {factors.map((num) => (
              <div>{num}</div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
