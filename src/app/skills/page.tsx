import {skills} from "@/data/skills";
import {Code2, Database, Layout, Server, Sparkles} from "lucide-react";
import {JSX} from "react";
import {text} from "@/data/contentText";

const categoryIcon: Record<string, JSX.Element> = {
    Frontend: <Layout className="w-5 h-5"/>,
    Backend: <Server className="w-5 h-5"/>,
    Database: <Database className="w-5 h-5"/>,
    "DevOps & Outils": <Code2 className="w-5 h-5"/>,
    Autre: <Sparkles className="w-5 h-5"/>,
};

export default function SkillsPage() {
    /**
     * Récupère les compétences et les organise par catégorie. Si une compétence n'a pas de catégorie, elle est placée dans "Autre".
     * @return Un objet où les clés sont les catégories et les valeurs sont des tableaux de compétences appartenant à ces catégories.
     * Note: Cette organisation facilite l'affichage des compétences par section dans le composant React.
     */
    const skillsByCategory = skills.reduce((acc, skill) => {
        const cat = skill.category || "Autre";
        if (!acc[cat]) acc[cat] = [];
        acc[cat].push(skill);
        return acc;
    }, {} as Record<string, typeof skills>);

    return (
        <main className="container mx-auto px-4 py-12 max-w-7xl">

            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    {text.skills.title}
                </h1>
                <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                    {text.skills.content}
                </p>
                <div className="w-24 h-1 bg-primary/30 mx-auto mt-4 rounded-full" />
            </div>

            {/* Sections */}
            <div className="space-y-1">
                {Object.entries(skillsByCategory).map(([category, items]) => (
                    <section key={category} className="p-6 rounded-xl border bg-card">

                        {/* Section header */}
                        <div className="flex items-center gap-2 mb-5">
                            <div className="text-primary">
                                {categoryIcon[category]}
                            </div>
                            <h2 className="text-xl font-semibold">{category}</h2>
                        </div>

                        {/* Skills list */}
                        <div className="space-y-3">
                            {items.map((skill) => (
                                <div
                                    key={skill.id}
                                    className="flex flex-col md:flex-row md:items-center justify-between gap-1 border-b pb-3 last:border-none"
                                >
                                    <span className="font-medium">
                                        {skill.name}
                                    </span>

                                        {skill.context && (
                                            <span className="text-sm text-muted-foreground">
                                                {skill.context}
                                            </span>
                                        )}
                                </div>
                            ))}
                        </div>

                    </section>
                ))}
            </div>
        </main>
    );
}