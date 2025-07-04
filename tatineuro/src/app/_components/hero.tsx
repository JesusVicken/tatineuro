'use client'

import Image from 'next/image'
import React, { useEffect } from 'react'
import { WhatsappLogoIcon, CheckCircle } from "@phosphor-icons/react/dist/ssr"
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Hero() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-in-out',
        })
    }, [])

    const specialties = [
        "Especialista em Enxaqueca, Parkinson e Transtornos do Movimento",
        "Toxina botulínica para doenças neurológicas",
        "Atendimento em Brasília, Maceió e Telemedicina"
    ]

    return (
        <section className="relative w-full h-[70vh] md:h-[80vh] lg:h-[85vh] overflow-hidden">
            {/* Imagem de fundo - MOBILE */}
            <Image
                src="/tati3.jpg"
                alt="Dra. Tatiana Miranda - Mobile"
                fill
                priority
                quality={100}
                className="absolute inset-0 w-full h-full object-cover object-[center_20%] md:hidden"
                data-aos="zoom-out"
                data-aos-delay="100"
            />

            {/* Imagem de fundo - DESKTOP */}
            <Image
                src="/tati1.jpg"
                alt="Dra. Tatiana Miranda - Desktop"
                fill
                priority
                quality={100}
                className="absolute inset-0 w-full h-full object-cover object-[center_0%] hidden md:block"
                data-aos="zoom-out"
                data-aos-delay="100"
            />

            {/* Overlay Gradiente */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* Conteúdo */}
            <div className="relative z-10 container mx-auto h-full flex items-end pb-8 md:items-center md:pb-0 px-4 md:px-6 lg:px-8">
                <div className="w-full max-w-2xl text-white space-y-2 md:space-y-4" data-aos="fade-up" data-aos-delay="300">
                    {/* Logo + Lista */}
                    <div
                        className="flex flex-col items-center md:items-start gap-0 md:gap-2"
                        data-aos="fade-right"
                        data-aos-delay="500"
                    >
                        <Image
                            src="/tatilogo.png"
                            alt="Dra. Tatiana Miranda - Neurologista"
                            width={400}
                            height={150}
                            className="object-contain w-full max-w-[300px] md:max-w-[400px] -mb-10 ml-40 md:ml-0"
                            priority
                        />

                        <ul className="space-y-2 w-full mt-0">
                            {specialties.map((item, index) => (
                                <li key={index} className="flex items-start gap-2">
                                    <CheckCircle
                                        weight="fill"
                                        className="text-green-400 w-5 h-5 flex-shrink-0 mt-0.5"
                                    />
                                    <span className="opacity-90 text-sm md:text-base">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Botão Desktop */}
                    <div className="hidden md:block pt-2 " data-aos="fade-up" data-aos-delay="800">
                        <WhatsAppButton />
                    </div>
                </div>
            </div>

            {/* Botão Flutuante Mobile */}
            <div className="md:hidden fixed bottom-6 right-6 z-20" data-aos="fade-up" data-aos-delay="700">
                <WhatsAppButton isMobile />
            </div>
        </section>
    )
}

function WhatsAppButton({ isMobile = false }: { isMobile?: boolean }) {
    return (
        <a
            href="https://wa.me/5582999098978?text=Olá, vim pelo site e gostaria de marcar uma consulta com a Dra. Tatiana Miranda."
            target="_blank"
            rel="noopener noreferrer"
            className={`
                flex items-center justify-center
                ${isMobile
                    ? 'w-14 h-14 rounded-full'
                    : 'px-8 py-3 rounded-md gap-1.5 text-sm max-w-fit'
                }
                bg-green-600 hover:bg-green-700 text-white
                font-medium transition-colors shadow-md hover:shadow-green-700/30
            `}
            aria-label="Agendar consulta via WhatsApp"
        >
            <WhatsappLogoIcon className={isMobile ? "w-7 h-7" : "w-4 h-4"} />
            {!isMobile && "Agendar Consulta"}
        </a>
    )
}
