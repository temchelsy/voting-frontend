import React from 'react';
import { Link } from 'react-router-dom';
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
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 min-h-screen flex items-center py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Welcome to <span className="text-yellow-400">Electrify</span>
              </h1>
              <h2 className="text-2xl md:text-3xl mb-8">
                Your Digital Democracy Platform
              </h2>
              <p className="text-lg md:text-xl mb-8 text-gray-100">
                Transform your voting experience with our secure, efficient, and user-friendly platform. Perfect for schools, organizations, and communities looking to make their voice heard.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/register">
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-8 py-4 rounded-lg text-lg transition-colors duration-300">
                    Start Your Election
                  </button>
                </Link>
                <Link to="/learn-more">
                  <button className="border-2 border-white hover:bg-white hover:text-blue-800 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors duration-300">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="grid grid-cols-2 gap-4 max-w-md">
                {[
                  { number: "1000+", label: "Elections Hosted" },
                  { number: "50k+", label: "Active Voters" },
                  { number: "99.9%", label: "Success Rate" },
                  { number: "24/7", label: "Support" }
                ].map((stat, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-lg p-6 rounded-lg text-center">
                    <div className="text-yellow-400 text-3xl font-bold">{stat.number}</div>
                    <div className="text-white text-sm mt-2">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Platform Features</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { Icon: MdOutlineEventNote, label: "Unlimited Events" },
              { Icon: IoPersonCircleOutline, label: "User Management" },
              { Icon: TbCategory, label: "Custom Categories" },
              { Icon: LuMapPinned, label: "Global Access" },
            ].map(({ Icon, label }, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center p-6 bg-blue-700 rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                <div className="bg-yellow-400 p-4 rounded-full">
                  <Icon className="w-8 h-8 text-blue-800" />
                </div>
                <h3 className="mt-4 text-lg">{label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-800 mb-8">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Set Up Your Election",
                description: "Create your election in minutes with our intuitive setup process. Define your parameters, add candidates, and set voting rules.",
              },
              {
                step: "02",
                title: "Invite Voters",
                description: "Securely invite voters via email or custom access codes. Our system ensures one vote per eligible participant.",
              },
              {
                step: "03",
                title: "Get Results",
                description: "Access real-time results and detailed analytics. Export comprehensive reports for complete transparency.",
              },
            ].map(({ step, title, description }, idx) => (
              <div
                key={idx}
                className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-yellow-400 text-4xl font-bold mb-4">{step}</div>
                <h3 className="text-xl font-bold text-blue-800 mb-4">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Categories Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-800 mb-8">
            Award Categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                Icon: MdOutlineEventNote,
                title: "Institution Awards",
                description: "Recognize excellence in institutional leadership and innovation.",
              },
              {
                Icon: IoPersonCircleOutline,
                title: "Student Achievement",
                description: "Celebrate outstanding academic and extracurricular accomplishments.",
              },
              {
                Icon: RiGraduationCapFill,
                title: "Academic Excellence",
                description: "Honor exceptional educational achievements and contributions.",
              },
              {
                Icon: TbCategory,
                title: "Special Recognition",
                description: "Acknowledge unique contributions and special achievements.",
              },
              {
                Icon: LuMapPinned,
                title: "Community Impact",
                description: "Celebrate initiatives that make a difference in communities.",
              },
              {
                Icon: AiFillSafetyCertificate,
                title: "Leadership Awards",
                description: "Recognize outstanding leadership and management excellence.",
              },
            ].map(({ Icon, title, description }, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Election?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of organizations that trust VoteHub for their voting needs. Get started today and experience the future of digital democracy.
          </p>
          <Link to="/register">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-8 py-4 rounded-lg text-lg transition-colors duration-300">
              Create Your First Election
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;