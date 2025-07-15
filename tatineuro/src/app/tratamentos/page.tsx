'use client'

import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'
import useEmblaCarousel from 'embla-carousel-react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import {
    Card,
    CardHeader,
    CardContent,
    CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type Service = {
    title: string
    desc: string
    image: string
}

// Tratamentos com Toxina
const toxinTreatments: Service[] = [
    { title: 'Enxaqueca Crônica', desc: 'Tratamento preventivo para crises intensas e frequentes de enxaqueca.', image: '/dorcabeca.jpg' },
    { title: 'Bruxismo', desc: 'Alívio da dor e do desgaste dental através da aplicação de toxina botulínica.', image: '/bruxismo.jpeg' },
    { title: 'Espasmo Hemifacial', desc: 'Alívio dos espasmos musculares involuntários de um lado do rosto.', image: '/espasmo.jpg' },
    { title: 'Blefaroespasmo', desc: 'Relaxamento dos músculos ao redor dos olhos, reduzindo contrações involuntárias.', image: '/Blefaroespasmo.jpg' },
    { title: 'Espasticidade pós-AVC', desc: 'Melhora da mobilidade e redução da rigidez após AVC.', image: '/Espasticidade.jpg' },
    { title: 'Paralisia Cerebral', desc: 'Redução da rigidez muscular em pacientes com paralisia cerebral.', image: '/paralisia.png' },
    { title: 'Sialorreia', desc: 'Tratamento para produção excessiva de saliva.', image: '/Sialorreia.jpg' },
    { title: 'Distonia Cervical', desc: 'Correção de posturas anormais da cabeça e pescoço.', image: '/distonia.png' },
    { title: 'Cãibra do Escrivão', desc: 'Redução de espasmos nos movimentos finos das mãos.', image: '/escrivao.jpg' },
]

// Demais condições atendidas
const generalTreatments: Service[] = [
    {
        title: 'Doença de Parkinson',
        desc: 'Bradicinesia, rigidez e tremores. Pico aos 60 anos. Controle possível dos sintomas.',
        image: '/parkinson.jpg',
    },
    {
        title: 'Tremor Essencial',
        desc: 'Tremor simétrico de ação, comum nas mãos, voz e braços. Causa não relacionada ao Parkinson.',
        image: '/tremor.jpg',
    },
    {
        title: 'Enxaqueca',
        desc: 'Dor intensa e pulsátil, com náuseas e sensibilidade à luz. Doença neurológica hereditária.',
        image: '/enxaqueca.webp',
    },
]

export default function TratamentosPage() {
    const [activeTab, setActiveTab] = useState<'toxina' | 'geral'>('toxina')
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' })

    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setPrevBtnDisabled(!emblaApi.canScrollPrev())
        setNextBtnDisabled(!emblaApi.canScrollNext())
    }, [emblaApi])

    useEffect(() => {
        AOS.init({ duration: 700, once: true, easing: 'ease-in-out', offset: 80 })
    }, [])

    useEffect(() => {
        if (!emblaApi) return
        onSelect()
        emblaApi.on('select', onSelect)
        emblaApi.on('reInit', onSelect)
        return () => {
            emblaApi.off('select', onSelect)
            emblaApi.off('reInit', onSelect)
        }
    }, [emblaApi, onSelect])

    useEffect(() => {
        if (emblaApi) {
            emblaApi.reInit()
            emblaApi.scrollTo(0, true)
        }
    }, [activeTab, emblaApi])

    const selectedTreatments = activeTab === 'toxina' ? toxinTreatments : generalTreatments

    return (
        <section className="bg-black min-h-screen py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-10" data-aos="fade-up">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-snug">
                        Tratamentos Neurológicos
                    </h1>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                        Conheça os tratamentos realizados pela Dra. Tatiana Miranda, tanto com toxina botulínica e atendimentos clínicos gerais.
                    </p>
                </div>

                <div className="flex justify-center gap-2 sm:gap-4 mb-8" data-aos="fade-up" data-aos-delay="100">
                    <Button
                        className={cn(
                            'border text-sm px-4 py-2 rounded-md transition-all',
                            activeTab === 'toxina'
                                ? 'bg-zinc-700 text-white border-zinc-500'
                                : 'bg-zinc-900 text-zinc-400 border-zinc-700 hover:bg-zinc-800 hover:text-white'
                        )}
                        onClick={() => setActiveTab('toxina')}
                    >
                        Com Toxina Botulínica
                    </Button>
                    <Button
                        className={cn(
                            'border text-sm px-4 py-2 rounded-md transition-all',
                            activeTab === 'geral'
                                ? 'bg-zinc-700 text-white border-zinc-500'
                                : 'bg-zinc-900 text-zinc-400 border-zinc-700 hover:bg-zinc-800 hover:text-white'
                        )}
                        onClick={() => setActiveTab('geral')}
                    >
                        Atendimentos Clínicos
                    </Button>
                </div>

                {/* Carrossel Wrapper */}
                <div className="relative" data-aos="fade-up" data-aos-delay="200">
                    {/* BOTÃO ANTERIOR - AGORA VISÍVEL EM TODAS AS TELAS */}
                    <Button
                        variant="ghost"
                        className="absolute top-1/2 left-2 -translate-y-1/2 z-10 rounded-full h-10 w-10 md:h-12 md:w-12 flex items-center justify-center bg-black/50 hover:bg-black/80 text-white disabled:opacity-30"
                        onClick={scrollPrev}
                        disabled={prevBtnDisabled}
                    >
                        <ArrowLeft className="h-5 w-5 md:h-6 md:w-6" />
                    </Button>

                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex gap-4">
                            {selectedTreatments.map((service, index) => (
                                <div
                                    key={index}
                                    className="flex-grow-0 flex-shrink-0 basis-[90%] sm:basis-[48%] md:basis-[40%] lg:basis-[31%]"
                                >
                                    <Card className="bg-zinc-900 border border-zinc-700 rounded-xl shadow hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                                        <div className="overflow-hidden rounded-t-xl">
                                            <Image
                                                src={service.image}
                                                alt={service.title}
                                                width={400}
                                                height={250}
                                                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <div className="p-6 flex flex-col flex-grow">
                                            <CardHeader className="p-0 mb-2">
                                                <CardTitle className="text-white text-lg font-semibold">
                                                    {service.title}
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent className="p-0">
                                                <p className="text-zinc-300 text-sm">{service.desc}</p>
                                            </CardContent>
                                        </div>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* BOTÃO PRÓXIMO - AGORA VISÍVEL EM TODAS AS TELAS */}
                    <Button
                        variant="ghost"
                        className="absolute top-1/2 right-2 -translate-y-1/2 z-10 rounded-full h-10 w-10 md:h-12 md:w-12 flex items-center justify-center bg-black/50 hover:bg-black/80 text-white disabled:opacity-30"
                        onClick={scrollNext}
                        disabled={nextBtnDisabled}
                    >
                        <ArrowRight className="h-5 w-5 md:h-6 md:w-6" />
                    </Button>
                </div>
            </div>
        </section>
    )
}