"use client";

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

type TimeLeft = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

export function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [isExpired, setIsExpired] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const calculateTimeLeft = () => {
            const targetDate = new Date('2024-11-29T22:19:00').getTime();
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference <= 0) {
                setIsExpired(true);
                return;
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });
        };

        // Calcular inmediatamente
        calculateTimeLeft();

        // Actualizar cada segundo
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatNumber = (num: number): string => num.toString().padStart(2, '0');

    // Si ya pasó la fecha, no renderiza nada
    if (isExpired || !isVisible) {
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

                      <div className="flex">
                          {/* Columna izquierda (1/3) */}
                          <div className="w-1/3 pr-4">
                              <div className="text-xl font-semibold text-white mb-2">
                                  AGOD Token Minter
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

                          {/* Columna derecha (2/3) */}
                          <div className="w-2/3">
                              <div className="text-base text-zinc-400 mb-2">
                                  Lanzamiento de Black Friday
                              </div>
                              <div className="flex justify-start items-center gap-2 sm:gap-4 text-white font-mono">
                                  <div className="flex flex-col items-center">
                                      <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                          {formatNumber(timeLeft.days)}
                                      </span>
                                      <span className="text-xs text-zinc-400">Días</span>
                                  </div>
                                  <span className="text-xl sm:text-2xl text-zinc-600">:</span>
                                  <div className="flex flex-col items-center">
                                      <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                          {formatNumber(timeLeft.hours)}
                                      </span>
                                      <span className="text-xs text-zinc-400">Horas</span>
                                  </div>
                                  <span className="text-xl sm:text-2xl text-zinc-600">:</span>
                                  <div className="flex flex-col items-center">
                                      <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                          {formatNumber(timeLeft.minutes)}
                                      </span>
                                      <span className="text-xs text-zinc-400">Min</span>
                                  </div>
                                  <span className="text-xl sm:text-2xl text-zinc-600">:</span>
                                  <div className="flex flex-col items-center">
                                      <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
                                          {formatNumber(timeLeft.seconds)}
                                      </span>
                                      <span className="text-[10px] sm:text-xs text-zinc-400">Seg</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}
