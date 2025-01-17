import React from "react";
import { MdLocationOn, MdMarkEmailRead } from "react-icons/md";
import { FaPhoneVolume, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* Main Footer Section */}
      <footer className="bg-blue-800 py-10">
        <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Electrify */}
          <div>
            <h1 className="text-2xl font-bold text-gray-200 mb-4">Electrify</h1>
            <p className="text-gray-300 text-sm md:text-base leading-6">
              Empowering citizens to make informed decisions and have their voices heard. 
              Your vote is your power—use it wisely. Together, we shape the future of democracy.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h1 className="text-2xl font-bold text-gray-200 mb-4">Contact Us</h1>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-300">
                <MdLocationOn size={20} />
                <span>Electrify Office, Yaounde, Cameroon</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <MdMarkEmailRead size={20} />
                <span>Electrify@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <FaPhoneVolume size={20} />
                <span>+237 696 736 947</span>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h1 className="text-2xl font-bold text-gray-200 mb-4">Follow Us</h1>
            <p className="text-gray-300 text-sm md:text-base mb-4">
              Stay updated with the latest news and initiatives about voting and civic engagement.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-gray-300 hover:text-gray-400 transition"
                aria-label="Facebook"
              >
                <FaFacebook size={30} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-gray-400 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-gray-400 transition"
                aria-label="Twitter"
              >
                <FaTwitter size={30} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Footer Bottom Section */}
      <div className="bg-blue-800 py-4">
        <div className="container mx-auto px-5 text-center text-sm text-gray-300">
          &copy; {new Date().getFullYear()} Electrify. Empowering every vote, every voice.
        </div>
      </div>
    </>
  );
};

export default Footer;
