"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ActiveThemeProvider } from "../active-theme";
import { useEffect, useState } from "react";

export default function Providers({
  children,
  initialTheme,
  ...props
}: React.ComponentProps<typeof NextThemesProvider> & {
  initialTheme?: string;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <NextThemesProvider {...props}>
      <ActiveThemeProvider initialTheme={initialTheme}>
        {children}
      </ActiveThemeProvider>
    </NextThemesProvider>
  );
}
