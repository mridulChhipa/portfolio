"use client";

import { useEffect, useState } from "react";
import Icon from "@/components/ui/Icon";
import IconButton from "@/components/ui/IconButton";

export default function ThemeToggle({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  // Starts false to match the server-rendered markup, then syncs to the theme
  // the blocking inline script (see layout.tsx) already applied pre-hydration —
  // this avoids a hydration mismatch that a lazy useState initializer would cause.
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsDark(document.documentElement.dataset.theme === "dark");
  }, []);

  const toggle = () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem("theme", next);
    setIsDark(next === "dark");
  };

  return (
    <IconButton label={isDark ? "Switch to light mode" : "Switch to dark mode"} size={size} variant="ghost" onClick={toggle}>
      <Icon name={isDark ? "sun" : "moon"} size={size === "sm" ? 16 : 18} />
    </IconButton>
  );
}
