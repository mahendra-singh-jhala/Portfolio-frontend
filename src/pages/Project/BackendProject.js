import { Link } from "react-router-dom"
import recipeImage from "../../asset/recipe.png"
import authenticationImage from "../../asset/authentication.png"
import resetpasswordImage from "../../asset/resetPassword.png"
import adminpanelImage from "../../asset/adminpanel.png"
import { motion } from "motion/react"

const BackendProject = () => {
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
                    <h1 className="font-bold text-xl mb-2 uppercase text-center"> Recipe App </h1>
                    <div className="border-2 border-purple-600 p-8 rounded-2xl">
                        <Link>
                            <img className="transition ease-out duration-300 hover:scale-105 rounded-xl cursor-pointer" src={recipeImage} alt="recipePageImage" />
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
                            <li className="uppercase text-xs py-2 px-4 border font-bold tracking-widest rounded-full">NodeJS</li>
                            <li className="uppercase text-xs py-2 px-4 border font-bold tracking-widest rounded-full">Expressjs</li>
                            <li className="uppercase text-xs py-2 px-4 border font-bold tracking-widest rounded-full">MongoDB</li>
                            <li className="uppercase text-xs py-2 px-4 border font-bold tracking-widest rounded-full">Mongoose</li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-center lg:justify-start">
                        <p className="my-2 max-w-xl">
                            <span className="font-bold text-md"> Description - </span>
                            I developed the backend for a Recipe App that enables users to create, browse, update and delete recipes. The app allows users to interact with recipes, CRUD operations, including creating new recipes, retrieving a specific recipe by ID, updating recipe details, and deleting unwanted recipes.

                        </p>
                        <p className="my-2 max-w-xl">
                            <span className="font-bold text-md"> My Role - </span>
                            I developed all backend API endpoints using Node.js with Express. This involved creating the necessary routes for the CRUD operations, managing the database schema to store recipes.
                        </p>
                    </div>
                    <div>
                        <ul className="flex flex-wrap items-center gap-2">
                            <Link to="https://github.com/mahendra-singh-jhala/Recipes-App" target="_blank">
                                <li className="bg-gradient-to-br from-purple-500 to-purple-900 hover:bg-gradient-to-bl duration-300 hover:scale-105 font-medium rounded-lg text-sm px-4 py-2 mt-4 tracking-wide"> backend Code </li>
                            </Link>
                            <Link to="https://recipes-app-2lac.onrender.com/api/recipes" target="_blank">
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
                            <li className="uppercase text-xs py-2 px-4 border font-bold tracking-widest rounded-full">NodeJS</li>
                            <li className="uppercase text-xs py-2 px-4 border font-bold tracking-widest rounded-full">Expressjs</li>
                            <li className="uppercase text-xs py-2 px-4 border font-bold tracking-widest rounded-full">jsonwebToken (jwt)</li>
                            <li className="uppercase text-xs py-2 px-4 border font-bold tracking-widest rounded-full">MongoDB</li>
                            <li className="uppercase text-xs py-2 px-4 border font-bold tracking-widest rounded-full">Mongoose</li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-center lg:justify-start">
                        <p className="my-2 max-w-xl">
                            <span className="font-bold text-md"> Description - </span>
                            I developed the authentication system for a web application, enabling secure user registration, login. The system utilizes JSON Web Tokens (JWT) to provide secure authentication, ensuring that only authorized users can access protected resources and perform sensitive actions. Users can register, log in, and securely maintain sessions with token expiration.

                        </p>
                        <p className="my-2 max-w-xl">
                            <span className="font-bold text-md"> My Role - </span>
                            I developed the complete authentication flow using JWT. This included creating API endpoints for user registration, login, and token generation, as well as handling password security with bcrypt. I also implemented token expiration and refresh functionality to maintain secure sessions.
                        </p>
                    </div>
                    <div>
                        <ul className="flex flex-wrap items-center justify-end pe-14 gap-2">
                            <Link to="https://github.com/mahendra-singh-jhala/User_Authentication-Authorization">
                                <li className="bg-gradient-to-br from-purple-500 to-purple-900 hover:bg-gradient-to-bl duration-300 hover:scale-105 font-medium rounded-lg text-sm px-4 py-2 mt-4 tracking-wide"> backend Code </li>
                            </Link>
                        </ul>
                    </div>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.7 }}
                    className="w-full p-8"
                >
                    <h1 className="font-bold text-xl mb-2 uppercase text-center"> Authentication </h1>
                    <div className="border-2 border-purple-600 p-8 rounded-2xl">
                        <Link>
                            <img className="transition ease-out duration-300 hover:scale-105 rounded-xl cursor-pointer" src={authenticationImage} alt="authenticationImage" />
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
                    <h1 className="font-bold text-xl mb-2 uppercase text-center"> password reset </h1>
                    <div className="border-2 border-purple-600 p-8 rounded-2xl">
                        <Link>
                            <img className="transition ease-out duration-300 hover:scale-105 rounded-xl cursor-pointer" src={resetpasswordImage} alt="resetPasswordImage" />
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
                            <li className="uppercase text-xs py-2 px-4 border font-bold tracking-widest rounded-full">NodeJS</li>
                            <li className="uppercase text-xs py-2 px-4 border font-bold tracking-widest rounded-full">Expressjs</li>
                            <li className="uppercase text-xs py-2 px-4 border font-bold tracking-widest rounded-full">MongoDB</li>
                            <li className="uppercase text-xs py-2 px-4 border font-bold tracking-widest rounded-full">Mongoose</li>
                            <li className="uppercase text-xs py-2 px-4 border font-bold tracking-widest rounded-full">Nodemailer</li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-center lg:justify-start">
                        <p className="my-2 max-w-xl">
                            <span className="font-bold text-md"> Description - </span>
                            I developed a secure password reset system for a web application, enabling users to reset their passwords safely in case they forget them. The system generates a unique, token that is sent to the user’s registered email address, allowing them to securely update their password.

                        </p>
                        <p className="my-2 max-w-xl">
                            <span className="font-bold text-md"> My Role - </span>
                            I was responsible for implementing the entire password reset flow, including generating and validating secure tokens. I created API endpoints for initiating the password reset process, sending emails with the reset link, and updating the user’s password after successful validation of the token. I integrated an email service (like nodemailer) to handle sending reset emails, ensuring they were delivered securely.
                        </p>
                    </div>
                    <div>
                        <ul className="flex flex-wrap items-center gap-2">
                            <Link to="https://github.com/mahendra-singh-jhala/password-reset-backend">
                                <li className="bg-gradient-to-br from-purple-500 to-purple-900 hover:bg-gradient-to-bl duration-300 hover:scale-105 font-medium rounded-lg text-sm px-4 py-2 mt-4 tracking-wide"> backend Code </li>
                            </Link>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default BackendProject
