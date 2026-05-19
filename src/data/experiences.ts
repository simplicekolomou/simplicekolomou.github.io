import { Technology } from "@/data/projects";
import { techs } from "./technology";

interface Experience {
    id: string;
    title: string;
    company: string;
    startDate: string; // Format YYYY-MM
    endDate: string | null; // null si en cours
    description: string;
    technologies: Technology[];
}

export const experiences: Experience[] = [
    {
        id: "admin-bdd",
        title: "Administrateur BDD & Responsable scolarité",
        company: "Université Ahmadou Dieng (Conakry)",
        startDate: "2014-01",
        endDate: "2021-12",
        description:
            "Gestion et maintenance de la base de données institutionnelle (PostgreSQL, MySQL). Automatisation des inscriptions : réduction des erreurs et des délais de traitement. Supervision d'une équipe de 2 agents et coordination avec la DSI.",
        technologies: [techs.postgresql, techs.mysql],
    },
    {
        id: "assistant-info",
        title: "Assistant informatique",
        company: "Université Ahmadou Dieng (Conakry)",
        startDate: "2012-01", // date approximative (avant 2014)
        endDate: "2013-12",
        description:
            "Maintenance du parc informatique et gestion du réseau local. Support technique aux utilisateurs et déploiement de solutions logicielles.",
        technologies: [techs.windows, techs.reseau, techs.support],
    },
];