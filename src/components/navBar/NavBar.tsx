"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {Menu, X} from "lucide-react";
import { cn } from "@/lib/utils";
import { text } from "@/data/contentText";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import ThemeSwitcher from "@/components/theme/ThemeSwitcher";

const navLinks = [
    { href: "/", label: text.nav.about },
    { href: "/skills", label: text.nav.skills },
    { href: "/portfolio", label: text.nav.projects },
    { href: "/experiences", label: text.nav.experiences },
    { href: "/contacts", label: text.nav.contact },
];

export default function NavBar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Détection du scroll
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Fermer le sheet au changement de route
    const openRef = useRef(open);
    useEffect(() => {
        openRef.current = open;
    }, [open]);

    useEffect(() => {
        if (openRef.current) setOpen(false);
    }, [pathname]);

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
                <div className="flex h-16 items-center">
                    {/* Logo à gauche */}
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                            {text.nav.logo}
                        </span>
                    </Link>

                    {/* Navigation desktop (centrée/ml-auto) */}
                    <NavigationMenu className="hidden md:flex ml-auto">
                        <NavigationMenuList>
                            {navLinks.map((link) => (
                                <NavigationMenuItem key={link.href}>
                                    <NavigationMenuLink asChild>
                                        <Link
                                            href={link.href}
                                            className={cn(
                                                "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                                                pathname === link.href
                                                    ? "bg-primary/10 text-primary"
                                                    : "text-foreground/80"
                                            )}
                                        >
                                            {link.label}
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                        <div>
                            <ThemeSwitcher />
                        </div>
                    </NavigationMenu>

                    {/* Zone droite : theme switcher + menu mobile (poussée à droite) */}
                    {/*<div className="flex items-center gap-2 ml-auto md:ml-0">
                        <ThemeSwitcher />
                        <Sheet open={open} onOpenChange={setOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="md:hidden">
                                    <Menu className="h-5 w-5" />
                                    <span className="sr-only">Menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent
                                side="right"
                                className="w-[280px] sm:w-[350px] p-0 flex flex-col"
                            >
                                <SheetTitle className="sr-only">Menu principal</SheetTitle>

                                <nav className="flex flex-col gap-4 px-6 pt-8 pb-6">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            onClick={() => setOpen(false)}
                                            className={cn(
                                                "text-lg font-medium transition-colors hover:text-primary",
                                                pathname === link.href ? "text-primary" : "text-foreground/80"
                                            )}
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>*/}

                    {/* Mobile : bouton menu + theme switcher */}
                    <div className="flex items-center gap-2 md:hidden ml-auto md:ml-0">
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