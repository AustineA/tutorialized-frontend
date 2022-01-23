import React, { useState } from "react";
import API from "../../data/api";
// import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const [f, setF] = useState({});
  const dispatch = [];

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const {
        data: { message },
      } = await API.post("/register", { user: f });
      signin();

      toast.success(message, {
        progressClassName: "progress-bar",
      });
    } catch (e) {
      toast.error(message, {
        progressClassName: "progress-bar",
      });
    }
  };

  const handleChange = (e) => {
    setF({ ...f, [e.target.name]: e.target.value.trim() });
  };

  const signin = () => {
    dispatch({
      type: "OPEN",
      payload: "SIGNIN",
    });
  };

  return (
    <div>
      <div className="modal-header">
        <h3 className="modal-title">Welcome</h3>
        <span>Sign up to continue</span>
      </div>
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="f_name"
            placeholder="First name"
            onChange={handleChange}
          />
          <input
            type="text"
            name="l_name"
            placeholder="Last name"
            onChange={handleChange}
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <button type="submit" className="btn-gradient submit-form">
            Sign up
          </button>
          <p>
            Already have an account? <span onClick={signin}>Sign in</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
