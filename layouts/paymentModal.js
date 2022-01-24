import React from "react";
import { actions } from "../store/store";
import StripePay from "../components/stripe";

const Modal = () => {
  const dispatch = (action) => {
    actions(action);
  };

  const close = () => {
    dispatch({
      type: "STRIPE",
      payload: false,
    });
  };

  return (
    <div className="modal-container tut-stripe">
      <div className="modal-body">
        <span className="modal-close" onClick={close}>
          X
        </span>
        <StripePay />
      </div>
    </div>
  );
};

export default Modal;
