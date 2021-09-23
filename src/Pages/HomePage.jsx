import React from 'react'
import EntertainmentCardSlider from '../Componenets/Entertainment/EntertainmentSlider'
import HeroCarousel from '../Componenets/HeroCarousel/HeroCarouselComponent'

export default function HomePage() {
    return (
        <>
            <HeroCarousel/>
            <div className="mx-auto container px-4">
                <h1 className="text-2xl font-bold text-gray-800 my-3">This is Entertainment</h1>
                <EntertainmentCardSlider/>
            </div>
           
            
        </>
    )
}
