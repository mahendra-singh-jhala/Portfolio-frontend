import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { CertificateData } from './CertificateData';

const Certificate = () => {

    const items = CertificateData.map((item, index) => {
        return <img key={index} className="cursor-pointer w-80 h-72" src={item.image} alt={item.name} />;
    });

    return (
        <div id="certificate">
            <h1 className="mt-16 text-center text-4xl font-semibold">
                Certificate
            </h1>
            <div>
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    autoPlay
                    autoPlayInterval={1000}
                    infinite
                />
            </div>
        </div>
    )
}

export default Certificate
