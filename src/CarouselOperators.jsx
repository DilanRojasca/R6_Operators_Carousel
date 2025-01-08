import React, { useState } from 'react';
import operators from './operators.json';

const CarruselOperadores = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex + 1) % operators.operadores.length
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - 1 + operators.operadores.length) % operators.operadores.length
        );
    };

    return (
        <div className="relative w-full max-w-xl mx-auto p-6 bg-gray-800 text-white rounded-lg shadow-lg">
            {/* Contenedor de personaje actual */}
            <div className='flex flex-col items-center'>
                <img
                    src={operators.operadores[currentIndex].imagen}
                    alt={operators.operadores[currentIndex].nombre}
                    className="w-40 h-40 object-cover rounded-full mb-4"
                    style={{ width: "650px", height: "650px", objectFit: "cover" }}
                />
                <h2 className="text-2xl font-bold">{operators.operadores[currentIndex].nombre}</h2>
                <p className="italic text-sm">{operators.operadores[currentIndex].nacionalidad}</p>
                <p className="text-lg mt-2">{operators.operadores[currentIndex].rol}</p>
                <p className="mt-4 text-center">{operators.operadores[currentIndex].descripcion}</p>
            </div>

            {/* Botones de navegación */}
            <div className="absolute inset-y-0 left-4 flex items-center">
                <button
                    onClick={prevSlide}
                    className="bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600"
                >
                    &#8592;
                </button>
            </div>
            <div className="absolute inset-y-0 right-4 flex items-center">
                <button
                    onClick={nextSlide}
                    className="bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600"
                >
                    &#8594;
                </button>
            </div>


        </div>


    )





};



export default CarruselOperadores;