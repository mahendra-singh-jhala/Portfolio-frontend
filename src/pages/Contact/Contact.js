import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const sendEmail = { firstname, lastname, email, message };

        try {
            setLoading(true)

            const res = await axios.post("http://localhost:5000/receive-email", sendEmail);
            const data = res.data;

            if (res.status === 200) {
                toast.success(data.message || "Message sent successfully!");
                setFirstname("");
                setLastname("");
                setEmail("");
                setMessage("");
            }
        } catch (error) {
            toast.error(error.response.data.message || "Error sending message")
        } finally {
            setLoading(false)
        }
    };

    return (
        <div className="my-10" id="contact">
            <h1 className="my-16 text-center text-4xl font-semibold">
                Contact <span className="text-neutral-500">Me</span>
            </h1>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="w-full grid grid-cols-1 gap-4">
                    <div className="flex flex-col items-center justify-center border-2 border-purple-600 py-8 rounded-lg from-purple-500 to-purple-900 cursor-pointer">
                        <Link to="https://github.com/mahendra-singh-jhala" target="_blank">
                            <FaGithub className="text-4xl" />
                        </Link>
                        <span className="mt-2">GitHub</span>
                    </div>
                    <div className="flex flex-col items-center justify-center border-2 border-purple-600 py-8 rounded-lg from-purple-500 to-purple-900 cursor-pointer">
                        <Link to="https://www.linkedin.com/in/mahendra-singh-jhala-021916266" target="_blank">
                            <FaLinkedin className="text-4xl" />
                        </Link>
                        <span className="mt-2">LinkedIn</span>
                    </div>
                    <div className="flex flex-col items-center justify-center border-2 border-purple-600 py-8 rounded-lg from-purple-500 to-purple-900 cursor-pointer">
                        <Link to="mailto:mahendrasinghjhala444@gmail.com">
                            <SiGmail className="text-4xl" />
                        </Link>
                        <span className="mt-2">mahendrasinghjhala444@gmail.com</span>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="w-full border-2 border-purple-600 rounded-lg p-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="mb-4">
                                <label className="block mb-2 text-md font-medium tracking-wider">First Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter Firstname"
                                    value={firstname}
                                    onChange={(e) => setFirstname(e.target.value)}
                                    className="w-full h-10 border-2 border-purple-600 bg-purple-600 bg-opacity-10 p-2 outline-none rounded-md"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-md font-medium tracking-wider">Last Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter Lastname"
                                    value={lastname}
                                    onChange={(e) => setLastname(e.target.value)}
                                    className="w-full h-10 p-2 border-2 border-purple-600 bg-purple-600 bg-opacity-10 outline-none rounded-md"
                                    required
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <div>
                                <label className="block mb-2 text-md font-medium tracking-wider">Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full h-10 p-2 border-2 border-purple-600 bg-purple-600 bg-opacity-10 outline-none rounded-md"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <div>
                                <label className="block mb-2 text-md font-medium tracking-wider">Message</label>
                                <textarea
                                    type="text"
                                    placeholder="Message..."
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="w-full p-2 border-2 border-purple-600 bg-purple-600 bg-opacity-10 outline-none rounded-md"
                                    rows="8"
                                    required
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full border-2 border-purple-600 hover:bg-gradient-to-tr from-purple-600 to-purple-800 mt-4 py-2 rounded-lg"
                            disabled={loading}
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
