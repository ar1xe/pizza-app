import React, { useEffect, useState } from "react";
import "./scss/app.scss";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaCard from "./components/PizzaCard";
import { pizzaDB } from "./constants";
import { PizzaCardSkeleton } from "./components/PizzaCardSkeleton";

function App() {
  const [items, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(pizzaDB);
      const json = await response.json();
      setItem(json);
      setIsLoading(false);
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
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
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
