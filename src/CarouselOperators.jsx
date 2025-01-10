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
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
            {/* Contenedor principal */}
            <div className="flex flex-col items-center w-full max-w-4xl bg-gray-800 p-6 rounded-lg shadow-lg">
                {/* Sección de texto e imagen */}
                <div className="flex flex-col lg:flex-row items-center w-full">
                    {/* Sección de texto */}
                    <div className="lg:w-1/3 mb-6 lg:mb-0 lg:pr-6">
                        <h2 className="text-2xl font-bold mb-2">{operators.operadores[currentIndex].nombre}</h2>
                        <p className="italic text-sm mb-1">{operators.operadores[currentIndex].nacionalidad}</p>
                        <p className="text-lg font-semibold mb-4">{operators.operadores[currentIndex].rol}</p>
                        <p className="text-sm">{operators.operadores[currentIndex].descripcion}</p>
                    </div>

                    {/* Imagen centrada */}
                    <div className="lg:w-2/3 flex justify-center mb-6 lg:mb-0">
                        <img
                            src={operators.operadores[currentIndex].imagen}
                            alt={operators.operadores[currentIndex].nombre}
                            style={{ width: "650px", height: "650px", objectFit: "cover" }}
                            className="rounded-full"
                        />
                    </div>
                </div>



                {/* Botones de navegación */}
                <div className="flex mt-6 space-x-4">
                    <button
                        onClick={prevSlide}
                        className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
                    >
                        Anterior
                    </button>
                    <button
                        onClick={nextSlide}
                        className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
                    >
                        Siguiente
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CarruselOperadores;