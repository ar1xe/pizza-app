import React, {useState, useEffect} from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import { PizzaCardSkeleton } from '../components/PizzaCard/PizzaCardSkeleton';
import PizzaCard from '../components/PizzaCard';
import { pizzaDB } from '../constants';

const Home = () => {
  const [items, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoriesId, setCategoriesId] = useState(0);
  const [sortsId, setSortsId] = useState(0);
  
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const response = await fetch(pizzaDB + "?category=" + categoriesId);
      const json = await response.json();
      setItem(json);
      setIsLoading(false);
    };
    fetchData().catch(console.error);
    window.scrollTo(0, 0);
  }, [categoriesId, sortsId]);

    return (
        <>
        <div className="container">
            <div className="content__top">
              <Categories value={categoriesId} onChangeCategory={(i) => setCategoriesId(i)}/>
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
          </div>
            
        </>
    );
};

export default Home;