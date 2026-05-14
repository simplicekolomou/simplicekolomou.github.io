// src/app/projets/[slug]/page.tsx
import { projets } from '../../../data/projets.json';
import { notFound } from 'next/navigation';

// Obligatoire pour l'export statique
export async function generateStaticParams() {
  return projets.map((projet) => ({
    slug: projet.slug,
  }));
}

export default function ProjetDetail({ params }: { params: { slug: string } }) {
  const projet = projets.find((p) => p.slug === params.slug);

  if (!projet) {
    notFound();
  }

  return (
    <main>
      <h1>{projet.titre}</h1>
      <p>{projet.description}</p>
      {/* Ajoute le reste de tes informations */}
    </main>
  );
}