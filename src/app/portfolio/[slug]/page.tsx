import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import ProjectClient from "@/app/portfolio/[slug]/ProjectClient";

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

    return <ProjectClient project={project}  />;
}