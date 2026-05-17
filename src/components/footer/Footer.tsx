import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin, faSquareFacebook, faSquareGithub} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {Heart} from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full border-t bg-background/95 backdrop-blur-sm mt-4">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand / À propos */}
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-lg font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-3">
                            Simplice Kolomou
                        </h3>
                        <p className="text-sm text-muted-foreground max-w-md">
                            Développeur full-stack passionné par la création d&apos;applications web modernes,
                            performantes et accessibles. Transformons vos idées en réalité numérique.
                        </p>
                    </div>

                    {/* Liens rapides */}
                    <div>
                        <h4 className="font-semibold text-foreground mb-3">Navigation</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                                    À propos
                                </Link>
                            </li>
                            <li>
                                <Link href="/skills" className="text-muted-foreground hover:text-primary transition-colors">
                                    Compétences
                                </Link>
                            </li>
                            <li>
                                <Link href="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">
                                    Projets
                                </Link>
                            </li>
                            <li>
                                <Link href="/contacts" className="text-muted-foreground hover:text-primary transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Réseaux sociaux */}
                    <div>
                        <h4 className="font-semibold text-foreground mb-3">Suivez-moi</h4>
                        <div className="flex space-x-4">
                            <Link
                                href="https://github.com/simplicekolomou"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                                aria-label="GitHub"
                            >
                                <FontAwesomeIcon icon={faSquareGithub} className="h-8 w-8 text-primary" />
                            </Link>
                            <Link
                                href="https://linkedin.com/in/simplicekolomou"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                                aria-label="LinkedIn"
                            >
                                <FontAwesomeIcon icon={faLinkedin} className="h-8 w-8 text-primary" />
                            </Link>
                            <Link
                                href="mailto:contact@simplicekolomou.com"
                                className="text-muted-foreground hover:text-primary transition-colors"
                                aria-label="Facebook"
                            >
                                <FontAwesomeIcon icon={faSquareFacebook} className="h-8 w-8 text-primary" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Copyright et mentions */}
                <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground flex flex-col sm:flex-row justify-between items-center gap-2">
                    <p>
                        &copy; {currentYear} Simplice Kolomou. Tous droits réservés.
                    </p>
                    <p className="flex items-center gap-1">
                        Fait avec <Heart className="h-3 w-3 text-red-500 fill-current" /> à Liège, Belgique.
                    </p>
                </div>
            </div>
        </footer>
    );
}