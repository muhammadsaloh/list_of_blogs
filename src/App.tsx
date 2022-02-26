import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Views from "./views";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Views />
      </Router>
    </div>
  );
};

export default App;
