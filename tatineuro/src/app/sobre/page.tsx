'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'
import Link from 'next/link'
import {
    WhatsappLogo,
    MapPin,
    Phone,
    Envelope,
    IdentificationBadge,
    Syringe,
    Brain,
    Heartbeat,
    InstagramLogo,
    FacebookLogo,
    YoutubeLogo,
} from '@phosphor-icons/react'

export default function SobrePage() {
    const whatsappNumber = '5561994258350'
    const whatsappMessage =
        'Olá, vim pelo site e gostaria de marcar uma consulta com a Dra. Tatiana Miranda.'
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-in-out',
        })
    }, [])

    return (
        <main className="bg-white py-12">
            {/* Seção principal */}
            <div className="container px-4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
                {/* Imagem */}
                <div className="relative" data-aos="fade-right">
                    <div className="relative w-full h-[500px] sm:h-[550px] md:h-[600px] rounded-3xl overflow-hidden shadow-lg">
                        <Image
                            src="/tati4.jpg"
                            alt="Dra. Tatiana Miranda - Neurologista"
                            fill
                            quality={100}
                            className="object-cover object-top hover:scale-110 transition-transform duration-500"
                            priority
                        />
                    </div>

                    <div className="hidden lg:block absolute lg:left-12 lg:-bottom-8 w-40 h-40 rounded-lg overflow-hidden">
                        <Image
                            src="/tatilogo1.png"
                            alt="Logo Dra. Tatiana Miranda"
                            fill
                            quality={100}
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>

                {/* Texto */}
                <div className="space-y-4 mt-10 lg:mt-0 text-gray-700" data-aos="fade-left">
                    <div className="w-full max-w-[280px] md:max-w-[380px] mx-auto md:mx-0">
                        <Image
                            src="/tatilogo2.png"
                            alt="Logo Dra. Tatiana Miranda"
                            width={380}
                            height={120}
                            className="w-full h-auto object-contain"
                            priority
                        />
                    </div>

                    <p className="text-center md:text-left text-base font-medium">
                        <span className="text-green-600">
                            Especialista em Aplicação de Toxina Botulínica
                        </span>{' '}
                        🧠
                    </p>

                    <div className="space-y-3 text-sm md:text-base" data-aos="fade-up" data-aos-delay="100">
                        <p className="text-justify">
                            Sou médica pela Universidade Federal de Alagoas (UFAL), neurologista e fellowship em Distúrbios do Movimento pelo Hospital de Base do Distrito Federal (HBDF), com ampla experiência em aplicação de Toxina Botulínica.
                        </p>
                        <p className="text-justify">
                            A paixão por neurologia surgiu cedo, nos primeiros períodos de medicina. Achei fascinante como antes de qualquer movimento existe uma complexidade incrível de circuitos por trás.
                        </p>
                        <p className="text-justify">
                            Descobri também que a dor crônica parece invisível, mas é real. Compreender isso faz parte do tratamento.
                        </p>
                        <p className="text-justify">
                            Nada é pequeno na neurologia. Cada passo é uma conquista. E a toxina botulínica é uma aliada poderosa nesse processo.
                        </p>
                    </div>

                    <ul className="space-y-3 pt-2 text-sm md:text-base" data-aos="fade-up" data-aos-delay="300">
                        <li className="flex items-center gap-2 justify-center md:justify-start">
                            <IdentificationBadge className="text-green-600 w-5 h-5 flex-shrink-0" />
                            <span><strong>CRM-DF 27724</strong> | RQE 20779 | <strong>CRM-AL 7408</strong></span>
                        </li>
                        <li className="flex items-center gap-2 justify-center md:justify-start" title="Cefaleia, dores crônicas, enxaqueca">
                            <Brain className="text-purple-600 w-5 h-5 flex-shrink-0" />
                            <span>Especialista em Cefaleia e Dor Crônica</span>
                        </li>
                        <li className="flex items-center gap-2 justify-center md:justify-start" title="Movimentos involuntários e distonias">
                            <Heartbeat className="text-red-500 w-5 h-5 flex-shrink-0" />
                            <span>Transtornos do Movimento</span>
                        </li>
                        <li className="flex items-center gap-2 justify-center md:justify-start" title="Toxina botulínica terapêutica">
                            <Syringe className="text-blue-600 w-5 h-5 flex-shrink-0" />
                            <span>Toxina Botulínica com fins Neurológicos</span>
                        </li>
                        <li className="flex items-center gap-2 justify-center md:justify-start">
                            <MapPin className="text-pink-600 w-5 h-5 flex-shrink-0" />
                            <span>
                                Maceió • Brasília •{' '}
                                <Link
                                    href="/telemed"
                                    className="text-green-700 underline underline-offset-2 hover:text-green-800 transition-colors"
                                    title="Saiba mais sobre Telemedicina"
                                >
                                    Telemedicina
                                </Link>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Contatos e Redes */}
            <section
                className="container mx-auto px-4 py-14 mt-16 bg-white text-black"
                data-aos="fade-up"
            >
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Contatos & Redes Sociais</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {/* Contato */}
                    <div className="text-center sm:text-left" data-aos="fade-up" data-aos-delay="100">
                        <div className="space-y-3 text-gray-800">
                            <p className="flex items-center justify-center sm:justify-start gap-2 break-all">
                                <Envelope className="text-green-600 w-5 h-5 flex-shrink-0" />
                                <span className="text-sm sm:text-base">dratatianamirandaneuro@gmail.com</span>
                            </p>
                            <p className="flex items-center justify-center sm:justify-start gap-2">
                                <Phone className="text-green-600 w-5 h-5" />
                                (61) 99830-1406
                            </p>
                            <p className="flex items-start justify-center sm:justify-start gap-2">
                                <MapPin className="text-green-600 w-5 h-5 flex-shrink-0" />
                                <span>
                                    Brasília-DF <br />
                                    <span className="text-sm text-gray-600">
                                        (Atendimento também em Maceió e por{' '}
                                        <Link
                                            href="/telemed"
                                            className="text-green-700 underline underline-offset-2 hover:text-green-800"
                                            title="Saiba mais sobre Telemedicina"
                                        >
                                            Telemedicina
                                        </Link>)
                                    </span>
                                </span>
                            </p>
                        </div>

                        <a
                            href={`https://wa.me/82999098978?text=${encodeURIComponent(
                                'Olá, gostaria de agendar uma consulta com a Dra. Tatiana Miranda.'
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-md transition-colors"
                        >
                            <WhatsappLogo className="w-5 h-5" weight="fill" />
                            Agendar Consulta
                        </a>
                    </div>

                    {/* Redes Sociais */}
                    <div className="text-center" data-aos="fade-up" data-aos-delay="200">
                        <p className="mb-4 text-gray-700">Siga a Dra. Tatiana Miranda nas Redes Sociais</p>
                        <div className="flex justify-center gap-6 items-center">
                            <a
                                href="https://www.instagram.com/tatianamirandaneuro"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Instagram"
                            >
                                <InstagramLogo className="text-pink-500 w-7 h-7 hover:scale-110 transition-transform" />
                            </a>
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" title="Facebook">
                                <FacebookLogo className="text-blue-700 w-7 h-7 hover:scale-110 transition-transform" />
                            </a>
                            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" title="YouTube">
                                <YoutubeLogo className="text-red-600 w-7 h-7 hover:scale-110 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Logo decorativa */}
                    <div className="hidden lg:flex items-center justify-center -mt-12" data-aos="fade-up" data-aos-delay="300">
                        <div className="relative w-60 h-60">
                            <Image
                                src="/tatilogo.png"
                                alt="Logo Dra. Tatiana Miranda"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
