
const Services = () => {
  const services = [
    {
      title: "Content Writing",
      description: "We provide high-quality blog and article writing services to engage your audience.",
      icon: "/images/handwriting.png"
    },
    {
      title: "SEO Optimization",
      description: "Improve your site's ranking with keyword research, on-page SEO, and best practices.",
      icon: "/images/content-writing.png"
    },
    {
      title: "Guest Posting",
      description: "Expand your reach by getting published on high-authority blogs and websites.",
      icon: "/images/earth.png"
    },
    {
      title: "Social Media Marketing",
      description: "Promote your blogs on various platforms to increase traffic and engagement.",
      icon:"/images/loudspeaker.png"
    },
    {
      title: "Monetization Consultation",
      description: "Learn how to monetize your blog using ads, affiliates, and sponsorships.",
      icon: "/images/moneybag.png"
    },
  ];

  return (
    <>
    <div className=' py-24 color mx-auto '>
             <div className='text-white text-center'>
                <h1 className='text-5xl lg:text-7xl ledding-snug font-bold mb-5'> Services Page</h1>
                
          </div>
    
         </div>

    <div className="min-h-screen bg-gray-100 py-10 px-6">
     <div>
     <h6 className=' text-center text-purple-400 mt-2 '>Our Services</h6>
     <h1 className=' text-center text-2xl '>What we are offer</h1>
     <p className='text-center mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi rerum quibusdam suscipit  <br/>
      porro? Iusto, expedita! Sunt voluptatibus ad quas perferendis.</p>

     </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-20">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
             <img src={service.icon} alt={service.title} className="w-16 h-16  mb-4" />
            {/* <div className="text-4xl">{service.icon}</div> */}
            <h2 className="text-xl font-semibold mt-4 text-gray-800">{service.title}</h2>
            <p className="text-gray-600 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Services;