import React from "react";
import "./mobile.css";
function Mobile({ isOpen, setIsOpen }) {
  return (
    <div className="mobile">
      <div onClick={() => setIsOpen(!isOpen)} className="close-icon">
        <i class="fa-solid fa-circle-xmark"></i>
      </div>
      <div className="mobile-options">
        <div className="mobile-option">
          <a href="#projects">
            <i class="fa-solid fa-screwdriver-wrench option-icon"></i>Projects
          </a>
        </div>
        <div className="mobile-option">
          <a href="#skills">
            <i class="fa-solid fa-brain option-icon"></i>Skills
          </a>
        </div>
        <div className="mobile-option">
          <a href="#work">
            
            <i class="fa-solid fa-briefcase option-icon"></i>Work
          </a>
        </div>
        <div className="mobile-option">
          <a href="#testimonial">
            
            <i class="fa-solid fa-comment-dots option-icon"></i>Testimonial
          </a>
        </div>
        <div className="mobile-option">
          <a href="#contact">
            <i class="fa-solid fa-user-large option-icon"></i>Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
