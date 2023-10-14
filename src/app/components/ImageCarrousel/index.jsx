"use client"

import { useState } from "react"
import Image from "next/image"
import { BsArrowRightSquareFill, BsArrowLeftSquareFill } from "react-icons/bs"

export const ImageCarrousel = ({ images }) => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="w-[50%]">
            <div className="relative w-[100%] h-[400px]">
                {
                    images.length <= 1 ? (
                        <Image src={images[0]} fill alt="product-image" priority />
                    ) : (
                        <>
                            <BsArrowLeftSquareFill size={24} className="absolute top-[45%] left-0 z-10" onClick={handlePrev} />
                            <Image src={images[currentIndex]} fill alt="product-image" priority/>
                            <BsArrowRightSquareFill size={24} className="absolute top-[45%] right-0 z-10" onClick={handleNext} />
                        </>
                    )
                }
            </div>
        </div>
    )
}