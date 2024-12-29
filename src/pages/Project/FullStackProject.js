import { Link } from "react-router-dom"
import EventImage from "../../asset/Event.png"
import ChatImage from "../../asset/chat.png"
import { motion } from "motion/react"

const FullStackProject = () => {
    return (
        <div className="p-10">
            {/* Project 1 */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 items-center">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.7 }}
                    className="w-full p-8"
                >
                    <div className="border-2 border-purple-600 p-8 rounded-2xl">
                        <Link>
                            <img className="transition ease-out duration-300 hover:scale-105 rounded-xl cursor-pointer" src={EventImage} alt="eventImage" />
                        </Link>
                    </div>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.7 }}
                    className="w-full"
                >
                    <div>
                        <ul className="flex flex-wrap items-center gap-2">
                            <li className="uppercase text-xs py-2 px-4 border font-bold tracking-widest rounded-full">Html</li>
                            <li className="uppercase text-xs py-2 px-4 border font-bold tracking-widest rounded-full">Css (Tailwind)</li>
                            <li className="uppercase text-xs py-2 px-4 border font-bold tracking-widest rounded-full">JavaScript</li>
                            <li className="uppercase text-xs py-2 px-4 border font-bold tracking-widest rounded-full">React</li>
                            <li className="uppercase text-xs py-2 px-4 border font-bold tracking-widest rounded-full">NodeJS</li>
                            <li className="uppercase text-xs py-2 px-4 border font-bold tracking-widest rounded-full">Expressjs</li>
                            <li className="uppercase text-xs py-2 px-4 border font-bold tracking-widest rounded-full">jsonwebToken (jwt)</li>
                            <li className="uppercase text-xs py-2 px-4 border font-bold tracking-widest rounded-full">MongoDB</li>
                            <li className="uppercase text-xs py-2 px-4 border font-bold tracking-widest rounded-full">Mongoose</li>
                            <li className="uppercase text-xs py-2 px-4 border font-bold tracking-widest rounded-full">RojPayPaymentMethod</li>
                        </ul>
                    </div>
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div>
                        <ul className="flex flex-wrap items-center gap-2">
                            <Link>
                                <li className="bg-gradient-to-br from-purple-500 to-purple-900 hover:bg-gradient-to-bl duration-300 hover:scale-105 font-medium rounded-lg text-sm px-4 py-2 mt-4 tracking-wide"> View Source Code </li>
                            </Link>
                            <Link>
                                <li className="bg-gradient-to-br from-purple-500 to-purple-900 hover:bg-gradient-to-bl duration-300 hover:scale-105 font-medium rounded-lg text-sm px-4 py-2 mt-4 tracking-wide"> Demo </li>
                            </Link>
                        </ul>
                    </div>
                </motion.div>
            </div>

            {/* Project 2 */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 items-center">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.7 }}
                    className="w-full">
                    <div>
                        <ul className="flex flex-wrap items-center gap-2">
                            <li className="uppercase text-xs py-2 px-4 border font-bold tracking-widest rounded-full">Html</li>
                            <li className="uppercase text-xs py-2 px-4 border font-bold tracking-widest rounded-full">Css (Tailwind)</li>
                            <li className="uppercase text-xs py-2 px-4 border font-bold tracking-widest rounded-full">JavaScript</li>
                            <li className="uppercase text-xs py-2 px-4 border font-bold tracking-widest rounded-full">React</li>
                            <li className="uppercase text-xs py-2 px-4 border font-bold tracking-widest rounded-full">NodeJS</li>
                            <li className="uppercase text-xs py-2 px-4 border font-bold tracking-widest rounded-full">Expressjs</li>
                            <li className="uppercase text-xs py-2 px-4 border font-bold tracking-widest rounded-full">jsonwebToken (jwt)</li>
                            <li className="uppercase text-xs py-2 px-4 border font-bold tracking-widest rounded-full">MongoDB</li>
                            <li className="uppercase text-xs py-2 px-4 border font-bold tracking-widest rounded-full">Mongoose</li>
                            <li className="uppercase text-xs py-2 px-4 border font-bold tracking-widest rounded-full">RojPayPaymentMethod</li>
                        </ul>
                    </div>
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div>
                        <ul className="flex flex-wrap items-center justify-end pe-14 gap-2">
                            <Link>
                                <li className="bg-gradient-to-br from-purple-500 to-purple-900 hover:bg-gradient-to-bl duration-300 hover:scale-105 font-medium rounded-lg text-sm px-4 py-2 mt-4 tracking-wide"> View Source Code </li>
                            </Link>
                            <Link>
                                <li className="bg-gradient-to-br from-purple-500 to-purple-900 hover:bg-gradient-to-bl duration-300 hover:scale-105 font-medium rounded-lg text-sm px-4 py-2 mt-4 tracking-wide"> Demo </li>
                            </Link>
                        </ul>
                    </div>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.7 }}
                    className="w-full p-8">
                    <div className="border-2 border-purple-600 p-8 rounded-2xl">
                        <Link>
                            <img className="transition ease-out duration-300 hover:scale-105 rounded-xl cursor-pointer" src={ChatImage} alt="eventImage" />
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Project 3 */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 items-center">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.7 }}
                    className="w-full p-8"
                >
                    <div className="border-2 border-purple-600 p-8 rounded-2xl">
                        <Link>
                            <img className="transition ease-out duration-300 hover:scale-105 rounded-xl cursor-pointer" src={EventImage} alt="eventImage" />
                        </Link>
                    </div>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.7 }}
                    className="w-full"
                >
                    <div>
                        <ul className="flex flex-wrap items-center gap-2">
                            <li className="uppercase text-xs py-2 px-4 border font-bold tracking-widest rounded-full">Html</li>
                            <li className="uppercase text-xs py-2 px-4 border font-bold tracking-widest rounded-full">Css (Tailwind)</li>
                            <li className="uppercase text-xs py-2 px-4 border font-bold tracking-widest rounded-full">JavaScript</li>
                            <li className="uppercase text-xs py-2 px-4 border font-bold tracking-widest rounded-full">React</li>
                            <li className="uppercase text-xs py-2 px-4 border font-bold tracking-widest rounded-full">NodeJS</li>
                            <li className="uppercase text-xs py-2 px-4 border font-bold tracking-widest rounded-full">Expressjs</li>
                            <li className="uppercase text-xs py-2 px-4 border font-bold tracking-widest rounded-full">jsonwebToken (jwt)</li>
                            <li className="uppercase text-xs py-2 px-4 border font-bold tracking-widest rounded-full">MongoDB</li>
                            <li className="uppercase text-xs py-2 px-4 border font-bold tracking-widest rounded-full">Mongoose</li>
                            <li className="uppercase text-xs py-2 px-4 border font-bold tracking-widest rounded-full">RojPayPaymentMethod</li>
                        </ul>
                    </div>
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div>
                        <ul className="flex flex-wrap items-center gap-2">
                            <Link>
                                <li className="bg-gradient-to-br from-purple-500 to-purple-900 hover:bg-gradient-to-bl duration-300 hover:scale-105 font-medium rounded-lg text-sm px-4 py-2 mt-4 tracking-wide"> View Source Code </li>
                            </Link>
                            <Link>
                                <li className="bg-gradient-to-br from-purple-500 to-purple-900 hover:bg-gradient-to-bl duration-300 hover:scale-105 font-medium rounded-lg text-sm px-4 py-2 mt-4 tracking-wide"> Demo </li>
                            </Link>
                        </ul>
                    </div>
                </motion.div>
            </div>

            {/* Project 4 */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 items-center">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.7 }}
                    className="w-full">
                    <div>
                        <ul className="flex flex-wrap items-center gap-2">
                            <li className="uppercase text-xs py-2 px-4 border font-bold tracking-widest rounded-full">Html</li>
                            <li className="uppercase text-xs py-2 px-4 border font-bold tracking-widest rounded-full">Css (Tailwind)</li>
                            <li className="uppercase text-xs py-2 px-4 border font-bold tracking-widest rounded-full">JavaScript</li>
                            <li className="uppercase text-xs py-2 px-4 border font-bold tracking-widest rounded-full">React</li>
                            <li className="uppercase text-xs py-2 px-4 border font-bold tracking-widest rounded-full">NodeJS</li>
                            <li className="uppercase text-xs py-2 px-4 border font-bold tracking-widest rounded-full">Expressjs</li>
                            <li className="uppercase text-xs py-2 px-4 border font-bold tracking-widest rounded-full">jsonwebToken (jwt)</li>
                            <li className="uppercase text-xs py-2 px-4 border font-bold tracking-widest rounded-full">MongoDB</li>
                            <li className="uppercase text-xs py-2 px-4 border font-bold tracking-widest rounded-full">Mongoose</li>
                            <li className="uppercase text-xs py-2 px-4 border font-bold tracking-widest rounded-full">RojPayPaymentMethod</li>
                        </ul>
                    </div>
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div>
                        <ul className="flex flex-wrap items-center justify-end pe-14 gap-2">
                            <Link>
                                <li className="bg-gradient-to-br from-purple-500 to-purple-900 hover:bg-gradient-to-bl duration-300 hover:scale-105 font-medium rounded-lg text-sm px-4 py-2 mt-4 tracking-wide"> View Source Code </li>
                            </Link>
                            <Link>
                                <li className="bg-gradient-to-br from-purple-500 to-purple-900 hover:bg-gradient-to-bl duration-300 hover:scale-105 font-medium rounded-lg text-sm px-4 py-2 mt-4 tracking-wide"> Demo </li>
                            </Link>
                        </ul>
                    </div>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.7 }}
                    className="w-full p-8">
                    <div className="border-2 border-purple-600 p-8 rounded-2xl">
                        <Link>
                            <img className="transition ease-out duration-300 hover:scale-105 rounded-xl cursor-pointer" src={ChatImage} alt="eventImage" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default FullStackProject
