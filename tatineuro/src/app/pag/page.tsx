"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown, HandCoins, ShieldCheck } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// --- Utilitário CN ---
function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// --- Componentes do Accordion (Radix UI - Estilizados) ---
const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
    <AccordionPrimitive.Item
        ref={ref}
        className={cn(
            "border-b border-gray-100 dark:border-gray-700/50 last:border-0",
            className
        )}
        {...props}
    />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
            ref={ref}
            className={cn(
                "flex flex-1 items-center justify-between py-5 font-semibold text-left text-gray-700 transition-all hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]]:text-blue-600 dark:[&[data-state=open]]:text-blue-400 cursor-pointer group",
                className
            )}
            {...props}
        >
            <span className="text-base md:text-lg pr-4">{children}</span>
            <ChevronDown className="h-5 w-5 shrink-0 text-gray-400 transition-transform duration-300 group-hover:text-blue-500" />
        </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
        ref={ref}
        className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
        {...props}
    >
        <div
            className={cn(
                "pb-6 pt-0 text-gray-600 dark:text-gray-400 leading-relaxed text-base",
                className
            )}
        >
            {children}
        </div>
    </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

// --- Dados Atualizados (Sem Cirurgia) ---
const REEMBOLSO_DATA = [
    {
        question: "O que é o reembolso de consultas médicas?",
        answer:
            "O sistema de reembolso funciona da seguinte forma: você escolhe o profissional de sua total confiança, sem a necessidade de que ele pertença a uma rede credenciada específica. Após o atendimento e pagamento da consulta, você envia o recibo para a seguradora. Em um prazo máximo de 30 dias, o valor é reembolsado de acordo com o contrato do seu plano.",
    },
    {
        question: "Qual a vantagem de utilizar esse benefício?",
        answer:
            "A principal vantagem é a liberdade. O reembolso permite que você escolha seu médico e laboratório de confiança, sem ficar restrito à lista do convênio. Isso garante um atendimento mais personalizado e um relacionamento mais próximo e franco com o profissional que cuida da sua saúde.",
    },
    {
        question: "Tenho direito ao reembolso médico?",
        answer:
            "A grande maioria das seguradoras de saúde e convênios oferece essa modalidade. A forma mais simples de confirmar é ligando para a central do seu convênio ou verificando o contrato/manual do beneficiário. É um direito seu que muitas vezes passa despercebido.",
    },
    {
        question: "Como sei qual o valor a ser reembolsado?",
        answer:
            "Cada plano possui uma tabela de reembolso fixa, que é um direito do usuário conhecer. O valor pode ser integral ou uma porcentagem do total pago, dependendo das regras do seu contrato. Vale lembrar que o reembolso é um benefício valioso para garantir acesso aos melhores especialistas.",
    },
    {
        question: "Qual o prazo para o reembolso cair na conta?",
        answer:
            "Por regulamentação, a operadora de saúde tem o prazo máximo de até 30 dias para efetuar o reembolso após o envio correto de toda a documentação necessária.",
    },
    {
        question: "É difícil solicitar o reembolso?",
        answer:
            "De forma alguma. O processo é simples: o médico emite o recibo ou nota fiscal, você envia para a operadora (muitas aceitam via aplicativo) e aguarda o depósito. É um processo burocrático mínimo para ter acesso ao atendimento que você prefere.",
    },
];

// --- Componente Principal ---
export default function ReembolsoSection() {
    return (
        <section className="w-full py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
            <div className="container mx-auto px-4 md:px-6 max-w-5xl">
                <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] items-start">

                    {/* Coluna da Esquerda: Chamada e Informações Visuais */}
                    <div className="space-y-6 sticky top-10 animate-in fade-in slide-in-from-left-4 duration-700">

                        {/* Logo da Dra. */}
                        <div className="mb-4">
                            <img
                                src="/tatilogo.png"
                                alt="Logo Dra."
                                width={200}
                                height={80}
                                className="object-contain h-12 w-auto" // h-12 limita a altura para ficar elegante, w-auto mantém proporção
                            />
                        </div>

                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-sm font-medium border border-blue-100 dark:border-blue-800">
                            <ShieldCheck className="w-4 h-4" />
                            <span>Direito do Paciente</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.1]">
                            Liberdade para escolher quem cuida de você.
                        </h2>

                        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                            Não fique limitado à rede credenciada. Entenda como usar o reembolso para ter acesso ao melhor tratamento possível, com o médico de sua confiança.
                        </p>

                        <div className="p-6 bg-blue-50 dark:bg-blue-900/10 rounded-2xl border border-blue-100 dark:border-blue-800/30 mt-8">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white dark:bg-blue-950 rounded-full shadow-sm shrink-0">
                                    <HandCoins className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                                        Processo Simplificado
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Nós auxiliamos na emissão de toda documentação necessária para que você solicite seu reembolso com tranquilidade.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Coluna da Direita: Accordion */}
                    <div className="bg-white dark:bg-gray-800/50 rounded-3xl shadow-xl shadow-gray-100/50 dark:shadow-none border border-gray-100 dark:border-gray-700 p-6 md:p-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100 backdrop-blur-sm">
                        <Accordion type="single" collapsible className="w-full">
                            {REEMBOLSO_DATA.map((item, index) => (
                                <AccordionItem key={index} value={`item-${index}`}>
                                    <AccordionTrigger>
                                        {item.question}
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        {item.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                </div>
            </div>
        </section>
    );
}