import React from "react";
import Header from "../Section/Header";
import Footer from "../Section/Footer";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleNavigate = (value) => {
    console.log(value);
    navigate(value);
  };

  return (
    <div>
      <Header />
      <div className="cont">
        <div className="form sign-in" id="sign_in">
          <h1>Welcome</h1>
          <br />
          <form
            autoComplete="off"
            id="login_form"
            name="login_form"
            method="post"
          >
            <div className="form-group">
              <label htmlFor="user_email">Username</label>
              <input
                type="text"
                className="form-control form-control-lg rounded-0"
                name="user_email"
                id="user_email"
                required=""
                placeholder="Enter the Email"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control form-control-lg rounded-0"
                id="user_password"
                name="user_password"
                required=""
                autoComplete="new-password"
                placeholder="Enter the password"
              />
            </div>
            <button type="button" className="submit" id="btnLogin">
              Login
            </button>
            <a
              className="new_user_btn hide_links"
              onClick={() => {
                handleNavigate(`/sign-up`);
              }}
            >
              New user? Signup here
            </a>
          </form>
        </div>
        <div
          className="sub-cont"
          onClick={() => {
            handleNavigate(`/forgot-password`);
          }}
        >
          <div className="img">
            <div className="img__btn">
              <span className="m--up">Forgot Password</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
