import { useState } from "react";
import FullStackProject from "./FullStackProject";
import FrontendProject from "./FrontendProject";
import BackendProject from "./BackendProject";

const Project = () => {
    const [selectedProject, setSelectedProject] = useState("fullStack");

    const handleProjectClick = (Project) => {
        setSelectedProject(Project);
    };
    return (
        <div className="mt-10" id="project">
            <h1 className="my-16 text-center text-4xl font-semibold">
                Project
            </h1>
            <div className="w-full flex flex-wrap items-center justify-center">
                <div
                    className="w-full sm:w-auto"
                    onClick={() => handleProjectClick("fullStack")}
                >
                    <h2 className="text-xl font-semibold border-2 p-4 border-purple-600 md:rounded-s-full w-full sm:w-56 text-center from-purple-500 to-purple-900 hover:bg-gradient-to-bl">Full Stack (FE + BE)</h2>
                </div>
                <div
                    className="w-full sm:w-auto mt-4 md:mt-0"
                    onClick={() => handleProjectClick("frontend")}
                >
                    <h2 className="text-xl font-semibold border-2 p-4 border-purple-600 md:border-l-0 md:border-r-0 w-full sm:w-56 text-center from-purple-500 to-purple-900 hover:bg-gradient-to-bl">Frontend</h2>
                </div>
                <div
                    className="w-full sm:w-auto  mt-4 md:mt-0"
                    onClick={() => handleProjectClick("backend")}
                >
                    <h2 className="text-xl font-semibold border-2 p-4 border-purple-600 md:rounded-e-full w-full sm:w-56 text-center from-purple-500 to-purple-900 hover:bg-gradient-to-bl">Backend</h2>
                </div>
            </div>
            <div className="mt-10">
                <div>
                    {selectedProject === "fullStack" && (
                        <FullStackProject />
                    )}
                </div>
                <div>
                    {selectedProject === "frontend" && (
                        <FrontendProject />
                    )}
                </div>
                <div>
                    {selectedProject === "backend" && (
                        <BackendProject />
                    )}
                </div>
            </div>
        </div>

    )
}

export default Project
