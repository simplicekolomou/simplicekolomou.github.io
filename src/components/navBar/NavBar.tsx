"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import ThemeSwitcher from "@/components/theme/ThemeSwitcher";
import { cn } from "@/lib/utils";
import {text} from "@/data/contentText";

const navLinks = [
    { href: "/", label: `${text.nav.about}` },
    { href: "/skills", label: `${text.nav.skills}` },
    { href: "/portfolio", label: `${text.nav.projects}` },
    { href: "/experiences", label: `${text.nav.experiences}` },
    { href: "/contacts", label: `${text.nav.contact}` },
];

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    // Effet pour fermer le menu au resize (passage en desktop)
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Effet pour détecter le scroll et changer l'apparence
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "sticky top-0 z-50 w-full transition-all duration-300",
                scrolled
                    ? "bg-background/80 backdrop-blur-md border-b shadow-sm"
                    : "bg-background/50 backdrop-blur-sm"
            )}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo / identité */}
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                          {text.nav.logo}
                        </span>
                    </Link>

                    {/* Navigation desktop */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                                    pathname === link.href
                                        ? "bg-primary/10 text-primary"
                                        : "text-foreground/80 hover:text-foreground hover:bg-muted"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="ml-2">
                            <ThemeSwitcher />
                        </div>
                    </nav>

                    {/* Mobile : bouton menu + theme switcher */}
                    <div className="flex items-center gap-2 md:hidden">
                        <ThemeSwitcher />
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-md text-foreground/80 hover:bg-muted focus:outline-none"
                            aria-label="Menu"
                        >
                            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>
                    </div>
                </div>

                {/* Menu mobile (overlay) */}
                {isMenuOpen && (
                    <div className="md:hidden border-t py-4 pb-6 space-y-2 bg-background/95 backdrop-blur-md">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={cn(
                                    "block px-3 py-2 rounded-md text-base font-medium transition-colors",
                                    pathname === link.href
                                        ? "bg-primary/10 text-primary"
                                        : "text-foreground/80 hover:text-foreground hover:bg-muted"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </header>
    );
}