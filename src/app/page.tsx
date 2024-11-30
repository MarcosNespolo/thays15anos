"use client"

import Image from 'next/image';
import { useState } from 'react';
import { Great_Vibes, Old_Standard_TT } from 'next/font/google';
import Card from './card';

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-great-vibes',
})

const oldStandard = Old_Standard_TT({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-old-standard',
})

export default function AnimatedBlocks() {
  const [isOpen, setIsOpen] = useState(false)
  const [showGifts, setShowGifts] = useState(false)

  const handleEnvelopeClick = () => {
    setIsOpen(!isOpen)
  }

  const handleShowGiftsClick = () => {
    setShowGifts(!showGifts)
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
    {/* Imagem do Envelope */}
    <div
      className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-50 transition-opacity duration-1000 ${
       (isOpen) ? 'opacity-0 pointer-events-none' : 'opacity-100'
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
          transition-opacity ${showGifts ? 'duration-[500ms]' : 'duration-[2000ms]'}
          ${!isOpen || showGifts ? 'opacity-0 pointer-events-none' : 'opacity-100'}
          absolute z-40 mt-12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
        `}
      >
        <div className="relative min-w-[280px] ml-3">
          <div className="absolute w-[32px] h-[32px] sm:w-[66px] sm:h-[66px] top-1 right-8 sm:top-2 sm:-right-12">
            <Image
              src="/borboleta.png"
              alt="Borboleta"
              className={`drop-shadow`}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className={`${greatVibes.variable} font-great-vibes text-[64px] sm:text-[124px] text-center text-[#736A9B] text-shadow-xl`}>
            Thays
          </div>
          <div 
            className={`
              ${greatVibes.variable} font-great-vibes text-[32px] sm:text-[64px] text-[#8A7CCB]
              absolute 
              left-6 sm:-left-12 
              -bottom-4 sm:-bottom-6
            `}>
            15 anos
          </div>
        </div>
        <div className={`${oldStandard.variable} font-old-standard text-[#8A7CCB] flex flex-col items-center mt-12 text-[22px] sm:text-[36px]`}>
          <div className='flex flex-row gap-4 sm:gap-8 items-center'>
            <div className={`border-y-2 pt-2 pb-0.5`}>
              SÁB
            </div>
            <div className={`text-[46px] sm:text-[82px] pt-3`}>
              11
            </div>
            <div className={`border-y-2 pt-1 -pb-0.5 text-[24px] sm:text-[40px]`}>
              19h
            </div>
          </div>
          <div className={`pl-2 -mt-2 sm:-mt-4`}>
            JANEIRO
          </div>
        </div>
        <div className='flex flex-col gap-2 mt-12 sm:mt-24 text-sm sm:text-base'>
          <a 
            target='_blank'
            href='https://api.whatsapp.com/send?phone=5541997597912&text=Ol%C3%A1%2C%20confirmo%20minha%20presen%C3%A7a%20no%20seu%20anivers%C3%A1rio%20de%2015%20anos%21'
            className='text-center cursor-pointer drop-shadow hover:drop-shadow-md hover:brightness-105 active:brightness-95 border p-3 rounded-full border-1 border-[#8A7CCB] text-[#736A9B] font-semibold bg-white'>
                Confirmar presença
          </a>
          <a 
            onClick={() => handleShowGiftsClick()}
            className='text-center cursor-pointer drop-shadow hover:drop-shadow-md hover:brightness-105 active:brightness-95 border p-3 rounded-full border-1 border-[#8A7CCB] text-[#736A9B] font-semibold bg-white'>
                Presentear
          </a>
          <a 
            target='_blank'
            href='https://www.google.com/maps/place/Av.+Mal.+Floriano+Peixoto,+4845+-+Hauer,+Curitiba+-+PR,+81610-000/@-25.4708667,-49.2547532,17z/data=!3m1!4b1!4m6!3m5!1s0x94dce4dae185505d:0x3c26a75bc53e226f!8m2!3d-25.4708716!4d-49.2521729!16s%2Fg%2F11f3nh9tp7?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D'
            className='text-center cursor-pointer drop-shadow hover:drop-shadow-md hover:brightness-105 active:brightness-95 border p-3 rounded-full border-1 border-[#8A7CCB] text-[#736A9B] font-semibold bg-white'>
                Como chegar
          </a>
        </div>
      </div>

      {/* Presentes */}
      <div
        className={`
          flex flex-col gap-12
          transition-opacity duration-[500ms]
          ${!showGifts ? 'opacity-0 pointer-events-none' : 'opacity-100'}
          absolute z-40 mt-12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
        `}
      >
          <div className='flex flex-row gap-12'>
            <Card
              title='Salgadinho Cheetos requeijão'
              description='R$ 50,00'
              image='/salgadinho.png'
              link='https://nubank.com.br/cobrar/yn3w9/6739e4a4-3cc6-48e3-9256-53045a0e9251'
            />
            <Card
              title='Pizza de frango com catupiry'
              description='R$ 90,00'
              image='/pizza.png'
              link='https://nubank.com.br/cobrar/yn3w9/6738effd-1b5a-40ca-89c5-b383fc2cf707'
            />
            <Card
              title='Body Splash We Pink'
              description='R$ 150,00'
              image='/body_splash.png'
              link='https://nubank.com.br/cobrar/yn3w9/6738f022-4141-4512-95e1-572992ef7adf'
            />
          </div>
        <div className='flex flex-row gap-12'>
          <Card
            title='Kit Glossliciuous Franciny Ehlke'
            description='R$ 250,00'
            image='/kit.png'
            link='https://nubank.com.br/cobrar/yn3w9/6738f062-ac1a-44ad-b359-97eb2e18e62e'
          />
          <Card
            title='Vestido de prenda gaúcha'
            description='R$ 500,00'
            image='/vestido.png'
            link='https://nubank.com.br/cobrar/yn3w9/6739e4d0-4022-41cc-bb67-cbbef4ba30c8'
          />
          <Card
            title='Pulseira de Prata Pandora'
            description='R$ 900,00'
            image='/pulseira.png'
            link='https://nubank.com.br/cobrar/yn3w9/6738f0b0-3612-4a38-8d7e-1bd89e47e718'
          />
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
            <div className="relative w-[300px] h-[300px] sm:w-[600px] sm:h-[600px]">
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
            <div className="relative w-[400px] h-[400px] sm:w-[800px] sm:h-[800px]">
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
            <div className="relative w-[400px] h-[400px] sm:w-[800px] sm:h-[800px]">
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
          <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative w-[300px] h-[300px] sm:w-[600px] sm:h-[600px]">
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
            <div className="relative w-[400px] h-[400px] sm:w-[800px] sm:h-[800px]">
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
            <div className="relative w-[400px] h-[400px] sm:w-[800px] sm:h-[800px]">
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
