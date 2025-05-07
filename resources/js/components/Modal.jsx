import React, { forwardRef, useImperativeHandle } from "react";
import {message} from "antd";




const Modal = forwardRef((props, ref) => {
  const [messageApi, contextHolder] = message.useMessage();

  const showMessage = (action) => {
    if (action === "success") {
      messageApi.open({
        type: "success",
        content: "This is a success message",
      });
    } else if (action === "error") {
      messageApi.open({
        type: "error",
        content: "This is an error message",
      });
    } else {
      messageApi.open({
        type: "info",
        content: "This is an info message",
      });
    }
  };

  // Exponer `showMessage` mediante la referencia
  useImperativeHandle(ref, () => ({
    showMessage,
  }));

  return <>{contextHolder}</>;
});

export default Modal;
