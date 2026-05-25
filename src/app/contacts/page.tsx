import { MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin, faSquareFacebook, faSquareGithub} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import {text} from "@/data/contentText";

export default function Contacts() {
    return (
        <main className="container mx-auto px-4 py-12 max-w-4xl">
            {/* En-tête */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    {text.contact.title}
                </h1>
                <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                    {text.contact.content}
                </p>
                <div className="w-24 h-1 bg-primary/30 mx-auto mt-4 rounded-full" />
            </div>

            {/* Cartes des coordonnées */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email */}
                <Card className="hover:shadow-md transition-shadow">
                    <Link
                        href="mailto:simplicekolomou@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors break-all"
                    >
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                        <FontAwesomeIcon icon={faEnvelope} className="h-8 w-8 text-primary" />
                        <CardTitle className="text-xl">{text.contact.email.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {text.contact.email.mail}
                            <CardDescription className="mt-2">
                                {text.contact.email.description}
                            </CardDescription>
                        </CardContent>
                    </Link>
                </Card>

                {/* LinkedIn */}
                <Card className="hover:shadow-md transition-shadow">
                    <Link
                        href="https://www.linkedin.com/in/kolomou-simplice-1b9b4a1b3/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                        <CardHeader className="flex flex-row items-center gap-4 pb-2">
                            <FontAwesomeIcon icon={faLinkedin} className="h-8 w-8 text-primary" />
                            <CardTitle className="text-xl">{text.contact.linkedin.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {text.contact.linkedin.profile}
                            <CardDescription className="mt-2">
                                {text.contact.linkedin.description}
                            </CardDescription>
                        </CardContent>
                    </Link>
                </Card>

                {/* GitHub */}
                <Card className="hover:shadow-md transition-shadow">
                    <Link
                        href="https://simplicekolomou.github.io"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                        <CardHeader className="flex flex-row items-center gap-4 pb-2">
                            <FontAwesomeIcon icon={faSquareGithub} className="h-8 w-8 text-primary" />
                            <CardTitle className="text-xl">{text.contact.github.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {text.contact.github.profile}
                            <CardDescription className="mt-2">
                                {text.contact.github.description}
                            </CardDescription>
                        </CardContent>
                    </Link>
                </Card>

                {/* Facebook */}
                <Card className="hover:shadow-md transition-shadow">
                    <Link
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                        <CardHeader className="flex flex-row items-center gap-4 pb-2">
                            <FontAwesomeIcon icon={faSquareFacebook} className="h-8 w-8 text-primary" />
                            <CardTitle className="text-xl">{text.contact.facebook.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {text.contact.facebook.profile}
                            <CardDescription className="mt-2">
                                {text.contact.facebook.description}
                            </CardDescription>
                        </CardContent>
                    </Link>
                </Card>

                {/* Localisation (optionnel) */}
                <Card className="hover:shadow-md transition-shadow">
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                        <MapPin className="h-8 w-8 text-primary" />
                        <CardTitle className="text-xl">{text.contact.location.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{text.contact.location.content}</p>
                        <CardDescription className="mt-2">
                            {text.contact.location.description}
                        </CardDescription>
                    </CardContent>
                </Card>

                {/* Le numéro de téléphone */}
                <Card className="hover:shadow-md transition-shadow">
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                        <FontAwesomeIcon icon={faPhone} className="h-8 w-8 text-primary" />
                        <CardTitle className="text-xl">{text.contact.phone.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{text.contact.phone.content}</p>
                        <CardDescription className="mt-2">
                            {text.contact.phone.description}
                        </CardDescription>
                    </CardContent>
                </Card>
            </div>

            {/* Message de conclusion */}
            <div className="text-center mt-12 p-6 bg-muted/30 rounded-lg">
                <p className="text-muted-foreground">
                    {text.contact.conclusion}
                </p>
            </div>
        </main>
    );
}