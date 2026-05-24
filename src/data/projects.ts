/**
 * Ce fichier contient les données de mes projets personnels et d'équipe, avec des détails sur les technologies utilisées, les descriptions,
 * les liens vers les dépôts GitHub et les démonstrations. Les projets sont triés par date de réalisation, du plus récent au plus ancien.
 * Chaque projet est représenté par une interface `Project` qui définit les propriétés nécessaires pour décrire un projet de manière complète,
 * y compris les images, les membres de l'équipe et les types de projet (personnel ou en équipe).
 */

/**
 * Interface représentant un projet avec ses détails.
 * - `id`: Identifiant unique du projet.
 * - `title`: Titre du projet.
 * - `description`: Description détaillée du projet.
 * - `techIds`: Liste des identifiants des technologies utilisées dans le projet.
 * - `slug`: Slug pour l'URL du projet.
 * - `image`: Image principale du projet (optionnelle).
 * - `images`: Liste d'images supplémentaires du projet (optionnelle).
 * - `date`: Date de réalisation du projet au format "YYYY-MM".
 * - `repos`: Liste des liens vers les dépôts GitHub associés au projet (optionnelle).
 * - `demo`: Lien vers une démonstration du projet (optionnelle).
 * - `type`: Type de projet, soit "personal" pour un projet personnel, soit "team" pour un projet en équipe.
 * - `team`: Liste des membres de l'équipe impliqués dans le projet (optionnelle, uniquement pour les projets en équipe).
 */
export interface Project {
    id: string;
    title: string;
    description: string;
    techIds: string[];
    slug: string;
    image?: string;
    images?: string[];
    date: string;
    repos?: string[];
    demo?: string;
    type: "personal" | "team";
    team?: string[];
}

/**
 * Liste de projets personnels et d'équipe avec leurs détails. Chaque projet est défini avec les propriétés de l'interface `Project`.
 * Les projets incluent des descriptions détaillées, les technologies utilisées, les liens vers les dépôts GitHub et les démonstrations, ainsi que les images associées.
 *
 */
const myProjects: Project[] = [
    {
        id: "bookexchange",
        title: "Bookexchange",
        description:
            "Plateforme d'échange de livres. Développement d'une API REST Spring Boot (Java 25, JPA/Hibernate) et d'un frontend React + TypeScript (RTK Query). Implémentation de l'authentification, gestion des collections, messagerie instantanée et système d'échanges. Conception mobile-first.",
        techIds: [
            "spring-boot",
            "react",
            "typescript",
            "rtk-query",
            "hibernate",
            "gradle",
            "git",
            "zod",
            "react-hook-form",
            "chakra-ui"
        ],
        slug: "bookexchange",
        date: "2025-12",
        repos: [
            "https://github.com/simplicekolomou/bookexchange-front",
            "https://github.com/simplicekolomou/bookexchange-api"
        ],
        demo: "https://www.loom.com/share/pert-demo",
        type: "team",
        team: ["Mathieu", "Théo"],
        image: "/images/bookexchange/bookexchange-presentation.png",
        images: [
            "/images/bookexchange/bookexchange-dynamic-search.png",
            "/images/bookexchange/bookexchange-login.png",
            "/images/bookexchange/bookexchange-messaging.png",
            "/images/bookexchange/bookexchange-mycollection.png",
            "/images/bookexchange/bookexchange-registration.png",
            "/images/bookexchange/bookexchange-presentation.png"
        ]
    },
    {
        id: "meet-me-at",
        title: "Meet Me At",
        description:
            "Application multi-plateforme de gestion de réservations : CLI admin (Java) et GUI client (C# Avalonia UI). Architecture hexagonale pour séparation métier/infrastructure. Persistance MySQL (JDBC, ADO.NET).",
        techIds: [
            "java",
            "csharp",
            "avalonia",
            "mysql",
            "jdbc",
            "gradle",
            "git"
        ],
        slug: "meet-me-at",
        date: "2024-12",
        repos: [
            "https://github.com/simplicekolomou/mma-client",
            "https://github.com/simplicekolomou/mma.admin"
        ],
        demo: "#",
        type: "personal",
        image: "/images/mma/mma-presentation.png",
        images: [
            "/images/mma/mma-admin-consultation.png",
            "/images/mma/mma-admin-consultation-reservation.png",
            "/images/mma/mma-admin-encodage.png",
            "/images/mma/mma-admin-rechercher.png",
            "/images/mma/mma-admin-acceuil.png",
            "/images/mma/mma-client-consultation.png",
            "/images/mma/mma-presentation.png",
            "/images/mma/mma-client-acceuil.png",
            "/images/mma/mma-client-encodage.png"
        ]
    },
    {
        id: "gestion-repas",
        title: "GestionRepas",
        description:
            "Application Android native de gestion de listes de courses. Développement MVVM : planification de repas, listes de courses, partage caméra. Intégration Room (persistance locale) et tests unitaires ViewModel. Méthodologie agile (User Stories).",
        techIds: [
            "kotlin",
            "android",
            "room",
            "git"
        ],
        slug: "gestion-repas",
        date: "2025-06",
        repos: ["https://github.com/simplicekolomou/gestion-repas"],
        demo: "#",
        type: "personal",
        image: "/images/gestRepas/gestion-repas-presentation.png",
        images: [
            "/images/gestRepas/gestion-repas-presentation.png",
            "/images/gestRepas/gestion-repas-course.jpg",
            "/images/gestRepas/gestion-repas-details.jpg",
            "/images/gestRepas/gestion-repas-home.jpg",
            "/images/gestRepas/gestion-repas-list.jpg",
            "/images/gestRepas/gestion-repas-number.jpg"
        ]
    },
    {
        id: "puroguramu",
        title: "Puroguramu",
        description:
            "Plateforme E-learning full-stack : interface étudiant/enseignant, CRUD leçons/exercices, publication/masquage de leçon. Authentification par rôles, suivi de progression, validation serveur. Réalisé avec ASP.NET Core, Entity Framework, SQL Server, Razor Pages.",
        techIds: [
            "aspnet",
            "entity-framework",
            "sql-server",
            "razor-pages",
            "git"
        ],
        slug: "puroguramu",
        date: "2024-08",
        repos: ["https://github.com/simplicekolomou/puroguramu"],
        demo: "https://www.loom.com/share/pert-demo",
        type: "team",
        team: ["Eléonore"],
        image: "/images/puroguramu/puroguramu-presentation.png",
        images: [
            "/images/puroguramu/puroguramu-registration.png",
            "/images/puroguramu/puroguramu-student-dashboard.png",
            "/images/puroguramu/puroguramu-student-exercise.png",
            "/images/puroguramu/puroguramu-student-result.png",
            "/images/puroguramu/puroguramu-student-show-solution.png",
            "/images/puroguramu/puroguramu-teacher-dashboard.png",
            "/images/puroguramu/puroguramu-presentation.png"
        ]
    },
    {
        id: "my-portfolio",
        title: "Mon Portfolio",
        description:
            "Site portfolio personnel développé avec Next.js, TypeScript et Tailwind CSS. Présentation de mes projets, compétences et expériences. Design responsive avec animations subtiles pour une expérience utilisateur fluide.",
        techIds: [
            "react",
            "nextjs",
            "typescript",
            "tailwind",
            "git"
        ],
        slug: "my-portfolio",
        date: "2026-05",
        repos: ["https://github.com/simplicekolomou/simplicekolomou.github.io"],
        demo: "https://simplicekolomou.github.io/",
        type: "personal",
        image: "/images/portfolio/portfolio-presentation.png",
        images: [
            "/images/portfolio/portfolio-experiences.png",
            "/images/portfolio/portfolio-project-details.png",
            "/images/portfolio/portfolio-projects.png",
            "/images/portfolio/portfolio-skills.png",
            "/images/portfolio/portfolio-presentation.png"
        ]
    },
    {
        id: "ticketing",
        title: "Système de gestion de tickets",
        description:
            "Application de gestion de tickets pour support client. Backend Java Spring Boot avec API REST, frontend React(NextJs) + TypeScript. Fonctionnalités : création/attribution de tickets, suivi de statut, notifications par email.",
        techIds: [
            "spring-boot",
            "react",
            "typescript",
            "rtk-query",
            "hibernate",
            "nextjs",
            "postgresql",
            "zod",
            "react-hook-form",
            "git"
        ],
        slug: "ticketing",
        date: "2026-03",
        repos: ["https://github.com/simplicekolomou/syasko-tickecting-front","https://github.com/simplicekolomou/syasko-tickecting-api"],
        demo: "https://syasko-tickecting-front-ea82sqbbk-simplice-kolomous-projects.vercel.app/",
        type: "team",
        team: ["Aboubacar Sylla"],
        image: "/images/ticketing/ticketing-presentation.png",
        images: [
            "/images/ticketing/ticketing-create-ticket.png",
            "/images/ticketing/ticketing-customer.png",
            "/images/ticketing/ticketing-inbox.png",
            "/images/ticketing/ticketing-notifications.png",
            "/images/ticketing/ticketing-support.png",
            "/images/ticketing/ticketing-team.png",
            "/images/ticketing/ticketing-presentation.png"
        ]
    }
];

/**
 * Exportation de la liste de projets triée par date de réalisation, du plus récent au plus ancien. La méthode `sort` est utilisée
 * pour comparer les dates des projets.
 * Les projets sont triés en utilisant la méthode `localeCompare` sur les chaînes de caractères représentant les dates,
 * ce qui permet de les classer correctement même si elles sont au format "YYYY-MM".
 */
export const projects = [...myProjects].sort((a, b) => b.date.localeCompare(a.date));