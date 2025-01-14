import React from 'react';
import { Link } from 'react-router-dom';
import homePageImage from "/src/assets/images/pexels-steve-29506613.jpg";
import voteImage from "/src/assets/images/Screen Shot 2024-12-20 at 10.05.41 PM-fotor-202412202369.png";
import {
  MdOutlineEventNote,
  MdOutlineAccessible,
} from "react-icons/md";
import {
  IoPersonCircleOutline,
} from "react-icons/io5";
import {
  TbCategory,
} from "react-icons/tb";
import {
  LuMapPinned,
} from "react-icons/lu";
import {
  RiGraduationCapFill,
} from "react-icons/ri";
import {
  AiFillSafetyCertificate,
} from "react-icons/ai";
import Footer from '../../Components/Footer';

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        id="homepage"
        className="relative text-white bg-cover bg-center"
        style={{
          backgroundImage: `url(${homePageImage})`,
          height: '80vh',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
            Empowering <span className="text-button-c">The</span> Future
          </h1>
          <p className="mt-4 text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl">
            Create an election for your school, club, or organization in just
            seconds. With our intuitive platform, setting up a secure and
            efficient election is easier than ever. Start building your election
            today and experience a smarter, faster, and more inclusive way to
            make decisions.
          </p>
          <Link to="/register" className="mt-6">
            <button className="bg-button-c px-6 py-3 text-xl md:text-2xl rounded-md shadow-md hover:bg-button-c-dark">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-custom-blue text-white">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
          {[
            { Icon: MdOutlineEventNote, label: "100 Events" },
            { Icon: IoPersonCircleOutline, label: "1000 Voters" },
            { Icon: TbCategory, label: "100 Categories" },
            { Icon: LuMapPinned, label: "1,200 Locations" },
          ].map(({ Icon, label }, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center p-6 bg-custom-first rounded-lg"
            >
              <div className="bg-gray-400 p-4 rounded-full">
                <Icon className="w-12 h-12" />
              </div>
              <h3 className="mt-4 text-lg">{label}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 px-6">
          <img
            src={voteImage}
            alt="About Us"
            className="rounded-lg shadow-lg"
          />
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-button-c">
              About Us
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Welcome to VoteHub, a platform designed to empower individuals and
              organizations to participate in the democratic process. Our mission
              is to provide a modern, reliable, and accessible solution for voting,
              ensuring that every voice is heard, every vote is counted, and every
              election is fair.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              {[
                "Institutional Awards",
                "Student Awards",
                "Teacher Awards",
                "Special Awards",
              ].map((label, idx) => (
                <p
                  key={idx}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  {label}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section> */}
      <section className="py-16 bg-white">
  <div className="container mx-auto text-center">
    <h1 className="text-3xl md:text-5xl font-bold text-button-c">
      Why Choose Us
    </h1>
    <p className="mt-4 text-lg text-gray-700">
      Here are six compelling reasons to choose our platform for your next election or voting event.
    </p>
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          Icon: MdOutlineAccessible,
          title: "Accessibility",
          description:
            "Our platform is designed for everyone, ensuring inclusivity and ease of use across all devices.",
        },
        {
          Icon: RiGraduationCapFill,
          title: "Ease of Use",
          description:
            "Simplify your election setup with our user-friendly interface and intuitive tools.",
        },
        {
          Icon: AiFillSafetyCertificate,
          title: "Secure and Reliable",
          description:
            "Experience peace of mind with robust security measures protecting your votes and data.",
        },
        {
          Icon: TbCategory,
          title: "Customizable Options",
          description:
            "Tailor elections to fit your organization’s unique needs with flexible categories and settings.",
        },
        {
          Icon: LuMapPinned,
          title: "Global Reach",
          description:
            "Host elections anytime, anywhere, for participants from around the globe.",
        },
        {
          Icon: MdOutlineEventNote,
          title: "Proven Track Record",
          description:
            "Join hundreds of satisfied users who have successfully hosted their elections with our trusted platform.",
        },
      ].map(({ Icon, title, description }, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md"
        >
          <div className="bg-blue-500 p-4 rounded-full">
            <Icon className="w-12 h-12 text-white" />
          </div>
          <h3 className="mt-4 text-xl font-bold text-gray-800">{title}</h3>
          <p className="mt-2 text-gray-600 text-center">{description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-button-c">
            How Does It Work?
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Our voting system is flexible to meet the unique needs of our customers, 
            but all internet voting projects follow the same basic flow.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Election Set-Up",
                description: `
                  By utilizing our intuitive Election Manager, define your election 
                  including dates, times, and ballot questions. Select a voter authentication 
                  method and upload your list of eligible voters. Our support team is ready 
                  to assist or even manage the process for you as a premium service.
                `,
              },
              {
                step: "02",
                title: "Voting",
                description: `
                  At your branded voting website, voters log in according to the 
                  authentication method chosen. After authentication, voters cast their 
                  votes on a tamper-proof electronic ballot. Each vote is encrypted, 
                  ensuring anonymity. Voters receive a receipt after submission, 
                  preventing multiple votes in the same election.
                `,
              },
              {
                step: "03",
                title: "Results",
                description: `
                  At the end of the voting period, results are instantly tabulated 
                  and reviewed in the Election Manager. Detailed voting activity 
                  reports are available before publishing. Once published, results 
                  are displayed publicly, and anyone can verify the results via a 
                  downloadable file containing the votes and corresponding receipt codes.
                `,
              },
            ].map(({ step, title, description }, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-lg shadow-md text-center flex flex-col items-center"
              >
                <h2 className="text-6xl font-bold text-button-c">{step}</h2>
                <h3 className="mt-4 text-xl font-bold text-gray-800">{title}</h3>
                <p className="mt-2 text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 bg-custom-cyan">
  <div className="container mx-auto text-center">
    <h1 className="text-3xl md:text-5xl font-bold">Awards</h1>
    <p className="mt-4 text-lg text-gray-700">
      Awards Schemes and Categories
    </p>
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          Icon: MdOutlineEventNote,
          title: "Institution Voting",
          description:
            "Institutions shape society—let their voice be heard. Strong institutions, stronger communities—one vote at a time.",
        },
        {
          Icon: IoPersonCircleOutline,
          title: "Student Voting",
          description:
            "Empowering students to participate in decision-making, fostering leadership, and building communities.",
        },
        {
          Icon: TbCategory,
          title: "Category Excellence",
          description:
            "Highlighting the best across various categories to celebrate achievements and excellence.",
        },
        {
          Icon: LuMapPinned,
          title: "Regional Recognition",
          description:
            "Celebrating outstanding contributions in different regions and communities.",
        },
        {
          Icon: RiGraduationCapFill,
          title: "Academic Awards",
          description:
            "Recognizing educational achievements and excellence within academic institutions.",
        },
        {
          Icon: AiFillSafetyCertificate,
          title: "Integrity Awards",
          description:
            "Honoring individuals and organizations that uphold the highest standards of integrity.",
        },
      ].map(({ Icon, title, description }, idx) => (
        <div
          key={idx}
          className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
        >
          <div className="bg-blue-500 p-4 rounded-full">
            <Icon className="w-12 h-12 text-white" />
          </div>
          <h2 className="mt-4 text-xl font-bold text-gray-800">{title}</h2>
          <p className="mt-2 text-gray-600 text-center">{description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default HomePage;
