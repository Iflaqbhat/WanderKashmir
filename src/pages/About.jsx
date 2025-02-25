function About() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8">
        About Kashmir Tourism
      </h1>
      <div className="space-y-10">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-lg">
            Kashmir, dubbed "Paradise on Earth," is famous for its stunning
            landscapes, serene lakes, and rich cultural heritage. From Gulmarg’s
            snowy peaks to Srinagar’s tranquil Dal Lake, it’s a haven for
            travelers.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">History</h2>
          <p className="text-lg">
            Kashmir has a rich history dating back centuries, influenced by
            Mughal emperors, Sufi saints, and ancient kingdoms. Its historical
            sites like Hari Parbat Fort tell tales of its past.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Culture</h2>
          <p className="text-lg">
            The region boasts vibrant traditions, music like Sufiana Kalam, and
            crafts like Pashmina shawls, making it a cultural gem.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
