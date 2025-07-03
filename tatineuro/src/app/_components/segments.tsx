'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { useCallback, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import AOS from 'aos'
import 'aos/dist/aos.css'

type Service = {
    title: string
    desc: string
    image: string
}

const services: Service[] = [
    {
        title: 'Sialorreia',
        desc: 'Tratamento para a produção excessiva de saliva (sialorreia), melhorando o conforto e a qualidade de vida do paciente.',
        image: '/Sialorreia.jpg'
    },
    {
        title: 'Blefaroespasmo',
        desc: 'Aplicação que relaxa os músculos ao redor dos olhos, aliviando o piscar e fechamento involuntário e restaurando a visão funcional.',
        image: '/Blefaroespasmo.jpg'
    },
    {
        title: 'Hiperidrose Axilar',
        desc: 'Solução eficaz para o controle do suor excessivo nas axilas, proporcionando mais segurança e bem-estar no dia a dia.',
        image: '/Hiperidrose.png'
    },
    {
        title: 'Paralisia Cerebral',
        desc: 'Uso terapêutico para manejar a espasticidade e rigidez muscular, facilitando movimentos e cuidados em pacientes com paralisia cerebral.',
        image: '/paralisia.png'
    },
    {
        title: 'Espasticidade pós-AVC',
        desc: 'Auxílio na reabilitação de pacientes pós-AVC, reduzindo a rigidez muscular (espasticidade) para melhorar a mobilidade e a função.',
        image: '/Espasticidade.jpg'
    },
    {
        title: 'Espasmo Hemifacial',
        desc: 'Controle dos espasmos involuntários dos músculos de um lado do rosto, devolvendo a simetria e o conforto facial.',
        image: '/espasmo.png'
    },
    {
        title: 'Distonia Cervical',
        desc: 'Tratamento focado em aliviar as contrações musculares do pescoço, reduzindo a dor e corrigindo posturas anormais da cabeça.',
        image: '/distonia.png'
    },
    {
        title: 'Cãibra do Escrivão',
        desc: 'Abordagem para relaxar músculos da mão e antebraço, aliviando as cãibras e espasmos que surgem ao escrever ou em outras tarefas finas.',
        image: '/escrivao.jpg'
    },
    {
        title: 'Enxaqueca Crônica',
        desc: 'Terapia preventiva para pacientes com dor de cabeça crônica e frequente, visando reduzir a intensidade e a frequência das crises.',
        image: '/dorcabeca.jpg'
    },
]

export default function Segments() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'center' })

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

    useEffect(() => {
        AOS.init({ duration: 800, once: true, easing: 'ease-in-out' })
    }, [])

    return (
        <section className="py-20 bg-black relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-4xl font-bold mb-4 text-white">Áreas de Atuação</h2>
                    <p className="text-zinc-300 max-w-2xl mx-auto text-base">
                        Conheça os principais áreas de cuidado neurológicos.
                    </p>
                </div>

                <div className="relative" data-aos="fade-up" data-aos-delay="200">
                    <button
                        onClick={scrollPrev}
                        className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-[-1.5rem] z-20 p-2 bg-white shadow-md rounded-full hover:bg-gray-100 transition"
                        aria-label="Scroll left"
                        data-aos="fade-right"
                        data-aos-delay="300"
                    >
                        <ChevronLeft className="h-6 w-6 text-black" />
                    </button>

                    <button
                        onClick={scrollNext}
                        className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-[-1.5rem] z-20 p-2 bg-white shadow-md rounded-full hover:bg-gray-100 transition"
                        aria-label="Scroll right"
                        data-aos="fade-left"
                        data-aos-delay="300"
                    >
                        <ChevronRight className="h-6 w-6 text-black" />
                    </button>

                    <div ref={emblaRef} className="overflow-hidden">
                        <div className="flex gap-6 px-6">
                            {services.map((service, index) => (
                                <Card
                                    key={index}
                                    className="scroll-ml-6 scroll-snap-start min-w-[90%] sm:min-w-[320px] max-w-sm bg-zinc-900 border border-zinc-700 shadow-sm rounded-xl overflow-hidden transition-transform duration-300"
                                    data-aos="fade-up"
                                    data-aos-delay={100 * (index % 3)}
                                >
                                    <div className="overflow-hidden">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            width={400}
                                            height={250}
                                            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <CardHeader>
                                        <CardTitle className="text-lg font-semibold text-white">{service.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-zinc-300 text-sm text-left">{service.desc}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
