'use client'

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

type Service = {
    title: string
    desc: string
    image: string
}

const services: Service[] = [
    {
        title: 'Sialorreia',
        desc: 'Tratamento para a produção excessiva de saliva, promovendo conforto e melhor qualidade de vida.',
        image: '/Sialorreia.jpg',
    },
    {
        title: 'Blefaroespasmo',
        desc: 'Relaxamento dos músculos ao redor dos olhos, reduzindo contrações involuntárias.',
        image: '/Blefaroespasmo.jpg',
    },
    {
        title: 'Hiperidrose Axilar',
        desc: 'Controle do suor excessivo nas axilas com aplicação de toxina botulínica.',
        image: '/Hiperidrose.png',
    },
    {
        title: 'Paralisia Cerebral',
        desc: 'Redução da espasticidade e rigidez muscular em pacientes com paralisia cerebral.',
        image: '/paralisia.png',
    },
    {
        title: 'Espasticidade pós-AVC',
        desc: 'Melhora da mobilidade e redução da rigidez em pacientes que sofreram AVC.',
        image: '/Espasticidade.jpg',
    },
    {
        title: 'Espasmo Hemifacial',
        desc: 'Alívio dos espasmos musculares involuntários de um lado do rosto.',
        image: '/espasmo.png',
    },
    {
        title: 'Distonia Cervical',
        desc: 'Correção de posturas anormais da cabeça e pescoço por contrações involuntárias.',
        image: '/distonia.png',
    },
    {
        title: 'Cãibra do Escrivão',
        desc: 'Redução de espasmos e cãibras nos movimentos finos das mãos.',
        image: '/escrivao.jpg',
    },
    {
        title: 'Enxaqueca Crônica',
        desc: 'Tratamento preventivo para crises intensas e frequentes de enxaqueca.',
        image: '/dorcabeca.jpg',
    },
]

export default function TratamentosPage() {
    useEffect(() => {
        AOS.init({
            duration: 700,
            once: true,
            easing: 'ease-in-out',
            offset: 80,
        })
    }, [])

    return (
        <section className="bg-black min-h-screen py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Título */}
                <div className="text-center mb-12" data-aos="fade-up">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-snug">
                        Tratamentos Neurológicos
                    </h1>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                        Conheça os tratamentos realizados com Toxina Botulínica para melhorar
                        a qualidade de vida em diversas condições neurológicas realizados pela Dra. Tatiana.
                    </p>
                </div>

                {/* Grid responsivo */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <Card
                            key={index}
                            data-aos={index % 2 === 0 ? 'fade-up' : 'zoom-in-up'}
                            data-aos-delay={index * 100}
                            className="bg-zinc-900 border border-zinc-700 shadow-sm rounded-xl hover:shadow-lg transition-shadow"
                        >
                            <div className="overflow-hidden rounded-t-xl">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    width={400}
                                    height={250}
                                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <CardHeader>
                                <CardTitle className="text-lg font-semibold text-white">
                                    {service.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-zinc-300 text-sm">{service.desc}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
