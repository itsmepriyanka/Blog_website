// const About = () => {
//   return (
//     <>
//       <div className="py-24 color mx-auto ">
//         <div className="text-white text-center">
//           <h1 className="text-5xl lg:text-7xl ledding-snug font-bold mb-5">
//             {" "}
//             About Us Page
//           </h1>
//         </div>
//       </div>
//       <div className="first_content flex justify-around my-10 mx-16">
//         <div className="image w-1/2 rounded-lg shadow-lg">
//           <img
//             src="/chat.jpg"
//             alt="Chat Image"
//             className="shadow-2xl rounded-lg transition-all duration-300 hover:shadow-[0px_10px_30px_rgba(0,0,0,0.3)]"
//             width="100%"
//           />
//         </div>
//         <div className="whoAreWe w-1/2 px-16 py-10">
//           <div className="text-purple-500 font-bold mb-7 text-xs  ">
//             WHO ARE WE
//           </div>
//           <div className=" font-bold mb-7">
//             We Provide High Quality Articles & Blogs
//           </div>
//           <div>
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias,
//             quod ut. Quos ab praesentium quidem eveniet iste libero natus alias
//             inventore nisi, aliquid suscipit animi illo quo voluptatibus est
//             neque, possimus accusantium soluta dolorem rem blanditiis voluptate
//             deserunt fugiat. At in culpa nobis sequi rem reprehenderit voluptas
//             maxime ipsa molestiae.
//           </div>
//           <div className="mt-7">
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias,
//             quod ut. Quos ab praesentium quidem eveniet iste libero natus alias
//             inventore nisi, aliquid suscipit animi illo quo voluptatibus est
//             neque, possimus accusantium soluta dolorem rem blanditiis voluptate
//             deserunt fugiat. At in culpa nobis sequi rem reprehenderit voluptas
//             maxime ipsa molestiae.
//           </div>
//         </div>
//       </div>
//       <div className="text-2xl font-bold mt-20 text-center w-full">
//         TOP AUTHORS
//       </div>
//       <div className="gallery">
//         <div className="box1 box">
//           <img src="/chat.jpg" alt="" width="100%" height="100%" />
//           <div className="">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
//             dolores!
//           </div>
//         </div>
//         <div className="box2 box">
//           <img src="/chat.jpg" alt="" width="100%" height="100%" />
//           <div className="">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
//             dolores!
//           </div>
//         </div>
//         <div className="box3 box">
//           <img src="/chat.jpg" alt="" width="100%" height="100%" />
//           <div className="">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
//             dolores!
//           </div>
//         </div>
//         <div className="box4 box">
//           <img src="/chat.jpg" alt="" width="100%" height="100%" />
//           <div className="">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
//             dolores!
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default About;

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="py-24 mx-auto color text-white text-center">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-snug mb-5">
          About Us Page
        </h1>
      </div>

      {/* Who Are We Section */}
      <div className="first_content flex flex-col lg:flex-row justify-center items-center my-10 px-6 lg:px-16">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 rounded-lg shadow-lg overflow-hidden">
          <img
            src="/chat.jpg"
            alt="Chat Image"
            className="w-full h-auto rounded-lg shadow-2xl transition-all duration-300 hover:shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 px-4 md:px-8 lg:px-16 py-10 text-center lg:text-left">
          <div className="text-purple-400 font-bold mb-4 text-sm">
            WHO ARE WE
          </div>
          <h2 className="text-xl md:text-2xl  mb-5">
            We Provide High Quality Articles & Blogs
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias,
            quod ut. Quos ab praesentium quidem eveniet iste libero natus alias
            inventore nisi, aliquid suscipit animi illo quo voluptatibus est
            neque, possimus accusantium soluta dolorem rem blanditiis voluptate
            deserunt fugiat.
          </p>
          <p className="mt-5 text-gray-700 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias,
            quod ut. Quos ab praesentium quidem eveniet iste libero natus alias
            inventore nisi, aliquid suscipit animi illo quo voluptatibus est
            neque.
          </p>
        </div>
      </div>

      {/* Top Authors Section */}
      <div className="text-2xl font-bold mt-16 text-center w-full">
        TOP AUTHORS
      </div>

      {/* Gallery Section */}
      <div className="gallery grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 px-4 md:px-16 mt-10">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            <img
              src="/chat.jpg"
              alt="Author"
              className="w-full h-40 object-cover"
            />
            <div className="p-4 text-gray-700 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              dolores!
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default About;
