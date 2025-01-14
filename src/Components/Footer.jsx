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
      <section className="flex flex-col md:flex-row items-start justify-around bg-custom-blue text-white p-5 3xl:h-[25rem] 2xl:gap-96">
        <div className="flex flex-col justify-center gap-5 items-start">
          <h1 className="text-xl md:text-2xl  3xl:text-5xl">VoteHub</h1>
          <p className="text-sm md:text-base 3xl:text-2xl">
            {" "}
            the only secured, safe <br /> and user-friendly platform that makes
            your vote count ,
            <br />
            remember to vote for your future leader
          </p>
        </div>
        <div className="flex flex-col items-start justify-center gap-5">
          <h1 className="text-xl md:text-2xl 3xl:text-5xl items-start ">
            Contacts
          </h1>
          <div className="flex items-center justify-center gap-2 3xl:text-2xl">
            {" "}
            <MdLocationOn /> <span>VoteHub jouvence, Yaounde</span>{" "}
          </div>
          <div className="flex items-center justify-center gap-2 3xl:text-2xl">
            {" "}
            <MdMarkEmailRead /> <h1>VoteHub@gmail.com</h1>{" "}
          </div>
          <div className="flex items-center justify-center gap-2 3xl:text-2xl">
            {" "}
            <FaPhoneVolume /> <span>+237676184440</span>{" "}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          {" "}
          <h1 className="text-xl md:text-2xl 3xl:text-5xl">Follow us on</h1>
          <div className="flex items-center justify-center gap-2">
            {" "}
            <a href="#">
              <BsFacebook className="w-8 h-8  3xl:w-14 3xl:h-14" />
            </a>
            <a href="#">
              <FaLinkedin className="w-8 h-8 3xl:w-14 3xl:h-14" />
            </a>{" "}
            <a href="#">
              <FaTwitter className="w-8 h-8  3xl:w-14 3xl:h-14" />
            </a>{" "}
          </div>{" "}
        </div>
      </section>
      <section className=" w-full bg-custom-blue h-14 flex items-center justify-start ">
        <div className="flex flex-col items-start justify-center text-white ml-5">
          copy right since 2024
        </div>
      </section>
    </>
  );
};

export default Footer;
