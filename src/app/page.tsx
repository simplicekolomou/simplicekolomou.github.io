import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { technologies } from "@/data/technology";
import {Section} from "@/data/section";
import {text} from "@/data/contentText";

export default function HomePage() {
    const groupedTechnologies = technologies.reduce((acc, tech) => {
        const section = tech.section;

        if (!acc[section]) {
            acc[section] = [];
        }

        acc[section].push(tech);

        return acc;
    }, {} as Record<Section, typeof technologies>);
    return (
        <Card className="w-full max-w-4xl mx-auto my-12 overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-background via-background to-muted/20 rounded-3xl transition-all duration-300 hover:shadow-2xl">
            {/* Bandeau décoratif avec dégradé animé */}
            <div className="relative h-32 bg-gradient-to-r from-primary/40 via-primary/20 to-transparent overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg...')] opacity-10" />
            </div>

            <CardHeader className="relative px-8 pt-0 pb-2">
                <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 -mt-12 sm:-mt-10 mb-2">
                    <Avatar className="w-28 h-28 border-4 border-background shadow-xl ring-2 ring-primary/20">
                        <AvatarImage src="/images/profile/photo-profil.jpg" alt="Photo de profil" />
                        <AvatarFallback className="bg-gradient-to-br from-primary/20 to-primary/5 text-primary text-2xl font-bold">
                            SK
                        </AvatarFallback>
                    </Avatar>
                    <div className="text-center sm:text-left flex-1">
                        <CardTitle className="text-3xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                            {text.home.myName}
                        </CardTitle>
                        <div className="flex flex-wrap justify-center sm:justify-start items-center gap-x-4 gap-y-1 mt-2 text-muted-foreground">
                            <div className="flex items-center gap-1 text-sm">
                                <MapPin className="w-4 h-4" />
                                <span>{text.home.myLocation}</span>
                            </div>
                            <div className="flex items-center gap-1 text-sm">
                                <Calendar className="w-4 h-4" />
                                <span>{text.home.myAvailability}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="space-y-8 px-8 pb-8">
                {/* Description avec mise en avant */}
                <div className="prose prose-neutral dark:prose-invert max-w-none">
                    <p className="text-lg leading-relaxed">{text.home.aboutMe}</p>
                    <p className="mt-3 text-muted-foreground">{text.home.intention}</p>
                </div>

                {/* Section Stack technique avec regroupement par catégorie */}
                <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2 mb-4">
                        <Code2 className="w-4 h-4" />
                        {text.home.stackTitle}
                    </h3>

                    <div className="space-y-6">
                        {Object.values(Section).map((section) => {
                            const techs = groupedTechnologies[section] || [];
                            if (techs.length === 0) return null;
                            return (
                                <div key={section}>
                                    <p className="text-sm font-medium mb-2 text-muted-foreground">
                                        {section}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {techs.map((tech) => (
                                            <span
                                                key={tech.id}
                                                className="inline-flex items-center gap-1 px-3 py-1.5 text-sm rounded-full bg-secondary transition hover:bg-primary/10"
                                            >
                                                {tech.icon && (
                                                    <span className="text-base">{tech.icon}</span>
                                                )}
                                                {tech.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Grille d'informations */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
                        <div className="p-2 rounded-full bg-primary/10 text-primary">
                            <Briefcase className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-sm font-semibold">{text.home.experiences.title}</p>
                            <p className="text-sm text-muted-foreground">
                                {text.home.experiences.content}<br />
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
                        <div className="p-2 rounded-full bg-primary/10 text-primary">
                            <GraduationCap className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-sm font-semibold">{text.home.education.title}</p>
                            <p className="text-sm text-muted-foreground">
                                {text.home.education.content}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
                        <div className="p-2 rounded-full bg-primary/10 text-primary">
                            <Heart className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-sm font-semibold">{text.home.passions.title}</p>
                            <p className="text-sm text-muted-foreground">
                                {text.home.passions.content}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section citation + appel à l'action */}
                <div className="relative mt-4 rounded-2xl bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 p-6 text-center overflow-hidden">
                    <Sparkles className="absolute top-2 right-2 w-6 h-6 text-primary/20" />
                    <p className="italic text-muted-foreground text-base leading-relaxed">
                        {text.home.citation}
                    </p>
                    <Separator className="my-4 w-24 mx-auto bg-primary/30" />
                    <Link
                        href="/contacts"
                        className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all"
                    >
                        {text.home.action} <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
}