import { Link } from "react-router-dom";
import { useDestinations } from "../context/DestinationsContext";

function Home() {
  const { destinations } = useDestinations();
  const featuredKeys = ["srinagar", "gulmarg", "pahalgam"];
  const featuredDestinations = featuredKeys.map((key) => ({
    name: key.charAt(0).toUpperCase() + key.slice(1),
    img: destinations[key].img,
    desc: destinations[key].desc,
  }));

  return (
    <div className="container mx-auto py-16 px-6">
      <div className="bg-teal-500 dark:bg-teal-700 text-white rounded-2xl p-12 text-center mb-12 shadow-xl">
        <h1 className="text-5xl font-extrabold mb-6 tracking-tighter">
          Welcome to WanderKashmir
        </h1>
        <p className="text-xl mb-8 leading-relaxed">
          Embark on a journey through Kashmir’s breathtaking landscapes, vibrant
          culture, and hidden gems.
        </p>
        <Link
          to="/destinations"
          className="bg-white text-teal-600 px-8 py-3 rounded-full hover:bg-teal-100 transition-colors duration-200 font-semibold"
        >
          Begin Your Journey
        </Link>
      </div>

      <h2 className="text-4xl font-bold text-center mb-10 tracking-tight">
        Featured Destinations
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
        {featuredDestinations.map((place) => (
          <Link
            key={place.name}
            to={`/destinations/${place.name.toLowerCase()}`}
            className="block bg-white dark:bg-dark-card rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
            <div className="relative">
              <img
                src={place.img}
                alt={place.name}
                className="w-full h-96 object-cover"
              />{" "}
              {/* Increased from h-64 to h-96 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                {place.name}
              </h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {place.desc}
              </p>
              <span className="text-teal-600 dark:text-teal-400 hover:underline font-semibold">
                Learn More
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
