import React from 'react';
import { Carousel } from 'primereact/carousel';
import carosuel1 from '/src/assets/carosuel/carosuel1.jpeg';
import carosuel2 from '/src/assets/carosuel/carosuel2.jpeg';

const MCarosuel = () => {

    const responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const images=[
        {src : carosuel1},
        {src : carosuel2},
        {src : carosuel1},
        {src : carosuel2},
    ];

    const productTemplate = (image) => {
        return (
            <div className="flex justify-center py-5 px-3 border-b border-gray-400">
                <div className="mb-3">
                    <img src={`${image.src.src}`} className="shadow-2" />
                </div>
            </div>
        );
    };

    return (
        <div className="card">
            <Carousel value={images} numScroll={1} numVisible={1} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />
        </div>
    );
};

export default MCarosuel;
