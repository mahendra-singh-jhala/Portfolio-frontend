import React, { useState } from 'react'
import AliceCarousel, { Link } from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { CertificateData } from './CertificateData';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const Certificate = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const slidePrev = () => setActiveIndex(activeIndex - 1)
    const slideNext = () => setActiveIndex(activeIndex + 1)
    
    const synconSlideChange = ({ item }) => setActiveIndex(item);

    const items = CertificateData.map((item, index) => (
        <div key={index} className="flex flex-col items-center p-4">
            <img
                className="cursor-pointer w-96 h-72 object-cover rounded-md shadow-md"
                src={item.image}
                alt={item.name}
            />
            <p className="mt-4 text-lg font-semibold text-center">{item.name}</p>
            <p className="text-sm text-gray-500 text-center mx-4">Issued by: {item.issue}</p>
            <Link
                to=""
                className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
            >
                Download Certificate
            </Link>
        </div>
    ));

    return (
        <div id="certificate">
            <h1 className="mt-16 text-center text-4xl font-semibold">
                Certificate
            </h1>
            <div className="mt-4">
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    disableDotsControls
                    onSlideChange={synconSlideChange}
                    activeIndex={activeIndex}
                />
                {activeIndex !== items.length - 3 && items.length > 0 && (
                    <button
                        
                        onClick={slideNext}
                    >
                        <FaAngleRight sx={{ transform: "rotate(90deg)", color: "black" }} />
                    </button>
                )}
                {activeIndex !== 0 && items.length > 0 && (
                    <button
                        onClick={slidePrev}
                    >
                        <FaAngleLeft sx={{ transform: "rotate(90deg)", color: "black" }} />
                    </button>
                )}
            </div>
        </div>
    )
}

export default Certificate
