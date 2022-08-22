import React, { useState, useEffect, useContext } from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import { PizzaCardSkeleton } from "../components/PizzaCard/PizzaCardSkeleton";
import PizzaCard from "../components/PizzaCard";
import { pizzaDB } from "../constants";
import Pagination from "components/Pagination";
import { AppContext } from "App";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryID } from "redux/slices/filterSlice";

const Home = () => {
  // @ts-ignore
  const categoriesId = useSelector((state) => state.filter.categoryID)
  // @ts-ignore
  const sortsId = useSelector((state) => state.filter.sort.sortProp)
  const dispatch = useDispatch();
  const {searchValue} = useContext(AppContext)
  const [items, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  


  const onChangeCategory = (id) => {
    console.log(id);
    dispatch(setCategoryID(id));
  }


  const [currentPage, setCurrentPage] = useState(1);
  // const [sortsId, setSortsId] = useState({
  //   name: "популярности",
  //   sortProp: "rating",
  // });
  
  useEffect(() => {
    setIsLoading(true);
    const sortBy = sortsId.replace("-", "");
    const order = sortsId.includes("-") ? "asc" : "desc";
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
            onChangeCategory={onChangeCategory}
          />
          <Sort  />
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
