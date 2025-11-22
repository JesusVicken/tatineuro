'use client'

import Image from "next/image"
import { Check, MapPin } from "lucide-react"
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"

export function About() {
    return (
        <section className="bg-white py-12">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Imagens */}
                    <div className="relative" data-aos="fade-up-right" data-aos-delay="300">
                        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-lg">
                            <Image
                                src="/tati2.jpg"
                                alt="Dra. Tatiana Miranda - Neurologista"
                                fill
                                quality={100}
                                className="object-cover hover:scale-110 transition-transform duration-300"
                                priority
                            />
                        </div>

                        <div className="absolute lg:left-12 lg:-bottom-8 left-1/5 bottom-20 transform -translate-x-1/2 lg:translate-x-0 w-24 h-24 lg:w-40 lg:h-40 rounded-lg overflow-hidden">
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

                    {/* Conteúdo textual */}
                    <div className="space-y-6 mt-10 lg:mt-0" data-aos="fade-up-left" data-aos-delay="300">
                        <h2 className="text-4xl font-bold text-gray-900">Sobre a Dra. Tatiana Miranda</h2>

                        <div className="flex items-center gap-2 text-gray-700">
                            <span className="text-lg font-medium">Neurologista</span>
                            
                        </div>

                        <p className="text-gray-700 text-justify">
                            A <strong>Dra. Tatiana Miranda</strong> é neurologista com especialização em Transtornos do Movimento, oferecendo atendimento humanizado e especializado em condições como doença de Parkinson, distonias, tremores e outros distúrbios do movimento.
                        </p>
                        <p className="text-gray-700 text-justify">
                            Com formação sólida e experiência clínica, a Dra. Tatiana se dedica ao diagnóstico preciso e tratamento personalizado, utilizando as mais modernas abordagens terapêuticas, incluindo aplicação de toxina botulínica para indicações neurológicas.
                        </p>
                        <p className="text-gray-700 text-justify">
                            Atendendo em Maceió e Brasília, além de consultas por telemedicina, a Dra. Tatiana combina expertise técnica com abordagem acolhedora, garantindo o melhor cuidado para seus pacientes.
                        </p>

                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Check className="text-green-600 mt-0.5 flex-shrink-0" />
                                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                                    <strong>CRM-DF 27724 -</strong>
                                    <strong>RQE 20779</strong>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="text-green-600 mt-0.5 flex-shrink-0" />
                                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                                    <strong>CRM-AL 7408 -</strong>
                                    <strong>RQE 6168</strong>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="text-green-600 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700 leading-relaxed">
                                    Neurologista especialista em Distúrbios do Movimento, com foco em tremores, Doença de Parkinson, cefaleias e aplicação de toxina botulínica.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="text-green-600 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">
                                    Atendimento em Maceió, Brasília e Telemedicina
                                </span>
                            </li>
                        </ul>

                        <div className="flex flex-wrap gap-3 pt-4">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://wa.me/5561998301406?text=Olá, vim pelo site e gostaria de marcar uma consulta com a Dra. Tatiana Miranda."
                                className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2 px-4 py-2 rounded-md transition-colors"
                            >
                                <WhatsappLogoIcon className="w-5 h-5" />
                                Agendar Consulta
                            </a>

                            <Link
                                href="/sobre"
                                className="flex items-center gap-2 px-4 py-2 border border-gray-400 rounded-md hover:bg-gray-100 transition"
                            >
                                <MapPin className="w-5 h-5 text-gray-800" />
                                Locais de Atendimento
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}