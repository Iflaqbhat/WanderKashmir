function Contact() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full p-2 border rounded-md"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea
                className="w-full p-2 border rounded-md"
                rows="4"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-teal-600 text-white p-2 rounded-md hover:bg-teal-700"
            >
              Send
            </button>
          </form>
        </div>
        {/* Info */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-2">
            <strong>Email:</strong> iflaktravels@kashmirtourism.com
          </p>
          <p className="mb-2">
            <strong>Phone:</strong> +91 6005154365
          </p>
          <p className="mb-4">
            <strong>Address:</strong> Pulwama, Kashmir, India
          </p>
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
      </div>
    </div>
  );
}

export default Contact;
