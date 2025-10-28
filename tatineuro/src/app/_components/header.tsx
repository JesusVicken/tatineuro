'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const links = [
        { label: 'Início', href: '/' },
        { label: 'Sobre Mim', href: '/sobre' },
        { label: 'Tratamentos', href: '/tratamentos' },
        { label: 'Contato', href: '/contatos' },
        { label: 'Consulta Domiciliar', href: '/domiciliar' },
        { label: 'Telemedicina', href: '/telemed' },
        { label: 'FAQ', href: '/faq' },
    ]


    return (
        <header className="w-full h-[72px] bg-white shadow-md sticky top-0 z-50 backdrop-blur">
            <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-full">
                {/* Logo */}
                <Link href="/" className="flex items-center h-full overflow-hidden">
                    <div className="flex items-center h-full">
                        <Image
                            src="/tatilogo2.png"
                            alt="Logo"
                            width={600}
                            height={200}
                            className="h-17 w-auto object-contain"
                            priority
                        />
                    </div>
                </Link>

                {/* Navegação Desktop */}
                <nav className="hidden md:flex gap-6 items-center ml-6">
                    {links.map(({ label, href }) => (
                        <Link key={href} href={href}>
                            <Button variant="ghost" className="text-base">
                                {label}
                            </Button>
                        </Link>
                    ))}
                </nav>

                {/* Botão menu mobile */}
                <div className="md:hidden flex items-center">
                    <Button
                        variant="ghost"
                        size="icon"
                        aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </Button>
                </div>
            </div>

            {/* Menu Mobile */}
            <nav
                className={`md:hidden bg-background/90 backdrop-blur border-t border-gray-200 overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col gap-2">
                    {links.map(({ label, href }) => (
                        <Link key={href} href={href}>
                            <Button
                                variant="ghost"
                                className="w-full text-left"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {label}
                            </Button>
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    )
}
