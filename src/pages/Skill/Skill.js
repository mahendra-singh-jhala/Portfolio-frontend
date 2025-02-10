import { useState } from 'react';
import { TbSettingsCode } from "react-icons/tb";
import { FaTools } from "react-icons/fa";
import { FaWhmcs } from "react-icons/fa";
import { BsWindow } from "react-icons/bs";
import { motion } from "motion/react"

const Skill = () => {
    const [selectedSkill, setSelectedSkill] = useState("frontend");

    const handleSkillClick = (skill) => {
        setSelectedSkill(skill);
    };

    return (
        <div id="skill">
            <h1 className="mt-16 text-center text-4xl font-semibold">
                Skills
            </h1>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 mt-6 p-10">
                <div className="flex flex-col gap-10 mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Frontend */}
                        <div
                            className="border-2 border-purple-600 py-8 rounded-lg relative from-purple-500 to-purple-900 hover:bg-gradient-to-bl cursor-pointer"
                            onClick={() => handleSkillClick("frontend")}
                        >
                            <h3 className="text-xl font-semibold text-center">Frontend</h3>
                            <span className="absolute top-[-12px] left-[-10px] bg-purple-800  border-2 border-purple-400 p-2 rounded-lg">
                                <BsWindow className="text-3xl" />
                            </span>
                        </div>

                        {/* Backend */}
                        <div
                            className="border-2 border-purple-600 py-8 rounded-lg relative from-purple-500 to-purple-900 hover:bg-gradient-to-bl cursor-pointer"
                            onClick={() => handleSkillClick("backend")}
                        >
                            <h3 className="text-xl font-semibold text-center">Backend</h3>
                            <span className="absolute top-[-12px] left-[-10px] bg-purple-800  border-2 border-purple-400 p-2 rounded-lg">
                                <TbSettingsCode className="text-3xl" />
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Tools */}
                        <div
                            className="border-2 border-purple-600 py-8 rounded-lg relative from-purple-500 to-purple-900 hover:bg-gradient-to-bl cursor-pointer"
                            onClick={() => handleSkillClick("tools")}
                        >
                            <h3 className="text-xl font-semibold text-center">Tools</h3>
                            <span className="absolute top-[-12px] left-[-10px] bg-purple-800  border-2 border-purple-400 p-2 rounded-lg">
                                <FaTools className="text-3xl" />
                            </span>
                        </div>

                        {/* Soft Skills */}
                        <div
                            className="border-2 border-purple-600 py-8 rounded-lg relative from-purple-500 to-purple-900 hover:bg-gradient-to-bl cursor-pointer"
                            onClick={() => handleSkillClick("softskills")}
                        >
                            <h3 className="text-xl font-semibold text-center">Soft Skills</h3>
                            <span className="absolute top-[-12px] left-[-10px] bg-purple-800  border-2 border-purple-400 p-2 rounded-lg">
                                <FaWhmcs className="text-3xl" />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    {/* Frontend Skills */}
                    {selectedSkill === "frontend" && (
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 0.7 }}
                        >
                            <h2 className="text-xl font-semibold border-2 p-4 rounded-t-lg border-purple-600 ">Frontend</h2>
                            <ul className="uppercase border-2 p-4 font-bold border-purple-600 max-h-44 overflow-y-auto custom-scrollbar rounded-b-lg">
                                <li className="py-2 from-purple-500 to-purple-900 hover:bg-gradient-to-bl cursor-pointer rounded-lg ps-4">html</li>
                                <li className="py-2 from-purple-500 to-purple-900 hover:bg-gradient-to-bl cursor-pointer rounded-lg ps-4">css</li>
                                <li className="py-2 from-purple-500 to-purple-900 hover:bg-gradient-to-bl cursor-pointer rounded-lg ps-4">Javascript</li>
                                <li className="py-2 from-purple-500 to-purple-900 hover:bg-gradient-to-bl cursor-pointer rounded-lg ps-4">reactjs</li>
                            </ul>
                        </motion.div>
                    )}

                    {/* Backend Skills */}
                    {selectedSkill === "backend" && (
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 0.7 }}
                        >
                            <h2 className="text-xl font-semibold border-2 p-4 rounded-t-lg border-purple-600 ">Backend & Database</h2>
                            <ul className="uppercase border-2 p-4 font-bold border-purple-600 max-h-44 overflow-y-auto custom-scrollbar rounded-b-lg">
                                <li className="py-2 from-purple-500 to-purple-900 hover:bg-gradient-to-bl cursor-pointer rounded-lg ps-4">Nodejs</li>
                                <li className="py-2 from-purple-500 to-purple-900 hover:bg-gradient-to-bl cursor-pointer rounded-lg ps-4">Expressjs</li>
                                <li className="py-2 from-purple-500 to-purple-900 hover:bg-gradient-to-bl cursor-pointer rounded-lg ps-4">MongoDB</li>
                            </ul>
                        </motion.div>
                    )}

                    {/* Tools */}
                    {selectedSkill === "tools" && (
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 0.7 }}
                        >
                            <h2 className="text-xl font-semibold border-2 p-4 rounded-t-lg border-purple-600 ">Tools & Framework/Library</h2>
                            <ul className="uppercase border-2 p-4 font-bold border-purple-600 max-h-44 overflow-y-auto custom-scrollbar rounded-b-lg">
                                <li className="py-2 from-purple-500 to-purple-900 hover:bg-gradient-to-bl cursor-pointer rounded-lg ps-4">Git & GitHub</li>
                                <li className="py-2 from-purple-500 to-purple-900 hover:bg-gradient-to-bl cursor-pointer rounded-lg ps-4">Postman</li>
                                <li className="py-2 from-purple-500 to-purple-900 hover:bg-gradient-to-bl cursor-pointer rounded-lg ps-4">Tailwind & Bootstrap (CSS)</li>
                                <li className="py-2 from-purple-500 to-purple-900 hover:bg-gradient-to-bl cursor-pointer rounded-lg ps-4">Redux (Reactjs)</li>
                                <li className="py-2 from-purple-500 to-purple-900 hover:bg-gradient-to-bl cursor-pointer rounded-lg ps-4">JWT (Nodejs)</li>
                                <li className="py-2 from-purple-500 to-purple-900 hover:bg-gradient-to-bl cursor-pointer rounded-lg ps-4">Mongoose (MongoDB)</li>
                            </ul>
                        </motion.div>
                    )}

                    {/* Soft Skills */}
                    {selectedSkill === "softskills" && (
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 0.7 }}
                        >
                            <h2 className="text-xl font-semibold border-2 p-4 rounded-t-lg border-purple-600">Softs Skill</h2>
                            <ul className="uppercase border-2 p-4 font-bold border-purple-600 max-h-44 overflow-y-auto custom-scrollbar rounded-b-lg">
                                <li className="py-2 from-purple-500 to-purple-900 hover:bg-gradient-to-bl cursor-pointer rounded-lg ps-4">Problem Solving</li>
                                <li className="py-2 from-purple-500 to-purple-900 hover:bg-gradient-to-bl cursor-pointer rounded-lg ps-4">Time Management</li>
                                <li className="py-2 from-purple-500 to-purple-900 hover:bg-gradient-to-bl cursor-pointer rounded-lg ps-4">Adaptability</li>
                            </ul>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Skill;
