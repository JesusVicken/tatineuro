
'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const links = [
        { label: 'Início', href: '/' },
        {
            label: 'Serviços',
            href: '#',
            submenu: [
                { label: 'Consulta Domiciliar', href: '/domiciliar' },
                { label: 'Telemedicina', href: '/telemed' },
                { label: 'Reembolso', href: '/pag' },
            ]
        },
        { label: 'Tratamentos', href: '/tratamentos' },
        { label: 'FAQ', href: '/faq' },
        { label: 'Contato', href: '/contatos' },
    ]

    const handleDropdownToggle = (label: string) => {
        setActiveDropdown(activeDropdown === label ? null : label)
    }

    return (
        <>
            <header className={`
                fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
                ${scrolled
                    ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100'
                    : 'bg-white/90 backdrop-blur-md shadow-sm'
                }
            `}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="flex items-center group"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <div className="flex items-center transition-transform duration-300 group-hover:scale-105">
                                <Image
                                    src="/tatilogo2.png"
                                    alt="Dra. Tatiana Miranda - Neurologista"
                                    width={180}
                                    height={60}
                                    className="h-12 lg:h-14 w-auto object-contain"
                                    priority
                                />
                            </div>
                        </Link>

                        {/* Navegação Desktop */}
                        <nav className="hidden lg:flex items-center gap-1">
                            {links.map((link) => (
                                <div key={link.label} className="relative">
                                    {link.submenu ? (
                                        <div
                                            className="relative"
                                            onMouseEnter={() => setActiveDropdown(link.label)}
                                            onMouseLeave={() => setActiveDropdown(null)}
                                        >
                                            <Button
                                                variant="ghost"
                                                className="flex items-center gap-1 text-gray-700 hover:text-green-600 hover:bg-green-50 px-4 py-2 rounded-xl transition-all duration-200 font-medium"
                                            >
                                                {link.label}
                                                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                                            </Button>

                                            {/* Dropdown Menu */}
                                            {activeDropdown === link.label && (
                                                <div className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-100 overflow-hidden animate-in fade-in-0 zoom-in-95">
                                                    {link.submenu.map((subItem) => (
                                                        <Link
                                                            key={subItem.href}
                                                            href={subItem.href}
                                                            className="block px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-200 border-b border-gray-50 last:border-b-0"
                                                        >
                                                            <span className="font-medium">{subItem.label}</span>
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <Link href={link.href}>
                                            <Button
                                                variant="ghost"
                                                className="text-gray-700 hover:text-green-600 hover:bg-green-50 px-4 py-2 rounded-xl transition-all duration-200 font-medium"
                                            >
                                                {link.label}
                                            </Button>
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </nav>

                        {/* Botão WhatsApp Desktop */}
                        <div className="hidden lg:flex items-center">
                            <Link href="https://wa.me/61998301406" target="_blank">
                                <Button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2.5 rounded-xl shadow-lg hover:shadow-green-500/25 transition-all duration-300 hover:scale-105">
                                    <Phone className="h-4 w-4 mr-2" />
                                    Agendar Consulta
                                </Button>
                            </Link>
                        </div>

                        {/* Botão menu mobile */}
                        <div className="flex lg:hidden items-center gap-2">
                            <Link href="https://wa.me/61998301406" target="_blank" className="sm:hidden">
                                <Button size="icon" className="bg-green-500 hover:bg-green-600 text-white rounded-xl">
                                    <Phone className="h-4 w-4" />
                                </Button>
                            </Link>
                            <Button
                                variant="ghost"
                                size="icon"
                                aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="rounded-xl hover:bg-gray-100"
                            >
                                {mobileMenuOpen ? (
                                    <X className="h-6 w-6 text-gray-700" />
                                ) : (
                                    <Menu className="h-6 w-6 text-gray-700" />
                                )}
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Menu Mobile */}
                <div className={`
                    lg:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100 
                    transition-all duration-300 ease-in-out overflow-hidden
                    ${mobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}
                `}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
                        <nav className="flex flex-col space-y-1">
                            {links.map((link) => (
                                <div key={link.label}>
                                    {link.submenu ? (
                                        <div className="border-b border-gray-100 last:border-b-0">
                                            <button
                                                onClick={() => handleDropdownToggle(link.label)}
                                                className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-xl transition-all duration-200 font-medium"
                                            >
                                                <span>{link.label}</span>
                                                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                                            </button>

                                            {/* Submenu Mobile */}
                                            <div className={`
                                                overflow-hidden transition-all duration-300
                                                ${activeDropdown === link.label ? 'max-h-48' : 'max-h-0'}
                                            `}>
                                                <div className="pl-6 py-2 space-y-1">
                                                    {link.submenu.map((subItem) => (
                                                        <Link
                                                            key={subItem.href}
                                                            href={subItem.href}
                                                            onClick={() => setMobileMenuOpen(false)}
                                                            className="block px-4 py-3 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-xl transition-all duration-200"
                                                        >
                                                            {subItem.label}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-xl transition-all duration-200 font-medium border-b border-gray-100 last:border-b-0"
                                        >
                                            {link.label}
                                        </Link>
                                    )}
                                </div>
                            ))}

                            {/* Botão WhatsApp Mobile */}
                            <div className="pt-4 border-t border-gray-100">
                                <Link
                                    href="https://wa.me/61998301406"
                                    target="_blank"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-green-500/25 transition-all duration-300">
                                        <Phone className="h-4 w-4 mr-2" />
                                        Agendar no WhatsApp
                                    </Button>
                                </Link>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Espaço para o header fixo */}
            <div className="h-16 lg:h-20" />
        </>
    )
}