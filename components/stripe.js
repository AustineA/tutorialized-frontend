import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./paymentForm";

const StripePay = () => {
  const stripePromise = loadStripe("pk_test_IEfH8NSzXJ8Kdg3dCYmQTURO");

  return (
    <>
      <Elements stripe={stripePromise}>
        <PaymentForm />
      </Elements>
    </>
  );
};

export default StripePay;
