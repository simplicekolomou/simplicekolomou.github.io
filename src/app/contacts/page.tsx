import { MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin, faSquareFacebook, faSquareGithub} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Contacts() {
    return (
        <main className="container mx-auto px-4 py-12 max-w-4xl">
            {/* En-tête */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    Contactez-moi
                </h1>
                <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                    N&apos;hésitez pas à me contacter pour toute question ou collaboration
                </p>
                <div className="w-24 h-1 bg-primary/30 mx-auto mt-4 rounded-full" />
            </div>

            {/* Cartes des coordonnées */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email */}
                <Card className="hover:shadow-md transition-shadow">
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                        <FontAwesomeIcon icon={faEnvelope} className="h-8 w-8 text-primary" />
                        <CardTitle className="text-xl">Email</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Link
                            href="mailto:simplicekolomou@gmail.com"
                            className="text-muted-foreground hover:text-primary transition-colors break-all"
                        >
                            simplicekolomou@gmail.com
                        </Link>
                        <CardDescription className="mt-2">
                            Cliquez pour ouvrir votre messagerie par défaut
                        </CardDescription>
                    </CardContent>
                </Card>

                {/* LinkedIn */}
                <Card className="hover:shadow-md transition-shadow">
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                        <FontAwesomeIcon icon={faLinkedin} className="h-8 w-8 text-primary" />
                        <CardTitle className="text-xl">LinkedIn</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Link
                            href="https://www.linkedin.com/in/kolomou-simplice-1b9b4a1b3/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            Kolomou Simplice
                        </Link>
                        <CardDescription className="mt-2">
                            Profil professionnel et réseau
                        </CardDescription>
                    </CardContent>
                </Card>

                {/* GitHub */}
                <Card className="hover:shadow-md transition-shadow">
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                        <FontAwesomeIcon icon={faSquareGithub} className="h-8 w-8 text-primary" />
                        <CardTitle className="text-xl">GitHub</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Link
                            href="https://simplicekolomou.github.io"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            simplicekolomou.github.io
                        </Link>
                        <CardDescription className="mt-2">
                            Mes projets open source
                        </CardDescription>
                    </CardContent>
                </Card>

                {/* Facebook */}
                <Card className="hover:shadow-md transition-shadow">
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                        <FontAwesomeIcon icon={faSquareFacebook} className="h-8 w-8 text-primary" />
                        <CardTitle className="text-xl">GitHub</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Link
                            href="https://simplicekolomou.github.io"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            simplicekolomou.github.io
                        </Link>
                        <CardDescription className="mt-2">
                            Page de profil Facebook
                        </CardDescription>
                    </CardContent>
                </Card>

                {/* Localisation (optionnel) */}
                <Card className="hover:shadow-md transition-shadow">
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                        <MapPin className="h-8 w-8 text-primary" />
                        <CardTitle className="text-xl">Localisation</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Liège, Belgique</p>
                        <CardDescription className="mt-2">
                            Disponible pour du remote ou sur place
                        </CardDescription>
                    </CardContent>
                </Card>

                {/* Le numéro de téléphone */}
                <Card className="hover:shadow-md transition-shadow">
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                        <FontAwesomeIcon icon={faPhone} className="h-8 w-8 text-primary" />
                        <CardTitle className="text-xl">Téléphone</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Liège, Belgique</p>
                        <CardDescription className="mt-2">
                            +32489957329
                        </CardDescription>
                    </CardContent>
                </Card>
            </div>

            {/* Message de conclusion */}
            <div className="text-center mt-12 p-6 bg-muted/30 rounded-lg">
                <p className="text-muted-foreground">
                    Je serai ravi d&apos;échanger avec vous ! À bientôt.
                </p>
            </div>
        </main>
    );
}