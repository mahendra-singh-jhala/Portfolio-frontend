import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Link } from "react-router-dom"
import { CertificateData } from './CertificateData';

const Certificate = () => {
    const items = CertificateData.map((item, index) => (
        <div key={index} className="flex flex-col items-center p-4">
            <img
                className="cursor-pointer w-96 h-72 object-cover rounded-md shadow-md"
                src={item.image}
                alt={item.name}
            />
            <p className="mt-4 text-lg font-semibold text-center">{item.name}</p>
            <p className="text-sm text-gray-500 text-center mx-4">Issued by: {item.issue}</p>
            <Link to={item.download} target="_blank"
                className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
            >
                Download Certificate
            </Link>
        </div>
    ));

    return (
        <div id="certificate">
            <h1 className="mt-16 text-center text-4xl font-semibold">Certificate</h1>
            <div className="relative p-5 mb-6 mt-4">
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    autoPlay
                    autoPlayInterval={3000}
                    infinite
                />
            </div>
        </div>
    );
};

export default Certificate;
