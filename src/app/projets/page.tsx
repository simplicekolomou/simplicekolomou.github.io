import Link from 'next/link';

export default function ProjectCard({ titre, slug, description, technos }: {
  titre: string;
  slug: string;
  description: string;
  technos: string[];
}) {
  return (
    <Link href={`/projets/${slug}`}>
      <div className="p-4 border rounded-lg hover:shadow-lg transition">
        <h3 className="text-xl font-bold">{titre}</h3>
        <p className="text-gray-600">{description}</p>
        <div className="flex gap-2 mt-2">
          {/* {technos.map(t => <span key={t} className="px-2 py-1 bg-gray-100 rounded text-sm">{t}</span>)} */}
        </div>
      </div>
    </Link>
  );
}