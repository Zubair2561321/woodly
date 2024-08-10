import React from "react";
import Header from "../Section/Header";
import Footer from "../Section/Footer";

const AboutUs = () => {
  return (
    <>
      <Header />
      <section className="title_bar">
        <div className="as_container ">
          <div className="title_sec">
            <h1 className="page_title">About Us</h1>
          </div>
        </div>
      </section>
      <section className="content_wrapper">
        <div className="as_container">
          <h2 className="lp_hd">
            WHO ARE <span className="text_clr">WOODLEYS?</span>{" "}
          </h2>
          <p>
            The business is owned and run by Billy Roberts, who has a wealth of
            local knowledge, experience and expertise. Billy and his team will
            always ensure that the service their clients receive is second to
            none.
          </p>
          <p>
            Using Woodleys to sell your home means your property will benefit
            from the latest marketing tools available, including maximum
            exposure to potential buyers via the latest Internet Property
            Portals, regular advertising in the local papers as well as having
            access to a large selection of local buyers who have registered with
            us in order to find a property.
          </p>
          <p>
            With an outstanding office offering ample car parking and impressive
            window displays, 'Woodleys' really do provide a service that offers
            all your house-moving needs under one roof.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutUs;
