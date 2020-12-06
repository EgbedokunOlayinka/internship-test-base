import React from "react";

const CustomForm = () => {
  return (
    <form className="custom-form">
      <div className="form-ctrl">
        <label htmlFor="name">Your name</label>
        <input type="text" name="name" id="name" />
      </div>
      <div className="form-ctrl">
        <label htmlFor="email">Your email</label>
        <input type="email" name="email" id="email" />
      </div>
      <div className="form-ctrl">
        <label htmlFor="message">Your message</label>
        <textarea
          name="message"
          id="message"
          placeholder="Type something if you want..."
          rows="5"
        ></textarea>
      </div>
      <div className="form-ctrl">
        <input type="submit" value="Send Message" id="submit" />
      </div>
    </form>
  );
};

export default CustomForm;
