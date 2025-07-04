'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'
import {
    WhatsappLogo,
    MapPin,
    Phone,
    IdentificationBadge,
    Syringe,
    Envelope,
} from '@phosphor-icons/react/dist/ssr'

export default function SobrePage() {
    const whatsappNumber = '5561994258350'
    const whatsappMessage = 'Olá, vim pelo site e gostaria de marcar uma consulta com a Dra. Tatiana Miranda.'
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

    useEffect(() => {
        AOS.init({ duration: 1000, once: true })
    }, [])

    return (
        <>
            <main className="bg-white py-12">
                <div className="container px-4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
                    {/* Imagem */}
                    <div className="relative" data-aos="fade-up-right">
                        <div className="relative w-full h-[500px] sm:h-[550px] md:h-[600px] rounded-3xl overflow-hidden shadow-lg">
                            <Image
                                src="/tati4.jpg"
                                alt="Dra. Tatiana Miranda - Neurologista"
                                fill
                                quality={100}
                                className="object-cover object-top hover:scale-110 transition-transform duration-300"
                                priority
                            />
                        </div>

                        {/* Logo sobre a imagem no desktop */}
                        <div className="hidden lg:block absolute lg:left-12 lg:-bottom-8 w-40 h-40 rounded-lg overflow-hidden">
                            <Image
                                src="/tatilogo1.png"
                                alt="Dra. Tatiana Miranda - Neurologista"
                                fill
                                quality={100}
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>

                    {/* Texto */}
                    <div className="space-y-4 mt-10 lg:mt-0 text-gray-700" data-aos="fade-up-left">
                        <div className="w-full max-w-[280px] md:max-w-[380px] mx-auto md:mx-0">
                            <Image
                                src="/tatilogo2.png"
                                alt="Dra. Tatiana Miranda - Neurologista"
                                width={380}
                                height={120}
                                className="w-full h-auto object-contain"
                                priority
                            />
                        </div>

                        <p className="text-center md:text-left text-base">
                            <strong>Especialista em Aplicação de Toxina Botulínica com Fins Neurológicos</strong> 🧠
                        </p>

                        <p className="text-justify text-sm md:text-base">
                            Sou médica pela Universidade Federal de Alagoas (UFAL), neurologista pelo Hospital de Base do Distrito Federal (HBDF) e fellowship em Distúrbios do Movimento também pelo HBDF.
                        </p>
                        <p className="text-justify text-sm md:text-base">
                            A paixão por neurologia foi despertada nos primeiros anos de faculdade. Achei incrível descobrir que antes da execução de um "simples" movimento, havia um mecanismo complexo envolvido...
                        </p>
                        <p className="text-justify text-sm md:text-base">
                            Nada é pequeno na neurologia. Quem vive com dor, rigidez ou postura inadequada sabe como uma melhora pode ser transformadora.
                        </p>
                        <p className="text-justify text-sm md:text-base">
                            A dor crônica não é frescura. É invisível, mas real. O acolhimento muda tudo.
                        </p>
                        <p className="text-justify text-sm md:text-base">
                            Por isso, utilizo a toxina botulínica como aliada em diversos tratamentos neurológicos. Ela pode ser revolucionária.
                        </p>

                        <ul className="space-y-2 pt-2 text-sm md:text-base">
                            <li className="flex items-center gap-2 justify-center md:justify-start">
                                <IdentificationBadge className="text-green-600 w-5 h-5" />
                                <strong>CRM-DF 27724</strong> | RQE 20779 | CRM-AL 7408
                            </li>
                            <li className="flex items-center gap-2 justify-center md:justify-start">
                                <Phone className="text-green-600 w-5 h-5" />
                                Transtornos do Movimento e Doenças Neurodegenerativas
                            </li>
                            <li className="flex items-center gap-2 justify-center md:justify-start">
                                <Syringe className="text-green-600 w-5 h-5" />
                                Toxina Botulínica com Fins Neurológicos
                            </li>
                            <li className="flex items-center gap-2 justify-center md:justify-start">
                                <MapPin className="text-green-600 w-5 h-5" />
                                Maceió • Brasília • Telemedicina
                            </li>
                        </ul>

                        <div className="flex justify-center md:justify-start pt-4">
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2 px-4 py-2 rounded-md transition"
                            >
                                <WhatsappLogo className="w-5 h-5" />
                                Agendar Consulta
                            </a>
                        </div>
                    </div>
                </div>

                {/* Seção Contatos + Redes Sociais */}
                <section className="container mx-auto px-4 py-14 mt-16 bg-white text-black" data-aos="fade-up">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Contatos & Redes Sociais</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {/* Contato */}
                        <div className="text-center sm:text-left">
                            <div className="space-y-3 text-gray-800">
                                <p className="flex items-center justify-center sm:justify-start gap-2">
                                    <Envelope className="text-green-600 w-5 h-5" />
                                    tatianamirandaneuro@gmail.com
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
                            </div>

                            <a
                                href={`https://wa.me/82999098978?text=${encodeURIComponent('Olá, gostaria de agendar uma consulta com a Dra. Tatiana Miranda.')}`}
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
                                <a href="https://www.instagram.com/tatianamirandaneuro" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
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
                                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
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
                                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
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

                        {/* Logo ou espaço extra */}
                        <div className="hidden lg:block" />
                    </div>
                </section>
            </main>
        </>
    )
}
