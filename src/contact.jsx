import React from "react";
import "./contact.scss";
import { useState, useEffect } from "react";
import ThreeDButton from "./Compnents/ThreeDButton";

function Contact() {
  return (
    <div id="Contact_Container">
      <div>
        <h1>CONTACT ME</h1>
      </div>
      <div class = "underline_2">
      </div>

      <div class = "form">
        <div class="input-group">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            class="text_box"
          />
        </div>
        <div class="input-group">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            class="text_box"
          />
        </div>
        <div class="input-group">
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Your Message"
            class="text_box"
          ></textarea>
        </div>
        <div>
          {/* <button type="submit" class="contact-submit">
            SUBMIT
          </button> */}
          <ThreeDButton text="SUBMIT" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
