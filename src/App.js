import React from "react";

import HomePage from "./pages/Home";
import Modal from "./components/Modal/index.js";

import { ModalProvider } from "./context/Modal";

function App() {
  return (
    <ModalProvider>
      <div className="App">
        <HomePage />
        <Modal />
      </div>
    </ModalProvider>
  );
}

export default App;
