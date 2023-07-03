import jsIco from "../../assets/image/javascript-original.svg";
import reactIco from "../../assets/image/react-original-wordmark.svg";
import expressIco from "../../assets/image/express.svg";
import nodeIco from "../../assets/image/node.svg";
import fireIco from "../../assets/image/firebase-icon.svg";
import mongoIco from "../../assets/image/mongodb-plain.svg";
import bootsIco from "../../assets/image/bootstrap-plain.svg";
import tailIco from "../../assets/image/tailwindcss-icon.svg";
import daisyIco from "../../assets/image/daisy.svg";
import htmlIco from "../../assets/image/html5-original.svg";
import cssIco from "../../assets/image/css3-plain.svg";
import npmIco from "../../assets/image/npm.svg";
import AOS from 'aos';
import 'aos/dist/aos.css';
// ..
AOS.init();
const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200" id="about">
      <div className="hero-content ">
        <div>
          <h1 className="text-5xl font-bold">A dedicated Developer</h1>
          <p className="py-6">
            I'm a self-taught web developer and visual designer with experience
            in designing new features from ideation to production,
            implementation of wireframes and design flows into high performance
            software applications.
          </p>
          <div
            data-aos="zoom-in-up"
          >
            <h2 className="text-2xl text-blue-500">Technologies and Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 md:gap-10 mt-5">
              <div className="flex items-center px-4 py-2 bg-base-300 rounded-md">
                <img src={jsIco} className="h-12 w-12" alt="" />
                <p className="mx-4">Javascript</p>
              </div>
              <div className="flex items-center px-4 py-2 bg-base-300 rounded-md">
                <img src={reactIco} className="h-12 w-12" alt="" />
                <p className="mx-4">React</p>
              </div>
              <div className="flex items-center px-4 py-2 bg-base-300 rounded-md">
                <img src={expressIco} className="h-12 w-12" alt="" />
                <p className="mx-4">Express</p>
              </div>
              <div className="flex items-center px-4 py-2 bg-base-300 rounded-md">
                <img src={nodeIco} className="h-12 w-12" alt="" />
                <p className="mx-4">NodeJS</p>
              </div>
              <div className="flex items-center px-4 py-2 bg-base-300 rounded-md">
                <img src={fireIco} className="h-12 w-12" alt="" />
                <p className="mx-4">Firebase</p>
              </div>
              <div className="flex items-center px-4 py-2 bg-base-300 rounded-md">
                <img src={mongoIco} className="h-12 w-12" alt="" />
                <p className="mx-4">Mongo DB</p>
              </div>
              <div className="flex items-center px-4 py-2 bg-base-300 rounded-md">
                <img src={tailIco} className="h-12 w-12" alt="" />
                <p className="mx-4">Tailwind CSS</p>
              </div>
              <div className="flex items-center px-4 py-2 bg-base-300 rounded-md">
                <img src={bootsIco} className="h-12 w-12" alt="" />
                <p className="mx-4">Bootstrap</p>
              </div>
              <div className="flex items-center px-4 py-2 bg-base-300 rounded-md">
                <img src={daisyIco} className="h-12 w-12" alt="" />
                <p className="mx-4">Daisyui</p>
              </div>
              <div className="flex items-center px-4 py-2 bg-base-300 rounded-md">
                <img src={npmIco} className="h-12 w-12" alt="" />
                <p className="mx-4">npm</p>
              </div>
              <div className="flex items-center px-4 py-2 bg-base-300 rounded-md">
                <img src={htmlIco} className="h-12 w-12" alt="" />
                <p className="mx-4">Html</p>
              </div>
              <div className="flex items-center px-4 py-2 bg-base-300 rounded-md">
                <img src={cssIco} className="h-12 w-12" alt="" />
                <p className="mx-4">CSS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
