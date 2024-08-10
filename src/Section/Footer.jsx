import React from "react";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scroll
  });
};

const Footer = () => {
  return (
    <footer>
      <div className="as_container">
        <div className="footer_widget">
          <div className="widget_item">
            <h4 className="widget_title">Get In Touch</h4>
            <p className="widget_p">Woodleys Estate Agents</p>
            <p className="widget_p">
              <i class="fa-solid fa-location-dot"></i> 132 Loddon Bridge Road,
              Woodley, Berkshire, RG5 4AW
            </p>
            <p className="widget_p">
              <i class="fa-solid fa-phone"></i>{" "}
              <a href="tel:0118 969 9787">0118 969 9787</a>
            </p>
            <a href="tel:0118 969 9787"></a>
            <p className="widget_p">
              <a href="tel:0118 969 9787">
                <i class="fa-regular fa-envelope"></i>{" "}
              </a>
              <a href="mailto:sales@woodleysestateagents.com">
                {" "}
                sales@woodleysestateagents.com{" "}
              </a>
            </p>
          </div>
          <div className="widget_item">
            <h4 className="widget_title">Opening hours</h4>
            <p className="info_details">
              Monday to Friday :<span>9:00 am - 6:00 pm </span>
            </p>
            <p className="info_details">
              Saturday :<span>9:00 am - 4:00 pm </span>
            </p>
            <p className="info_details">
              Sunday :<span>closed </span>
            </p>
          </div>
          <div className="widget_item">
            <h4 className="widget_title">Useful pages</h4>
            <ul className="widget_list">
              <li>
                <a href="/sales" title="Property for Sale">
                  Property for Sale
                </a>
              </li>
              <li>
                <a href="/lettings" title="Property to Rent">
                  Property to Rent
                </a>
              </li>
              <li>
                <a href="/contact" title="Contact">
                  Contact
                </a>
              </li>
              <li>
                <a href="/" title="Terms">
                  Terms
                </a>
              </li>
              <li>
                <a href="/" target="_blank" title="Client money protect">
                  Client money protect
                </a>
              </li>
              <li>
                <a href="/" target="_blank" title="Complaints Procedure">
                  Complaints procedure
                </a>
              </li>
              <li>
                <a href="/" title="Privacy policy">
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <p className="copy_para">
          © 2024 Woodleys Estate Agents. All rights reserved.{" "}
        </p>
      </div>
      <a
        className="back_to_top"
        onClick={scrollToTop}
        style={{ visibility: "visible", opacity: 1 }}
      >
        {" "}
        <i className="fa fa-level-up" />{" "}
      </a>
    </footer>
  );
};

export default Footer;
