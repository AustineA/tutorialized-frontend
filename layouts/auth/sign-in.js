import React, { useState } from "react";
import { actions } from "../../store/store";
import { ToastContainer, toast } from "react-toastify";
import API from "../../services/api";
import Cookie from "js-cookie";

const Signin = () => {
  const [f, setF] = useState({});
  const dispatch = (action) => {
    actions(action);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      f.email = f.username;

      const { data } = await API.post("/user_token", { auth: f });
      const { user } = data;
      const message = `Welcome ${user.firstName} ${user.lastName}`;
      localStorage.setItem("token", data.jwt);
      localStorage.setItem("userInfo", JSON.stringify(user));

      Cookie.set("IS_USER_LOGGED_IN", "user_is_logged_in", {
        expires: 3,
      });

      toast.success(message, {
        progressClassName: "progress-bar",
      });

      dispatch({ type: "CLOSE" });
      dispatch({ type: "SET_USER", payload: { user, token: data.jwt } });

      console.log(data);
    } catch (e) {
      toast.error("Username or password incorrect", {
        progressClassName: "progress-bar",
      });
    }
  };

  const handleChange = (e) => {
    setF({ ...f, [e.target.name]: e.target.value.trim() });
  };

  const signUp = () => {
    dispatch({
      type: "OPEN",
      payload: "SIGNUP",
    });
  };

  const iForgot = () => {
    dispatch({
      type: "OPEN",
      payload: "RESET",
    });
  };

  return (
    <div>
      <div className="modal-header">
        <h3 className="modal-title">Welcome Back</h3>
        <span>Sign in to continue</span>
      </div>
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username or Email"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <p>
            Forgot your password? <span onClick={iForgot}>Reset</span>
          </p>
          <button type="submit" className="btn-gradient submit-form">
            Sign in
          </button>
          <p>
            Don’t have an account? <span onClick={signUp}>Sign up</span>
          </p>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signin;
