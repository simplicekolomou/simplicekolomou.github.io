'use client';
import {useTheme} from "next-themes";
import {Button} from "@/components/ui/button";
import {Moon, Sun} from "lucide-react";

export default function ThemeSwitcher() {
    const {theme, setTheme, resolvedTheme} = useTheme();
    const isDark = resolvedTheme === 'dark';
    return (
        <Button
            variant="ghost"
            className="w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {isDark ? (
                <Moon className="h-[1.5rem] w-[1.5rem] transition-all"/>
                
            ) : (
                <Sun className="h-[1.5rem] w-[1.5rem] transition-all"/>
            )}
        </Button>
    );
}