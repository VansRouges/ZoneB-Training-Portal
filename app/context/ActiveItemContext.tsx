// ActiveItemContext.tsx
"use client"
import React, { createContext, useContext, useState, useEffect } from 'react';

interface ActiveItemContextType {
  activeItem: string | null;
  updateActiveItem: (newItem: string) => void;
}

const ActiveItemContext = createContext<ActiveItemContextType | undefined>(undefined);

export function useActiveItem(): ActiveItemContextType {
  const context = useContext(ActiveItemContext);
  if (!context) {
    throw new Error('useActiveItem must be used within an ActiveItemProvider');
  }
  return context;
}

export function ActiveItemProvider({ children }: { children: React.ReactNode }) {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  useEffect(() => {
    // Get the active item from local storage when the component mounts
    const storedActiveItem = localStorage.getItem('activeItem');
    if (storedActiveItem) {
      setActiveItem(storedActiveItem);
    }
  }, []);

  const updateActiveItem = (newItem: string) => {
    setActiveItem(newItem);
    // Store the active item in local storage
    localStorage.setItem('activeItem', newItem);
  };

  return (
    <ActiveItemContext.Provider value={{ activeItem, updateActiveItem }}>
      {children}
    </ActiveItemContext.Provider>
  );
}
