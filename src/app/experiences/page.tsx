// app/experiences/page.tsx (ou pages/experiences.tsx selon votre structure)
import { experiences } from "@/data/experiences";
import { Briefcase, Calendar, Building2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ExperiencesPage() {
    return (
        <main className="container mx-auto px-4 py-12 max-w-5xl">
            {/* En-tête */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    Expériences
                </h1>
                <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                    Parcours professionnel et responsabilités
                </p>
                <div className="w-24 h-1 bg-primary/30 mx-auto mt-4 rounded-full" />
            </div>

            {/* Liste des expériences */}
            <div className="space-y-6">
                {experiences.map((exp) => (
                    <Card key={exp.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                        <CardHeader className="pb-3">
                            <div className="flex flex-wrap justify-between items-start gap-2">
                                <div>
                                    <CardTitle className="text-2xl">{exp.title}</CardTitle>
                                    <CardDescription className="flex items-center gap-2 mt-1">
                                        <Building2 className="w-4 h-4" />
                                        {exp.company}
                                    </CardDescription>
                                </div>
                                <div className="flex items-center text-sm text-muted-foreground whitespace-nowrap">
                                    <Calendar className="w-4 h-4 mr-1" />
                                    {exp.startDate} – {exp.endDate ?? "Aujourd'hui"}
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-foreground/80 leading-relaxed">{exp.description}</p>
                            {exp.technologies.length > 0 && (
                                <div>
                                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-2">
                                        <Briefcase className="w-4 h-4" />
                                        Technologies
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech) => (
                                            <Badge key={tech.id} variant="secondary" className="text-xs">
                                                {tech.name}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Message si aucune expérience */}
            {experiences.length === 0 && (
                <div className="text-center text-muted-foreground py-12">
                    Aucune expérience à afficher pour le moment.
                </div>
            )}
        </main>
    );
}