import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  ContextProvider,
  useCharStates,
} from "./Components/utils/global.context";

const ThemedApp = () => {
  const { state } = useCharStates();
  return (
    <div className={state.theme}>
      <App />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <ThemedApp />
    </ContextProvider>
  </React.StrictMode>
);
