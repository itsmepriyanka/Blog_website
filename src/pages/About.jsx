const About = () => {
  const authorData = [
    {
      src: "person1.jpg",
      name: "william Frank",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolores!",
    },
    {
      src: "person2.jpg",
      name: "Maria D'Suza",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolores!",
    },
    {
      src: "person4.jpg",
      name: "John shakespere",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolores!",
    },
    {
      src: "person3.jpg ",
      name: "Jane Austen ",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolores!",
    },
  ];
  return (
    <>
      {/* Hero Section */}
      <div className=" py-22 color mx-auto ">
        <div className="text-white text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-4"> About Us</h1>
        </div>
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
          <p className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias,
            quod ut. Quos ab praesentium quidem eveniet iste libero natus alias
            inventore nisi, aliquid suscipit animi illo quo voluptatibus est
            neque, possimus accusantium soluta dolorem rem blanditiis voluptate
            deserunt fugiat.
          </p>
          <p className="mt-5">
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
        {authorData.map((image, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            <img src={image.src} alt="Author" className="w-full h-50" />
            <div className="p-4 text-gray-700 text-center">
              <p className="font-bold italic">{image.name}</p>
              <p>{image.content}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default About;
