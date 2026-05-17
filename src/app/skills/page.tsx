import { skills } from "@/data/skills";
import { Code2, Database, Layout, Server, Sparkles } from "lucide-react";
import {JSX} from "react";

// Mapping icônes par catégorie (personnalisable)
const categoryIcon = {
    Frontend: <Layout className="w-5 h-5" />,
    Backend: <Server className="w-5 h-5" />,
    Database: <Database className="w-5 h-5" />,
    "DevOps & Outils": <Code2 className="w-5 h-5" />,
    Autre: <Sparkles className="w-5 h-5" />,
};

// Fonction pour déterminer la couleur de la barre selon le niveau
const levelColor = (level: number) => {
    if (level >= 80) return "bg-green-500";
    if (level >= 60) return "bg-blue-500";
    if (level >= 40) return "bg-yellow-500";
    return "bg-gray-400";
};

export default function SkillsPage() {
    // Si vos données n'ont pas de catégorie, vous pouvez les grouper manuellement
    // ou simplement afficher une grille sans catégories.
    // Ici on suppose que chaque compétence a : id, name, category?, level? (0-100)
    // Ajustez selon votre structure réelle.

    // Exemple de regroupement par catégorie (si category existe)
    const skillsByCategory = skills.reduce((acc, skill) => {
        const cat = skill.category || "Autre";
        if (!acc[cat]) acc[cat] = [];
        acc[cat].push(skill);
        return acc;
    }, {} as Record<string, typeof skills>);

    return (
        <main className="container mx-auto px-4 py-12 max-w-5xl">
            {/* En-tête */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    Mes compétences
                </h1>
                <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                    Technologies, frameworks et outils que j&apos;utilise au quotidien
                </p>
                <div className="w-24 h-1 bg-primary/30 mx-auto mt-4 rounded-full" />
            </div>

            {/* Affichage par catégorie ou en grille simple */}
            {Object.keys(skillsByCategory).length > 0 ? (
                <div className="space-y-12">
                    {Object.entries(skillsByCategory).map(([category, items]) => (
                        <section key={category}>
                            <div className="flex items-center gap-2 mb-4">
                                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                    {(categoryIcon as Record<string, JSX.Element>)[category] || <Code2 className="w-5 h-5" />}
                                </div>
                                <h2 className="text-2xl font-semibold">{category}</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {items.map((skill) => (
                                    <div
                                        key={skill.id}
                                        className="group p-4 rounded-xl border bg-card hover:shadow-md transition-all duration-200"
                                    >
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-medium text-foreground">{skill.name}</span>
                                            {skill.level && (
                                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                                            )}
                                        </div>
                                        {skill.level && (
                                            <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                                                <div
                                                    className={`h-full rounded-full ${levelColor(skill.level)} transition-all duration-500 group-hover:opacity-90`}
                                                    style={{ width: `${skill.level}%` }}
                                                />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            ) : (
                // Fallback : simple grille de badges stylisés si pas de catégorie ni niveau
                <div className="flex flex-wrap justify-center gap-3">
                    {skills.map((skill) => (
                        <span
                            key={skill.id}
                            className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm hover:bg-primary/20 transition-colors"
                        >
              {skill.name}
            </span>
                    ))}
                </div>
            )}

            {/* Message si aucune compétence */}
            {skills.length === 0 && (
                <div className="text-center text-muted-foreground py-12">
                    Aucune compétence à afficher pour le moment.
                </div>
            )}
        </main>
    );
}