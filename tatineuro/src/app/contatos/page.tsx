'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'
import {
    WhatsappLogo,
    MapPin,
    Phone,
    Envelope,
} from '@phosphor-icons/react/dist/ssr'

export default function ContactSection() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true })
    }, [])

    const whatsappMessage =
        'Olá, gostaria de agendar uma consulta com a Dra. Tatiana Miranda.'

    return (
        <section className="bg-white py-14 px-4 text-black" data-aos="fade-up">
            <div className="container mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
                    Contatos & Redes Sociais
                </h2>

                <div className="flex flex-col lg:grid lg:grid-cols-3 gap-10 items-center">
                    {/* Contato direto */}
                    <div className="text-center sm:text-left space-y-3 text-gray-800">
                        <p className="flex items-center justify-center sm:justify-start gap-2 break-all">
                            <Envelope className="text-green-600 w-5 h-5 flex-shrink-0" />
                            <span className="text-sm sm:text-base">tatianamirandaneuro@gmail.com</span>
                        </p>

                        <p className="flex items-center justify-center sm:justify-start gap-2">
                            <Phone className="text-green-600 w-5 h-5" />
                            (82) 99909-8978
                        </p>

                        <p className="flex items-start justify-center sm:justify-start gap-2">
                            <MapPin className="text-green-600 w-5 h-5 flex-shrink-0" />
                            <span>
                                Brasília-DF <br />
                                <span className="text-sm text-gray-600">
                                    (Atendimento também em Maceió e por Telemedicina)
                                </span>
                            </span>
                        </p>

                        <a
                            href={`https://wa.me/82999098978?text=${encodeURIComponent(whatsappMessage)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-md transition-colors"
                        >
                            <WhatsappLogo className="w-5 h-5" weight="fill" />
                            WhatsApp
                        </a>
                    </div>

                    {/* Redes Sociais */}
                    <div className="text-center sm:text-left">
                        <h3 className="text-xl font-semibold mb-4 text-black">Redes Sociais</h3>
                        <p className="mb-4 text-gray-700">Siga a Dra. Tatiana:</p>

                        <div className="flex justify-center sm:justify-start gap-6 items-center">
                            <a
                                href="https://www.instagram.com/tatianamirandaneuro"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                            >
                                <img
                                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"
                                    alt="Instagram"
                                    className="w-7 h-7 hover:scale-110 transition-transform"
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
                            >
                                <img
                                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg"
                                    alt="Facebook"
                                    className="w-7 h-7 hover:scale-110 transition-transform"
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
                            >
                                <img
                                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg"
                                    alt="YouTube"
                                    className="w-7 h-7 hover:scale-110 transition-transform"
                                    style={{
                                        filter:
                                            'invert(16%) sepia(100%) saturate(7491%) hue-rotate(358deg) brightness(89%) contrast(122%)',
                                    }}
                                />
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center justify-center">
                        <div className="relative w-50 h-50 sm:w-52 sm:h-52 lg:w-60 lg:h-60">
                            <Image
                                src="/tatilogo.png"
                                alt="Logo Dra. Tatiana Miranda"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
