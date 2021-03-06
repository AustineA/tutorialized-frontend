import React, { useState } from "react";
import { actions } from "../../store/store";

import API from "../../services/api";

const ResetPassword = () => {
  const [f, setF] = useState({});
  const dispatch = (action) => {
    actions(action);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await API.post("/users/iforgot", { user: f });
    console.log(user.data);
    let currentUrl = window.location.pathname;
    window.location.replace(currentUrl);
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

  return (
    <div>
      <div className="modal-header">
        <h3 className="modal-title">Forgot Password?</h3>
        <span>Reset your password now</span>
      </div>
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <button type="submit" className="btn-gradient submit-form">
            Submit
          </button>
          <p>
            Don’t have an account? <span onClick={signUp}>Sign up</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
