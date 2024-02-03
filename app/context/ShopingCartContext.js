"use client";
import React, { useState, useEffect } from "react";
import { useLocalStorage } from "../lib/hooks/useLocalStorage";
export const AppContext = React.createContext([{}, () => {}]);

export const AppProvider = ( {children}) => {
  const [cart, setCart] = useLocalStorage("shopping-cart", []);

  function getItemQuantity(id) {
    console.log('getItemQuantity:', id)
    return cart?.find((id) => item.product_id === id)?.qty || 0;
  }

  //увеличивание кол-ва в корзине
  function increaseCartQty(id) {    
    console.log('increaseCartQty:', id)
    setCart((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

    //Уменьшение кол-ва в корзине
    function decreaseCartQuantity(id) {
        setCart((currItems) => {
          if (currItems.find((item) => item.id === id)?.quantity === 1) {
            return currItems.filter(item => item.id !== id)
          } else {
            return currItems.map((item) => {
              if (item.id === id) {
                return { ...item, quantity: item.quantity - 1 };
              } else {
                return item;
              }
            });
          }
        });
      }

  //Удаление id продукта из корзины
  function removerFromCart(id) {
    setCart((currItems) => {
      return currItems.filter((item) => item.product_id != id);
    });
  }

  return (
    <AppContext.Provider
      value={{cart, setCart, getItemQuantity, increaseCartQty, decreaseCartQuantity, removerFromCart}}
    >
      {children}
    </AppContext.Provider>
  );
};
