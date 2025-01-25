import { Link } from "react-router-dom"
import landingPageImage from "../../asset/landingPage.png"
import filipCardGameImage from "../../asset/filipCardGame.png"
import incomeCalculatorImage from "../../asset/incomeCalculator.png"
import productStoreImage from "../../asset/productStore.png"
import movieSearchImage from "../../asset/movieSearch.png"
import { motion } from "motion/react"


const FrontendProject = () => {
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
                    <h1 className="font-bold text-xl mb-2 uppercase text-center"> Landing Page </h1>
                    <div className="border-2 border-purple-600 p-8 rounded-2xl">
                        <Link>
                            <img className="transition ease-out duration-300 hover:scale-105 rounded-xl cursor-pointer" src={landingPageImage} alt="LandingPageImage" />
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
                        </ul>
                    </div>
                    <div className="flex flex-col justify-center lg:justify-start">
                        <p className="my-2 max-w-xl">
                            <span className="font-bold text-md"> Description - </span>
                            A landing page designed to promote and showcase an online course or coaching program. The page includes sections for highlighting course features, testimonials, and calls to action, providing visitors with clear information and encouragement to sign up or get in touch.

                        </p>
                        <p className="my-2 max-w-xl">
                            <span className="font-bold text-md"> My Role - </span>
                            I designed and developed the landing page using HTML, CSS, and Tailwind CSS. The focus was on creating a clean and professional design to effectively showcase the course/coaching program. I ensured the page was fully responsive and user-friendly across devices, utilizing Tailwind CSS to achieve a modern and accessible layout that encourages user engagement and conversions.
                        </p>
                    </div>
                    <div>
                        <ul className="flex flex-wrap items-center gap-2">
                            <Link to="https://github.com/mahendra-singh-jhala/Landing-Page-2" target="_blank">
                                <li className="bg-gradient-to-br from-purple-500 to-purple-900 hover:bg-gradient-to-bl duration-300 hover:scale-105 font-medium rounded-lg text-sm px-4 py-2 mt-4 tracking-wide"> frontend Code </li>
                            </Link>
                            <Link to="https://askmeidentilycoaching.netlify.app" target="_blank">
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
                            <li className="uppercase text-xs py-2 px-4 border font-bold tracking-widest rounded-full">Css</li>
                            <li className="uppercase text-xs py-2 px-4 border font-bold tracking-widest rounded-full">JavaScript</li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-center lg:justify-start">
                        <p className="my-2 max-w-xl">
                            <span className="font-bold text-md"> Description - </span>
                            A simple and engaging memory card game where users must match pairs of cards. The game presents face-down cards, and when a user clicks on a card, it flips to reveal its value. If two flipped cards match, show card value. If they don't match, the cards are hidden again. The game continues until all pairs are matched.

                        </p>
                        <p className="my-2 max-w-xl">
                            <span className="font-bold text-md"> My Role - </span>
                            I developed the front-end of the game, implementing the card-flipping logic, where clicking on a card flips it to reveal its value. I used JavaScript to handle the game mechanics, ensuring smooth transitions and interactions
                        </p>
                    </div>
                    <div>
                        <ul className="flex flex-wrap items-center justify-end pe-14 gap-2">
                            <Link to="https://github.com/mahendra-singh-jhala/Memory-Game-Fliped-Card-" target="_blank">
                                <li className="bg-gradient-to-br from-purple-500 to-purple-900 hover:bg-gradient-to-bl duration-300 hover:scale-105 font-medium rounded-lg text-sm px-4 py-2 mt-4 tracking-wide"> frontend Code </li>
                            </Link>
                            <Link to="https://memorygameflipcards.netlify.app" target="_blank">
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
                    <h1 className="font-bold text-xl mb-2 uppercase text-center"> Flip Card Game </h1>
                    <div className="border-2 border-purple-600 p-8 rounded-2xl">
                        <Link>
                            <img className="transition ease-out duration-300 hover:scale-105 rounded-xl cursor-pointer" src={filipCardGameImage} alt="FilipCardImage" />
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
                    <h1 className="font-bold text-xl mb-2 uppercase text-center"> Income Calculator </h1>
                    <div className="border-2 border-purple-600 p-8 rounded-2xl">
                        <Link>
                            <img className="transition ease-out duration-300 hover:scale-105 rounded-xl cursor-pointer" src={incomeCalculatorImage} alt="incomeCalculatorImage" />
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
                            <li className="uppercase text-xs py-2 px-4 border font-bold tracking-widest rounded-full">Css</li>
                            <li className="uppercase text-xs py-2 px-4 border font-bold tracking-widest rounded-full">JavaScript</li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-center lg:justify-start">
                        <p className="my-2 max-w-xl">
                            <span className="font-bold text-md"> Description - </span>
                            A web-based income and expense calculator tool that helps users estimate their monthly or yearly income. Additionally, the tool allows users to manage their expenses by adding, updating, or deleting expenses. The app provides a dashboard where users can view their total income, total expenses, remaining balance, and track financial progress.

                        </p>
                        <p className="my-2 max-w-xl">
                            <span className="font-bold text-md"> My Role - </span>
                            I developed the functionality for income calculation and expense management using JavaScript, with the addition of saving data in localStorage for persistence. I implemented features for adding, updating, and deleting expenses, and built a dynamic dashboard to display total income, total expenses, and remaining balance in real time. I focused on responsive user experience and provided an intuitive interface for users to interact with.
                        </p>
                    </div>
                    <div>
                        <ul className="flex flex-wrap items-center gap-2">
                            <Link to="https://github.com/mahendra-singh-jhala/Income-Calculator" target="_blank">
                                <li className="bg-gradient-to-br from-purple-500 to-purple-900 hover:bg-gradient-to-bl duration-300 hover:scale-105 font-medium rounded-lg text-sm px-4 py-2 mt-4 tracking-wide"> frontend Code </li>
                            </Link>
                            <Link to="https://incomeexpensecalculater.netlify.app" target="_blank">
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
                        </ul>
                    </div>
                    <div className="flex justify-center lg:justify-start">
                        <div className="flex flex-col justify-center lg:justify-start">
                            <p className="my-2 max-w-xl">
                                <span className="font-bold text-md"> Description - </span>
                                An e-commerce product store built with React that allows users to browse products fetched from an API, and add them to a shopping cart. Users can increase or decrease the quantity of items in the cart, and the total price updates accordingly. Items can also be deleted from the cart. The layout is fully responsive, providing a smooth shopping experience across devices. Tailwind CSS is used for styling to create a clean and modern design.

                            </p>
                            <p className="my-2 max-w-xl">
                                <span className="font-bold text-md"> My Role - </span>
                                I developed the functionality for front-end components using React and managing the state of the application with React hooks. I integrated an external API to fetch product data and implemented the shopping cart functionality, where users can add items, increase or decrease quantities, and remove items from the cart. I also ensured that the total price updates dynamically when the cart items are modified. I used Tailwind CSS for styling, ensuring a responsive and visually appealing layout.
                            </p>
                        </div>
                    </div>
                    <div>
                        <ul className="flex flex-wrap items-center justify-end pe-14 gap-2">
                            <Link to="https://github.com/mahendra-singh-jhala/product-store" target="_blank">
                                <li className="bg-gradient-to-br from-purple-500 to-purple-900 hover:bg-gradient-to-bl duration-300 hover:scale-105 font-medium rounded-lg text-sm px-4 py-2 mt-4 tracking-wide"> frontend Code </li>
                            </Link>
                            <Link to="https://new-product-store.netlify.app" target="_blank">
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
                    <h1 className="font-bold text-xl mb-2 uppercase text-center"> product store </h1>

                    <div className="border-2 border-purple-600 p-8 rounded-2xl">
                        <Link>
                            <img className="transition ease-out duration-300 hover:scale-105 rounded-xl cursor-pointer" src={productStoreImage} alt="productStoreImage" />
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Project 5 */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 items-center">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.7 }}
                    className="w-full p-8"
                >
                    <h1 className="font-bold text-xl mb-2 uppercase text-center"> Movie Search </h1>
                    <div className="border-2 border-purple-600 p-8 rounded-2xl">
                        <Link>
                            <img className="transition ease-out duration-300 hover:scale-105 rounded-xl cursor-pointer" src={movieSearchImage} alt="movieSearchImage" />
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
                        </ul>
                    </div>
                    <div className="flex flex-col justify-center lg:justify-start">
                        <p className="my-2 max-w-xl">
                            <span className="font-bold text-md"> Description - </span>
                            A movie search application that allows users to search for movies, add filter then use filter movie, series. Users can also add movies to their favorites and click on a movie card to be redirected to a detailed page. The detailed page fetches additional information using an external movie API. Pagination is implemented so users can view a limited number of movies (8 per page) at a time.

                        </p>
                        <p className="my-2 max-w-xl">
                            <span className="font-bold text-md"> My Role - </span>
                            I developed the front-end using React, creating the search functionality and implementing filtering by movie or series. I also added the feature to allow users to add movies to their favorites and integrated navigation to a detailed movie page where more information is fetched dynamically from the API. I implemented pagination to display only 8 movies per page, enhancing the user experience. I focused on ensuring smooth interactions, real-time search results, and a clean, interactive UI.
                        </p>
                    </div>
                    <div>
                        <ul className="flex flex-wrap items-center gap-2">
                            <Link to="https://github.com/mahendra-singh-jhala/movie-search-app" target="_blank">
                                <li className="bg-gradient-to-br from-purple-500 to-purple-900 hover:bg-gradient-to-bl duration-300 hover:scale-105 font-medium rounded-lg text-sm px-4 py-2 mt-4 tracking-wide"> frontend Code </li>
                            </Link>
                            <Link to="https://new-movie-searching-app.netlify.app" target="_blank">
                                <li className="bg-gradient-to-br from-purple-500 to-purple-900 hover:bg-gradient-to-bl duration-300 hover:scale-105 font-medium rounded-lg text-sm px-4 py-2 mt-4 tracking-wide"> Demo </li>
                            </Link>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default FrontendProject
