import { createContext, useState, useEffect } from "react";
import SHOP_DATA from '../shopdata'
import {
  addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
  categoriesMap: {}
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
      setCategoriesMap(categoryMap)
    };
    getCategoriesMap();
  }, []);

  useEffect(()=>{
      addCollectionAndDocuments('categories',SHOP_DATA)
  },[])   //once it run its will get commanded
  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
