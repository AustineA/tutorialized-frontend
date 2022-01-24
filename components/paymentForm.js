import React from "react";
import { CardElement, injectStripe } from "@stripe/react-stripe-js";
import store, { actions } from "../store/store";

const PaymentForm = ({ elements, stripe }) => {
  const state = useSnapshot(store);
  //
  const { clientSecret, name, email } = state.order;
  const dispatch = (action) => {
    actions(action);
  };

  const close = () => {
    dispatch({
      type: "STRIPE",
      payload: false,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cardElement = elements.getElement("card");

    const { paymentIntent, error } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: cardElement,
          billing_details: {
            name,
            email,
          },
        },
      }
    );

    if (error) {
      console.log(error, "[Failed]");
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      console.log(paymentIntent, "[Succee]");
      close();
    }

    // console.log(paymentIntent, "[Payemt Intent]");
    // console.log(error, "[Payemt Error]");
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button>Pay</button>
    </form>
  );
};

export default injectStripe(PaymentForm);
