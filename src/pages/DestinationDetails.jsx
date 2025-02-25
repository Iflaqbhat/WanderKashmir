import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDestinations } from "../context/DestinationsContext";

function DestinationDetails() {
  const { name } = useParams();
  const [showBooking, setShowBooking] = useState(false);
  const { destinations } = useDestinations();
  const formattedName = name
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  const place = destinations[name] || {
    img: "https://via.placeholder.com/800x400",
    desc: "Details not available for this destination.",
  };

  const rates = { "1 Night": "$50", "3 Nights": "$140", "7 Nights": "$300" };

  console.log("URL Parameter (name):", name);
  console.log("Selected Place:", place);

  return (
    <div className="container mx-auto py-16 px-6 max-w-5xl">
      <h1 className="text-5xl font-extrabold text-center mb-12 tracking-tight">
        {formattedName}
      </h1>
      <div className="bg-white dark:bg-dark-card rounded-2xl shadow-xl overflow-hidden">
        <div className="relative w-full h-96 md:h-[32rem]">
          {" "}
          {/* Increased height */}
          <img
            src={place.img}
            alt={formattedName}
            className="w-full h-full object-cover rounded-t-2xl"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/800x400";
              console.error(`Failed to load image: ${place.img}`);
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-t-2xl"></div>
        </div>
        <div className="p-8">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            {place.desc}
          </p>
          <h2 className="text-2xl font-semibold mb-4">Highlights</h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6">
            <li>Scenic beauty</li>
            <li>Adventure opportunities</li>
            <li>Cultural significance</li>
          </ul>
          <h2 className="text-2xl font-semibold mb-4">Rates</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            {Object.entries(rates).map(([duration, price]) => (
              <div
                key={duration}
                className="bg-teal-50 dark:bg-teal-900 p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <p className="text-gray-700 dark:text-gray-200 font-semibold text-lg">
                  {duration}
                </p>
                <p className="text-teal-600 dark:text-teal-400 text-xl font-bold mt-2">
                  {price}
                </p>
              </div>
            ))}
          </div>
          <button
            onClick={() => setShowBooking(true)}
            className="w-full bg-teal-600 text-white py-3 rounded-full hover:bg-teal-700 transition-colors duration-200 font-semibold text-lg"
          >
            Book a Trip
          </button>
          <Link
            to="/destinations"
            className="block mt-4 text-teal-600 dark:text-gray-300 hover:underline text-center font-semibold text-lg"
          >
            Back to Destinations
          </Link>
        </div>
      </div>
      {/* Booking modal unchanged */}
    </div>
  );
}

export default DestinationDetails;
