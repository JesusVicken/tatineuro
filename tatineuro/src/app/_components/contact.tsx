'use client'

import { useEffect } from 'react'
import {
    WhatsappLogo,
    MapPin,
    Envelope,
    Phone
} from '@phosphor-icons/react/dist/ssr'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'

export default function Contact() {
    const whatsappNumber = '82999098978'
    const whatsappMessage = 'Olá, gostaria de agendar uma consulta com a Dra. Tatiana Miranda.'
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

    useEffect(() => {
        AOS.init({ duration: 800, once: true, easing: 'ease-in-out' })
    }, [])

    return (
        <section className="bg-white text-black">
            <div className="container mx-auto px-4 py-16">
                {/* Título e descrição */}
                <div className="text-center mb-12" data-aos="fade-down">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
                        Contatos
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto mt-2 text-base md:text-lg">
                        Entre em contato com a Dra. Tatiana Miranda para agendamentos, dúvidas ou informações.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* Logo com ajustes responsivos */}
                    <div
                        data-aos="fade-up"
                        className="flex justify-center md:justify-start items-center md:items-start mt-0 md:mt-[-2rem]"
                    >
                        <Image
                            src="/tatilogo.png"
                            alt="Logo Tati Neuro"
                            width={300}
                            height={150}
                            priority
                            className="w-72 md:w-52 lg:w-64 object-contain"
                        />
                    </div>

                    {/* Informações de Contato + WhatsApp */}
                    <div data-aos="fade-up" data-aos-delay="100">
                        <h3 className="text-2xl font-semibold mb-4 text-black">Informações de Contato</h3>
                        <div className="space-y-4 text-gray-800">
                            <p className="flex items-center gap-2">
                                <Envelope className="text-green-600 w-5 h-5" />
                                tatianamirandaneuro@gmail.com
                            </p>
                            <p className="flex items-center gap-2">
                                <Phone className="text-green-600 w-5 h-5" />
                                (82) 99909-8978
                            </p>
                            <p className="flex items-start gap-2">
                                <MapPin className="text-green-600 w-5 h-5 flex-shrink-0" />
                                Brasília-DF <br />
                                <span className="text-sm text-gray-600">
                                    (Atendimento também em Maceió e por Telemedicina)
                                </span>
                            </p>
                        </div>

                        {/* Botão WhatsApp abaixo das infos */}
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-md transition-colors"
                            data-aos="zoom-in"
                            data-aos-delay="200"
                        >
                            <WhatsappLogo className="w-5 h-5" weight="fill" />
                            Contato via WhatsApp
                        </a>
                    </div>

                    {/* Redes Sociais */}
                    <div data-aos="fade-up" data-aos-delay="200">
                        <h3 className="text-2xl font-semibold mb-4 text-black">Redes Sociais</h3>
                        <p className="mb-4 text-gray-700">Siga e acompanhe os conteúdos da Dra. Tatiana:</p>
                        <div className="flex gap-6 items-center">
                            <a
                                href="https://www.instagram.com/tatianamirandaneuro"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                            >
                                <img
                                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"
                                    alt="Instagram"
                                    className="w-8 h-8 hover:scale-110 transition-transform"
                                    style={{
                                        filter:
                                            'invert(28%) sepia(93%) saturate(3882%) hue-rotate(323deg) brightness(95%) contrast(102%)'
                                    }}
                                />
                            </a>
                            <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                            >
                                <img
                                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg"
                                    alt="Facebook"
                                    className="w-8 h-8 hover:scale-110 transition-transform"
                                    style={{
                                        filter:
                                            'invert(38%) sepia(90%) saturate(601%) hue-rotate(191deg) brightness(95%) contrast(97%)'
                                    }}
                                />
                            </a>
                            <a
                                href="https://www.youtube.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="YouTube"
                            >
                                <img
                                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg"
                                    alt="YouTube"
                                    className="w-8 h-8 hover:scale-110 transition-transform"
                                    style={{
                                        filter:
                                            'invert(16%) sepia(100%) saturate(7491%) hue-rotate(358deg) brightness(89%) contrast(122%)'
                                    }}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mapa */}
            <div className="w-full h-[300px] md:h-[400px] lg:h-[450px]">
                <iframe
                    title="Localização Brasília"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.328389056057!2d-47.88278592433961!3d-15.793466184825492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a309ae2a9ae0f%3A0x3a9a6d4b4e21f6c4!2sEsplanada%20dos%20Minist%C3%A9rios%2C%20Bras%C3%ADlia%20-%20DF!5e0!3m2!1spt-BR!2sbr!4v1712345678901!5m2!1spt-BR!2sbr"
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
