import React, { useEffect, useState, useRef } from "react";
import { injectScript } from "../services/api";
import { useSnapshot } from "valtio";
import { verifyPaystack } from "../services/api";
import store from "../store/store";

const Paystack = ({ email, amount, firstname, lastname, reference }) => {
  const state = useSnapshot(store);

  const [isScript, setLoad] = useState(false);
  const usePaystack = state.usePaystack;
  const payNow = useRef(null);

  const close = () => {
    console.log("Closed");
  };

  const callBack = ({ reference }) => {
    console.log(reference);
    const data = { ref: reference };
    verifyPaystack(data);
  };

  const config = {
    key: "pk_test_6a985fe2648ee5f3077199b7f4d857251a50fdb5",
    email: email,
    amount: amount * 100,
    firstname: firstname,
    lastname: lastname,
    ref: reference,
    onClose: close,
    callback: callBack,
  };

  const initPayment = () => {
    if (!isScript) {
      return;
    }

    const paystackPopup = window.PaystackPop.setup(config);
    paystackPopup.openIframe();
  };

  useEffect(() => {
    injectScript("https://js.paystack.co/v2/popup.js")
      .then(() => {
        setLoad(true);
        console.log("Paystack loaded!");
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (usePaystack) {
      payNow.current.click();
    }
  }, [usePaystack]);

  return (
    <div>
      <button onClick={initPayment} ref={payNow} style={{ display: "none" }}>
        Payment
      </button>
    </div>
  );
};

export default Paystack;
