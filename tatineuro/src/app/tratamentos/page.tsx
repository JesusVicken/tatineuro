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
    desc: string
    image: string
    details: ReactNode
}

const toxinTreatments: Service[] = [
    { title: 'Enxaqueca Crônica', desc: 'Tratamento preventivo para crises intensas e frequentes de enxaqueca.', image: '/dorcabeca.jpg', details: <p>O tratamento com toxina botulínica para enxaqueca crônica é um procedimento preventivo, aplicado em pontos específicos da cabeça, pescoço e ombros para reduzir a frequência e a intensidade das crises de dor. Protocolo PREEMPT.</p> },
    { title: 'Bruxismo', desc: 'Alívio da dor e do desgaste dental através da aplicação de toxina botulínica.', image: '/bruxismo.jpeg', details: <p>A aplicação de toxina botulínica nos músculos da mastigação (masseter e temporal) ajuda a reduzir a força excessiva do apertamento e ranger dos dentes, aliviando dores de cabeça, na mandíbula e o desgaste dental.</p> },
    { title: 'Espasmo Hemifacial', desc: 'Alívio dos espasmos musculares involuntários de um lado do rosto.', image: '/espasmo.jpg', details: <p>O tratamento visa relaxar os músculos faciais que se contraem involuntariamente, proporcionando alívio significativo dos espasmos e melhorando a qualidade de vida e a interação social do paciente.</p> },
    { title: 'Blefaroespasmo', desc: 'Relaxamento dos músculos ao redor dos olhos, reduzindo contrações involuntárias.', image: '/Blefaroespasmo.jpg', details: <p>A aplicação de toxina botulínica nos músculos ao redor dos olhos é o tratamento padrão-ouro para o blefaroespasmo, reduzindo o piscar excessivo e o fechamento involuntário das pálpebras.</p> },
    { title: 'Espasticidade pós-AVC', desc: 'Melhora da mobilidade e redução da rigidez após AVC.', image: '/Espasticidade.jpg', details: <p>A toxina botulínica é aplicada em músculos específicos para reduzir a rigidez (espasticidade) que pode ocorrer após um Acidente Vascular Cerebral (AVC), facilitando a fisioterapia, a higiene e a mobilidade do membro afetado.</p> },
    { title: 'Paralisia Cerebral', desc: 'Redução da rigidez muscular em pacientes com paralisia cerebral.', image: '/paralisia.png', details: <p>Em pacientes com paralisia cerebral, a toxina ajuda a manejar a espasticidade, melhorando a função motora, a marcha, facilitando o uso de órteses e prevenindo contraturas musculares.</p> },
    { title: 'Sialorreia', desc: 'Tratamento para produção excessiva de saliva.', image: '/Sialorreia.jpg', details: <p>A aplicação da toxina nas glândulas salivares diminui a produção excessiva de saliva (sialorreia), uma condição comum em diversas doenças neurológicas, melhorando o conforto e a higiene do paciente.</p> },
    { title: 'Distonia Cervical', desc: 'Correção de posturas anormais da cabeça e pescoço.', image: '/distonia.png', details: <p>Este tratamento foca em relaxar os músculos do pescoço que causam posturas anormais e dolorosas, aliviando a dor e melhorando a posição da cabeça.</p> },
    { title: 'Cãibra do Escrivão', desc: 'Redução de espasmos nos movimentos finos das mãos.', image: '/escrivao.jpg', details: <p>A cãibra do escrivão é uma distonia focal que afeta os músculos da mão e do antebraço durante a escrita. A toxina botulínica pode aliviar os espasmos e melhorar a capacidade de realizar tarefas de escrita.</p> },
    { title: 'Paralisia de Bell', desc: 'Melhora da simetria facial e redução de sequelas motoras.', image: '/bell.webp', details: <p>A toxina botulínica pode ser usada em casos de Paralisia de Bell para equilibrar a assimetria facial, especialmente em sequelas com sincinesias (movimentos involuntários associados a movimentos voluntários). A aplicação é feita de forma estratégica para harmonizar a expressão facial e melhorar a funcionalidade.</p> },
    { title: 'Alguns tipos de Tremores', desc: 'Redução da amplitude de tremores em áreas específicas.', image: '/tremores.jpg', details: <p>Em certos tipos de tremores, como os tremores de ação ou posicionais, a toxina botulínica pode ser aplicada em músculos selecionados para reduzir a amplitude dos movimentos involuntários, melhorando a coordenação e a qualidade de vida do paciente.</p> }

]

const generalTreatments: Service[] = [
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
                    <li>O tratamento preventivo é indicado para quem tem <strong>mais de 3 crises de enxaqueca por mês</strong>, ou em casos específicos de crises muito incapacitantes.</li>
                </ul>
                <p className="font-bold text-lg text-center text-white pt-4">VIVER COM DOR NÃO É NORMAL!</p>
            </div>
        )
    },
    {
        title: 'Cefaleia Tensional Crônica',
        desc: 'Dor de cabeça contínua e em pressão, geralmente bilateral e de longa duração.',
        image: '/cefaleia.png',
        details: <p>Caracteriza-se por uma dor em aperto ou pressão, leve a moderada, que geralmente inicia no final da tarde e pode ocorrer vários dias no mês, com indicação de tratamento. Pode ser agravada por estresse, tensão muscular e fatores emocionais.</p>
    },
    {
        title: 'Cefaleia por Uso Excessivo de Medicamentos',
        desc: 'Dor de cabeça causada pelo uso frequente de analgésicos ou triptanos.',
        image: '/medicamentos.png',
        details: <p>O uso contínuo de medicamentos para dor de cabeça pode gerar um ciclo de dor-rebote. A interrupção ou mudança da medicação é essencial para o tratamento eficaz.</p>
    },
    {
        title: 'Cefaleia em Salvas',
        desc: 'Dor de cabeça extremamente intensa, em ataques curtos e recorrentes.',
        image: '/salvas.png',
        details: <p>Uma das dores mais intensas descritas. Ocorre de forma unilateral, geralmente ao redor do olho, com sintomas autonômicos (lacrimejamento, congestão nasal). Acomete mais homens e pode ocorrer várias vezes ao dia.</p>
    },
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
                    <li><strong>Faixa Etária:</strong> Pico de incidência por volta dos 60 anos.</li>
                    <li><strong>Diagnóstico Precoce:</strong> Sinais não motores podem surgir antes dos motores.</li>
                    <li><strong>Fatores de risco:</strong> Exposição a pesticidas ou a solventes de limpeza, metanfetamina, doença inflamatória intestinal, diabetes mellitus.</li>
                    <li><strong>Fatores de proteção:</strong> Consumo de cafeína, tabagismo, uso de estatina.</li>

                </ul>

                {/* --- INÍCIO DA SEÇÃO ADICIONADA --- */}
                <h4 className="font-semibold text-white pt-4 mt-4 border-t border-zinc-700">
                    Epidemiologia e Fatores
                </h4>

                <div className="space-y-6 mt-4">
                    <div className="relative w-full aspect-[4/5] sm:aspect-[16/9]">
                        <Image
                            src="/1.jpeg"
                            alt="Epidemiologia da Doença de Parkinson"
                            fill
                            className="object-cover rounded-lg shadow-md"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 800px"
                            priority
                        />
                    </div>

                    <div className="relative w-full aspect-[4/5] sm:aspect-[16/9]">
                        <Image
                            src="/2.jpeg"
                            alt="Fatores ambientais e de proteção da Doença de Parkinson"
                            fill
                            className="object-cover rounded-lg shadow-md"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 800px"
                        />
                    </div>
                </div>
                {/* --- FIM DA SEÇÃO ADICIONADA --- */}

            </div>
        )
    },
    {
        title: 'Parkinsonismo Atípico',
        desc: 'Síndromes semelhantes ao Parkinson, com resposta limitada à levodopa.',
        image: '/parkinsonatipico.webp',
        details: <p>Inclui condições como Atrofia de Múltiplos Sistemas (AMS) e Paralisia Supranuclear Progressiva (PSP). Apresentam rigidez, instabilidade postural e disfunções autonômicas.</p>
    },
    {
        title: 'Tremor Essencial',
        desc: 'Tremor de ação, geralmente simétrico, que afeta mãos, braços e até a voz. Não relacionado ao Parkinson.',
        image: '/tremor.jpg',
        details: (
            <div className="space-y-3 text-zinc-300">
                <p>Distúrbio neurológico comum, com tremores visíveis durante ações voluntárias. Pode afetar a coordenação e a qualidade de vida.</p>
                <ul className="list-disc list-inside space-y-1">
                    <li>Acomete mãos, braços, cabeça e voz.</li>
                    <li>Tratamento pode incluir medicamentos, toxina botulínica e em casos graves, cirurgia.</li>
                </ul>
            </div>
        )
    },
    {
        title: 'Distonias',
        desc: 'Contrações musculares involuntárias que causam movimentos e posturas anormais.',
        image: '/distonia.png',
        details: <p>Podem afetar uma parte do corpo (focais), várias partes (segmentares) ou o corpo todo (generalizadas). A toxina botulínica é uma das principais abordagens terapêuticas.</p>
    },
    {
        title: 'AVC (Acidente Vascular Cerebral)',
        desc: 'Conduta neurológica após AVC, incluindo prevenção de sequelas e reabilitação.',
        image: '/avc.webp',
        details: <p>Após um AVC, o acompanhamento neurológico é essencial para prevenir novas ocorrências, tratar sequelas motoras, cognitivas ou sensoriais e melhorar a qualidade de vida com apoio reabilitacional.</p>
    },
    {
        title: 'Epilepsia',
        desc: 'Controle de crises epilépticas com abordagem individualizada.',
        image: '/epilepsia.jpg',
        details: (
            <div className="space-y-4 text-zinc-300">
                <h4 className="font-semibold text-white pt-2 text-lg">Definição Clínica</h4>
                <p>A epilepsia é diagnosticada com base em um dos seguintes critérios:</p>
                <ul className="list-disc list-inside space-y-2 pl-2">
                    <li>Pelo menos duas crises não provocadas (ou reflexas), ocorrendo com intervalo superior a 24 horas;</li>
                    <li>Uma crise não provocada (ou reflexa) e uma probabilidade de novas crises semelhante ao risco de recorrência geral (pelo menos 60%) após duas crises não provocadas, ocorrendo ao longo dos próximos 10 anos;</li>
                    <li>Diagnóstico de uma síndrome epiléptica.</li>
                </ul>

                <h4 className="font-semibold text-white pt-2 text-lg">Diagnóstico e Avaliação</h4>
                <p>A epilepsia é um diagnóstico <strong>clínico</strong>, apoiado por dados obtidos da história (do paciente e de testemunhas), exame neurológico, eletroencefalograma (EEG) e, cada vez mais, exames de neuroimagem.</p>
                <p>As síndromes epilépticas possuem diferentes causas, manifestações e implicações para o manejo e tratamento, exigindo uma avaliação cuidadosa.</p>
                <p>Também é necessário descartar condições que imitam crises, como distúrbios do movimento, síncope, crises psicogênicas não epilépticas, ataques isquêmicos transitórios, entre outras.</p>

                <h4 className="font-semibold text-white pt-2 text-lg">Abordagem de Tratamento</h4>
                <p>A escolha do fármaco anticrise é <strong>totalmente individualizada</strong>. Ela se baseia no diagnóstico correto, tipo de crise, perfil do paciente (idade, gênero, comorbidades), interações medicamentosas e tolerância.</p>
                <p>Um acompanhamento personalizado é fundamental para o controle das crises e para o planejamento de ação dos familiares. Esse alinhamento proporciona um ambiente de segurança, permitindo uma vida digna com redução de riscos e danos.</p>
            </div>
        )
    }
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
            <div className="mt-16 flex justify-center" data-aos="fade-up" data-aos-delay="300">
                <Image
                    src="/tatilogo1.png"
                    alt="Logo da Dra. Tatiana Miranda"
                    width={80}
                    height={50}
                    className="opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
            </div>
        </section>
    )
}