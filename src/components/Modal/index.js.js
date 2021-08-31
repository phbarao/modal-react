import React from "react";
import { Modal as ModalComponent } from "antd";

import { useModalContext } from "../../context/Modal";

const ComponentName = () => {
  const {
    modal: { message, visible },
    closeModal,
  } = useModalContext();

  return (
    <ModalComponent onCancel={closeModal} onOk={closeModal} visible={visible}>
      <p>{message}</p>
    </ModalComponent>
  );
};

export default ComponentName;
