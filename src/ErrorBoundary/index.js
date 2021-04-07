import React from "react";
import Hero from "./Hero";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <div>
      <h1>These are heros</h1>

      <ErrorBoundary>
        <Hero HeroName="Batman" />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero HeroName="Superman" />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero HeroName="Joker" />
      </ErrorBoundary>
    </div>
  );
}

export default App;
