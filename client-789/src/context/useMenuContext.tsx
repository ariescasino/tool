"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface MenuContextType {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}
// Tạo MenuContext
const MenuContext = createContext<MenuContextType>({
  isMenuOpen: true,
  toggleMenu: () => {},
});

// Provider để quản lý trạng thái menu
function MenuProvider({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <MenuContext.Provider value={{ isMenuOpen, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
}

// Custom hook để sử dụng MenuContext
const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu must be used within a MenuProvider");
  }
  return context;
};

export { MenuProvider, useMenu };
