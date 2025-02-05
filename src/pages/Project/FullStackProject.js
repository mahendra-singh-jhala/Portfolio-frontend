import { Link } from "react-router-dom"
import EventImage from "../../asset/Event.png"
import ChatImage from "../../asset/chat.png"
import ECommerceImg from "../../asset/e-commerce.png"
import TaskImg from "../../asset/taskManagement.png"
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
                    <h1 className="font-bold text-xl mb-2 uppercase text-center"> Online Event Management </h1>
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
                    <div className="flex flex-col justify-center lg:justify-start">
                        <p className="my-2 max-w-xl">
                            <span className="font-bold text-md"> Description - </span>
                            This platform allows users to create events, buy tickets, and manage event registrations. It features a calendar to display upcoming events, an event creation system with approval from the admin, and the ability for users to cancel tickets and provide feedback. Admins can view all ticket sales, manage event updates, and control user profiles. Additionally, users receive success messages upon ticket purchase, and admins can create and manage VIP and general tickets.

                        </p>
                        <p className="my-2 max-w-xl">
                            <span className="font-bold text-md"> My Role - </span>
                            I developed both the front-end and back-end, handling features like event creation, ticket purchasing, and updating events. I implemented user authentication, ticket management (including VIP and general tickets), and integrated email notifications for successful purchases and event updates. I also worked on creating user and admin profiles, allowing profile updates, password recovery, and administrative control over event approvals and deletions
                        </p>
                    </div>
                    <div>
                        <ul className="flex flex-wrap items-center gap-2">
                            <Link to="https://github.com/mahendra-singh-jhala/event-management-frontend" target="_blank">
                                <li className="bg-gradient-to-br from-purple-500 to-purple-900 hover:bg-gradient-to-bl duration-300 hover:scale-105 font-medium rounded-lg text-sm px-4 py-2 mt-4 tracking-wide"> frontend Code </li>
                            </Link>
                            <Link to="https://github.com/mahendra-singh-jhala/event-managment-backend" target="_blank">
                                <li className="bg-gradient-to-br from-purple-500 to-purple-900 hover:bg-gradient-to-bl duration-300 hover:scale-105 font-medium rounded-lg text-sm px-4 py-2 mt-4 tracking-wide"> backend Code </li>
                            </Link>
                            <Link to="https://event-management-web.netlify.app/home" target="_blank">
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
                            <li className="uppercase text-xs py-2 px-4 border font-bold tracking-widest rounded-full">Socket.io</li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-center lg:justify-start">
                        <p className="my-2 max-w-xl">
                            <span className="font-bold text-md"> Description - </span>
                            This real-time chat application allows users to send messages instantly, view message previews, and check who is online. The app displays the status of users (online/offline) and shows a preview of recent conversations, making it easy to stay updated on ongoing chats.

                        </p>
                        <p className="my-2 max-w-xl">
                            <span className="font-bold text-md"> My Role - </span>
                            I developed both the front-end and back-end, building the real-time messaging functionality with Socket.io and designing the user interface using React. I also implemented key features such as online/offline status, message previews, and user authentication.
                        </p>
                    </div>
                    <div>
                        <ul className="flex flex-wrap items-center justify-end pe-14 gap-2">
                            <Link to="https://github.com/mahendra-singh-jhala/chat-app-frontend" target="_blank">
                                <li className="bg-gradient-to-br from-purple-500 to-purple-900 hover:bg-gradient-to-bl duration-300 hover:scale-105 font-medium rounded-lg text-sm px-4 py-2 mt-4 tracking-wide"> frontend Code </li>
                            </Link>
                            <Link to="https://github.com/mahendra-singh-jhala/chat-app-backend" target="_blank">
                                <li className="bg-gradient-to-br from-purple-500 to-purple-900 hover:bg-gradient-to-bl duration-300 hover:scale-105 font-medium rounded-lg text-sm px-4 py-2 mt-4 tracking-wide"> backend Code </li>
                            </Link>
                            <Link to="https://newly-chat-app.netlify.app/login" target="_blank">
                                <li className="bg-gradient-to-br from-purple-500 to-purple-900 hover:bg-gradient-to-bl duration-300 hover:scale-105 font-medium rounded-lg text-sm px-4 py-2 mt-4 tracking-wide"> Demo </li>
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
                    <h1 className="font-bold text-xl mb-2 uppercase text-center"> Chat Application </h1>
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
                    <h1 className="font-bold text-xl mb-2 uppercase text-center"> E-Commerce </h1>
                    <div className="border-2 border-purple-600 p-8 rounded-2xl">
                        <Link>
                            <img className="transition ease-out duration-300 hover:scale-105 rounded-xl cursor-pointer" src={ECommerceImg} alt="e-commerceImage" />
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
                    <div className="flex flex-col justify-center lg:justify-start">
                        <p className="my-2 max-w-xl">
                            <span className="font-bold text-md"> Description - </span>
                            An e-commerce platform where users can browse products, add items to their cart, and securely complete their purchases using Razorpay. The website features a smooth checkout process, order tracking, and an admin panel for managing products and orders. Admins can create and delete products, update order statuses (such as shipped or delivered), and view the total sales on a dashboard.

                        </p>
                        <p className="my-2 max-w-xl">
                            <span className="font-bold text-md"> My Role - </span>
                            I developed both the front-end and back-end, creating a user-friendly interface with React and implementing the payment system using Razorpay. I also built the admin panel, allowing administrators to manage products, track orders, and update order statuses. Additionally, I integrated a dashboard to display total sales and order analytics.
                        </p>
                    </div>
                    <div>
                        <ul className="flex flex-wrap items-center gap-2">
                            <Link to="https://github.com/mahendra-singh-jhala/e-commerce-frontend" target="_blank">
                                <li className="bg-gradient-to-br from-purple-500 to-purple-900 hover:bg-gradient-to-bl duration-300 hover:scale-105 font-medium rounded-lg text-sm px-4 py-2 mt-4 tracking-wide"> frontend Code </li>
                            </Link>
                            <Link to="https://github.com/mahendra-singh-jhala/e-commerce-backend" target="_blank">
                                <li className="bg-gradient-to-br from-purple-500 to-purple-900 hover:bg-gradient-to-bl duration-300 hover:scale-105 font-medium rounded-lg text-sm px-4 py-2 mt-4 tracking-wide"> backend Code </li>
                            </Link>
                            <Link to="https://shopper-new-e-commerce.netlify.app" target="_blank">
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
                        </ul>
                    </div>
                    <div className="flex flex-col justify-center lg:justify-start">
                        <p className="my-2 max-w-xl">
                            <span className="font-bold text-md"> Description - </span>
                            This task management application allows users to efficiently manage and track tasks. Users can create, update, view, and delete tasks, making it easier to organize their work. The app provides features like task prioritization and deadlines to ensure smooth task management.

                        </p>
                        <p className="my-2 max-w-xl">
                            <span className="font-bold text-md"> My Role - </span>
                            developed both the front-end and back-end, implementing CRUD (Create, Read, Update, Delete) operations for task management. On the front-end, I built the user interface to ensure a smooth and intuitive experience for managing tasks, while the back-end supports the functionality for storing and manipulating tasks.
                        </p>
                    </div>
                    <div>
                        <ul className="flex flex-wrap items-center justify-end pe-14 gap-2">
                            <Link to="https://github.com/mahendra-singh-jhala/Task_Management_frontend" target="_blank">
                                <li className="bg-gradient-to-br from-purple-500 to-purple-900 hover:bg-gradient-to-bl duration-300 hover:scale-105 font-medium rounded-lg text-sm px-4 py-2 mt-4 tracking-wide"> frontend Code </li>
                            </Link>
                            <Link to="https://github.com/mahendra-singh-jhala/Task_Managment_backend" target="_blank">
                                <li className="bg-gradient-to-br from-purple-500 to-purple-900 hover:bg-gradient-to-bl duration-300 hover:scale-105 font-medium rounded-lg text-sm px-4 py-2 mt-4 tracking-wide"> backend Code </li>
                            </Link>
                            <Link to="https://taskmaster-task-management-app.netlify.app" target="_blank">
                                <li className="bg-gradient-to-br from-purple-500 to-purple-900 hover:bg-gradient-to-bl duration-300 hover:scale-105 font-medium rounded-lg text-sm px-4 py-2 mt-4 tracking-wide"> Demo </li>
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
                    <h1 className="font-bold text-xl mb-2 uppercase text-center"> Task Management </h1>
                    <div className="border-2 border-purple-600 p-8 rounded-2xl">
                        <Link>
                            <img className="transition ease-out duration-300 hover:scale-105 rounded-xl cursor-pointer" src={TaskImg} alt="eventImage" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default FullStackProject
