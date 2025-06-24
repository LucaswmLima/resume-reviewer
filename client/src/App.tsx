import React from "react";
import { Home } from "./pages/Home";
import { ThemeProvider } from "./components/ThemeProvider";
import { Navbar } from "./components/NavBar";

export const App: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Navbar/>
      <Home />
    </ThemeProvider>
  );
};
