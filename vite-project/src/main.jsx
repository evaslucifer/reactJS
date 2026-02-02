import React, { createElement, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
function MyApp() {
  return <div>hello world</div>;
}

const reactElement = React.createElement(
  "a",

  { href: "https://google.com", target: "_blank" },
  "click me to visit google",
);

const AnotherElement = (
  <a href="www.google.com" target="_blank">
    Visit google
  </a>
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
