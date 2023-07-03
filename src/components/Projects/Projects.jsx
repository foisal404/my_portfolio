import { Link } from "react-router-dom";
import edgeCampusimg from "../../assets/image/edgeCampussm.png";
import NeedToyimg from "../../assets/image/Home-NeedForToyssm.png";
import masterCusineimg from "../../assets/image/Master-Cuisinesm.png";

const Projects = () => {
  return (
    <div className="hero min-h-screen pt-24" id="projects">
      <div className="hero-content text-center flex-col w-full">
        <div className="max-w-md">
          <h1 className="text-5xl text-blue-500 font-bold">Projects</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full p-10 gap-5">
          {/* project  1*/}
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={edgeCampusimg} alt="Edge Campus" />
            </figure>
            <div className="card-body justify-between">
              <div>
                <h2 className="card-title">Edge Campus</h2>
                <ul className="text-start list-disc text-sm px-4">
                  <li>this site about sports related camp in summer</li>
                  <li>had Admin ,Instructor,student role</li>
                  <li>has firebase Authentication</li>
                  <li>has popular Classes and popular instructor section</li>
                  <li>has sever backend and database</li>
                </ul>
              </div>
              <div className="card-actions justify-center">
                <button className="btn normal-case">
                  <Link to="https://edge-campus.web.app/">Website</Link>
                </button>
                <button className="btn normal-case">
                  <Link to="https://github.com/foisal404/edgecampus-summercamp-client">
                    Fronend
                  </Link>
                </button>
                <button className="btn normal-case">
                  <Link to="https://github.com/foisal404/edgecampus-summercamp-server">
                    Backend
                  </Link>
                </button>
              </div>
            </div>
          </div>
          {/* project  2*/}
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={NeedToyimg} alt="Need4Toy" />
            </figure>
            <div className="card-body justify-between ">
              <div>
                <h2 className="card-title">Need for toys</h2>
                <ul className="text-start list-disc text-sm px-4">
                  <li>this web site is about Toy Marketplace</li>
                  <li>only car related toy with many categories and subcategories</li>
                  <li>has firebase Authentication</li>
                  <li>User can get,add toy and also delate and update</li>
                  <li>has sever backend and database</li>
                </ul>
              </div>
              <div className="card-actions justify-center">
                <button className="btn normal-case">
                  <Link to="https://mango-toy-client.web.app/">Website</Link>
                </button>
                <button className="btn normal-case">
                  <Link to="https://github.com/foisal404/needfortoys-client">
                    Fronend
                  </Link>
                </button>
                <button className="btn normal-case">
                  <Link to="https://github.com/foisal404/needfortoys-server">
                    Backend
                  </Link>
                </button>
              </div>
            </div>
          </div>
          {/* project  3*/}
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={masterCusineimg} alt="masterCousine" />
            </figure>
            <div className="card-body justify-between">
              <div>
                <h2 className="card-title">Master Cuisine</h2>
                <ul className="text-start list-disc text-sm px-4">
                  <li>project run firebase authentication</li>
                  <li>project run server on vercel</li>
                  <li>use react router ,daisyUI</li>
                  <li>project use daisy Ui tailwind Library</li>
                  <li>project run react libaries</li>
                </ul>
              </div>
              <div className="card-actions justify-center">
                <button className="btn normal-case">
                  <Link to="https://master-cuisine-336f3.web.app/">Website</Link>
                </button>
                <button className="btn normal-case">
                  <Link to="https://github.com/foisal404/masterCuisine-client">
                    Fronend
                  </Link>
                </button>
                <button className="btn normal-case">
                  <Link to="https://github.com/foisal404/masterCuisine-server">
                    Backend
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
