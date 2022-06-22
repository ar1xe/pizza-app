import React from "react";
import "./scss/app.scss";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaCard from "./components/PizzaCard";
import { pizzas } from "./constants";

function App() {
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
              {pizzas.map((item) => (
                <PizzaCard
                  title={item.title}
                  price={item.price}
                  img={item.imageUrl}
                  sizes={item.sizes}
                  types={item.types}
                  key={item.id}
                />
              ))}
              {/* <PizzaCard title="Мексиканская" price={450} /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
