import {Technology} from "@/data/projects";

interface Experience {
    id: string;
    title: string;
    company: string;
    startDate: string; // Format YYYY-MM
    endDate: string | null; // null si en cours
    description: string;
    technologies: Technology[]; // Liste des technologies utilisées
}

const experiences: Experience[] = [
    {
        id: "1",
        title: "Développeur Frontend",
        company: "Tech Solutions",
        startDate: "2022-01",
        endDate: null,
        description: "Développement d'interfaces utilisateur pour des applications web en utilisant React et Next.js.",
        technologies: [
            { id: "1", name: "React", icon: "/icons/react.png" },
            { id: "2", name: "Next.js", icon: "/icons/nextjs.png" },
            { id: "3", name: "TypeScript", icon: "/icons/typescript.png" },
        ],
    },
    {
        id: "2",
        title: "Stagiaire Développeur Web",
        company: "Web Innovators",
        startDate: "2021-06",
        endDate: "2021-12",
        description: "Participation au développement de fonctionnalités pour une application de gestion",
        technologies: [
            { id: "4", name: "Vue.js", icon: "/icons/vue.png" },
            { id: "5", name: "JavaScript", icon: "/icons/javascript.png" },
            { id: "6", name: "CSS", icon: "/icons/css.png" },
        ],
    }
];

export { experiences };