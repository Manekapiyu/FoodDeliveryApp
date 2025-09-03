import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => {
  const { foodList } = useContext(StoreContext);

  const filteredFoodList = (foodList || []).filter(item =>
    category === "All" || (item.category && item.category.toLowerCase() === category.toLowerCase())
  );

  return (
    <div className='food_display' id='food_display'>
      <h2>Flavorful Finds Near You</h2>
      <div className="food-display-list">
        {filteredFoodList.length > 0 ? (
          filteredFoodList.map(item => (
            <FoodItem
              key={item._id}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))
        ) : (
          <p>No dishes available in this category</p>
        )}
      </div>
    </div>
  );
};

export default FoodDisplay;
