function Activities() {
  const activities = [
    {
      name: "Shikara Ride on Dal Lake",
      desc: "Glide through the serene waters of Dal Lake in a traditional Shikara boat.",
      img: "https://images.unsplash.com/photo-1564329494258-3f72215ba175?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2hpa2FyYSUyMFJpZGUlMjBvbiUyMERhbCUyMExha2V8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Skiing in Gulmarg",
      desc: "Enjoy world-class skiing down the snowy slopes of Gulmarg.",
      img: "https://images.unsplash.com/photo-1523815119304-615b6b81e704?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2tpaW5nJTIwaW4lMjBHdWxtYXJnfGVufDB8fDB8fHww",
    },
    {
      name: "Paragliding in Sonmarg",
      desc: "Soar above the stunning landscapes of Sonmarg with a thrilling paragliding experience.",
      img: "https://images.unsplash.com/photo-1677856216675-a397a342cdd2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFBhcmFnbGlkaW5nJTIwaW4lMjBTb25tYXJnfGVufDB8fDB8fHww",
    },
    {
      name: "Houseboat Stay on Nigeen Lake",
      desc: "Experience a unique stay on a luxurious houseboat on Nigeen Lake.",
      img: "https://images.unsplash.com/photo-1709926474736-d11e0b3fbd3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SG91c2Vib2F0JTIwU3RheXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "River Rafting in Lidder River, Pahalgam",
      desc: "Tackle the rapids of the Lidder River for an adrenaline-pumping adventure.",
      img: "https://plus.unsplash.com/premium_photo-1661889971049-6f0a39a3476f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Uml2ZXIlMjBSYWZ0aW5nfGVufDB8fDB8fHww",
    },
    {
      name: "Camping in Yusmarg",
      desc: "Set up camp amidst the serene meadows and forests of Yusmarg.",
      img: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q2FtcGluZyUyMGluJTIwWXVzbWFyZ3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Horse Riding in Pahalgam",
      desc: "Explore the scenic trails of Pahalgam on horseback.",
      img: "https://images.unsplash.com/photo-1555447421-52e8d51a1ea3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEhvcnNlJTIwUmlkaW5nfGVufDB8fDB8fHww",
    },
    {
      name: "Fishing in Verinag",
      desc: "Spend a relaxing day fishing in the pristine waters of Verinag.",
      img: "https://images.unsplash.com/photo-1609859682240-6860cf3d99d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RmlzaGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Mountain Biking in Gulmarg",
      desc: "Ride through the rugged terrains of Gulmarg on a mountain bike.",
      img: "https://plus.unsplash.com/premium_photo-1670002242828-35b26f965425?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TW91bnRhaW4lMjBCaWtpbmd8ZW58MHx8MHx8fDA%3D",
    },
  ];

  return (
    <div className="container mx-auto py-16 px-6">
      <h1 className="text-5xl font-extrabold text-center mb-12 tracking-tight">
        Activities in Kashmir
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {activities.map((activity) => (
          <div
            key={activity.name}
            className="bg-white dark:bg-dark-card rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            <div className="relative">
              <img
                src={activity.img}
                alt={activity.name}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <h2 className="absolute bottom-4 left-4 text-xl font-bold text-white">
                {activity.name}
              </h2>
            </div>
            <div className="p-6">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {activity.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Activities;
