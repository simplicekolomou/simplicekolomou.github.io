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
    githubUrl?: string;
    demo?: string;
}

// Liste des technologies utilisées dans les projets (icônes à remplacer si besoin)
const techs = {
    java: { id: "java", name: "Java", icon: "/icons/java.png" },
    springBoot: { id: "spring-boot", name: "Spring Boot", icon: "/icons/spring-boot.png" },
    react: { id: "react", name: "React", icon: "/icons/react.png" },
    typescript: { id: "typescript", name: "TypeScript", icon: "/icons/typescript.png" },
    rtkQuery: { id: "rtk-query", name: "RTK Query", icon: "/icons/redux-toolkit.png" },
    hibernate: { id: "hibernate", name: "Hibernate", icon: "/icons/hibernate.png" },
    gradle: { id: "gradle", name: "Gradle", icon: "/icons/gradle.png" },
    csharp: { id: "csharp", name: "C#", icon: "/icons/csharp.png" },
    avalonia: { id: "avalonia", name: "Avalonia UI", icon: "/icons/avalonia.png" },
    mysql: { id: "mysql", name: "MySQL", icon: "/icons/mysql.png" },
    jdbc: { id: "jdbc", name: "JDBC", icon: "/icons/jdbc.png" },
    kotlin: { id: "kotlin", name: "Kotlin", icon: "/icons/kotlin.png" },
    android: { id: "android", name: "Android", icon: "/icons/android.png" },
    mvvm: { id: "mvvm", name: "MVVM", icon: "/icons/mvvm.png" },
    room: { id: "room", name: "Room", icon: "/icons/room.png" },
    jgrapht: { id: "jgrapht", name: "JGraphT", icon: "/icons/jgrapht.png" },
    junit: { id: "junit", name: "JUnit", icon: "/icons/junit.png" },
    aspnet: { id: "aspnet", name: "ASP.NET Core", icon: "/icons/aspnet.png" },
    entityFramework: { id: "entity-framework", name: "Entity Framework", icon: "/icons/entity-framework.png" },
    sqlServer: { id: "sql-server", name: "SQL Server", icon: "/icons/sql-server.png" },
    razorPages: { id: "razor-pages", name: "Razor Pages", icon: "/icons/razor.png" },
    angular: { id: "angular", name: "Angular", icon: "/icons/angular.png" },
    laravel: { id: "laravel", name: "Laravel", icon: "/icons/laravel.png" },
    php: { id: "php", name: "PHP", icon: "/icons/php.png" },
    git: { id: "git", name: "Git", icon: "/icons/git.png" },
    postgresql: { id: "postgresql", name: "PostgreSQL", icon: "/icons/postgresql.png" },
};

export const projects: Project[] = [
    {
        id: "bookexchange",
        title: "Bookexchange",
        description:
            "Plateforme d'échange de livres. Développement d'une API REST Spring Boot (Java 25, JPA/Hibernate) et d'un frontend React + TypeScript (RTK Query). Implémentation de l'authentification, gestion des collections, messagerie instantanée et système d'échanges. Conception mobile-first.",
        techs: [techs.springBoot, techs.react, techs.typescript, techs.rtkQuery, techs.hibernate, techs.gradle, techs.git],
        slug: "bookexchange",
        date: "2025-12",
        githubUrl: "https://github.com/simplicekolomou/bookexchange-front", // à remplacer par votre vrai dépôt
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
        githubUrl: "https://github.com/simplicekolomou/meet-me-at",
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
        githubUrl: "https://github.com/simplicekolomou/gestion-repas",
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
        githubUrl: "https://github.com/simplicekolomou/puorquamru",
        demo: "https://www.loom.com/share/pert-demo",
        image: "/puroguramu-presentation.png",
    },
    /*{
        id: "salto-coact",
        title: "Salto CoAct",
        description:
            "Application de gestion de tâches collaborative. Frontend Angular/TypeScript avec composants réutilisables. Backend Laravel (API REST). Travail en équipe de 5 personnes, méthodologie agile, Git.",
        techs: [techs.angular, techs.laravel, techs.php, techs.typescript, techs.git],
        slug: "salto-coact",
        date: "2023",
        githubUrl: "https://github.com/simplicekolomou/salto-coact",
        demo: "https://www.loom.com/share/pert-demo",
        image: "/projects/saltocoact.jpg",
    },
    {
        id: "generateur-pert",
        title: "Générateur PERT",
        description:
            "Générateur aléatoire de diagrammes PERT valides avec calcul du chemin critique et des dates début/fin. Utilisation de la bibliothèque JGraphT et tests unitaires JUnit.",
        techs: [techs.java, techs.jgrapht, techs.junit, techs.git],
        slug: "generateur-pert",
        date: "2025-06",
        githubUrl: "https://github.com/simplicekolomou/generateur-pert",
        demo: "https://www.loom.com/share/pert-demo",
        image: "/projects/pert.jpg",
    }*/
];