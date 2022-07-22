import React, { useState, useEffect, useContext } from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import { PizzaCardSkeleton } from "../components/PizzaCard/PizzaCardSkeleton";
import PizzaCard from "../components/PizzaCard";
import { pizzaDB } from "../constants";
import Pagination from "components/Pagination";
import { AppContext } from "App";

const Home = () => {
  const {searchValue} = useContext(AppContext)
  const [items, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoriesId, setCategoriesId] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortsId, setSortsId] = useState({
    name: "популярности",
    sortProp: "rating",
  });
  
  useEffect(() => {
    setIsLoading(true);
    const sortBy = sortsId.sortProp.replace("-", "");
    const order = sortsId.sortProp.includes("-") ? "asc" : "desc";
    const categoryFilter = categoriesId > 0 ? `category=${categoriesId}` : "";
    const search = searchValue ? `&search=${searchValue}` : '';
    const fetchData = async () => {
      const response = await fetch(
        `${pizzaDB}${categoryFilter}&page=${currentPage}&sortBy=${sortBy}&order=${order}${search}`
      );
      const json = await response.json();
      setItem(json);
      setIsLoading(false);
    };
    fetchData().catch(console.error);
    window.scrollTo(0, 0);
  }, [categoriesId, sortsId, searchValue, currentPage]);

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories
            value={categoriesId}
            onChangeCategory={(i) => setCategoriesId(i)}
          />
          <Sort value={sortsId} onChangeSort={(i) => setSortsId(i)} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoading
            ? [...new Array(15)].map((_, index) => (
                <PizzaCardSkeleton key={index} />
              ))
            : items.map((item) => (
                <PizzaCard
                  key={item.id}
                  title={item.title}
                  price={item.price}
                  img={item.imageUrl}
                  sizes={item.sizes}
                  types={item.types}
                />
              ))}
        </div>
        <Pagination onChangePage = {numPage => setCurrentPage(numPage)}/>
      </div>
    </>
  );
};

export default Home;
