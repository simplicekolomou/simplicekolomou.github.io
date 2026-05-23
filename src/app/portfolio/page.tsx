import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { Calendar, Users, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { technologies, type Technology } from "@/data/technology";
import {text} from "@/data/contentText";

export default function PortfolioPage() {
    // Fonction utilitaire pour résoudre les IDs en objets Technology
    const resolveTechs = (ids: string[]): Technology[] => {
        if (!ids || !Array.isArray(ids)) return [];
        return ids
            .map((id) => technologies.find((t) => t.id === id))
            .filter((tech): tech is Technology => tech !== undefined);
    };

    return (
        <main className="container mx-auto px-4 py-12 max-w-7xl">
            {/* En-tête */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    {text.projects.title}
                </h1>
                <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                    {text.projects.content}
                </p>
                <div className="w-24 h-1 bg-primary/30 mx-auto mt-4 rounded-full" />
            </div>

            {/* Grille de projets */}
            {projects.length === 0 ? (
                <div className="text-center text-muted-foreground py-12">
                    {text.projects.noProjects}
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {projects.map((project) => {
                        // Récupération des technologies du projet
                        let projectTechs: Technology[] = [];
                        if ("techIds" in project && Array.isArray(project.techIds)) {
                            projectTechs = resolveTechs(project.techIds);
                        } else if ("techs" in project && Array.isArray(project.techs)) {
                            projectTechs = project.techs;
                        }

                        return (
                            <Card
                                key={project.id}
                                className="overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border"
                            >
                                {/* Image du projet cliquable */}
                                {project.image && (
                                    <div className="relative h-48 w-full overflow-hidden bg-muted">
                                        <Link
                                            href={`/portfolio/${project.slug}`}
                                            className="block relative h-48 w-full overflow-hidden bg-muted"
                                        >
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover transition-transform duration-300 hover:scale-105"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                        </Link>
                                    </div>
                                )}

                                <CardHeader>
                                    <div className="flex items-start justify-between gap-2">
                                        <CardTitle className="text-xl line-clamp-1">
                                            {project.title}
                                        </CardTitle>
                                        {project.date && (
                                            <div className="flex items-center text-xs text-muted-foreground whitespace-nowrap">
                                                <Calendar className="h-3 w-3 mr-1" />
                                                {project.date}
                                            </div>
                                        )}
                                    </div>
                                    <CardDescription className="line-clamp-3">
                                        {project.description}
                                    </CardDescription>
                                </CardHeader>

                                <CardContent className="flex-grow space-y-3">
                                    {/* Technologies utilisées avec icônes */}
                                    {projectTechs.length > 0 && (
                                        <div className="flex flex-wrap gap-2">
                                            {projectTechs.slice(0, 4).map((tech) => (
                                                <Badge
                                                    key={tech.id}
                                                    variant="secondary"
                                                    className="text-xs flex items-center gap-1"
                                                >
                                                    {tech.icon && (
                                                        <span className="text-sm inline-flex items-center">
                                                            {tech.icon}
                                                        </span>
                                                    )}
                                                    <span>{tech.name}</span>
                                                </Badge>
                                            ))}
                                            {projectTechs.length > 4 && (
                                                <Badge variant="outline" className="text-xs">
                                                    +{projectTechs.length - 4}
                                                </Badge>
                                            )}
                                        </div>
                                    )}
                                </CardContent>

                                <CardFooter className="flex justify-between gap-2 pt-2 border-t">
                                    {/* Type de projet (personnel / équipe) et membres */}
                                    <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                                        {project.type === "personal" ? (
                                            <div className="flex items-center gap-1">
                                                <User className="h-4 w-4" />
                                                <span>{text.projects.projectTypes.personal}</span>
                                            </div>
                                        ) : (
                                            <div className="flex items-center gap-1">
                                                <Users className="h-4 w-4" />
                                                <span>{text.projects.projectTypes.team}</span>
                                            </div>
                                        )}
                                        {project.type === "team" && project.team && project.team.length > 0 && (
                                            <span className="text-xs">
                                                — {project.team.join(", ")}
                                            </span>
                                        )}
                                    </div>
                                </CardFooter>
                            </Card>
                        );
                    })}
                </div>
            )}
        </main>
    );
}