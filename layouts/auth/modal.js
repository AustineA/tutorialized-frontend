import React from "react";
import Signin from "./sign-in";
import Signup from "./sign-up";
import ResetPassword from "./reset-password";
import { useSnapshot } from "valtio";
import store, { actions } from "../../store/store";

// import { useSelector, useDispatch } from "react-redux";

const Modal = () => {
  // const dispatch = useDispatch();
  const state = useSnapshot(store);

  const close = () => {
    // dispatch({
    //   type: "CLOSE",
    // });
    actions({ type: "CLOSE" });
  };

  const load = state.component;

  return (
    <div className="modal-container">
      <div className="modal-body">
        <span className="modal-close" onClick={close}>
          X
        </span>
        {load === "SIGNIN" ? (
          <Signin />
        ) : load === "SIGNUP" ? (
          <Signup />
        ) : (
          <ResetPassword />
        )}
      </div>
    </div>
  );
};

export default Modal;
