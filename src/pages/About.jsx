export default function About() {
  return (
    <div className="min-h-screen bg-transparent py-12 px-4">
      <h1 className="text-4xl md:text-5xl font-black text-center text-teal-800 mb-12 drop-shadow-lg tracking-tight">About Kashmir Tourism</h1>
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="bg-white p-8 rounded-3xl border border-transparent hover:border-cyan-200 shadow-xl hover:shadow-2xl hover:bg-gradient-to-br hover:from-cyan-50 hover:to-blue-50 transition-all duration-300">
          <h2 className="text-2xl font-extrabold mb-4 text-teal-700 tracking-tight">Overview</h2>
          <p className="text-lg text-gray-700">Kashmir, dubbed "Paradise on Earth," is famous for its stunning landscapes, serene lakes, and rich cultural heritage. From Gulmarg's snowy peaks to Srinagar's tranquil Dal Lake, it's a haven for travelers.</p>
        </div>
        <div className="bg-white p-8 rounded-3xl border border-transparent hover:border-cyan-200 shadow-xl hover:shadow-2xl hover:bg-gradient-to-br hover:from-cyan-50 hover:to-blue-50 transition-all duration-300">
          <h2 className="text-2xl font-extrabold mb-4 text-teal-700 tracking-tight">Geography & Climate</h2>
          <p className="text-lg text-gray-700">Nestled in the Himalayas, Kashmir features snow-capped mountains, lush valleys, and crystal-clear rivers. The region experiences four distinct seasons, with cool summers, vibrant springs, golden autumns, and snowy winters.</p>
        </div>
        <div className="bg-white p-8 rounded-3xl border border-transparent hover:border-cyan-200 shadow-xl hover:shadow-2xl hover:bg-gradient-to-br hover:from-cyan-50 hover:to-blue-50 transition-all duration-300">
          <h2 className="text-2xl font-extrabold mb-4 text-teal-700 tracking-tight">Cuisine</h2>
          <p className="text-lg text-gray-700">Kashmiri cuisine is renowned for its rich flavors and unique dishes like Rogan Josh, Yakhni, Dum Aloo, and the famous Wazwan feast. Saffron, dry fruits, and aromatic spices are staples in local cooking.</p>
        </div>
        <div className="bg-white p-8 rounded-3xl border border-transparent hover:border-cyan-200 shadow-xl hover:shadow-2xl hover:bg-gradient-to-br hover:from-cyan-50 hover:to-blue-50 transition-all duration-300">
          <h2 className="text-2xl font-extrabold mb-4 text-teal-700 tracking-tight">Festivals & Events</h2>
          <p className="text-lg text-gray-700">Kashmir celebrates vibrant festivals such as Tulip Festival, Shikara Festival, Eid, Navroz, and Lohri. These events showcase the region's diverse culture, music, and traditions.</p>
        </div>
        <div className="bg-white p-8 rounded-3xl border border-transparent hover:border-cyan-200 shadow-xl hover:shadow-2xl hover:bg-gradient-to-br hover:from-cyan-50 hover:to-blue-50 transition-all duration-300">
          <h2 className="text-2xl font-extrabold mb-4 text-teal-700 tracking-tight">Famous People & Legends</h2>
          <p className="text-lg text-gray-700">Kashmir is home to legendary poets like Lal Ded and Habba Khatoon, Sufi saints, and artists. The region is also known for its folklore, such as the legend of the mystical Lake Wular and the story of the Shankaracharya Temple.</p>
        </div>
        <div className="bg-white p-8 rounded-3xl border border-transparent hover:border-cyan-200 shadow-xl hover:shadow-2xl hover:bg-gradient-to-br hover:from-cyan-50 hover:to-blue-50 transition-all duration-300">
          <h2 className="text-2xl font-extrabold mb-4 text-teal-700 tracking-tight">Fun Facts</h2>
          <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
            <li>Kashmir is the only region in India where saffron is grown.</li>
            <li>The Dal Lake has floating gardens and a vibrant houseboat culture.</li>
            <li>Pashmina shawls from Kashmir are world-famous for their softness and warmth.</li>
            <li>The region is a top destination for adventure sports like skiing, trekking, and river rafting.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
