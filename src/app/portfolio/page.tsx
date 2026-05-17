import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import {ExternalLink, Calendar, FolderGit2, Mail} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function PortfolioPage() {
    return (
        <main className="container mx-auto px-4 py-12 max-w-7xl">
            {/* En-tête */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    Mes projets
                </h1>
                <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                    Découvrez une sélection de réalisations personnelles et professionnelles
                </p>
                <div className="w-24 h-1 bg-primary/30 mx-auto mt-4 rounded-full" />
            </div>

            {/* Grille de projets */}
            {projects.length === 0 ? (
                <div className="text-center text-muted-foreground py-12">
                    Aucun projet à afficher pour le moment.
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <Card
                            key={project.title}
                            className="overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border"
                        >
                            {/* Image du projet */}
                            {project.image && (
                                <div className="relative h-48 w-full overflow-hidden bg-muted">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-300 hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
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
                            <CardContent className="flex-grow">
                                {/* Technologies utilisées */}
                                {project.techs && project.techs.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.techs.slice(0, 4).map((tech) => (
                                            <Badge key={tech.id} variant="secondary" className="text-xs">
                                                {tech.name}
                                            </Badge>
                                        ))}
                                        {project.techs.length > 4 && (
                                            <Badge variant="outline" className="text-xs">
                                                +{project.techs.length - 4}
                                            </Badge>
                                        )}
                                    </div>
                                )}
                            </CardContent>
                            <CardFooter className="flex justify-between gap-2 pt-2 border-t">
                                {project.githubUrl && (
                                    <Button variant="outline" size="sm" asChild>
                                        <Link
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1"
                                        >
                                            <Mail className="h-4 w-4" />
                                            Code
                                        </Link>
                                    </Button>
                                )}
                                {project.demo && (
                                    <Button size="sm" asChild>
                                        <Link
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1"
                                        >
                                            <ExternalLink className="h-4 w-4" />
                                            Démo
                                        </Link>
                                    </Button>
                                )}
                                {!project.githubUrl && !project.demo && (
                                    <div className="flex items-center text-muted-foreground text-sm">
                                        <FolderGit2 className="h-4 w-4 mr-1" />
                                        Détails disponibles
                                    </div>
                                )}
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            )}
        </main>
    );
}