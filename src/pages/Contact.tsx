import React from "react";
import { Button } from "../components/ui/button"; // Import Button component
import Header from "../components/layout/Header"; // Import Header component

const Contact = () => {
  return (
    <div className="bg-gray-900">
      <div className="fixed top-0 left-0 w-full z-10 p-0 bg-gray-900">
        <Header />
      </div>

      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-10 pt-24">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Name</label>
            <input type="text" className="w-full p-2 rounded text-black" required />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input type="email" className="w-full p-2 rounded text-black" required />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea className="w-full p-2 rounded text-black" rows={4} required></textarea>
          </div>
          <Button variant="default" type="submit">Send Message</Button>
        </form>
      </div>
    
 


      {/* Google Maps Iframe */}
      <div className="mt-8">
        <h3 className="text-lg text-center">Our Location</h3>
        <iframe
        src="https://www.openstreetmap.org/export/embed.html?bbox=72.8205%2C18.9206%2C72.9205%2C19.0206&layer=mapnik"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>

      </div>

      <div className="mt-10 text-center">
        <h3 className="text-lg">Contact Details</h3>
        <p>Email: contact@example.com</p>
        <p>Phone: +123456789</p>
      </div>
    </div>
  );
};

export default Contact;
