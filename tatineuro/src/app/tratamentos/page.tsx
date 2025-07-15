'use client'

import { useEffect, useState, useCallback, ReactNode } from 'react'
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
    CardFooter,
} from '@/components/ui/card'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

// Estrutura de dados atualizada para incluir detalhes ricos
type Service = {
    title: string
    desc: string // Descrição curta para o card
    image: string
    details: ReactNode // Conteúdo detalhado para o modal
}

// --- DADOS DOS TRATAMENTOS ---

// Tratamentos com Toxina (agora com a propriedade 'details')
const toxinTreatments: Service[] = [
    { title: 'Enxaqueca Crônica', desc: 'Tratamento preventivo para crises intensas e frequentes de enxaqueca.', image: '/dorcabeca.jpg', details: <p>O tratamento com toxina botulínica para enxaqueca crônica é um procedimento preventivo, aplicado em pontos específicos da cabeça, pescoço e ombros para reduzir a frequência e a intensidade das crises de dor.</p> },
    { title: 'Bruxismo', desc: 'Alívio da dor e do desgaste dental através da aplicação de toxina botulínica.', image: '/bruxismo.jpeg', details: <p>A aplicação de toxina botulínica nos músculos da mastigação (masseter e temporal) ajuda a reduzir a força excessiva do apertamento e ranger dos dentes, aliviando dores de cabeça, na mandíbula e o desgaste dental.</p> },
    { title: 'Espasmo Hemifacial', desc: 'Alívio dos espasmos musculares involuntários de um lado do rosto.', image: '/espasmo.jpg', details: <p>O tratamento visa relaxar os músculos faciais que se contraem involuntariamente, proporcionando alívio significativo dos espasmos e melhorando a qualidade de vida e a interação social do paciente.</p> },
    { title: 'Blefaroespasmo', desc: 'Relaxamento dos músculos ao redor dos olhos, reduzindo contrações involuntárias.', image: '/Blefaroespasmo.jpg', details: <p>A aplicação de toxina botulínica nos músculos ao redor dos olhos é o tratamento padrão-ouro para o blefaroespasmo, reduzindo o piscar excessivo e o fechamento involuntário das pálpebras.</p> },
    { title: 'Espasticidade pós-AVC', desc: 'Melhora da mobilidade e redução da rigidez após AVC.', image: '/Espasticidade.jpg', details: <p>A toxina botulínica é aplicada em músculos específicos para reduzir a rigidez (espasticidade) que pode ocorrer após um Acidente Vascular Cerebral (AVC), facilitando a fisioterapia, a higiene e a mobilidade do membro afetado.</p> },
    { title: 'Paralisia Cerebral', desc: 'Redução da rigidez muscular em pacientes com paralisia cerebral.', image: '/paralisia.png', details: <p>Em pacientes com paralisia cerebral, a toxina ajuda a manejar a espasticidade, melhorando a função motora, a marcha, facilitando o uso de órteses e prevenindo contraturas musculares.</p> },
    { title: 'Sialorreia', desc: 'Tratamento para produção excessiva de saliva.', image: '/Sialorreia.jpg', details: <p>A aplicação da toxina nas glândulas salivares diminui a produção excessiva de saliva (sialorreia), uma condição comum em diversas doenças neurológicas, melhorando o conforto e a higiene do paciente.</p> },
    { title: 'Distonia Cervical', desc: 'Correção de posturas anormais da cabeça e pescoço.', image: '/distonia.png', details: <p>Este tratamento foca em relaxar os músculos do pescoço que causam posturas anormais e dolorosas, aliviando a dor e melhorando a posição da cabeça.</p> },
    { title: 'Cãibra do Escrivão', desc: 'Redução de espasmos nos movimentos finos das mãos.', image: '/escrivao.jpg', details: <p>A cãibra do escrivão é uma distonia focal que afeta os músculos da mão e do antebraço durante a escrita. A toxina botulínica pode aliviar os espasmos e melhorar a capacidade de realizar tarefas de escrita.</p> },
]

// Demais condições atendidas (com o conteúdo detalhado que você forneceu)
const generalTreatments: Service[] = [
    {
        title: 'Doença de Parkinson',
        desc: 'Controle de bradicinesia, rigidez e tremores. O tratamento visa controlar os sintomas e melhorar a qualidade de vida.',
        image: '/parkinson.jpg',
        details: (
            <div className="space-y-3 text-zinc-300">
                <p>A Doença de Parkinson é uma condição neurológica progressiva que afeta principalmente o movimento.</p>
                <h4 className="font-semibold text-white pt-2">Principais Características:</h4>
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>Sintomas Motores:</strong> Bradicinesia (lentidão de movimentos), rigidez muscular e tremor em repouso.</li>
                    <li><strong>Faixa Etária:</strong> Pode ocorrer em qualquer idade, com pico de incidência por volta dos 60 anos. A probabilidade aumenta com a idade.</li>
                    <li><strong>Fatores de Risco:</strong> História familiar positiva pode dobrar a probabilidade. Início antes dos 50 anos sugere uma maior chance de causa genética.</li>
                    <li><strong>Gênero:</strong> É mais comum em homens do que em mulheres (proporção de 3 para 2).</li>
                    <li><strong>Diagnóstico Precoce:</strong> Sinais não motores podem surgir de 10 a 20 anos antes das manifestações motoras.</li>
                    <li><strong>Tratamento:</strong> Existe controle eficaz dos sintomas para melhorar a qualidade de vida do paciente.</li>
                </ul>
            </div>
        ),
    },
    {
        title: 'Tremor Essencial',
        desc: 'Tremor de ação, geralmente simétrico, que afeta mãos, braços e até a voz. Não relacionado ao Parkinson.',
        image: '/tremor.jpg',
        details: (
            <div className="space-y-3 text-zinc-300">
                <p>O Tremor Essencial é um distúrbio do movimento caracterizado por um tremor involuntário, mais notável durante a ação.</p>
                <h4 className="font-semibold text-white pt-2">Principais Características:</h4>
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>Tipo de Tremor:</strong> É tipicamente um tremor de ação, ou seja, ocorre ao realizar movimentos voluntários como escrever ou segurar um copo.</li>
                    <li><strong>Áreas Afetadas:</strong> Geralmente afeta mãos e braços de forma simétrica, mas também pode atingir a cabeça, a voz e outras partes do corpo.</li>
                    <li><strong>Diferença para Parkinson:</strong> Diferente do tremor de Parkinson, que ocorre principalmente em repouso, o Tremor Essencial manifesta-se com a ação.</li>
                </ul>
            </div>
        ),
    },
    {
        title: 'Enxaqueca',
        desc: 'Doença neurológica complexa e hereditária que causa dor de cabeça intensa, pulsátil e incapacitante.',
        image: '/enxaqueca.webp',
        details: (
            <div className="space-y-3 text-zinc-300">
                <p>Mais do que uma simples dor de cabeça, a enxaqueca é uma doença neurológica complexa, hereditária e muitas vezes incapacitante.</p>
                <h4 className="font-semibold text-white pt-2">Sintomas Clássicos (ICHD-3):</h4>
                <ul className="list-disc list-inside space-y-1">
                    <li>Dor de moderada à forte intensidade, geralmente unilateral e pulsátil.</li>
                    <li>Acompanhada de náuseas, vômitos, sensibilidade à luz (fotofobia) e ao som (fonofobia).</li>
                    <li>Piora com esforço físico.</li>
                </ul>
                <h4 className="font-semibold text-white pt-2">Diagnóstico e Tratamento:</h4>
                <ul className="list-disc list-inside space-y-1">
                    <li>O diagnóstico é <strong>clínico</strong>, baseado na história do paciente. Exames de imagem só são pedidos em caso de suspeita de outras condições (sinais de alerta).</li>
                    <li>O tratamento preventivo é indicado para quem tem <strong>mais de 3 dias de dor de cabeça por mês</strong>, ou em casos específicos de crises muito incapacitantes.</li>
                </ul>
                <p className="font-bold text-lg text-center text-white pt-4">VIVER COM DOR NÃO É NORMAL!</p>
            </div>
        ),
    },
]

// --- COMPONENTE PRINCIPAL ---

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
                    {/* Botão Anterior */}
                    <Button
                        variant="ghost"
                        className="absolute top-1/2 left-0 md:-left-4 -translate-y-1/2 z-10 rounded-full h-10 w-10 md:h-12 md:w-12 flex items-center justify-center bg-black/50 hover:bg-black/80 text-white disabled:opacity-30 disabled:cursor-not-allowed"
                        onClick={scrollPrev}
                        disabled={prevBtnDisabled}
                    >
                        <ArrowLeft className="h-5 w-5 md:h-6 md:w-6" />
                    </Button>

                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex gap-4 -ml-2 p-2">
                            {selectedTreatments.map((service) => (
                                <div
                                    key={service.title}
                                    className="flex-grow-0 flex-shrink-0 basis-[90%] sm:basis-[48%] md:basis-[40%] lg:basis-[31.33%]"
                                >
                                    <Dialog>
                                        <Card className="bg-zinc-900 border border-zinc-700 rounded-xl shadow-lg hover:shadow-cyan-500/10 hover:border-zinc-500 transition-all duration-300 h-full flex flex-col">
                                            <div className="overflow-hidden rounded-t-xl">
                                                <Image
                                                    src={service.image}
                                                    alt={service.title}
                                                    width={400}
                                                    height={250}
                                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                            <div className="p-5 flex flex-col flex-grow">
                                                <CardHeader className="p-0 mb-3">
                                                    <CardTitle className="text-white text-xl font-semibold">
                                                        {service.title}
                                                    </CardTitle>
                                                </CardHeader>
                                                <CardContent className="p-0 flex-grow">
                                                    <p className="text-zinc-400 text-sm leading-relaxed">{service.desc}</p>
                                                </CardContent>
                                            </div>
                                            <CardFooter className="p-5 pt-3">
                                                <DialogTrigger asChild>
                                                    <Button variant="outline" className="w-full bg-zinc-800 text-zinc-200 border-zinc-600 hover:bg-zinc-700 hover:text-white transition-colors">
                                                        Saiba Mais
                                                    </Button>
                                                </DialogTrigger>
                                            </CardFooter>
                                        </Card>

                                        <DialogContent className="bg-zinc-900 border-zinc-700 text-white max-w-2xl w-[95%] max-h-[90vh] overflow-y-auto rounded-lg">
                                            <DialogHeader>
                                                <DialogTitle className="text-2xl text-white mb-2">{service.title}</DialogTitle>
                                            </DialogHeader>
                                            <div className="py-2 text-base leading-relaxed">
                                                {service.details}
                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Botão Próximo */}
                    <Button
                        variant="ghost"
                        className="absolute top-1/2 right-0 md:-right-4 -translate-y-1/2 z-10 rounded-full h-10 w-10 md:h-12 md:w-12 flex items-center justify-center bg-black/50 hover:bg-black/80 text-white disabled:opacity-30 disabled:cursor-not-allowed"
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