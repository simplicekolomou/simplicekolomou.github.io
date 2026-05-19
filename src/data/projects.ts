import { techs } from "./technology";
export interface Technology {
    id: string;
    name: string;
    icon: string; // URL ou chemin vers une icône (vide par défaut si non dispo)
}

export interface Project {
    id: string;
    title: string;
    description: string;
    techs: Technology[];
    slug: string;
    image?: string;
    date?: string;
    repos?: string[];
    demo?: string;
}

export const projects: Project[] = [
    {
        id: "bookexchange",
        title: "Bookexchange",
        description:
            "Plateforme d'échange de livres. Développement d'une API REST Spring Boot (Java 25, JPA/Hibernate) et d'un frontend React + TypeScript (RTK Query). Implémentation de l'authentification, gestion des collections, messagerie instantanée et système d'échanges. Conception mobile-first.",
        techs: [techs.springBoot, techs.react, techs.typescript, techs.rtkQuery, techs.hibernate, techs.gradle, techs.git],
        slug: "bookexchange",
        date: "2025-12",
        repos: ["https://github.com/simplicekolomou/bookexchange-front", "https://github.com/simplicekolomou/bookexchange-api"], // à remplacer par votre vrai dépôt
        demo: "https://www.loom.com/share/pert-demo",
        image: "/Bookexchange-home.png",
    },
    {
        id: "meet-me-at",
        title: "Meet Me At",
        description:
            "Application multi-plateforme de gestion de réservations : CLI admin (Java) et GUI client (C# Avalonia UI). Architecture hexagonale pour séparation métier/infrastructure. Persistance MySQL (JDBC, ADO.NET).",
        techs: [techs.java, techs.csharp, techs.avalonia, techs.mysql, techs.jdbc, techs.gradle, techs.git],
        slug: "meet-me-at",
        date: "2024-12",
        repos: ["https://github.com/simplicekolomou/mma-client", "https://github.com/simplicekolomou/mma.admin"],
        demo: "https://www.loom.com/share/pert-demo",
        image: "/mma-presentation.png",
    },
    {
        id: "gestion-repas",
        title: "GestionRepas",
        description:
            "Application Android native de gestion de listes de courses. Développement MVVM : planification de repas, listes de courses, partage caméra. Intégration Room (persistance locale) et tests unitaires ViewModel. Méthodologie agile (User Stories).",
        techs: [techs.kotlin, techs.android, techs.mvvm, techs.room, techs.git],
        slug: "gestion-repas",
        date: "2025-06",
        repos: ["https://github.com/simplicekolomou/gestion-repas"],
        demo: "https://www.loom.com/share/pert-demo",
        image: "/Gestion-repas-presentation.png",
    },
    {
        id: "puorquamru",
        title: "Puorquamru",
        description:
            "Plateforme E-learning full-stack : interface étudiant/enseignant, CRUD leçons/exercices, publication/masquage de leçon. Authentification par rôles, suivi de progression, validation serveur. Réalisé avec ASP.NET Core, Entity Framework, SQL Server, Razor Pages.",
        techs: [techs.aspnet, techs.entityFramework, techs.postgresql, techs.razorPages, techs.git],
        slug: "puorquamru",
        date: "2024-06",
        repos: ["https://github.com/simplicekolomou/puorquamru"],
        demo: "https://www.loom.com/share/pert-demo",
        image: "/puroguramu-presentation.png",
    },
    {
        id: "my-portfolio",
        title: "Mon Portfolio",
        description:
            "Site portfolio personnel développé avec Next.js, TypeScript et Tailwind CSS. Présentation de mes projets, compétences et expériences. Design responsive avec animations subtiles pour une expérience utilisateur fluide.",
        techs: [techs.react, techs.nextjs, techs.typescript, techs.tailwind, techs.git],
        slug: "my-portfolio",
        date: "2025-01",
        image: "/portfolio-presentation.png",
        repos: ["https://github.com/simplicekolomou/simplicekolomou.github.io"],
    },
    {
        id: "ticketing",
        title: "Système de gestion de tickets",
        description:
            "Application de gestion de tickets pour support client. Backend Java Spring Boot avec API REST, frontend React(NextJs) + TypeScript. Fonctionnalités : création/attribution de tickets, suivi de statut, notifications par email.",
        techs: [techs.springBoot, techs.react, techs.typescript, techs.rtkQuery, techs.hibernate, techs.git, techs.nextjs, techs.postgresql],
        slug: "ticketing",
        date: "2026-03",
        repos: ["https://github.com/simplicekolomou/syasko-tickecting-front","https://github.com/simplicekolomou/syasko-tickecting-api"],
        demo: "https://syasko-tickecting-front-ea82sqbbk-simplice-kolomous-projects.vercel.app/",
        image: "/ticketing-presentation.png",
    }
];