"use client";
import React, { useState, useEffect } from "react";
import { useLocalStorage } from "../lib/hooks/useLocalStorage";
import { getProducts } from "../lib/data.js";
export const AppContext = React.createContext([{}, () => { }]);

export const AppProvider = ({ children }) => {

  // const [filteredData, setFilteredData] = useState({}); // state data for filters
  const [cart, setCart] = useLocalStorage("shopping-cart", []);
  const [wishList, setWishList] = useLocalStorage("swish-list", []);
  const [products, setProducts] = useState([]);


  function getItemQuantity(id) {
    console.log("getItemQuantity:", id);
    return cart?.find((id) => item.product_id === id)?.qty || 0;
  }

  //увеличивание кол-ва в корзине
  function increaseCartQty(id) {
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
        return currItems.filter((item) => item.id !== id);
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
      return currItems.filter((item) => item.id != id);
    });
  }

  //добавление в избранное
  function addToWishList(id) {
    console.log("addToFavourite", id);
    setWishList((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, favourite: true }];
      }
    });
  }

  //Удаление из избранного
  function removerFromWishList(id) {
    console.log("removeToFavourite", id);
    setWishList((currItems) => {
      return currItems.filter((item) => item.id != id);
    });
  }

  return (
    <AppContext.Provider
      value={{
        cart,
        setCart,
        wishList,
        setWishList,
        getItemQuantity,
        increaseCartQty,
        decreaseCartQuantity,
        removerFromCart,
        addToWishList,
        removerFromWishList,
        products,
        setProducts,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
