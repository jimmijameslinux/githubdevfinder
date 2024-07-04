import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import "./App.css";

const queryClient = new QueryClient();

function AppContent() {
  const { darkMode } = useTheme();

  return (
    <div className={darkMode ? "app dark-mode" : "app"}>
      <Header />
      <SearchBar />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
