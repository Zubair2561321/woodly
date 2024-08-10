import React from "react";
import Header from "../Section/Header";
import Footer from "../Section/Footer";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleNavigate = (value) => {
    navigate(value);
  };

  return (
    <div>
      <Header />
      <div className="cont s--signup">
        <div
          className="sub-cont"
          onClick={() => {
            handleNavigate(`/login`);
          }}
        >
          <div className="img">
            <div className="img__text m--in">
              <h2 style={{ fontSize: 60 }}>⇢</h2>
            </div>
            <div className="img__btn">
              <span className="m--up1">Sign In</span>
            </div>
          </div>
          <div className="form sign-up" id="forgot_pwd">
            <h2>Forgot Password</h2>
            <div className="form-group">
              <label htmlFor="fg_email">Email</label>
              <input
                type="text"
                className="form-control form-control-lg rounded-0"
                name="forgot_user_email"
                id="forgot_user_email"
                required=""
                placeholder="Enter the Email"
              />
            </div>
            <button
              type="button"
              className="submit"
              name="forgot_user_email"
              onclick="forgot_password_check()"
              id="btnLogin"
              onkeypress="return isEnterKeyPressed(event, 3)"
            >
              Send
            </button>
            <a className="responsive_inks" attr="sign_in">
              Remember your password?
            </a>
            <div>
              <span id="forgot_password_status" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ForgotPassword;
