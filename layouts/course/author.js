import React, { useState, useEffect } from "react";
import NewLesson from "./new-lesson";
import { useSelector, useDispatch } from "react-redux";
import API from "../../data/api";
import Paystack from "../../components/paystack";
import Stripe from "../paymentModal";

const Author = ({
  author,
  author_avatar,
  author_url,
  github,
  download_url,
  isAuthor,
  purchased,
  price,
  currency
}) => {
  const isActive = useSelector(state => state.isActive);
  const useStripe = useSelector(state => state.useStripe);
  const dispatch = useDispatch();

  const [canPay, setCanPay] = useState(false);

  const [config, setConfig] = useState({
    email: "austine@gmail.com",
    firtname: "Austine",
    lastname: "Amah",
    reference: "DA-CDQTS2JU69"
  });

  const { email, firstname, lastname, reference } = config;

  const node = document.querySelector(".nav");
  const isUser = JSON.parse(node.dataset.current_user);
  const country = JSON.parse(node.dataset.country);

  const signUp = document.querySelector(".nav-get-started");

  const open = () => {
    dispatch({
      type: "OPEN"
    });
  };

  const paystackNow = () => {
    dispatch({
      type: "PAYSTACK"
    });
  };

  const payStripeNow = () => {
    dispatch({
      type: "STRIPE",
      payload: true
    });
  };

  const setClientSecret = load => {
    dispatch({
      type: "SET_STRIPE",
      payload: load
    });
  };
  const enrole = () => {
    if (isUser && price === 0) {
      free();
    } else if (isUser && price > 0) {
      paid();
    } else {
      signUp.click();
    }
  };

  const paid = () => {
    if (country === "Nigeria") {
      paystackPayment();
    } else {
      stripePayment();
    }
  };

  const free = async () => {
    let currentUrl = window.location.pathname;

    try {
      const { data } = await API.post(currentUrl + "/orders");
      window.location.replace(currentUrl);
    } catch (e) {
      console.log(e.response.data);
    }
  };

  const paystackPayment = async () => {
    let currentUrl = window.location.pathname;

    try {
      const { data } = await API.post(currentUrl + "/orders");
      setConfig(data);
      setCanPay(true);
    } catch (e) {
      console.log(e.response.data);
    }
  };

  const stripePayment = async () => {
    let currentUrl = window.location.pathname;

    try {
      const { data } = await API.post(currentUrl + "/orders?stripe=true");
      console.log(data);
      setClientSecret(data);
      payStripeNow();
    } catch (e) {
      console.log(e.response.data);
    }
  };

  const Format = ({ price, currency }) =>
    `${currency}${new Intl.NumberFormat("ng-NG", {
      maximumSignificantDigits: 2
    }).format(price)}`;

  useEffect(() => {
    if (canPay) paystackNow();
  }, [canPay, config]);

  return (
    <div className="author-container">
      <div className="author-inner">
        <div className="author-img-holder">
          <img src={author_avatar} />
          <span>{author}</span>
        </div>
        <div className="links">
          {purchased && (
            <a href={download_url}>
              <span>Download Course</span>
            </a>
          )}
          {!purchased && (
            <p>
              Price:{" "}
              <span>
                <Format price={price} currency={currency} />
              </span>
            </p>
          )}
          <span className="separator"></span>
          {purchased && (
            <a href={github}>
              <span>Github Repo</span>
            </a>
          )}

          {isAuthor && (
            <span className="get-started lesson" onClick={open}>
              Add lesson
            </span>
          )}
          {!purchased && (
            <span className="get-started lesson" onClick={enrole}>
              Enrole
            </span>
          )}
        </div>
      </div>
      {isActive && <NewLesson />}
      <Paystack
        email={email}
        amount={price}
        firstname={firstname}
        lastname={lastname}
        reference={reference}
      />
      {useStripe && <Stripe />}
    </div>
  );
};

export default Author;