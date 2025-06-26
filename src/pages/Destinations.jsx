import { useDestinations } from '../context/DestinationsContext';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const CATEGORIES = [
  {
    title: 'Popular Destinations',
    keys: ['srinagar', 'gulmarg', 'pahalgam', 'sonmarg'],
  },
  {
    title: 'Valleys & Meadows',
    keys: [
      'doodhpathri', 'yusmarg', 'aru-valley', 'betaab-valley', 'tosamaidan', 'gurez-valley', 'bangus-valley', 'lolab-valley', 'daksum', 'bungus-valley',
    ],
  },
  {
    title: 'Spiritual & Heritage Sites',
    keys: [
      'charar-e-sharief', 'hazratbal-shrine', 'shankaracharya-temple', 'hari-parbat-fort', 'jamia-masjid-srinagar', 'makhdoom-sahib-shrine', 'chatti-padshahi-gurudwara',
    ],
  },
  {
    title: 'Other Attractions',
    keys: [
      'kokernag', 'verinag', 'aharbal-waterfall', 'mughal-road-&-peer-ki-gali', 'mansar-lake', 'sinthan-top',
    ],
  },
];

export default function Destinations() {
  const { destinations } = useDestinations();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div className="min-h-screen bg-transparent py-12 px-4">
      <h1 className="text-4xl md:text-5xl font-black text-center text-teal-800 mb-12 drop-shadow-lg tracking-tight">All Destinations</h1>
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {CATEGORIES.map((cat) => {
          const items = cat.keys.map((key) => destinations[key]).filter(Boolean);
          if (!items.length) return null;
          return (
            <section key={cat.title}>
              <h2 className="text-2xl md:text-3xl font-bold text-teal-700 mb-6 pl-2 tracking-tight">{cat.title}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                {cat.keys.map((key) => {
                  const dest = destinations[key];
                  if (!dest) return null;
                  return (
                    <div key={key} className="group bg-white rounded-3xl border border-transparent hover:border-cyan-200 shadow-xl p-6 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br hover:from-cyan-50 hover:to-blue-50">
                      <img src={dest.img} alt={dest.name || key} className="rounded-2xl w-full h-40 object-cover mb-4 border-4 border-teal-50 group-hover:border-cyan-200 transition-all duration-300" />
                      <h3 className="text-xl font-extrabold text-teal-700 mb-1 group-hover:text-blue-700 transition text-center tracking-tight">{dest.name || key.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}</h3>
                      <p className="text-gray-600 text-center text-sm mb-4 line-clamp-2">{dest.desc}</p>
                      <Link to={`/destinations/${key}`} className="inline-block mt-auto px-5 py-2 bg-gradient-to-r from-cyan-400 to-blue-400 text-white rounded-full text-xs font-bold shadow hover:from-cyan-500 hover:to-blue-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-300">View Details</Link>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
