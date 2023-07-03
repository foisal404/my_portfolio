import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xti79gi",
        "template_rmcle48",
        form.current,
        "5QgRdFfKNQMLTYYHM"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div data-aos="fade-up-right" className="hero min-h-screen bg-base-200 relative top-0" id="conatct">
      <div className="hero-content flex-col lg:flex-row w-full">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Connect with me</h1>
          <p className="py-6 ">
            Contact me directly through the provided form or reach out via the
            provided contact details to discuss potential collaborations,
            project inquiries, or any other questions you may have.
          </p>
          <div>
            <h2>Email: foisalahmmed2@gmail.com</h2>
            <h2>Phone: +8801969871727</h2>
            <h2>Location: Dhake, Bangladesh </h2>
          </div>
          <div className="flex my-5 gap-2 justify-center lg:justify-start">
            <Link to="https://stackoverflow.com/users/11481168/foisal">
              <img
                src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/40/000000/external-stack-overflow-is-a-question-and-answer-site-for-professional-logo-color-tal-revivo.png"
                alt=""
              />
            </Link>
            <Link to="https://www.instagram.com/init__i/">
              <img
                src="https://img.icons8.com/doodle/40/000000/instagram-new--v2.png"
                alt=""
              />
            </Link>
            <Link to="https://github.com/foisal404">
              <img
                src="https://img.icons8.com/doodle/40/000000/github--v1.png"
                alt=""
              />
            </Link>
            <Link to="https://www.linkedin.com/in/foisal46/">
              <img
                src="https://img.icons8.com/doodle/40/000000/linkedin--v2.png"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" ref={form} onSubmit={sendEmail}>
            <div className="form-control">
                <h2 className="text-center text-2xl font-bold text-slate-500">Say Hi!</h2>
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="from_name"
                placeholder="Name"
                className="input input-bordered h-10 bg-slate-200"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                placeholder="Email"
                type="email"
                name="from_email"
                className="input input-bordered h-10 bg-slate-200"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                placeholder="Message"
                type="text"
                name="message"
                className="input input-bordered bg-slate-200"
              />
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Send"
                className="bg-blue-500 btn text-white normal-case"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
