import React from "react";
import { Button } from "antd";

import { useModalContext } from "../../context/Modal";

const HomePage = () => {
  const { openModal } = useModalContext();
  const testModal = () => openModal({ message: "Teste 123" });

  return (
    <>
      <h1>Home</h1>

      <Button onClick={testModal} type="primary">
        Modal
      </Button>
    </>
  );
};

export default HomePage;
