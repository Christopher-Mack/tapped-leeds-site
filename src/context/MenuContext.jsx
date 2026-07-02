import { createContext, useContext, useEffect, useState } from "react";
import { menuItems as initialMenuItems } from "../data/menu";

const MenuContext = createContext();

const STORAGE_KEY = "tapped-menu-items";

export function MenuProvider({ children }) {
  const [menuItems, setMenuItems] = useState(() => {
    const savedItems = localStorage.getItem(STORAGE_KEY);

    if (savedItems) {
      return JSON.parse(savedItems);
    }

    return initialMenuItems;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(menuItems));
  }, [menuItems]);

  function resetMenu() {
    setMenuItems(initialMenuItems);
    localStorage.removeItem(STORAGE_KEY);
  }

  return (
    <MenuContext.Provider value={{ menuItems, setMenuItems, resetMenu }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  return useContext(MenuContext);
}