import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-scroll'


const Navbar = () => {
    const [isOpen, setisOpen] = useState(false);

    const toggleMenu = () => {
        setisOpen(!isOpen);
    };

    return (
        <nav>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center space-x-3">
                    <img src="https://avatar.iran.liara.run/public/boy" className="h-10" alt="UserPic" />
                    <span className="text-xl font-bold tracking-wide"> Mahendra Singh</span>
                </Link>
                <div className="flex md:order-2 space-x-3">
                    <Link
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        className="hidden md:block bg-gradient-to-br from-purple-500 to-purple-900 hover:bg-gradient-to-bl font-medium rounded-full text-sm px-4 py-2 cursor-pointer"
                    >
                        Connect With Me
                    </Link>
                    <button
                        type="button"
                        onClick={toggleMenu}
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100"
                    >
                        <FaBars className="w-5 h-5" />
                    </button>
                </div>

                <div
                    className={`items-center justify-between w-full md:flex md:w-auto md:order-1 transition-all duration-300 ${isOpen ? 'block' : 'hidden'} md:block`}
                    id="navbar"
                >
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 md:flex-row md:mt-0 md:border-0">
                        <li>
                            <Link
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}
                                className="text-md transition-all duration-300 md:p-0 block py-2 px-3 hover:text-orange-300 hover:border-b-2 hover:border-orange-500"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}
                                className="text-md transition-all duration-300 md:p-0 block py-2 px-3 hover:text-orange-300 hover:border-b-2 hover:border-orange-500"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="skill"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}
                                className="text-md transition-all duration-300 md:p-0 block py-2 px-3 hover:text-orange-300 hover:border-b-2 hover:border-orange-500"
                            >
                                Skill

                            </Link>
                        </li>
                        <li>
                            <Link
                                to="project"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}
                                className="text-md transition-all duration-300 md:p-0 block py-2 px-3 hover:text-orange-300 hover:border-b-2 hover:border-orange-500"
                            >
                                Project
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}
                                className="text-md transition-all duration-300 md:p-0 block py-2 px-3 hover:text-orange-300 hover:border-b-2 hover:border-orange-500"
                            >
                                Certificate
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}
                                className="text-md transition-all duration-300 md:p-0 block py-2 px-3 hover:text-orange-300 hover:border-b-2 hover:border-orange-500"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar