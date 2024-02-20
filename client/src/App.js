import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function fetchCount() {
      try {
        const response = await fetch("/api/count");
        if (response.ok) {
          setCount(await response.json());
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchCount();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Count : {count}</p>
      </header>
    </div>
  );
}

export default App;
