import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-teal-600 dark:bg-teal-800 text-white p-8 shadow-inner transition-colors duration-300">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Kashmir Tourism</h3>
          <p className="text-gray-200">
            Explore the paradise on Earth with us.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-200">
            <li>
              <Link to="/" className="hover:text-teal-200 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/destinations"
                className="hover:text-teal-200 transition-colors"
              >
                Destinations
              </Link>
            </li>
            <li>
              <Link
                to="/activities"
                className="hover:text-teal-200 transition-colors"
              >
                Activities
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <p className="text-gray-200">
            Email: iflaktravels@kashmirtourism.com
          </p>
          <p className="text-gray-200">Phone: +91 6005154365</p>
        </div>
      </div>
      <div className="text-center mt-6 text-gray-300">
        <p>© 2025 Kashmir Tourism. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
