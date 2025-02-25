import { useState } from "react";
import { Link } from "react-router-dom";
import { useDestinations } from "../context/DestinationsContext";

function Destinations() {
  const [activeTab, setActiveTab] = useState("popular");
  const [bookingPlace, setBookingPlace] = useState(null);
  const { destinations } = useDestinations();

  const popular = [
    "srinagar",
    "gulmarg",
    "pahalgam",
    "sonmarg",
    "doodhpathri",
    "yusmarg",
    "aru-valley",
    "betaab-valley",
    "tosamaidan",
    "kokernag",
  ].map((key) => ({
    name: key.charAt(0).toUpperCase() + key.slice(1),
    ...destinations[key],
  }));

  const lesserKnown = [
    "verinag",
    "gurez-valley",
    "bangus-valley",
    "lolab-valley",
    "daksum",
    "aharbal-waterfall",
    "mughal-road-&-peer-ki-gali",
    "mansar-lake",
    "sinthan-top",
    "bungus-valley",
  ].map((key) => ({
    name: key.charAt(0).toUpperCase() + key.slice(1),
    ...destinations[key],
  }));

  const spiritual = [
    "charar-e-sharief",
    "hazratbal-shrine",
    "shankaracharya-temple",
    "hari-parbat-fort",
    "jamia-masjid-srinagar", // Added
    "makhdoom-sahib-shrine", // Added
    "chatti-padshahi-gurudwara", // Added
  ].map((key) => ({
    name: key.charAt(0).toUpperCase() + key.slice(1),
    ...destinations[key],
  }));

  const tabs = {
    popular,
    "lesser-known": lesserKnown,
    spiritual,
  };

  return (
    <div className="container mx-auto py-16 px-6">
      <h1 className="text-5xl font-extrabold text-center mb-12 tracking-tight">
        Explore Kashmir
      </h1>
      <div className="flex justify-center space-x-6 mb-10">
        {["popular", "lesser-known", "spiritual"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-8 py-3 rounded-full font-semibold text-lg transition-colors duration-200 ${
              activeTab === tab
                ? "bg-teal-600 text-white"
                : "bg-gray-200 hover:bg-teal-500 hover:text-white"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1).replace("-", " ")}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {tabs[activeTab].map((place) => (
          <Link
            key={place.name}
            to={`/destinations/${place.name
              .toLowerCase()
              .replace(/ & /g, "-")
              .replace(/ /g, "-")}`}
            className="block bg-white dark:bg-dark-card rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
            <div className="relative">
              <img
                src={place.img}
                alt={place.name}
                className="w-full h-80 object-cover"
              />{" "}
              {/* Increased from h-48 to h-80 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <h2 className="absolute bottom-4 left-4 text-xl font-bold text-white">
                {place.name}
              </h2>
            </div>
            <div className="p-6">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {place.desc}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-teal-600 dark:text-teal-400 hover:underline font-semibold">
                  Details
                </span>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setBookingPlace(place);
                  }}
                  className="bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700 transition-colors duration-200"
                >
                  Book Now
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {/* Booking modal unchanged */}
    </div>
  );
}

export default Destinations;
