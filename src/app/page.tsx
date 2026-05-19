import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
    Briefcase,
    Code2,
    GraduationCap,
    Heart,
    MapPin,
    Calendar,
    Sparkles,
    ArrowRight
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
    // Données des compétences avec icônes (utilisation d'émojis ou de Lucide si dispo)
    const techs = [
        { name: "React", icon: "⚛️" },
        { name: "Next.js", icon: "▲" },
        { name: "TypeScript", icon: "📘" },
        { name: "Tailwind CSS", icon: "🎨" },
        { name: "Node.js", icon: "🟢" },
        { name: "Java", icon: "☕" },
        { name: "Spring Boot", icon: "🍃" },
        { name: "Git", icon: "⎇" },
    ];

    return (
        <Card className="w-full max-w-4xl mx-auto my-12 overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-background via-background to-muted/20 rounded-3xl transition-all duration-300 hover:shadow-2xl">
            {/* Bandeau décoratif avec dégradé animé */}
            <div className="relative h-32 bg-gradient-to-r from-primary/40 via-primary/20 to-transparent overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg...')] opacity-10" />
            </div>

            <CardHeader className="relative px-8 pt-0 pb-2">
                <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 -mt-12 sm:-mt-10 mb-2">
                    <Avatar className="w-28 h-28 border-4 border-background shadow-xl ring-2 ring-primary/20">
                        <AvatarImage src="/avatar.jpg" alt="Photo de profil" />
                        <AvatarFallback className="bg-gradient-to-br from-primary/20 to-primary/5 text-primary text-2xl font-bold">
                            SK
                        </AvatarFallback>
                    </Avatar>
                    <div className="text-center sm:text-left flex-1">
                        <CardTitle className="text-3xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                            Simplice Kolomou
                        </CardTitle>
                        <div className="flex flex-wrap justify-center sm:justify-start items-center gap-x-4 gap-y-1 mt-2 text-muted-foreground">
                            <div className="flex items-center gap-1 text-sm">
                                <MapPin className="w-4 h-4" />
                                <span>Liège, Belgique</span>
                            </div>
                            <div className="flex items-center gap-1 text-sm">
                                <Calendar className="w-4 h-4" />
                                <span>Disponible pour stage (Fév. 2027)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="space-y-8 px-8 pb-8">
                {/* Description avec mise en avant */}
                <div className="prose prose-neutral dark:prose-invert max-w-none">
                    <p className="text-lg leading-relaxed">
                        Passionné par le développement logiciel, je suis actuellement en <span className="font-semibold text-primary">3ème année de Bachelier en développement d&apos;applications</span> à la Haute École Libre Mosane (HELMo).
                        J&apos;aime concevoir des solutions robustes et modernes, du backend aux interfaces utilisateur.
                    </p>
                    <p className="mt-3 text-muted-foreground">
                        À la recherche d&apos;un <strong>stage de 4 à 6 mois à partir de février 2027</strong> en Belgique (Liège/Bruxelles) ou en France.
                        Je souhaite intégrer une équipe projet pour contribuer à des applications concrètes et monter en compétence sur une stack professionnelle.
                    </p>
                </div>

                {/* Badges de technologies avec icônes et hover */}
                <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2 mb-4">
                        <Code2 className="w-4 h-4" />
                        Stack technique
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {techs.map((tech) => (
                            <Badge
                                key={tech.name}
                                variant="secondary"
                                className="px-3 py-1.5 text-sm font-normal gap-1.5 transition-all hover:scale-105 hover:bg-primary/10"
                            >
                                <span className="text-base">{tech.icon}</span>
                                {tech.name}
                            </Badge>
                        ))}
                    </div>
                </div>

                {/* Grille d'informations enrichie */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
                        <div className="p-2 rounded-full bg-primary/10 text-primary">
                            <Briefcase className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-sm font-semibold">Expérience</p>
                            <p className="text-sm text-muted-foreground">
                                Expériences académiques & personnelles<br />
                                (projets concrets, gestion BDD)
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
                        <div className="p-2 rounded-full bg-primary/10 text-primary">
                            <GraduationCap className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-sm font-semibold">Formation</p>
                            <p className="text-sm text-muted-foreground">
                                Bachelier en Informatique de gestion<br />
                                (Développement d&apos;applications – HELMo)
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
                        <div className="p-2 rounded-full bg-primary/10 text-primary">
                            <Heart className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-sm font-semibold">Passions</p>
                            <p className="text-sm text-muted-foreground">
                                API REST, architectures propres,<br />
                                UI/UX, musique (guitare)
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section citation + appel à l'action */}
                <div className="relative mt-4 rounded-2xl bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 p-6 text-center overflow-hidden">
                    <Sparkles className="absolute top-2 right-2 w-6 h-6 text-primary/20" />
                    <p className="italic text-muted-foreground text-base leading-relaxed">
                        « Transformer des idées en expériences numériques mémorables. »
                    </p>
                    <Separator className="my-4 w-24 mx-auto bg-primary/30" />
                    <Link
                        href="/contacts"
                        className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all"
                    >
                        Discutons de votre projet <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
}