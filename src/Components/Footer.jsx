import React from "react";
import { MdLocationOn } from "react-icons/md";
import { MdMarkEmailRead } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* Main Footer Section */}
      <section className="flex flex-col md:flex-row items-start justify-around bg-custom-blue text-white p-5 3xl:h-[25rem] 2xl:gap-96">
        {/* About Electrify */}
        <div className="flex flex-col justify-center gap-5 items-start">
          <h1 className="text-xl md:text-2xl 3xl:text-5xl">Electrify</h1>
          <p className="text-sm md:text-base 3xl:text-2xl">
            The only secure, safe, and user-friendly platform that makes
            your vote count. <br />
            Remember to vote for your future leader!
          </p>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-start justify-center gap-5">
          <h1 className="text-xl md:text-2xl 3xl:text-5xl">Contacts</h1>
          <div className="flex items-center justify-center gap-2 3xl:text-2xl">
            <MdLocationOn />
            <span>Electrify Office, Jouvence, Yaounde</span>
          </div>
          <div className="flex items-center justify-center gap-2 3xl:text-2xl">
            <MdMarkEmailRead />
            <span>Electrify@gmail.com</span>
          </div>
          <div className="flex items-center justify-center gap-2 3xl:text-2xl">
            <FaPhoneVolume />
            <span>+237 696 736 947</span>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className="text-xl md:text-2xl 3xl:text-5xl">Follow us on</h1>
          <div className="flex items-center justify-center gap-2">
            <a href="#">
              <BsFacebook className="w-8 h-8 3xl:w-14 3xl:h-14" />
            </a>
            <a href="#">
              <FaLinkedin className="w-8 h-8 3xl:w-14 3xl:h-14" />
            </a>
            <a href="#">
              <FaTwitter className="w-8 h-8 3xl:w-14 3xl:h-14" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer Bottom Section */}
      <section className="w-full bg-custom-blue h-14 flex items-center justify-start">
        <div className="flex flex-col items-start justify-center text-white ml-5">
          &copy; 2024 Electrify. All rights reserved.
        </div>
      </section>
    </>
  );
};

export default Footer;
