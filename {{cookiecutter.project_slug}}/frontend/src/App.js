import React from "react";

const style = { padding: "2rem", fontFamily: "sans-serif" };

function App() {
  return (
    <div style={style}>
      <h1>Welcome to {{cookiecutter.project_name}}</h1>
      <p>This is the React frontend scaffold.</p>
    </div>
  );
}

export default App;

