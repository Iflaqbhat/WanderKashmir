const images = [
  "https://media-cdn.tripadvisor.com/media/photo-s/1a/cf/4a/6d/beautiful-kashmir.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJnBxBGAhP8ynOUsj477-bcDW5QCt9yWD0SHhseULamenCPKntEVYAVOdCf9cPvCPb59Y&usqp=CAU",
  "https://images.unsplash.com/photo-1564329494258-3f72215ba175?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGFsJTIwbGFrZSUyMHNyaW5hZ2FyfGVufDB8fDB8fHww",
  "https://media-cdn.tripadvisor.com/media/photo-s/11/38/bd/f3/gulmarg-is-a-hill-resort.jpg",
  "https://www.holidify.com/images/bgImages/SONAMARG.jpg",
  "https://www.kashmironline.com/top-destinations/yousmarg/images/Yousmarg%20Meadows.jpg",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/ec/a2/b0/scenery.jpg?w=1200&h=-1&s=1",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/ec/dc/15/aru-city.jpg?w=1200&h=-1&s=1",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/71/3f/53/betaab-valley.jpg?w=1200&h=1200&s=1",
  "https://images.unsplash.com/photo-1562163956-0e2d9b407d77",
  "https://images.unsplash.com/photo-1603191355247-2a5f62b68384",
  "https://images.unsplash.com/photo-1572023444298-ac6d4b8b05da",
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-transparent py-12 px-4">
      <h1 className="text-4xl md:text-5xl font-black text-center text-teal-800 mb-12 drop-shadow-lg tracking-tight">Photo Gallery</h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {images.map((src, index) => (
          <div key={index} className="bg-white rounded-3xl border border-transparent hover:border-cyan-200 shadow-xl overflow-hidden hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br hover:from-cyan-50 hover:to-blue-50 transition-all duration-300">
            <img src={src} alt={`Gallery ${index + 1}`} className="w-full h-60 object-cover rounded-2xl" />
          </div>
        ))}
      </div>
    </div>
  );
}
