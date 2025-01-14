import React from 'react';
import homePageImage from "/src/assets/images/pexels-steve-29506613.jpg";
import { MdOutlineEventNote } from "react-icons/md";
import { IoPersonCircleOutline } from "react-icons/io5";
import { TbCategory } from "react-icons/tb";
import { LuMapPinned } from "react-icons/lu";
import voteImage from "/src/assets/images/Screen Shot 2024-12-20 at 10.05.41 PM-fotor-202412202369.png"
import { RiGraduationCapFill } from "react-icons/ri";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { MdOutlineAccessible } from "react-icons/md";
import { BiGame, BiSupport } from "react-icons/bi";
import image from "/src/assets/images/pexels-max-fischer-5211432.jpg"
import teacherImage from "/src/assets/images/pexels-nappy-935943.jpg"
import instImage from "/src/assets/images/pexels-cruz-in-portugal-20843082.jpg"
import { BsBoxArrowUpRight } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer';



// Added contestants array



const HomePage = () => {
    return (
        <>
            <section id="homepage" className="relative h-[40rem] text-white 3xl:h-[70rem] 2xl:h-[47rem] xl:h-[45rem]">
                <img
                    src={homePageImage}
                    alt="bgimage"
                    className="absolute w-full h-full object-cover object-center filter brightness-50"
                />
                <div className="absolute w-full h-full bg-[#083143] opacity-75"></div>
                <div className="relative z-10 flex items-center justify-center gap-8 flex-col 3xl:top-80 top-52 text-white">
                    <h1 className="text-1xl sm:text-5xl lg:text-6xl xl:text-7xl 3xl:text-9xl 2xl:text-8xl text-white">Empowering <span className='text-button-c'>The </span>Future</h1>
                    <p className="text-sm text-center text-gray-300 sm:text-1xl xl:text-1xl 3xl:text-3xl 2xl:text-2xl">
                        "Create an election for your school, club, or organization
                         in just seconds. With our intuitive platform, setting up a 
                         secure and efficient election is easier than ever. Your voters can participate seamlessly from any location, using any device, ensuring maximum convenience and accessibility. 
                         Whether you're managing a student council election, an organizational vote, or a community decision, our app empowers you to engage everyone effectively. Say goodbye to complicated processes and hello to streamlined voting at your fingertips. 
                         Start building your election today and experience a smarter, faster, and more inclusive way to make decisions."
                    </p>
                    <Link to="/register" >                     <button className="bg-button-c h-12 w-72 text-2xl rounded-md 3xl:w-[40rem]  3xl:h-20  3xl:text-5xl">Get Started</button>
                    </Link>
                </div>
            </section>

            <section id="about" className="flex items-center justify-center bg-custom-blue h-40 w-full  3xl:h-96">
                <div className="flex items-center gap-2 justify-center flex-col bg-custom-first w-40 h-40 sm:w-80  3xl:w-[35rem]  3xl:h-96 2xl:w-[28rem]">
                    <div className="flex items-center justify-center bg-gray-400 w-16 h-16 3xl:w-[16rem]  3xl:h-64 rounded-full">
                        <MdOutlineEventNote className='h-12 w-12 3xl:w-[14rem]  3xl:h-60' />
                    </div>
                    <h3 className='text-white text-xs 3xl:text-4xl'>
                        100 Events
                    </h3>
                </div>
                <div className="flex items-center gap-2 justify-center flex-col bg-custom-second w-96 h-40 3xl:w-[35rem]  3xl:h-96 2xl:w-[28rem]">
                    <div className="flex items-center justify-center bg-button-c w-16 h-16 3xl:w-[16rem]  3xl:h-64 rounded-full">
                        <IoPersonCircleOutline className='h-12 w-12 3xl:w-[14rem]  3xl:h-60' />
                    </div>
                    <h3 className='text-white text-xs 3xl:text-4xl'>
                        1000 voters
                    </h3>
                </div>
                <div className="flex items-center gap-2 justify-center flex-col bg-custom-third w-96 h-40 3xl:w-[36rem]  3xl:h-96 2xl:w-[27rem]">
                    <div className="flex items-center justify-center bg-blue-300 w-16 h-16 3xl:w-[16rem]  3xl:h-64 rounded-full">
                        <TbCategory className='h-12 w-12 3xl:w-[14rem]  3xl:h-60' />
                    </div>
                    <h3 className='text-white text-xs 3xl:text-4xl'>
                        100 Categories
                    </h3>
                </div>
                <div className="flex items-center justify-center gap-2 flex-col bg-custom-fourth w-96 h-40 3xl:w-[36rem]  3xl:h-96 2xl:w-[27rem]">
                    <div className="flex items-center justify-center bg-button-c w-16 h-16 3xl:w-[16rem]  3xl:h-64 rounded-full">
                        <LuMapPinned className='h-12 w-12 3xl:w-[14rem]  3xl:h-60' />
                    </div>
                    <h3 className='text-white text-xs 3xl:text-4xl'>
                        1,200 locations
                    </h3>
                </div>
            </section>

            <section id='contacts'>
                <section id='about' className="bg-white w-full absolute lg:h-[20rem] 3xl:h-[35rem]">
                    <div className="w-64 h-64 lg:w-80 lg:h-96 3xl:h-[45rem]   bg-button-c rounded-full border-5 border-white relative top-40 lg:top-71 xl:top-96 3xl:top-[45rem] right-14 lg:right-36 2xl:w-[30rem] 2xl:h-[27rem] 2xl:right-80 ">
                        <div className="w-44 h-44 lg:w-52 lg:h-64 3xl:h-[30rem] 2xl:w-80 2xl:h-80  bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                    </div>

                    <div className='relative bottom-56 lg:bottom-80 lg:flex lg:gap-3 lg:m-2 2xl:ml-30 3xl:gap-ml-44'>
                        <img src={voteImage} alt="vimage" className='w-74 h-50  top-1 lg:w-[30rem]  xl:h-[38rem] xl:w-[40rem] lg:h-[27rem] 3xl:h-[55rem] 3xl:w-[160rem] 2xl:h-[38rem] 2xl:w-[90rem] rounded-tl-3xl rounded-bl-3xl rounded-br-3xl xl:ml-12 3xl:ml-0 2xl:ml-16' />
                        <div className='flex items-start justify-start flex-col gap-2 lg:mt-9 3xl:mr-40  '>
                            <h1 className='text-button-c text-1xl lg:text-2xl 2xl:text-4xl 3xl:text-6xl xl:text-4xl'>About us</h1>

                            <h3 className='text-custom-blue text-2xl lg:text-2xl  xl:text-4xl 2xl:text-6xl 3xl:text-7xl'>   Welcome to VoteHub, a platform designed to empower individuals and organizations to participate in the democratic process.</h3>
                            <p className='text-sm 2xl:text-xl 3xl:text-4xl xl:text-2xl font-light'>  Our mission is to  provide a modern, reliable, and accessible solution  for voting, ensuring  that every  voice is heard,  every vote is counted, and every election is fair.

                                Whether you are organizing a local election, conducting a poll, or managing a corporate decision -making process, VoteHub offers a seamless experience for both administrators and voters. Our platform uses  authentication protocols to ensure the security, privacy, and integrity of every vote.
                            </p>
                            <div className='flex items-center justify-start flex-wrap gap-3 text-white'>
                                <p className='bg-blue-950 w-42 h-8 text-center rounded-md flex items-center justify-center lg:w-44  xl:w-64  xl:h-12 3xl:w-[16rem]  3xl:h-20 3xl:text-2xl 2xl:w-96'>Institutional Awards</p>
                                <p className='bg-button-c w-36 h-8 text-center rounded-md flex items-center justify-center lg:w-44  xl:w-64 xl:h-12 3xl:w-[16rem]  3xl:h-20 3xl:text-2xl 2xl:w-96'>Students Awards</p>
                                <p className='bg-yellow-500 w-36 h-8 text-center rounded-md flex items-center justify-center lg:w-44  xl:w-64 xl:h-12 3xl:w-[16rem]  3xl:h-20 3xl:text-2xl 2xl:w-96'>Teachers Awards</p>
                                <p className='bg-custom-blue w-36 h-8 text-center rounded-md flex items-center justify-center lg:w-44  xl:w-64 xl:h-12 3xl:w-[16rem]  3xl:h-20 3xl:text-2xl 2xl:w-96'>Special Awards</p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            <section className='2xl:h-[84rem] 3xl:h-[134rem] xl:h-[140rem] flex items-center justify-center flex-col mt-[62rem] lg:mt-[39rem] xl:mt-[50rem] 2xl:mt-[55rem] 3xl:mt-[90rem] bg-custom-cyan'>
                <div className='flex items-center justify-center flex-col'>
                    <div className='text-center mb-12'>
                        <h1 className='text-3xl font-bold mb-2 md:text-5xl 3xl:text-9xl'>Awards</h1>
                        <h2 className='text-xl md:text-2xl font-normal 3xl:text-4xl'>Awards Schemes and Categories</h2>
                    </div>
                    <div className='flex flex-wrap md:gap-40 md:text-center gap-6 xl:gap-28 px-4  mx-auto items-center justify-center 2xl:gap-7 3xl:gap-20'>
                        <div className='w-full shadow-button-c shadow-md bg-white h-96 gap-14 rounded-md  text-custom-blue md:w-72 lg:w-96 xl:w-[38rem] xl:h-[35rem] 2xl:w-[35rem] 3xl:w-[45rem] 3xl:h-[49rem]'>
                            <img src={voteImage} alt="vtimg" className='  w-96 h-40 object-cover rounded-lg xl:w-[35rem] xl:h-[16rem] 3xl:w-[48rem] 3xl:h-[25rem]' />
                            <h1 className='text-2xl 2xl:text-5xl text-start m-5 xl:text-4xl 3xl:text-7xl'>Students Voting</h1>
                            <p className='text-start 2xl:text-2xl 2xl:m-5 font-light m-5 xl:text-2xl 3xl:text-4xl'>Your voice, your future—make it count,
                                Students decide the change they wish to see.
                                Empowering students, one vote at a time,
                                The power of youth, the power of choice.</p>
                        </div>
                        <div className='w-full shadow-md bg-button-c h-96 gap-7 rounded-md  text-custom-blue lg:w-96 md:w-72 xl:w-[38rem] xl:h-[35rem] 2xl:w-[35rem] 3xl:w-[45rem] 3xl:h-[49rem]'>
                            <BsBoxArrowUpRight className='w-40 h-40 flex items-center justify-center ml-9 mt-24' />

                            <h1 className='text-2xl 2xl:text-5xl text-start m-5 xl:text-4xl 3xl:text-7xl'>Teachers Voting</h1>
                            <p className='text-start 2xl:text-2xl 2xl:m-5 font-light m-5 xl:text-2xl 3xl:text-4xl'>
                                Teachers shape minds, and votes shape change,
                                A vote for teachers is a vote for education.
                                In the classroom and at the ballot box, teachers lead.
                                Every vote from a teacher is a vote for a better tomorrow. </p>
                        </div>
                        <div className='w-full shadow-button-c shadow-md bg-white h-96 gap-7 rounded-md  text-custom-blue lg:w-96 md:w-72 xl:w-[38rem] xl:h-[35rem] 2xl:w-[35rem] 3xl:w-[45rem] 3xl:h-[49rem]'>
                            <img src={voteImage} alt="vtimg" className='w-full h-40 object-cover rounded-lg xl:w-[35rem] xl:h-[16rem] 3xl:w-[48rem] 3xl:h-[25rem]' />
                            <h1 className='text-2xl 2xl:text-5xl text-start m-5 xl:text-4xl 3xl:text-7xl'>special Voting</h1>
                            <p className='text-start 2xl:text-2xl 2xl:m-5 font-light m-5 xl:text-2xl 3xl:text-4xl'>
                                Every voice matters, especially the special ones.
                                "Honoring diversity through every vote."
                                Special votes, special voices, special impact.
                                Inclusion begins with a vote.
                            </p>
                        </div>
                        <div className='w-full shadow-button-c shadow-md bg-white h-96 gap-7 rounded-md text-custom-blue lg:w-96 md:w-72 xl:w-[38rem] xl:h-[35rem] 2xl:w-[35rem] 3xl:w-[45rem] 3xl:h-[49rem]'>
                            <img src={voteImage} alt="vtimg" className='w-full h-40 object-cover rounded-lg xl:w-[35rem] xl:h-[16rem] 3xl:w-[48rem] 3xl:h-[25rem]' />
                            <h1 className='text-2xl 2xl:text-5xl text-start m-5 xl:text-4xl 3xl:text-7xl'>instuitions Voting</h1>
                            <p className='text-start 2xl:text-2xl 2xl:m-5 font-light m-5 xl:text-2xl 3xl:text-4xl'>
                                Institutions shape society—let their voice be heard.
                                Strong institutions, stronger communities—one vote at a time.
                                "When institutions speak, the future listens."
                                A collective vote for collective progress.
                            </p>

                        </div>

                        <div className='w-full shadow-button-c shadow-md bg-white h-96 gap-7 rounded-md text-custom-blue lg:w-96 md:w-72 xl:w-[38rem] xl:h-[35rem] 2xl:w-[35rem] 3xl:w-[45rem] 3xl:h-[49rem]'>
                            <img src={voteImage} alt="vtimg" className='w-full h-40 object-cover rounded-lg xl:w-[35rem] xl:h-[16rem] 3xl:w-[48rem] 3xl:h-[25rem]' />
                            <h1 className='text-2xl 2xl:text-5xl text-start m-5 xl:text-4xl 3xl:text-7xl'>instuitions Voting</h1>
                            <p className='text-start 2xl:text-2xl 2xl:m-5 font-light m-5 xl:text-2xl 3xl:text-4xl'>
                                Institutions shape society—let their voice be heard.
                                Strong institutions, stronger communities—one vote at a time.
                                "When institutions speak, the future listens."
                                A collective vote for collective progress.
                            </p>

                        </div>

                        <div className='w-full shadow-button-c shadow-md bg-white h-96 gap-7 rounded-md text-custom-blue lg:w-96 md:w-72 xl:w-[38rem] xl:h-[35rem] 2xl:w-[35rem] 3xl:w-[45rem] 3xl:h-[49rem]'>
                            <img src={voteImage} alt="vtimg" className='w-full h-40 object-cover rounded-lg xl:w-[35rem] xl:h-[16rem] 3xl:w-[48rem] 3xl:h-[25rem]' />
                            <h1 className='text-2xl 2xl:text-5xl text-start m-5 xl:text-4xl 3xl:text-7xl'>instuitions Voting</h1>
                            <p className='text-start 2xl:text-2xl 2xl:m-5 font-light m-5 xl:text-2xl 3xl:text-4xl'>
                                Institutions shape society—let their voice be heard.
                                Strong institutions, stronger communities—one vote at a time.
                                "When institutions speak, the future listens."
                                A collective vote for collective progress.
                            </p>

                        </div>


                    </div>
                </div>
            </section>

            <section className='flex items-center justify-center flex-col h-[30rem] gap-5 2xl:h-[40rem] lg:h-[50rem] xl:h-[55rem] 3xl:h-[68rem]'>
                <h1 className='text-3xl text-custom-blue md:text-5xl lg:text-6xl 2xl:text-7xl 3xl:text-8xl'>What We Provide </h1>
                <p className='text-sm text-center text-gray-500 lg:text-xl  2xl:text-3xl 3xl:text-4xl'>
                    Scroll through are various cathegories on choose on what to vote for remember every vote counts
                </p>
                <div className='flex items-center justify-center flex-wrap gap-4 md:gap-12 lg:gap-20  xl:gap-28  2xl:gap-32 3xl:gap-28'>
                    <div className='flex items-center justify-center flex-col border-8 border-blue-950 rounded-full w-36 h-36 lg:w-44 lg:h-44 xl:w-50 xl:h-50 2xl:w-60 2xl:h-60 3xl:w-96 3xl:h-96'>
                        <RiGraduationCapFill className='w-20 h-20 lg:w-30 lg:h-30 xl:w-32 xl:h-32 3xl:w-40 3xl:h-40' />
                        <h1 className='text-sm text-center 2xl:text-2xl 3xl:text-4xl'>All inclusive</h1>
                    </div>
                    <div className='flex items-center justify-center flex-col border-8 border-blue-950 rounded-full w-36 h-36  lg:w-44 lg:h-44 xl:w-50 xl:h-50 2xl:w-60 2xl:h-60 3xl:w-96 3xl:h-96'>
                        <AiFillSafetyCertificate className='w-20 h-20 lg:w-30 lg:h-30 xl:w-32 xl:h-32 text-button-c 3xl:w-40 3xl:h-40' />
                        <h1 className='text-sm text-center 2xl:text-2xl 3xl:text-4xl'>Safe & secure</h1>
                    </div>
                    <div className='flex items-center justify-center flex-col border-8 border-blue-950 rounded-full w-36 h-36  lg:w-44 lg:h-44 xl:w-50 xl:h-50 2xl:w-60 2xl:h-60 3xl:w-96 3xl:h-96'>
                        <MdOutlineAccessible className='w-20 h-20 lg:w-30 lg:h-30 xl:w-32 xl:h-32 3xl:w-40 3xl:h-40' />
                        <h1 className='text-sm text-center 2xl:text-2xl 3xl:text-4xl'>Accessible</h1>
                    </div>
                    <div className='flex items-center justify-center flex-col border-8 border-blue-950 rounded-full w-36 h-36  lg:w-44 lg:h-44 xl:w-50 xl:h-50 2xl:w-60 2xl:h-60 3xl:w-96 3xl:h-96'>
                        <BiSupport className='w-20 h-20 lg:w-30 lg:h-30 xl:w-32 xl:h-32 3xl:w-40 3xl:h-40 ' />
                        <h1 className='text-sm text-center 2xl:text-2xl 3xl:text-4xl'>Full Support</h1>
                    </div>
                    <div className='flex items-center justify-center flex-col border-8 border-blue-950 rounded-full w-36 h-36  lg:w-44 lg:h-44 xl:w-50 xl:h-50 2xl:w-60 2xl:h-60 3xl:w-96 3xl:h-96'>
                        <BiSupport className='w-20 h-20 lg:w-30 lg:h-30 xl:w-32 xl:h-32 3xl:w-40 3xl:h-40' />
                        <h1 className='text-sm text-center 2xl:text-2xl 3xl:text-4xl'>Full Support</h1>
                    </div>
                </div>
            </section>

            <section className='flex flex-col items-center justify-center py-10 3xl:h-[68rem]'>
                <div className='text-center mb-6'>
                    <h1 className='text-4xl font-bold xl:text-6xl 3xl:text-8xl'>Blog</h1>
                    <h3 className='text-sm text-gray-600 mt-2 xl:text-xl 3xl:text-3xl'>Our Recent Articles</h3>
                    <p className='text-sm text-gray-500 mt-2 xl:text-xl 3xl:text-3xl'>Check out the latest news and updates</p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5  3xl:gap-12'>
                    <div className='relative'>
                        <img src={image} alt="style" className='w-full h-60 object-cover rounded-md shadow-md brightness-50 xl:w-[27rem] xl:h-[25rem]  3xl:w-[46rem] 3xl:h-[35rem] 2xl:w-[36rem] 2xl:h-[28rem]' />
                        <div className='absolute bottom-3 left-3 text-white'>
                            <h1 className='text-xl font-bold text-start 3xl:text-5xl 2xl:text-4xl'>Voting Students Head B. H. S</h1>
                            <p className='text-sm text-start 3xl:text-2xl font-light 2xl:text-xl'>The voting of the student head of Balingual High School, Yaoundé</p>
                        </div>
                    </div>

                    <div className='relative'>
                        <img src={teacherImage} alt="style" className='w-full h-60 object-cover rounded-md shadow-md brightness-50 xl:w-[27rem] xl:h-[25rem]  3xl:w-[46rem] 3xl:h-[35rem] 2xl:w-[36rem]  2xl:h-[28rem]' />
                        <div className='absolute bottom-3 left-3 text-white'>
                            <h1 className='text-xl font-bold text-start 3xl:text-5xl 2xl:text-4xl'>Voting H. O. D</h1>
                            <p className='text-sm text-start 3xl:text-2xl font-light 2xl:text-xl'>Vote head of department in your school that best uplifts your learning cycle. Remember, every vote counts.</p>
                        </div>
                    </div>

                    <div className='relative'>
                        <img src={instImage} alt="style" className='w-full h-60 object-cover rounded-md shadow-md brightness-50 xl:w-[27rem] xl:h-[25rem] 3xl:w-[46rem] 3xl:h-[35rem] 2xl:w-[36rem]  2xl:h-[28rem]' />
                        <div className='absolute bottom-3 left-3 text-white'>
                            <h1 className='text-xl font-bold text-start  3xl:text-5xl  2xl:text-4xl'>Voting Institutions</h1>
                            <p className='text-sm text-start 3xl:text-2xl font-light 2xl:text-xl'>Vote for that institution that uplifts the status of the community and makes every word from there count.</p>
                        </div>
                    </div>
                </div>
            </section>



            <section className='relative flex flex-col items-center justify-center'>
                <img src={homePageImage} alt="image" className='w-full h-80 object-cover object-center filter brightness-50  3xl:h-[32rem]' />
                <div className="absolute w-full h-full bg-[#0a2530] opacity-75"></div>
                <div className='absolute flex items-center justify-center flex-col text-center text-white'>
                    <h1 className='text-3xl font-bold mb-2 xl:text-5xl  3xl:text-7xl'>Do You Have Any Contest?</h1>
                    <p className='text-lg mb-4 font-thin 3xl:text-4xl'>Register with Our Virtual Voting Platform</p>
                    <a href="https://www.linkedin.com/in/ayuk-giress-077734294/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BjucQuBkgSmOUVQxCm%2B4d3Q%3D%3D">  <button className='px-4 py-2 bg-custom-blue text-white rounded-md w-36 h-10 3xl:w-[25rem] 3xl:h-16 3xl:text-3xl 2xl:w-[20rem] 2xl:text-2xl 2xl:h-14'>Contact Us</button></a>                    
                </div>
            </section>

           
           <Footer/>
        </>
    );
};

export default HomePage;