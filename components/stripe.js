import React, { useEffect, useState } from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import { injectScript } from "../data/api";
import PaymentForm from "./paymentForm";

const StripePay = () => {
  const [isScript, setLoad] = useState(false);

  return (
    <>
      <StripeProvider apiKey="pk_test_IEfH8NSzXJ8Kdg3dCYmQTURO">
        <Elements>
          <PaymentForm />
        </Elements>
      </StripeProvider>
    </>
  );
};

export default StripePay;
