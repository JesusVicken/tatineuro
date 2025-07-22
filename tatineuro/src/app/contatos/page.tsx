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
} from '@phosphor-icons/react/dist/ssr'

export default function ContactSection() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true, easing: 'ease-in-out' })
    }, [])

    const whatsappMessage =
        'Olá, gostaria de agendar uma consulta com a Dra. Tatiana Miranda.'

    return (
        <section className="relative w-full text-black" data-aos="fade-up">
            {/* Background Video */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/bg.mp4" type="video/mp4" />
                    Seu navegador não suporta vídeos HTML5.
                </video>
                <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Conteúdo Principal */}
            <div className="container mx-auto relative">
                <div className="py-12 px-4">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center" data-aos="fade-down">
                        Contatos & Redes Sociais
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Contato direto */}
                        <div className="space-y-4 p-6 rounded-lg bg-white/90" data-aos="fade-up" data-aos-delay="100">
                            <h3 className="text-xl font-semibold mb-4">Informações de Contato e Agendamentos</h3>
                            <p className="flex items-center gap-2 break-all">
                                <Envelope className="text-green-600 w-5 h-5 flex-shrink-0" />
                                <span className="text-sm sm:text-base">dratatianamirandaneuro@gmail.com</span>
                            </p>

                            <p className="flex items-center gap-2">
                                <Phone className="text-green-600 w-5 h-5" />
                                (61) 99830-1406
                            </p>

                            <p className="flex items-start gap-2">
                                <MapPin className="text-green-600 w-5 h-5 flex-shrink-0" />
                                <span>
                                    Brasília-DF e Maceió-AL <br />
                                    <span className="text-sm text-gray-600">
                                        Atendimentos presenciais e por{' '}
                                        <Link
                                            href="/telemed"
                                            className="text-green-700 underline hover:text-green-800 transition-colors"
                                        >
                                            Telemedicina
                                        </Link>
                                    </span>
                                </span>
                            </p>

                            {/* Botão centralizado com animação */}
                            <div className="mt-6 flex justify-center">
                                <a
                                    href={`https://wa.me/61998301406?text=${encodeURIComponent(whatsappMessage)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-md transition-colors animate-bounce"
                                >
                                    <WhatsappLogo className="w-5 h-5" weight="fill" />
                                    Agendar Consulta
                                </a>
                            </div>
                        </div>

                        {/* Redes Sociais */}
                        <div className="p-6 rounded-lg bg-white/90" data-aos="fade-up" data-aos-delay="200">
                            <h3 className="text-xl font-semibold mb-4">Redes Sociais</h3>
                            <p className="mb-6 text-gray-700">Siga a Dra. Tatiana Miranda</p>

                            <div className="flex justify-center gap-6 items-center">
                                <a
                                    href="https://www.instagram.com/tatianamirandaneuro"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    className="hover:scale-110 transition-transform"
                                >
                                    <img
                                        src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"
                                        alt="Instagram"
                                        className="w-7 h-7"
                                        style={{
                                            filter:
                                                'invert(28%) sepia(93%) saturate(3882%) hue-rotate(323deg) brightness(95%) contrast(102%)',
                                        }}
                                    />
                                </a>
                                <a
                                    href="https://www.facebook.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
                                    className="hover:scale-110 transition-transform"
                                >
                                    <img
                                        src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg"
                                        alt="Facebook"
                                        className="w-7 h-7"
                                        style={{
                                            filter:
                                                'invert(38%) sepia(90%) saturate(601%) hue-rotate(191deg) brightness(95%) contrast(97%)',
                                        }}
                                    />
                                </a>
                                <a
                                    href="https://www.youtube.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="YouTube"
                                    className="hover:scale-110 transition-transform"
                                >
                                    <img
                                        src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg"
                                        alt="YouTube"
                                        className="w-7 h-7"
                                        style={{
                                            filter:
                                                'invert(16%) sepia(100%) saturate(7491%) hue-rotate(358deg) brightness(89%) contrast(122%)',
                                        }}
                                    />
                                </a>
                            </div>
                        </div>

                        {/* Logo */}
                        <div className="flex items-center justify-center p-6 rounded-lg bg-white/90 md:col-span-2 lg:col-span-1" data-aos="fade-up" data-aos-delay="300">
                            <div className="relative w-full max-w-[250px] md:max-w-[300px] aspect-square">
                                <Image
                                    src="/tatilogo.png"
                                    alt="Logo Dra. Tatiana Miranda"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mapa */}
            <div className="w-screen h-[300px] md:h-[400px] lg:h-[500px]" data-aos="fade-up" data-aos-delay="400">

                <iframe
                    title="Localização Brasília"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245842.0198082934!2d-48.05315964892468!3d-15.72154228495493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3d18df9ae279%3A0x79188d5b54443465!2sBras%C3%ADlia%2C%20DF!5e0!3m2!1spt-BR!2sbr!4v1720546377670!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    style={{ border: 0 }}
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                ></iframe>
            </div>
        </section>
    )
}
