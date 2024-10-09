import { useState } from "react";
import "./App.css";
import Login from "./components/auth/Login";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="bg-white">
        <Login />
      </div>
    </Provider>
  );
}

export default App;
