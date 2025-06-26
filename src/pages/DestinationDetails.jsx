import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDestinations } from "../context/DestinationsContext";

const PLACEHOLDER_IMG = "https://via.placeholder.com/800x400?text=No+Image";

export default function DestinationDetails() {
  const { name } = useParams();
  const [showBooking, setShowBooking] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', dates: '', message: '' });
  const { destinations } = useDestinations();
  const formattedName = name
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  const place = destinations[name] || {
    img: PLACEHOLDER_IMG,
    desc: "Details not available for this destination.",
  };

  const rates = { "1 Night": "$50", "3 Nights": "$140", "7 Nights": "$300" };
  const images = place.images || [];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [name]);

  function handleFormChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleBookingSubmit(e) {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => {
      setShowBooking(false);
      setBookingSuccess(false);
      setForm({ name: '', email: '', dates: '', message: '' });
    }, 2000);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-teal-50 to-teal-200 flex flex-col items-center py-8 px-2">
      {/* Hero Image */}
      <div className="w-full max-w-3xl rounded-3xl overflow-hidden shadow-xl mb-0">
        <img
          src={place.img || PLACEHOLDER_IMG}
          alt={formattedName}
          className="w-full h-72 md:h-96 object-cover bg-gray-100"
          onError={(e) => { e.target.src = PLACEHOLDER_IMG; }}
        />
      </div>
      {/* One-liner/desc banner */}
      <div className="w-full max-w-3xl mt-4 mb-2 px-4">
        <div className="bg-gradient-to-r from-blue-100 via-cyan-50 to-teal-100 border border-cyan-200 rounded-2xl shadow p-4 text-center">
          <span className="text-lg md:text-xl font-semibold text-blue-700 italic">{place.desc}</span>
        </div>
      </div>
      {/* Image Gallery */}
      {images.length > 1 && (
        <div className="w-full max-w-3xl mt-6 mb-2 grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${formattedName} ${idx + 1}`}
              className="rounded-xl object-cover w-full h-32 md:h-40 shadow hover:scale-105 transition-all duration-200 border border-cyan-100 bg-white"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          ))}
        </div>
      )}
      {/* Details Card */}
      <div className="w-full max-w-3xl mt-8 z-10 flex justify-center">
        <div className="w-full bg-white border border-teal-200 rounded-3xl shadow-2xl p-8 flex flex-col md:flex-row gap-10 text-gray-900">
          {/* Details Section */}
          <div className="flex-1 min-w-[220px]">
            <h1 className="text-3xl md:text-4xl font-black mb-3 text-teal-800 tracking-tight drop-shadow">{formattedName}</h1>
            <p className="text-base md:text-lg font-medium mb-6 leading-relaxed text-gray-700">{place.longDesc || ''}</p>
            <h2 className="text-lg md:text-xl font-bold mb-2 flex items-center gap-2 text-teal-700 uppercase tracking-wide">
              <span>🌟</span> Highlights
            </h2>
            <ul className="flex flex-wrap gap-3 mb-6">
              <li className="flex items-center gap-2 bg-teal-50 px-3 py-1 rounded-full text-xs md:text-sm font-semibold text-teal-700 shadow"><span>🏞️</span>Scenic beauty</li>
              <li className="flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full text-xs md:text-sm font-semibold text-blue-700 shadow"><span>⛷️</span>Adventure</li>
              <li className="flex items-center gap-2 bg-yellow-50 px-3 py-1 rounded-full text-xs md:text-sm font-semibold text-yellow-700 shadow"><span>🎭</span>Culture</li>
            </ul>
          </div>
          {/* Rates & Booking */}
          <div className="flex-1 flex flex-col justify-between min-w-[220px]">
            <div>
              <h2 className="text-lg md:text-xl font-bold mb-2 flex items-center gap-2 text-teal-700 uppercase tracking-wide">
                <span role="img" aria-label="money">💰</span> Rates
              </h2>
              <div className="flex flex-wrap gap-4 mb-8">
                {Object.entries(rates).map(([duration, price]) => (
                  <div
                    key={duration}
                    className="bg-gradient-to-br from-teal-100 to-blue-100 rounded-xl p-4 text-center shadow font-semibold min-w-[110px]"
                  >
                    <p className="text-base font-bold text-teal-700">{duration}</p>
                    <p className="text-xl text-blue-700 font-black mt-1">{price}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <button
                onClick={() => setShowBooking(true)}
                className="w-full bg-gradient-to-r from-yellow-300 to-yellow-400 text-teal-900 py-3 rounded-full hover:from-yellow-400 hover:to-yellow-500 transition-colors duration-200 font-extrabold text-lg shadow-lg mb-4"
              >
                Book a Trip
              </button>
              <Link
                to="/destinations"
                className="block text-center text-teal-700 hover:underline font-semibold text-lg"
              >
                ← Back to Destinations
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Booking Modal */}
      {showBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 animate-fadeIn">
          <div className="relative w-full max-w-md mx-auto rounded-3xl p-0 overflow-hidden shadow-2xl">
            <div className="bg-gradient-to-br from-white/80 to-teal-50/80 backdrop-blur-xl p-8">
              <button
                className="absolute top-4 right-6 text-gray-400 hover:text-teal-700 text-3xl font-bold focus:outline-none"
                onClick={() => setShowBooking(false)}
                aria-label="Close"
              >
                ×
              </button>
              <div className="flex flex-col items-center mb-6">
                <span className="text-5xl mb-2">🧳</span>
                <h2 className="text-2xl font-extrabold text-teal-800 mb-1">Book Your Trip</h2>
                <p className="text-gray-600 text-sm mb-2">Fill in your details and we'll get back to you soon!</p>
              </div>
              {bookingSuccess ? (
                <div className="flex flex-col items-center justify-center h-48 animate-fadeIn">
                  <span className="text-5xl mb-4">🎉</span>
                  <p className="text-lg font-bold text-teal-700">Booking Successful!</p>
                </div>
              ) : (
                <form className="flex flex-col gap-4 animate-fadeIn" onSubmit={handleBookingSubmit}>
                  <label className="text-sm font-semibold text-teal-700" htmlFor="booking-name">Name</label>
                  <input id="booking-name" name="name" value={form.name} onChange={handleFormChange} required type="text" placeholder="Your Name" className="p-3 rounded-lg border border-teal-100 focus:ring-2 focus:ring-teal-400 outline-none bg-white/80 placeholder:text-gray-500" />
                  <label className="text-sm font-semibold text-teal-700" htmlFor="booking-email">Email</label>
                  <input id="booking-email" name="email" value={form.email} onChange={handleFormChange} required type="email" placeholder="Your Email" className="p-3 rounded-lg border border-teal-100 focus:ring-2 focus:ring-teal-400 outline-none bg-white/80 placeholder:text-gray-500" />
                  <label className="text-sm font-semibold text-teal-700" htmlFor="booking-dates">Travel Dates</label>
                  <input id="booking-dates" name="dates" value={form.dates} onChange={handleFormChange} required type="text" placeholder="Travel Dates" className="p-3 rounded-lg border border-teal-100 focus:ring-2 focus:ring-teal-400 outline-none bg-white/80 placeholder:text-gray-500" />
                  <label className="text-sm font-semibold text-teal-700" htmlFor="booking-message">Message</label>
                  <textarea id="booking-message" name="message" value={form.message} onChange={handleFormChange} placeholder="Message (optional)" rows="3" className="p-3 rounded-lg border border-teal-100 focus:ring-2 focus:ring-teal-400 outline-none bg-white/80 placeholder:text-gray-500" />
                  <button type="submit" className="bg-gradient-to-r from-teal-500 to-blue-500 text-white py-3 rounded-lg font-semibold shadow hover:from-teal-600 hover:to-blue-600 transition">Submit</button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
      <div className="h-24 md:h-32"></div>
    </div>
  );
}
