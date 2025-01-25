import profileImage from "../../asset/profileAI.jpg"
import { RiReactjsLine } from "react-icons/ri";
import { RiNodejsLine } from "react-icons/ri";
import { FaJsSquare } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa"
import { IoLogoCss3 } from "react-icons/io";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { motion } from "motion/react"


const AboutMe = () => {

	const iconVariants = (duration) => ({
		initial: { y: -5 },
		animate: {
			y: [5, -5],
			transition: {
				duration: duration,
				esae: "linear",
				repeat: Infinity,
				repeatType: "reverse"
			}
		}
	})
	return (
		<div className="p-10" id="about">
			<h1 className="my-16 text-center text-4xl font-semibold">
				About
				<span className="text-neutral-500"> Me </span>
			</h1>
			<div className="flex flex-wrap">
				<motion.div
					whileInView={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, x: -100 }}
					transition={{ duration: 0.7 }}
					className="w-full lg:w-1/4 lg:p-8"
				>
					<div className="flex items-center justify-center">
						<img
							className="w-3/5 md:w-full rounded-lg border-2 border-purple-600"
							src={profileImage}
							alt="profile"
						/>
					</div>
				</motion.div>
				<motion.div
					whileInView={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, x: 100 }}
					transition={{ duration: 0.7 }}
					className="w-full lg:w-3/4 lg:p-8"
				>
					<div className="flex flex-col items-center justify-start my-2 space-y-6">
						<p className="max-w-xl">
							<span className="text-xl font-bold"> Hello! I'm Mahendra Singh Jhala </span>, a passionate Full-Stack Developer excited to create dynamic and responsive web applications. I have a strong foundation in both front-end and back-end development and am committed to delivering seamless and user-friendly experiences. I focus on writing clean, maintainable code while ensuring performance and scalability.
						</p>
						<p className="max-w-xl">
							As a fresher, I've worked on projects like <span className="font-bold"> Online Event Management </span>,<span className="font-bold"> Chat Application </span>, <span className="font-bold"> E-Commerce </span>, <span className="font-bold"> Authentication with role base </span> which helped me sharpen my skills. You can explore my portfolio for more details.
						</p>
						<p className="max-w-xl">
							Let’s connect! I'm open to new opportunities and excited to collaborate on tech-related projects.
						</p>
					</div>
					<div>
						<h1 className="my-10 text-center text-2xl font-semibold uppercase"> Technologies </h1>
						<div className="flex flex-wrap items-center justify-center gap-4 mt-10">
							<motion.div
								variants={iconVariants(1)}
								initial="initial"
								animate="animate"
								className="rounded-xl border-4 border-purple-600 p-2"
							>
								<FaHtml5 className="text-5xl text-orange-500" />
							</motion.div>
							<motion.div
								variants={iconVariants(2)}
								initial="initial"
								animate="animate"
								className="rounded-xl border-4 border-purple-600 p-2"
							>
								<IoLogoCss3 className="text-5xl text-blue-500" />
							</motion.div>
							<motion.div
								variants={iconVariants(1)}
								initial="initial"
								animate="animate"
								className="rounded-xl border-4 border-purple-600 p-2"
							>
								<FaJsSquare className="text-5xl text-yellow-500" />
							</motion.div>
							<motion.div
								variants={iconVariants(2)}
								initial="initial"
								animate="animate"
								className="rounded-xl border-4 border-purple-600 p-2"
							>
								<RiReactjsLine className="text-5xl text-cyan-500" />
							</motion.div>
							<motion.div
								variants={iconVariants(1)}
								initial="initial"
								animate="animate"
								className="rounded-xl border-4 border-purple-600 p-2"
							>
								<RiNodejsLine className="text-5xl text-green-500" />
							</motion.div>
							<motion.div
								variants={iconVariants(2)}
								initial="initial"
								animate="animate"
								className="rounded-xl border-4 border-purple-600 p-2"
							>
								<SiExpress className="text-5xl text-gray-500" />
							</motion.div>
							<motion.div
								variants={iconVariants(1)}
								initial="initial"
								animate="animate"
								className="rounded-xl border-4 border-purple-600 p-2"
							>
								<SiMongodb className="text-5xl text-green-500" />
							</motion.div>
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	)
}

export default AboutMe
