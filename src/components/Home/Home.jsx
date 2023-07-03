// import TextTransition, { presets } from 'react-text-transition';
// import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import "./styles.css";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  // const [index, setIndex] = useState(0);
  // const TEXTS = ['Web Developer','MERN Stack Developer','Software Engineer','Programmer'];
  // useEffect(() => {
  //   const intervalId = setInterval(
  //     () => setIndex((index) => index + 1),
  //     3000, // every 3 seconds
  //   );
  //   return () => clearTimeout(intervalId);
  // }, []);
  return (
    <div className="hero min-h-screen bg-base-100 relative top-0" id="home">
      <div className="hero-content flex-col md:flex-row-reverse w-full text-center md:text-left">
        <div className="box box2 h-[300px] w-[300px] lg:w-[400px] lg:h-[500px] mx-auto md:me-0 ">
          {/* image  */}
        </div>
        <div>
          <h1 className="text-3xl md:text-5xl font-bold">
            Foisal Ahmmed Shagor
          </h1>

          <h2 className="text-xl my-5 font-semibold text-blue-500">
            {/* <TextTransition  inline springConfig={presets.gentle}>{TEXTS[index % TEXTS.length]}</TextTransition> */}
            <Typewriter
              words={[
                "Web Developer",
                "React Developer",
                "MERN Stack Developer",
                "Software Engineer",
                "Programmer",
              ]}
              loop
              cursor
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
          <div className="flex my-5 gap-2 justify-center md:justify-start">
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
          <button className="btn normal-case bg-blue-500 px-16 text-white border-0 btn-outline ">
            Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
