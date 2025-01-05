import React from "react";
import "./Contact.css";
import { ToastContainer, toast,Bounce } from "react-toastify";

const Contact = () => {
  const notify = () =>
    toast.success("Email Sent", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "c05cdc35-f836-470e-8b85-de2a9d8f5096");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      notify();
      event.target.reset(); // Clear the form after successful submission
    }
  };

  return (
    <div id="contact" className="con-Main">
      <h1 className="contact-title">Contact</h1>
      <div className="contact-content">
        <div className="contact-detail">
          <h3>Connect With Me</h3>
          <p>
            I'm currently available to take on new projects <br />
            krubanandanks@gmail.com
          </p>
        </div>
        <div className="contact-forms">
          <form onSubmit={onSubmit} className="forms">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder="Your Name" name="name"></input>
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder="Enter your email" name="email" />
            <label htmlFor="">Your Message</label>
            <textarea
              type="message"
              rows="8"
              placeholder="Enter your message"
              name="message"
            />
            <button type="submit" className="form-button">Submit</button>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              transition={Bounce}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
