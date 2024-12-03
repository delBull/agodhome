"use client";

import { useState } from 'react';
import { X } from 'lucide-react';

export function CountdownTimer() {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) {
        return null;
    }

    return (
        <div className="absolute top-20 left-0 right-0 z-50">
            <div className="w-full max-w-xl mx-auto mb-4">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-[1px] rounded-lg">
                    <div className="bg-black/90 backdrop-blur-sm rounded-lg p-4 relative">
                        {/* Botón de cerrar */}
                        <button 
                            onClick={() => setIsVisible(false)}
                            className="absolute top-2 right-2 text-zinc-400 hover:text-white transition-colors duration-300"
                        >
                            <X size={20} />
                        </button>

                        <div className="flex text-center">
                            {/* Columna izquierda (1/3) */}
                            <div className="absolute left-0 w-1/3 pr-4 overflow-hidden">
                                <div className="text-[4rem] md:text-[5rem] leading-none font-black font-mono text-white opacity-20 mb-2 rotate-[-15deg] whitespace-nowrap transform -translate-x-1/5">
                                    AGOD
                                </div>
                            </div>

                            {/* Columna derecha (2/3) */}
                            <div className="w-full">
                                {/* <div className="text-base text-zinc-400 mb-2">
                                    Black Friday - ¡Preventa Iniciada!
                                </div> */}  
                                <div className="flex flex-col">
                                    <span className="mt-2 text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
                                        ¡La preventa ya comenzó!
                                    </span>
                                    <span className="text-sm text-zinc-400 mt-2">
                                        No te pierdas esta oportunidad única
                                    </span>
                                </div>
                                <a 
                                    href="https://minter.agodecosystem.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-sm text-purple-400 hover:text-pink-400 transition-colors duration-300"
                                >
                                    ¡Llévame allá!
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
