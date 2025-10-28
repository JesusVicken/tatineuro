'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'

export default function ConsultaDomiciliarPage() {
    return (
        <section className="bg-white min-h-screen py-16 px-4 md:px-8">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl md:text-5xl font-bold text-zinc-900 text-center mb-6 leading-tight">
                    Consulta Domiciliar
                </h1>
                <p className="text-zinc-600 text-center text-lg max-w-3xl mx-auto mb-12">
                    Um atendimento exclusivo e humanizado, pensado especialmente para pacientes neurológicos que necessitam de atenção integral, conforto e acolhimento.
                </p>

                <div className="flex justify-center mb-10">
                    <Image
                        src="/domiciliar.jpg" // ✅ coloque essa imagem em /public
                        alt="Consulta em casa"
                        width={800}
                        height={500}
                        className="rounded-xl shadow-lg object-cover"
                    />
                </div>

                <Card className="bg-zinc-50 border border-zinc-200 shadow-sm">
                    <CardContent className="p-6 space-y-6 text-zinc-800 text-base leading-relaxed">
                        <p>
                            A consulta domiciliar é uma modalidade diferenciada de atendimento em que a médica vai até a casa do paciente, proporcionando um cuidado mais próximo, individualizado e no ambiente onde ele vive. Isso elimina a necessidade de deslocamento e permite que a família acompanhe todo o processo.
                        </p>

                        <p>
                            Esse tipo de atendimento permite que a Dra. Tatiana avalie a estrutura domiciliar e proponha tratamentos mais realistas, contínuos e adaptados à rotina do paciente. É um cuidado que vai além do consultório, respeitando a dinâmica familiar e as limitações envolvidas.
                        </p>

                        <Separator />

                        <h2 className="text-xl font-semibold text-zinc-900">Quem se beneficia desse serviço?</h2>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Pacientes com sequelas neurológicas graves após um AVC;</li>
                            <li>Indivíduos com Doença de Parkinson em estágios avançados;</li>
                            <li>Pessoas com demências que possuem dificuldades de locomoção;</li>
                        </ul>

                        <Separator />

                        <h2 className="text-xl font-semibold text-zinc-900">Benefícios da Consulta Domiciliar</h2>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Mais conforto e tranquilidade para o paciente e a família;</li>
                            <li>Facilidade na compreensão e adesão ao tratamento;</li>
                            <li>Esclarecimento de dúvidas em tempo real, com todos os envolvidos;</li>
                            <li>Observações práticas sobre alimentação, mobilidade e estímulo ao lazer;</li>
                            <li>Planejamento terapêutico mais eficaz e realista;</li>
                        </ul>

                        <p>
                            Além disso, a presença da médica no lar transmite segurança, acolhimento e permite decisões clínicas com maior embasamento no contexto vivido por aquele paciente.
                        </p>

                        <p>
                            O investimento nesse tipo de atendimento reflete a qualidade do serviço, a experiência profissional e os custos envolvidos com deslocamento e exclusividade na agenda.
                        </p>

                        <Separator />

                        <p className="font-semibold text-zinc-700 text-center text-lg">
                            Entendemos a complexidade da saúde neurológica. Seu bem-estar e conforto são a nossa prioridade.
                        </p>
                    </CardContent>
                </Card>
            </div>
            <div className="flex justify-center mt-6">
                <Image
                    src="/tatilogo.png"
                    alt="Logo Dra. Tatiana Miranda"
                    width={260}
                    height={260}
                    className="w-40 md:w-48 lg:w-60 object-contain"
                    priority
                />

            </div>

        </section>
    )
}
