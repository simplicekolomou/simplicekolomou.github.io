import {skills} from "@/data/skills";
import {Code2, Database, Layout, Server, Sparkles} from "lucide-react";
import {JSX} from "react";

const categoryIcon: Record<string, JSX.Element> = {
    Frontend: <Layout className="w-5 h-5"/>,
    Backend: <Server className="w-5 h-5"/>,
    Database: <Database className="w-5 h-5"/>,
    "DevOps & Outils": <Code2 className="w-5 h-5"/>,
    Autre: <Sparkles className="w-5 h-5"/>,
};

export default function SkillsPage() {
    const skillsByCategory = skills.reduce((acc, skill) => {
        const cat = skill.category || "Autre";
        if (!acc[cat]) acc[cat] = [];
        acc[cat].push(skill);
        return acc;
    }, {} as Record<string, typeof skills>);

    return (
        <main className="container mx-auto px-4 py-12 max-w-5xl">

            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold">
                    Stack technique
                </h1>
                <p className="text-muted-foreground mt-2">
                    Technologies utilisées dans mes projets
                </p>
            </div>

            {/* Sections */}
            <div className="space-y-10">
                {Object.entries(skillsByCategory).map(([category, items]) => (
                    <section key={category} className="p-6 rounded-xl border bg-card">

                        {/* Category header */}
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