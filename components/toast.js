import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = ({ msg, type }) => {
  useEffect(() => {
    toast[type](msg, {
      progressClassName: "progress-bar"
    });
    console.log("I ran", [msg]);
  }, [msg]);

  return <ToastContainer />;
};

export default Toast;
