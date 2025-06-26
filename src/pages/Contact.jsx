export default function Contact() {
  return (
    <div className="min-h-screen bg-transparent py-12 px-4 flex items-center justify-center">
      <div className="bg-white/90 rounded-3xl shadow-2xl border border-cyan-100 p-10 max-w-3xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 backdrop-blur-xl">
        {/* Contact Info */}
        <div>
          <h1 className="text-3xl font-extrabold mb-6 text-teal-800 tracking-tight">Contact Us</h1>
          <p className="mb-2 text-gray-700"><strong>Email:</strong> iflaktravels@kashmirtourism.com</p>
          <p className="mb-2 text-gray-700"><strong>Phone:</strong> +91 6005154365</p>
          <p className="mb-4 text-gray-700"><strong>Address:</strong> Pulwama, Kashmir, India</p>
          <div className="w-full h-40 rounded-md overflow-hidden">
            <iframe
              title="Google Map Location"
              className="w-full h-full"
              src="https://maps.google.com/maps?q=Pulwama,Kashmir,India&output=embed"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
        {/* Contact Form */}
        <form className="flex flex-col gap-4">
          <label className="text-sm font-semibold text-teal-700" htmlFor="contact-name">Name</label>
          <input id="contact-name" type="text" placeholder="Your Name" className="p-3 rounded-lg border border-cyan-100 focus:ring-2 focus:ring-cyan-400 outline-none bg-white/90 placeholder:text-gray-500" />
          <label className="text-sm font-semibold text-teal-700" htmlFor="contact-email">Email</label>
          <input id="contact-email" type="email" placeholder="Your Email" className="p-3 rounded-lg border border-cyan-100 focus:ring-2 focus:ring-cyan-400 outline-none bg-white/90 placeholder:text-gray-500" />
          <label className="text-sm font-semibold text-teal-700" htmlFor="contact-message">Message</label>
          <textarea id="contact-message" rows="5" placeholder="Your Message" className="p-3 rounded-lg border border-cyan-100 focus:ring-2 focus:ring-cyan-400 outline-none bg-white/90 placeholder:text-gray-500" />
          <button type="submit" className="bg-gradient-to-r from-cyan-400 to-blue-400 text-white py-3 rounded-lg font-semibold shadow hover:from-cyan-500 hover:to-blue-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-300 mt-2">Send</button>
        </form>
      </div>
    </div>
  );
}
