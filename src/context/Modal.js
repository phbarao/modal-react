import React, { createContext, useContext, useState } from "react";

// Context
const ModalContext = createContext({});

// Provider
const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState({ visible: false });

  const openModal = (payload) => setModal({ ...payload, visible: true });

  const closeModal = () => setModal({ visible: false });

  return (
    <ModalContext.Provider value={{ modal, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

// Hook
const useModalContext = () => {
  const context = useContext(ModalContext);

  return context;
};

export { useModalContext, ModalProvider };
