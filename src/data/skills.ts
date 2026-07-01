/**
 * Ce fichier définit les compétences techniques et les outils que je maîtrise, organisés par catégorie.
 * Chaque compétence est représentée par un objet contenant un identifiant, un nom, un type (technique ou outil), une catégorie et un contexte d'utilisation.
 * Ces compétences sont utilisées pour présenter mes connaissances et expériences dans mon portfolio.
 */

/**
 * Enumération des types de compétences : techniques (langages, frameworks, bases de données) et outils (IDE, gestion de versions).
 */
export enum SkillType {
    Technical = "Technical",
    Tool = "Tool"
}

/**
 * Interface représentant une compétence, avec un identifiant unique, un nom, un type (technique ou outil), une catégorie
 * (ex: Backend, Frontend) et un contexte d'utilisation.
 * - id : identifiant unique de la compétence
 * - name : nom de la compétence
 * - type : type de compétence (technique ou outil)
 * - category : catégorie de la compétence (ex: Backend, Frontend, Database, Outils, IDE)
 * - context : description du contexte d'utilisation de la compétence (ex: projets, technologies associées)
 */
export interface Skill {
    id: string;
    name: string;
    type: SkillType;
    category?: string;
    context?: string;
}

/**
 * Tableau de compétences, regroupant les compétences techniques (langages, frameworks, bases de données) et les outils (IDE, gestion de versions).
 * Chaque compétence est organisée par catégorie pour faciliter la présentation dans le portfolio.
 * - Backend : compétences techniques liées au développement backend (ex: Java, Kotlin, C#, PHP)
 * - Frontend : compétences techniques liées au développement frontend (ex: TypeScript, React, Next.js)
 * - Database : compétences techniques liées aux bases de données (ex: MySQL, PostgreSQL, SQL Server, Oracle SQL)
 * - Outils : compétences liées aux outils de développement (ex: Git, Maven, Gradle)
 * - IDE : compétences liées aux environnements de développement intégrés (ex: IntelliJ IDEA, PhpStorm, Rider, VS Code, Eclipse)
 */
export const skills: Skill[] = [
    // Backend (Technical)
    { id: "java", name: "Java", type: SkillType.Technical, category: "Backend", context: "POO · API REST · JPA/Hibernate" },
    { id: "kotlin", name: "Kotlin", type: SkillType.Technical, category: "Backend", context: "Développement Android natif · Applications Mobiles MVVM" },
    { id: "csharp", name: "C#", type: SkillType.Technical, category: "Backend", context: ".NET Desktop apps · Architecture MVP · ASP.NET Core" },
    { id: "php", name: "PHP", type: SkillType.Technical, category: "Backend", context: "Développement backend web · applications dynamiques et API REST" },

    // Frontend (Technical)
    { id: "ts", name: "TypeScript", type: SkillType.Technical, category: "Frontend", context: "Développement frontend typé · applications React/Next.js" },
    { id: "react", name: "React", type: SkillType.Technical, category: "Frontend", context: "SPA · hooks · state management (RTK Query) · Form" },
    { id: "js", name: "JavaScript", type: SkillType.Technical, category: "Frontend", context: "Développement frontend · applications web interactives" },


    // Framework & bibliothèques
    { id: "nextjs", name: "Next.js", type: SkillType.Technical, category: "Framework & Librairies", context: "Applications React · rendu SSR/SSG/CSR · Dashboards" },
    { id: "shadcn", name: "Shadcn UI", type: SkillType.Technical, category: "Framework & Librairies", context: "Composants UI React réutilisables" },
    { id: "chakra-ui", name: "Chakra UI", type: SkillType.Technical, category: "Framework & Librairies", context: "Composants UI React · design system · Accessibilité · Responsibilité" },
    { id: "tailwind", name: "Tailwind CSS", type: SkillType.Technical, category: "Framework & Librairies", context: "Stylisation d’interfaces modernes · design responsive" },
    {id: "springboot", name: "Spring Boot", type: SkillType.Technical, category: "Framework & Librairies", context: "Développement backend Java · applications REST et microservices" },
    {id: "laravel", name: "Laravel", type: SkillType.Technical, category: "Framework & Librairies", context: "Framework PHP · développement d'applications web et API REST" },
    {id: "next", name: "Next.js", type: SkillType.Technical, category: "Framework & Librairies", context: "Framework React · rendu SSR/SSG/CSR · Dashboards" },
    {id: "reacthookform", name: "React Hook Form", type: SkillType.Technical, category: "Framework & Librairies", context: "Gestion de formulaires React · validation et soumission" },
    {id: "zod", name: "Zod", type: SkillType.Technical, category: "Framework & Librairies", context: "Validation de schémas TypeScript · intégration avec React Hook Form" },

    // Base de données (Technical)
    { id: "mysql", name: "MySQL", type: SkillType.Technical, category: "Base de données", context: "Bases de données relationnelles · applications web et projets académiques" },
    { id: "pgsql", name: "PostgreSQL", type: SkillType.Technical, category: "Base de données", context: "Bases de données relationnelles avancées · API backend et applications full-stack" },
    { id: "sqlserver", name: "SQL Server", type: SkillType.Technical, category: "Base de données", context: "Bases de données relationnelles · applications .NET et projets académiques" },
    { id: "oracle", name: "Oracle SQL", type: SkillType.Technical, category: "Base de données", context: "Bases de données relationnelles · environnement académique et exercices SQL" },

    // Outils (Tool)
    { id: "git", name: "Git", type: SkillType.Tool, category: "Outils", context: "Gestion de versions · collaboration en équipe via GitHub/GitLab" },
    {id: "maven", name: "Maven", type: SkillType.Tool, category: "Outils", context: "Gestion de dépendances et build Java · projets académiques et Spring Boot" },
    { id: "gradle", name: "Gradle", type: SkillType.Tool, category: "Outils", context: "Automatisation de build · projets Java/Kotlin (Android, Spring Boot)" },

    // IDE (Tool)
    { id: "intellij", name: "IntelliJ IDEA", type: SkillType.Tool, category: "IDEs", context: "Java/Kotlin" },
    { id: "phpstorm", name: "PhpStorm", type: SkillType.Tool, category: "IDEs", context: "PHP/Laravel, React" },
    { id: "rider", name: "Rider", type: SkillType.Tool, category: "IDEs", context: "C#/.NET" },
    { id: "vscode", name: "VS Code", type: SkillType.Tool, category: "IDEs", context: "JavaScript/TypeScript, React, Next.js" },
    { id: "eclipse", name: "Eclipse", type: SkillType.Tool, category: "IDEs", context: "Java" },
];