import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext);

    const filteredFoodList = food_list.filter(Item => 
        category === "All" || category === Item.category
    );

    return (
        <div className='food_display' id='food_display'>
            <h2>Flavorful Finds Near You</h2>
            <div className="food-display-list">
                {filteredFoodList.length > 0 ? (
                    filteredFoodList.map((Item, index) => (
                        <FoodItem
                            key={index}
                            id={Item._id}
                            name={Item.name}
                            description={Item.description}
                            price={Item.price}
                            image={Item.image}
                        />
                    ))
                ) : (
                    <p>No dishes available in this category</p>  // Add fallback message
                )}
            </div>
        </div>
    );
}

export default FoodDisplay;
