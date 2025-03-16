import Banner from "../components/Banner";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="container m-auto  h-16 border-b-2 p-4 ">
        <ul className="md:flex gap-18 text-lg hidden mt-2">
          <li>
            <NavLink
              to="#"
              className={({ isActive }) =>
                isActive
                  ? " underline scale-105 transition-transform duration-200"
                  : `relative text-white hover:text-purple-400 duration-200 
                    content-[''] block after:w-0 after:h-[1px] after:bg-purple-500 
                    after:absolute after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300`
              }
            >
              All
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#"
              className={({ isActive }) =>
                isActive
                  ? "  underline"
                  : `relative text-white hover:text-purple-400 duration-200 
              content-[''] block after:w-0 after:h-[1px] after:bg-purple-500 
              after:absolute after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300`
              }
            >
              Startups
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#"
              className={({ isActive }) =>
                isActive
                  ? "  underline"
                  : `relative text-white hover:text-purple-400 duration-200 
              content-[''] block after:w-0 after:h-[1px] after:bg-purple-500 
              after:absolute after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300`
              }
            >
              Security
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#"
              className={({ isActive }) =>
                isActive
                  ? "  underline"
                  : `relative text-white hover:text-purple-400 duration-200 
                    content-[''] block after:w-0 after:h-[1px] after:bg-purple-500 
                    after:absolute after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300`
              }
            >
              AI
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#"
              className={({ isActive }) =>
                isActive
                  ? "  underline"
                  : `relative text-white hover:text-purple-400 duration-200 
                    content-[''] block after:w-0 after:h-[1px] after:bg-purple-500 
                    after:absolute after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300`
              }
            >
              Apps
            </NavLink>
          </li>
          <li>
            <NavLink
              to=""
              className={({ isActive }) =>
                isActive
                  ? "  underline"
                  : `relative text-white hover:text-purple-400 duration-200 
                    content-[''] block after:w-0 after:h-[1px] after:bg-purple-500 
                    after:absolute after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300`
              }
            >
              Tech
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#"
              className={({ isActive }) =>
                isActive
                  ? "  underline"
                  : `relative text-white hover:text-purple-400 duration-200 
                    content-[''] block after:w-0 after:h-[1px] after:bg-purple-500 
                    after:absolute after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300`
              }
            >
              WildLife
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center my-10 px-6 lg:px-16">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 overflow-hidden relative">
          <img
            src="/ai.png"
            alt="Chat Image"
            className="w-[90%] rounded-lg shadow-2xl transition-all duration-300 hover:shadow-lg ml-5"
          />
          <small className="absolute top-2 right-16 bg-black text-white px-3 py-1 text-xs rounded-md">
            AI
          </small>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 px-4 md:px-8 lg:px-16 py-10 text-center lg:text-left">
          <h2 className="text-xl font-bold md:text-2xl  mb-5">
            The Future of AI: How Artificial Intelligence is Transforming Our
            World
          </h2>
          <p className="">
            Artificial Intelligence (AI) is no longer just a futuristic
            concept—it’s here, and it’s transforming the way we live and work.
            From self-driving cars to intelligent chatbots, AI is
            revolutionizing industries, enhancing productivity, and even
            changing how we interact with technology.
          </p>
          <button className="mt-8 border-2 p-2 bg-purple-100 rounded hover:text-white hover:bg-purple-500">
            Read More..
          </button>
        </div>
      </div>
      <div className="text-2xl font-bold pl-20 mb-10 mt-10">Latest Blogs</div>
      <div className="flex w-full">
        <div className=" w-[75%] grid md:grid-cols-1 lg:grid-cols-2 lg:grid-rows-2  gap-10 gap-y-14 border-t border-gray-300 pt-4">
          <div className="flex flex-col items-center">
            <img src="./ai.png" alt="" className="w-[350px] h-[200px]" />
            <p className="mt-2 text-md md:text-sm w-[350px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              laudantium asperiores iure odit aut enim temporibus, deleniti,
              dolores, perspiciatis corporis aperiam doloribus recusandae
              consequuntur illum.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img src="./tech.jpg" alt="" className="w-[350px] h-[200px]" />
            <p className="mt-2 text-md md:text-sm w-[350px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              laudantium asperiores iure odit aut enim temporibus, deleniti,
              dolores, perspiciatis corporis aperiam doloribus recusandae
              consequuntur illum.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img src="./security.jpeg" alt="" className="w-[350px] h-[200px]" />
            <p className="mt-2 text-md md:text-sm w-[350px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              laudantium asperiores iure odit aut enim temporibus, deleniti,
              dolores, perspiciatis corporis aperiam doloribus recusandae
              consequuntur illum.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img src="./startup.jpg" alt="" className="w-[350px] h-[200px]" />
            <p className="mt-2 text-md md:text-sm w-[350px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              laudantium asperiores iure odit aut enim temporibus, deleniti,
              dolores, perspiciatis corporis aperiam doloribus recusandae
              consequuntur illum.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img src="./app.jpg" alt="" className="w-[350px] h-[200px]" />
            <p className="mt-2 text-md md:text-sm w-[350px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              laudantium asperiores iure odit aut enim temporibus, deleniti,
              dolores, perspiciatis corporis aperiam doloribus recusandae
              consequuntur illum.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img src="./ai.png" alt="" className="w-[350px] " />
            <p className="mt-2 text-md md:text-sm w-[350px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              laudantium asperiores iure odit aut enim temporibus, deleniti,
              dolores, perspiciatis corporis aperiam doloribus recusandae
              consequuntur illum.
            </p>
          </div>
        </div>
        <div className="w-[25%] bg-orange-300"></div>
      </div>
    </div>
  );
};

export default Home;
