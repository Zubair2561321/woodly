import React from "react";
import Header from "../Section/Header";
import Footer from "../Section/Footer";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const handleNavigate = (value) => {
    navigate(value);
  };

  return (
    <>
      <Header />
      <div className="cont new_user">
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
              <span className="m--in">Sign In</span>
            </div>
          </div>
          <div className="form new_user_sec" id="sign_up">
            <form
              autoComplete="off"
              id="signup_form"
              name="signup_form"
              method="post"
            >
              <h2>Register</h2>
              <div className="form-group">
                <label htmlFor="user_email">Name *</label>
                <input
                  type="text"
                  className="form-control form-control-lg rounded-0"
                  name="user_nickname"
                  id="user_nickname"
                  required=""
                  placeholder="Enter the name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="fg_email">Email *</label>
                <input
                  type="text"
                  className="form-control form-control-lg rounded-0"
                  name="email_address"
                  id="email_address"
                  required=""
                  placeholder="Enter the Email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="fg_email">Phone *</label>
                <input
                  type="text"
                  className="form-control form-control-lg rounded-0"
                  name="phone_number"
                  id="phone_number"
                  required=""
                  placeholder="Enter mobile number"
                />
              </div>
              <div className="g_recatcha_holder my-3" id="g-recaptcha-holder">
                <div style={{ width: 304, height: 78 }}>
                  <div>
                    <iframe
                      title="reCAPTCHA"
                      width={304}
                      height={78}
                      role="presentation"
                      name="a-f225qdyfyqwy"
                      frameBorder={0}
                      scrolling="no"
                      sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                      src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LexYEwUAAAAABAfNlnnlHrZ6eUnY6UPXCt9CFfM&co=aHR0cHM6Ly93d3cud29vZGxleXNlc3RhdGVhZ2VudHMuY29tOjQ0Mw..&hl=en&v=_ZpyzC9NQw3gYt1GHTrnprhx&size=normal&cb=o7tgzmyq9lqc"
                    />
                  </div>
                  <textarea
                    id="g-recaptcha-response"
                    name="g-recaptcha-response"
                    className="g-recaptcha-response"
                    style={{
                      width: 250,
                      height: 40,
                      border: "1px solid rgb(193, 193, 193)",
                      margin: "10px 25px",
                      padding: 0,
                      resize: "none",
                      display: "none",
                    }}
                    defaultValue={""}
                  />
                </div>
                <iframe style={{ display: "none" }} />
              </div>
              <div>
                <input
                  type="checkbox"
                  id="confirm_age"
                  name="confirm_age"
                  defaultValue={1}
                />
                <span lang="en">
                  {" "}
                  I have read and agreed your Privacy Notice at{" "}
                  <a style={{ color: "#fff" }} href="/privacy_policy">
                    <b> Privacy policy </b>
                  </a>
                </span>
              </div>
              <button
                type="button"
                className="submit"
                onclick="signup_user()"
                id="btnLogin"
                style={{ margin: "20px auto 10px auto" }}
              >
                Signup
              </button>
              <a className="responsive_inks" attr="sign_in">
                Registered already?
              </a>
              <div>
                <span id="signup_status" />
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Signup;
