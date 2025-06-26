import { Link } from "react-router-dom";
import { useDestinations } from "../context/DestinationsContext";

export default function Home() {
  const { destinations } = useDestinations();
  const featuredKeys = ["srinagar", "gulmarg", "pahalgam"];
  const featuredDestinations = featuredKeys.map((key) => ({
    name: destinations[key]?.name || key.charAt(0).toUpperCase() + key.slice(1),
    img: destinations[key]?.img,
    desc: destinations[key]?.desc,
  }));

  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-blue-100 via-teal-50 to-teal-200 pt-24 pb-16 px-4 flex flex-col items-center relative overflow-hidden">
        <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-700 via-blue-600 to-teal-400 mb-6 drop-shadow-xl text-center leading-tight z-10">Discover Kashmir Like Never Before</h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-10 font-light max-w-2xl text-center z-10">Explore breathtaking destinations, thrilling activities, and spiritual sites in the heart of the Himalayas. Your adventure starts here.</p>
        <Link to="/destinations" className="inline-block px-10 py-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-full shadow-xl hover:scale-105 hover:from-teal-600 hover:to-blue-600 transition text-xl font-semibold z-10 relative">Start Exploring</Link>
        {/* SVG Wave */}
        <svg className="absolute left-0 bottom-0 w-full h-24 md:h-32 z-0" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="url(#waveGradient)" fillOpacity="1" d="M0,224L60,202.7C120,181,240,139,360,154.7C480,171,600,245,720,245.3C840,245,960,171,1080,133.3C1200,96,1320,96,1380,96L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" /><defs><linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#67e8f9" /><stop offset="100%" stopColor="#38bdf8" /></linearGradient></defs></svg>
      </section>
      {/* Featured Destinations (unchanged) */}
      <section className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-24 px-4 mt-10">
        {featuredDestinations.map((dest, idx) => (
          <div key={idx} className="bg-white rounded-3xl shadow-2xl p-7 flex flex-col items-center hover:scale-105 hover:shadow-teal-200 transition-transform duration-300">
            <img src={dest.img} alt={dest.name} className="rounded-2xl w-full h-52 object-cover mb-5 border-4 border-teal-100" />
            <h2 className="text-2xl font-extrabold text-teal-700 mb-2 tracking-wide">{dest.name}</h2>
            <p className="text-gray-600 mb-3 text-center">{dest.desc}</p>
            <Link to="/destinations" className="text-teal-600 font-semibold hover:underline">See more</Link>
          </div>
        ))}
      </section>
    </div>
  );
}
