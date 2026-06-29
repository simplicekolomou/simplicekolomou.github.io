import { projects } from "@/data/projects";
import { technologies, type Technology } from "@/data/technology";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {Calendar, Users, User, ExternalLink, ArrowLeft} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import ImageSlider from "@/components/slider/ImageSlider";
import {text} from "@/data/contentText";

// Génération statique de tous les slugs (obligatoire pour l'export)
export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    // Récupération des technologies du projet
    let projectTechs: Technology[] = [];
    if ("techIds" in project && Array.isArray(project.techIds)) {
        projectTechs = project.techIds
            .map((id: string) => technologies.find((t) => t.id === id))
            .filter((t): t is Technology => t !== undefined);
    }

    // Images pour le slider
    const sliderImages = project.images ?? (project.image ? [project.image] : []);

    return (
        <main className="container mx-auto px-4 py-12 max-w-5xl">
            {/* En-tête */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    {project.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 mt-2 text-muted-foreground justify-center w-full">
                    {project.date && (
                        <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{project.date}</span>
                        </div>
                    )}
                    <div className="flex items-center gap-1">
                        {project.type === "personal" ? (
                            <>
                                <User className="h-4 w-4" />
                                <span>{text.projects.projectTypes.personal}</span>
                            </>
                        ) : (
                            <>
                                <Users className="h-4 w-4" />
                                <span>{text.projects.projectTypes.team}</span>
                            </>
                        )}
                        {project.type === "team" && project.team && (
                            <span className="text-sm">– {project.team.join(", ")}</span>
                        )}
                    </div>
                </div>
            </div>

            <Button
                variant={"default"}
                className="mb-2 w-36"
                asChild
            >
                <Link href="/portfolio">
                    <ArrowLeft />{text.projects.actions.back}
                </Link>
            </Button>

            {/* Slider d'images */}
            {sliderImages.length > 0 && (
                <ImageSlider
                    images={sliderImages}
                    alt={project.title}
                    interval={3000}
                    autoplay={true}
                />
            )}

            {/* Détails du projet */}
            <div className="space-y-8 mb-8">
                {project.details.map((section) => (
                    <div key={section.id}>
                        <h2 className="text-2xl font-semibold mb-3">
                            {section.title}
                        </h2>

                        <div className="space-y-2">
                            {section.items.map((item, index) => (
                                <p
                                    key={index}
                                    className="text-muted-foreground leading-relaxed"
                                >
                                    {item}
                                </p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Technologies utilisées */}
            {projectTechs.length > 0 && (
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-3">Technologies</h2>
                    <div className="flex flex-wrap gap-2">
                        {projectTechs.map((tech) => (
                            <Badge key={tech.id} variant="secondary" className="flex items-center gap-1">
                                {tech.icon && <span className="text-sm inline-flex items-center">{tech.icon}</span>}
                                {tech.name}
                            </Badge>
                        ))}
                    </div>
                </div>
            )}

            {/* Liens (repos & démo) */}
            <div className="flex flex-wrap gap-4">
                {project.repos && project.repos.length > 0 && (
                    project.repos.length === 1 ? (
                        <a href={project.repos[0]} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center border rounded-lg p-2">
                            <FontAwesomeIcon icon={faCode} className="mr-2 h-4 w-4" />
                            {text.projects.actions.repos.mono}
                        </a>
                    ) : (
                        <>
                            <a href={project.repos[0]} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center border rounded-lg p-2">
                                <FontAwesomeIcon icon={faCode} className="mr-2 h-4 w-4" />
                                {text.projects.actions.repos.frontend}
                            </a>
                            <a href={project.repos[1]} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center border rounded-lg p-2">
                                <FontAwesomeIcon icon={faCode} className="mr-2 h-4 w-4" />
                                {text.projects.actions.repos.backend}
                            </a>
                        </>
                    )
                )}
                {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center border rounded-lg p-2  bg-blue-400">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {text.projects.actions.demo}
                    </a>
                )}
            </div>
        </main>
    );
}