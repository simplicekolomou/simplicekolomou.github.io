export interface Skill {
    id: string;
    name: string;
    category: "Frontend" | "Backend" | "Database" | "Outils" | "IDE" | "Autre"
    context?: string;
}

const skills: Skill[] = [
    // Backend
    { id: "java", name: "Java", category: "Backend", context: "Bookexchange (Spring Boot, JPA) · MMA (Hibernate, REST APIs)" },
    { id: "kotlin", name: "Kotlin", category: "Backend", context: "GestRepas : Android MVVM, Room, Coroutines" },
    { id: "csharp", name: "C#", category: "Backend", context: "Puroguramu : ASP.NET Core, Avalonia UI" },
    { id: "php", name: "PHP", category: "Backend", context: "CoAct : Laravel, Eloquent" },

    // Frontend
    { id: "ts", name: "TypeScript", category: "Frontend", context: "Bookexchange : typage strict, génériques, union types" },
    { id: "react", name: "React", category: "Frontend", context: "Bookexchange : hooks, react-hook-form, zod, state global (RTK Query), composants réutilisables" },
    { id: "nextjs", name: "Next.js", category: "Frontend", context: "Ticketing & Portfolio : App Router, SSG, static export, internationnalisation(next-intl), " },
    { id: "shadcn", name: "Shadcn UI", category: "Frontend", context: "Tecketing : composants accessibles, theming, intégration Tailwind" },
    { id: "tailwind", name: "Tailwind CSS", category: "Frontend", context: "Puroguramu & Ticketing : design responsive, utility-first, dark mode" },

    // Base de données
    { id: "mysql", name: "MySQL", category: "Database", context: "MMA" },
    { id: "pgsql", name: "PostgreSQL", category: "Database", context: "Bookexchange" },
    { id: "sqlserver", name: "SQL Server", category: "Database", context: "Puroguramu" },
    { id: "orcle", name: "Oracle SQL", category: "Database", context: "MMA" },

    // Outils & IDE (regroupés)
    { id: "git", name: "Git", category: "Outils", context: "GitHub, GitLab, travail en équipe" },
    { id: "gradle", name: "Gradle", category: "Outils", context: "Bookexchange, MMA" },
    { id: "intellij", name: "IntelliJ IDEA", category: "IDE", context: "Java/Kotlin" },
    { id: "phpstorm", name: "PhpStorm", category: "IDE", context: "PHP/Laravel, React" },
    { id: "rider", name: "Rider", category: "IDE", context: "C#/.NET" },
    { id: "vscode", name: "VS Code", category: "IDE", context: "JavaScript/TypeScript, React, Next.js" },
    { id: "eclipse", name: "Eclipse", category: "IDE", context: "Java" },
];

export { skills };