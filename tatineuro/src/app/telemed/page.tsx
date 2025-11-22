'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import {
    CheckCircle,
    AlertTriangle,
    PhoneCall,
    CalendarCheck,
    FileText,
    Video,
    FileCheck2,
    Star,
    Shield,
    Clock,
    MapPin,
    Users,
    Brain,
    Heart
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function TelemedPage() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-in-out',
            offset: 50
        })
    }, [])

    const benefits = [
        { icon: <Clock className="text-green-400 w-6 h-6" />, title: 'Economia de Tempo', text: 'Sem deslocamento ou espera em consultórios.' },
        { icon: <MapPin className="text-green-400 w-6 h-6" />, title: 'Acessibilidade', text: 'Atendimento de qualquer lugar do Brasil.' },
        { icon: <Shield className="text-green-400 w-6 h-6" />, title: 'Segurança', text: 'Ambiente controlado e reduz exposição.' },
        { icon: <Users className="text-green-400 w-6 h-6" />, title: 'Conforto Familiar', text: 'Acompanhante pode participar da consulta.' },
        { icon: <Brain className="text-green-400 w-6 h-6" />, title: 'Continuidade', text: 'Acompanhamento neurológico regular.' },
        { icon: <Heart className="text-green-400 w-6 h-6" />, title: 'Humanizado', text: 'Atendimento personalizado e acolhedor.' }
    ]

    const steps = [
        { icon: <CalendarCheck className="w-8 h-8 text-green-400" />, title: 'Agendamento', desc: 'Escolha o melhor horário via WhatsApp' },
        { icon: <FileText className="w-8 h-8 text-green-400" />, title: 'Pagamento', desc: 'Link seguro para pagamento online' },
        { icon: <Video className="w-8 h-8 text-green-400" />, title: 'Preparação', desc: 'Local tranquilo e exames em mãos' },
        { icon: <PhoneCall className="w-8 h-8 text-green-400" />, title: 'Consulta', desc: 'Videochamada com a Dra. Tatiana' },
        { icon: <FileCheck2 className="w-8 h-8 text-green-400" />, title: 'Documentos', desc: 'Receitas e atestados digitais' }
    ]

    const indications = [
        'Acompanhamento de condições neurológicas crônicas',
        'Análise de exames (Ressonância, Tomografia, EEG)',
        'Segunda opinião médica especializada',
        'Avaliação de queixas leves: enxaqueca, tontura',
        'Ajuste e renovação de medicações',
        'Dúvidas sobre tratamentos em andamento'
    ]

    return (
        <section className="bg-gradient-to-br from-gray-900 to-black text-white min-h-screen">
            {/* Hero Section Modern */}
            <div className="relative h-[70vh] min-h-[600px] w-full overflow-hidden" data-aos="fade-in">
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 z-10" />
                <Image
                    src="/telemedicina.webp"
                    alt="Telemedicina - Consulta Neurológica Online"
                    fill
                    className="object-cover object-center scale-105"
                    priority
                    quality={90}
                />

                <div className="relative z-20 h-full flex items-center">
                    <div className="container mx-auto px-4">
                        <div className="max-w-2xl">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="bg-green-500/20 p-2 rounded-lg">
                                    <Video className="w-6 h-6 text-green-400" />
                                </div>
                                <span className="text-green-400 font-semibold text-sm uppercase tracking-wide">
                                    Consulta Online
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                                Atendimento Neurológico{' '}
                                <span className="text-green-400 bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
                                    na Sua Casa
                                </span>
                            </h1>

                            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                Cuidado neurológico especializado com toda comodidade e segurança.
                                Consultas online com a Dra. Tatiana Miranda, sem sair do seu ambiente.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="https://wa.me/61998301406" target="_blank">
                                    <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white font-semibold text-lg px-8 py-3 rounded-xl shadow-lg hover:shadow-green-500/25 transition-all duration-300">
                                        <PhoneCall className="w-5 h-5 mr-2" />
                                        Agendar Consulta
                                    </Button>
                                </Link>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-gray-800/50 backdrop-blur-sm border-y border-gray-700">
                <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { number: '100%', label: 'Online' },
                            { number: '30min', label: 'Duração' },
                            { number: '24/7', label: 'Agendamento' },
                            { number: '✓', label: 'Digital' }
                        ].map((stat, index) => (
                            <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                                <div className="text-2xl md:text-3xl font-bold text-green-400 mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-400 text-sm uppercase tracking-wide">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Definition Section */}
            <div className="py-20 px-4">
                <div className="container mx-auto max-w-4xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div data-aos="fade-right">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                O que é{' '}
                                <span className="text-green-400">Telemedicina</span>?
                            </h2>
                            <p className="text-lg text-gray-300 leading-relaxed mb-6">
                                A Telemedicina é uma modalidade de atendimento médico regulamentada e segura,
                                que permite consultas à distância com a mesma qualidade do presencial.
                            </p>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                Na neurologia, oferecemos acompanhamento especializado com todo conforto,
                                segurança e eficiência que você merece.
                            </p>
                        </div>
                        <div className="relative" data-aos="fade-left">
                            <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-2xl p-8 border border-gray-700 backdrop-blur-sm">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="bg-green-500/20 p-3 rounded-xl">
                                        <Shield className="w-8 h-8 text-green-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold">Totalmente Seguro</h3>
                                        <p className="text-gray-400">Sistema criptografado e protegido</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="bg-blue-500/20 p-3 rounded-xl">
                                        <Star className="w-8 h-8 text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold">Qualidade Garantida</h3>
                                        <p className="text-gray-400">Mesma qualidade do atendimento presencial</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Benefits Section */}
            <div className="py-20 bg-gray-800/30">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Vantagens da{' '}
                            <span className="text-green-400">Consulta Online</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Descubra todos os benefícios de ser atendido pela Dra. Tatiana Miranda no conforto da sua casa
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-green-400/30 transition-all duration-300 hover:transform hover:-translate-y-2"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="bg-green-500/10 p-3 rounded-xl">
                                        {benefit.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-2 text-white">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            {benefit.text}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Indications Section */}
            <div className="py-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div data-aos="fade-right">
                            <h2 className="text-3xl md:text-4xl font-bold mb-8">
                                Quando a Telemedicina é{' '}
                                <span className="text-green-400">indicada</span>?
                            </h2>

                            <div className="space-y-4">
                                {indications.map((indication, index) => (
                                    <div key={index} className="flex items-start gap-4" data-aos="fade-right" data-aos-delay={index * 100}>
                                        <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                                        <p className="text-gray-300 text-lg">{indication}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div data-aos="fade-left">
                            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-6 backdrop-blur-sm">
                                <div className="flex items-start gap-4 mb-4">
                                    <AlertTriangle className="w-8 h-8 text-yellow-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                                            Atenção Importante
                                        </h3>
                                        <p className="text-yellow-200/80 text-sm leading-relaxed">
                                            Não indicada para emergências neurológicas como AVC, convulsão ativa,
                                            perda de consciência ou trauma craniano. Nestes casos, procure
                                            imediatamente um serviço de emergência.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* How It Works Section */}
            <div className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Como funciona a{' '}
                            <span className="text-green-400">Teleconsulta</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Um processo simples e eficiente em 5 passos
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-5 gap-4 relative">
                            {/* Connecting Line */}
                            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-400 transform translate-y-6 z-0" />

                            {steps.map((step, index) => (
                                <div
                                    key={index}
                                    className="relative z-10"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 150}
                                >
                                    <div className="bg-gray-800 rounded-2xl p-6 text-center border border-gray-700 hover:border-green-400/50 transition-all duration-300 hover:transform hover:-translate-y-2">
                                        <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                            {step.icon}
                                        </div>
                                        <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-3">
                                            {index + 1}
                                        </div>
                                        <h3 className="font-semibold text-lg mb-2 text-white">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Final CTA */}
            <div className="relative py-20 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-green-500 to-emerald-500" />
                <div className="absolute inset-0 bg-black/20" />

                <div className="relative z-10 container mx-auto text-center">
                    <div data-aos="zoom-in">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                            Pronto para ser atendido?
                        </h2>
                        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                            Agende sua teleconsulta agora e receba cuidado neurológico especializado
                            no conforto da sua casa
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href="https://wa.me/61998301406" target="_blank">
                                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 font-bold text-lg px-8 py-3 rounded-xl shadow-2xl hover:shadow-white/25 transition-all duration-300 hover:scale-105">
                                    <PhoneCall className="w-5 h-5 mr-2" />
                                    Agendar no WhatsApp
                                </Button>
                            </Link>
                        </div>

                        <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/70 text-sm">
                            <div className="flex items-center gap-2">
                                <Shield className="w-4 h-4" />
                                <span>100% Seguro</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>Agendamento Flexível</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4" />
                                <span>Documentos Digitais</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}