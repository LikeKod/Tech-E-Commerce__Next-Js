'use client'
import React, { useState, useEffect } from "react";
import { useLocalStorage } from "../lib/hooks/useLocalStorage";
export const AppContext = React.createContext([{}, () => {}]);

export const AppProvider = (props) => {
  const [cart, setCart] = useLocalStorage("shopping-cart", [])


  return (
    <AppContext.Provider value={[cart, setCart]}>
      {props.children}
    </AppContext.Provider>
  );
};
