import { useEffect, useState } from 'react';

const activities = [
  {
    name: "Shikara Ride on Dal Lake",
    desc: "Glide through the serene waters of Dal Lake in a traditional Shikara boat.",
    img: "https://images.unsplash.com/photo-1564329494258-3f72215ba175?w=600&auto=format&fit=crop&q=60",
  },
  {
    name: "Skiing in Gulmarg",
    desc: "Enjoy world-class skiing down the snowy slopes of Gulmarg.",
    img: "https://images.unsplash.com/photo-1523815119304-615b6b81e704?w=600&auto=format&fit=crop&q=60",
  },
  {
    name: "Paragliding in Sonmarg",
    desc: "Soar above the stunning landscapes of Sonmarg with a thrilling paragliding experience.",
    img: "https://images.unsplash.com/photo-1677856216675-a397a342cdd2?w=600&auto=format&fit=crop&q=60",
  },
  {
    name: "Houseboat Stay on Nigeen Lake",
    desc: "Experience a unique stay on a luxurious houseboat on Nigeen Lake.",
    img: "https://images.unsplash.com/photo-1709926474736-d11e0b3fbd3e?w=600&auto=format&fit=crop&q=60",
  },
  {
    name: "River Rafting in Lidder River, Pahalgam",
    desc: "Tackle the rapids of the Lidder River for an adrenaline-pumping adventure.",
    img: "https://plus.unsplash.com/premium_photo-1661889971049-6f0a39a3476f?w=600&auto=format&fit=crop&q=60",
  },
  {
    name: "Camping in Yusmarg",
    desc: "Set up camp amidst the serene meadows and forests of Yusmarg.",
    img: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&auto=format&fit=crop&q=60",
  },
  {
    name: "Horse Riding in Pahalgam",
    desc: "Explore the scenic trails of Pahalgam on horseback.",
    img: "https://images.unsplash.com/photo-1555447421-52e8d51a1ea3?w=600&auto=format&fit=crop&q=60",
  },
  {
    name: "Fishing in Verinag",
    desc: "Spend a relaxing day fishing in the pristine waters of Verinag.",
    img: "https://images.unsplash.com/photo-1609859682240-6860cf3d99d5?w=600&auto=format&fit=crop&q=60",
  },
  {
    name: "Mountain Biking in Gulmarg",
    desc: "Ride through the rugged terrains of Gulmarg on a mountain bike.",
    img: "https://plus.unsplash.com/premium_photo-1670002242828-35b26f965425?w=600&auto=format&fit=crop&q=60",
  },
];

export default function Activities() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-transparent py-12 px-4">
      <h1 className="text-4xl md:text-5xl font-black text-center text-teal-800 mb-12 drop-shadow-lg tracking-tight">Activities in Kashmir</h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {activities.map((activity, idx) => (
          <div key={idx} className="bg-white rounded-3xl border border-transparent hover:border-cyan-200 shadow-xl p-6 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br hover:from-cyan-50 hover:to-blue-50">
            <img src={activity.img} alt={activity.name} className="rounded-2xl w-full h-48 object-cover mb-4 border-4 border-teal-50 group-hover:border-cyan-200 transition-all duration-300" />
            <h2 className="text-xl font-extrabold text-teal-700 mb-2 text-center group-hover:text-blue-700 transition tracking-tight">{activity.name}</h2>
            <p className="text-gray-600 text-center mb-2">{activity.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
