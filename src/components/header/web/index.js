import React from "react";
import "./web.css";
function Web() {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#projects">
        <i class="fa-solid fa-screwdriver-wrench option-icon"></i>Projects
        </a>
      </div>
      <div className="web-option">
        <a href="#skills">
        <i class="fa-solid fa-brain option-icon"></i>Skills
        </a>
      </div>
      <div className="web-option">
        <a href="#work">
          <i class="fa-solid fa-briefcase option-icon"></i>Work
        </a>
      </div>
      <div className="web-option">
        <a href="#testimonial">
        <i class="fa-solid fa-comment-dots option-icon"></i>Testimonial
        </a>
      </div>
      <div className="web-option">
        <a href="#contact">
          <i class="fa-solid fa-user-large  option-icon "></i>Contact
        </a>
      </div>
    
    </div>
  );
}

export default Web;
