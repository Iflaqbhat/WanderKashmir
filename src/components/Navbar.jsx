import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-teal-600 p-8 shadow-lg sticky top-0 z-20 transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            src="https://files.oaiusercontent.com/file-VS6WGLAckxGFf9UFaf51Dn?se=2025-02-25T14%3A09%3A33Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D9e897cc8-822c-4658-b860-f07053842c73.webp&sig=VD%2Bi%2BcfmD/HHQ8fDvsV7IE1qC0EMX17czvQADoIDQKg%3D" // Replace with your WanderKashmir logo URL
            alt="WanderKashmir Logo"
            className="h-16 w-16 object-contain"
          />
          <Link
            to="/"
            className="text-white text-5xl font-extrabold tracking-tighter"
          >
            WanderKashmir
          </Link>
        </div>
        <div className="flex items-center space-x-6">
          {[
            "Home",
            "Destinations",
            "Activities",
            "Gallery",
            "About",
            "Contact",
          ].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="text-white text-xl font-medium bg-teal-700 hover:bg-teal-500 px-4 py-2 rounded-full transition-all duration-200 ease-in-out shadow-md hover:shadow-lg"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
