'use client';

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export default function ThemeSwitcher() {
    const { theme, setTheme, resolvedTheme } = useTheme();

    // 1. On crée un état local "mounted", qui démarre à false.
    //    Au moment du rendu serveur, ce state n'existe même pas encore,
    //    et au tout premier rendu client, il vaut aussi false.
    //    => Donc serveur et client sont D'ACCORD au premier rendu : pas de mismatch.
    const [mounted, setMounted] = useState(false);

    // 2. useEffect ne s'exécute QUE côté client, et seulement APRÈS
    //    que React ait fini de comparer le rendu serveur et le rendu client.
    //    On en profite pour passer mounted à true : à partir de ce moment,
    //    on a le droit de lire resolvedTheme en toute sécurité.
    useEffect(() => {
        setMounted(true);
    }, []);

    // 3. Tant qu'on n'est pas "mounted", on retourne un bouton "neutre"
    //    qui a EXACTEMENT la même taille que le vrai bouton (w-8 h-8),
    //    mais sans icône à l'intérieur. Comme ce rendu est strictement
    //    identique côté serveur et côté client, aucune erreur d'hydratation.
    if (!mounted) {
        return (
            <Button
                variant="ghost"
                className="w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground"
                aria-hidden="true"
            />
        );
    }

    // 4. À partir d'ici, on est forcément côté client et mounted=true,
    //    donc resolvedTheme contient la vraie valeur (light/dark/system).
    //    On peut afficher l'icône correcte sans risque de mismatch,
    //    puisque ce bloc n'est jamais rendu côté serveur (mounted est false côté serveur).
    const isDark = resolvedTheme === 'dark';

    return (
        <Button
            variant="ghost"
            className="w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            {isDark ? (
                <Sun className="h-[1.5rem] w-[1.5rem] transition-all" />
            ) : (
                <Moon className="h-[1.5rem] w-[1.5rem] transition-all" />
            )}
        </Button>
    );
}