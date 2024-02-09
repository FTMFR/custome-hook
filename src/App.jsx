import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  useEffect(() => {}, [value]);

  return (
    <div className="App">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default App;
