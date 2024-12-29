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
					<div className="flex items-center justify-center my-2">
						<p className="max-w-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
					</div>
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
				</motion.div>
			</div>
		</div>
	)
}

export default AboutMe
