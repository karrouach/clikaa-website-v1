"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface TransitionContextType {
  isAnimating: boolean;
  setIsAnimating: (value: boolean) => void;
}

const TransitionContext = createContext<TransitionContextType>({
  isAnimating: false,
  setIsAnimating: () => {},
});

export function useTransitionContext() {
  return useContext(TransitionContext);
}

interface TransitionProviderProps {
  children: ReactNode;
}

export function TransitionProvider({ children }: TransitionProviderProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <TransitionContext.Provider value={{ isAnimating, setIsAnimating }}>
      {children}
    </TransitionContext.Provider>
  );
}
