import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/Navbar/Navbar";
import TextChange from "../../component/TextChange/TextChange";
import AboutMe from "../AboutMe/AboutMe";
import Contact from "../Contact/Contact";
import Project from "../Project/Project";
import Skill from "../Skill/Skill";
import profileAIImage from "../../asset/profileAI.jpg"
import { motion } from "motion/react"
import { Link } from "react-router-dom"


const Home = () => {
	return (
		<div>
			<header>
				<Navbar />
			</header>

			<main className="mx-20" id="home">
				{/* Home Page */}
				<div className="mt-4 w-full flex flex-wrap justify-between items-start p-20" id="home">
					<motion.div
						whileInView={{ opacity: 1, x: 0 }}
						initial={{ opacity: 0, x: -100 }}
						transition={{ duration: 0.7 }}
						className="w-full lg:w-1/2 lg:p-8"
					>
						<h1 className="text-4xl md:text-6xl font-bold flex leading-normal tracking-wide">
							<TextChange />
						</h1>
						<p className="text-xl md:text-3xl tracking-tight font-bold mt-2 md:mt-4 bg-gradient-to-br from-purple-600 to-purple-300 hover:bg-gradient-to-bl inline-block text-transparent bg-clip-text">Hi, I'm Mahendra Singh Jhala</p>
						<p className="w-3/4 md:w-7/12 text-sm md:text-md tracking-wider mt-2 mb-6 font-semibold">
							I'm a Full Stack Developer who loves learning new technologies and building cool projects. Check out my work, and contact me if you like what you see
						</p>
						<Link
							to="https://drive.google.com/file/d/1trtvv3GhZ6PrwO36etTbnhE5m5ejB_E7/view?usp=sharing"  target="_blank"
							className="bg-gradient-to-br from-purple-500 to-purple-900 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-4 py-2 cursor-pointer"
						>
							Resume
						</Link>
					</motion.div>
					<motion.div
						whileInView={{ opacity: 1, x: 0 }}
						initial={{ opacity: 0, x: 100 }}
						transition={{ duration: 0.7 }}
						className="w-full lg:w-1/2 lg:p-8"
					>
						<div className="flex items-center justify-center mt-6 md:m-0">
							<img
								className="w-full md:w-2/3 rounded-lg border-2 border-purple-600"
								src={profileAIImage}
								alt="profile"
							/>
						</div>
					</motion.div>
				</div>

				{/* About Me page */}
				<AboutMe />

				{/* Skill page*/}
				<Skill />

				{/* Project page */}
				<Project />

				{/* Contact Page */}
				<Contact />
			</main>

			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default Home;
