import React, { useState, useEffect } from "react";
import NewLesson from "./new-lesson";
import { useSnapshot } from "valtio";
import store, { actions } from "../../store/store";
import API from "../../services/api";
import Paystack from "../../components/paystack";
import { useRouter } from "next/router";

const Author = ({
  author,
  author_avatar,
  author_url,
  github,
  download_url,
  isAuthor,
  purchased,
  price,
  currency,
}) => {
  const state = useSnapshot(store);
  const { asPath } = useRouter();

  const component = state.component;
  const dispatch = (action) => {
    actions(action);
  };

  const [canPay, setCanPay] = useState(false);
  const [usePaystack, setPaystack] = useState(false);

  const [config, setConfig] = useState({
    email: "austine@gmail.com",
    firtname: "Austine",
    lastname: "Amah",
    reference: "DA-CDQTS2JU69",
  });

  const { email, firstname, lastname, reference } = config;

  const [isUser, setUser] = useState(false);

  const open = () => {
    dispatch({
      type: "OPEN",
      payload: "LESSON",
    });
  };

  const signUp = () => {
    dispatch({
      type: "OPEN",
      payload: "SIGNUP",
    });
  };

  const paystackNow = () => {
    dispatch({
      type: "PAYSTACK",
    });
  };

  const payStripeNow = () => {
    dispatch({
      type: "STRIPE",
      payload: true,
    });
  };

  const setClientSecret = (load) => {
    dispatch({
      type: "SET_STRIPE",
      payload: load,
    });
  };
  const enrole = () => {
    if (isUser && price === 0) {
      free();
    } else if (isUser && price > 0) {
      paid();
    } else {
      signUp();
    }
  };

  const paid = () => {
    paystackPayment();
  };

  const free = async () => {
    try {
      const token = window.localStorage.getItem("token");

      const { data } = await API.post(
        asPath + "/orders",
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    } catch (e) {
      console.log(e.response.data);
    }
  };

  const paystackPayment = async () => {
    try {
      const token = window.localStorage.getItem("token");

      const { data } = await API.post(
        asPath + "/orders",
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setConfig(data);
      setCanPay(true);
      setPaystack(true);
    } catch (e) {
      console.log(e.response.data);
    }
  };

  const stripePayment = async () => {
    try {
      const { data } = await API.post(asPath + "/orders?stripe=true");
      console.log(data);
      setClientSecret(data);
      payStripeNow();
    } catch (e) {
      console.log(e.response.data);
    }
  };

  const Format = ({ price, currency }) =>
    `${currency}${new Intl.NumberFormat("ng-NG", {
      maximumSignificantDigits: 2,
    }).format(price)}`;

  useEffect(() => {
    if (canPay) paystackNow();
  }, [canPay, config]);

  useEffect(() => {
    setUser(state.userInfo);
    console.log(isUser);
  }, []);

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
      {component === "LESSON" ? <NewLesson /> : null}
      <Paystack
        email={email}
        amount={price}
        firstname={firstname}
        lastname={lastname}
        reference={reference}
        usePaystack={usePaystack}
      />
    </div>
  );
};

export default Author;
