import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      sub module11 &nbsp; <span>{count}</span>
    </div>
  );
}

export default App;
