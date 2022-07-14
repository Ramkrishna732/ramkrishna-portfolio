import React from "react";
import "./contact.css";
import SocialContact from "../../common/social-contact/index";
import Separator from "../../common/separator/index";
function Contact() {
  return (
    <div className="contact">
      <Separator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Want to get in touch? Contact me on any of the platform</p>
          <SocialContact />
        </div>
        <div className="download">
          <a  href={require("../../../assets/RamkrishnaMaurya_Resume.pdf")} target='_blank'>
            
            <i class="fa-solid fa-file download-icon"></i>
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
