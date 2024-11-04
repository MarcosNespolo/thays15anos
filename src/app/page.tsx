"use client"

import Image from 'next/image';
import { useState } from 'react';
import { Great_Vibes } from 'next/font/google';

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-great-vibes',
});

export default function AnimatedBlocks() {
  const [isOpen, setIsOpen] = useState(false);

  const handleEnvelopeClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
    {/* Imagem do Envelope */}
    <div
      className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-50 transition-opacity duration-1000 ${
       isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      onClick={handleEnvelopeClick}
    >
      <Image
        src="/envelope.png"
        alt="Envelope"
        className='cursor-pointer drop-shadow hover:drop-shadow-xl active:brightness-95 '
        width={400}
        height={400}
      />
    </div>

      {/* Detalhes do convite */}
      <div
        className={`
          transition-opacity duration-[2000ms]
          ${!isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}
          absolute z-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
        `}
        onClick={handleEnvelopeClick}
      >
        <div className="relative">
          <div className="absolute w-[32px] h-[32px] sm:w-[66px] sm:h-[66px] top-1 -right-7 sm:top-2 sm:-right-16">
            <Image
              src="/borboleta.png"
              alt="Borboleta"
              className={`drop-shadow`}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className={`${greatVibes.variable} font-great-vibes text-[64px] sm:text-[124px] text-[#736A9B] text-shadow-xl`}>
            Thays
          </div>
          <div 
            className={`
              ${greatVibes.variable} font-great-vibes text-[32px] sm:text-[64px] text-[#8A7CCB]
              absolute -bottom-6 -left-12  
            `}>
            15 anos
          </div>
        </div>
      </div>

      {/* Bloco 1 */}
      <div
        className="absolute transition-all duration-1000"
        style={{
          top: isOpen ? '10%' : '40%',
          left: isOpen ? '10%' : '40%',
          transform: isOpen ? 'translate(0, 0)' : 'translate(-50%, -50%)',
          transitionProperty: 'top, left, transform',
        }}
      >
        {/* Conteúdo do Bloco 1 */}
        <div className="relative">
          <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
            <div className="relative w-[600px] h-[600px]">
              <Image
                src="/flores.png"
                alt="Flores 1"
                layout="fill"
                objectFit="contain"
                className="rotate-[-170deg]"
              />
            </div>
          </div>
          {/* Imagens de Fundo */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-[102deg]">
            <div className="relative w-[800px] h-[800px]">
              <Image
                src="/fundo.png"
                alt="Fundo 1"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          {/* Segunda Imagem de Fundo */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-[102deg]">
            <div className="relative w-[800px] h-[800px]">
              <Image
                src="/fundo.png"
                alt="Fundo 2"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bloco 2 */}
      <div
        className="absolute transition-all duration-1000"
        style={{
          top: isOpen ? '90%' : '60%',
          left: isOpen ? '90%' : '60%',
          transform: isOpen ? 'translate(0, 0)' : 'translate(-50%, -50%)',
          transitionProperty: 'top, left, transform',
        }}
      >
        {/* Conteúdo do Bloco 2 */}
        <div className="relative">
          <div className="absolute z-20  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative w-[600px] h-[600px]">
              <Image
                src="/flores.png"
                alt="Flores 2"
                layout="fill"
                objectFit="contain"
                className="rotate-[17deg]"
              />
            </div>
          </div>
          {/* Imagens de Fundo */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-[102deg]">
            <div className="relative w-[800px] h-[800px]">
              <Image
                src="/fundo.png"
                alt="Fundo 1"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          {/* Segunda Imagem de Fundo */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-[102deg]">
            <div className="relative w-[800px] h-[800px]">
              <Image
                src="/fundo.png"
                alt="Fundo 2"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
