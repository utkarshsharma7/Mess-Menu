import React, { useState } from 'react';
import "./style.css";
import MenuAPI from './MenuAPI';
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const uniqueList = [
  ...new Set(
    MenuAPI.map((curElem) => {
      return curElem.category
    })
  ), "All",
]
const Menu = () => {
  const[menuData, setMenuData] = useState(MenuAPI);
   
  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(MenuAPI);
      return;
    }

    const updatedList = MenuAPI.filter((curElem) => {
      return curElem.category === category;
    });

    setMenuData(updatedList);
  };
  return (
    <>
      <Navbar filterItem={filterItem} menuList={uniqueList} />
      <MenuCard menuData={menuData} />
    </>
  );
}

export default Menu