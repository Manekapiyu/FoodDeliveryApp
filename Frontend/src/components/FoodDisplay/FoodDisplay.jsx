import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext);

    return (
        <div className='food_display' id='food_display'>
            <h2>Top dishes near you</h2>
            <div className="food-display-list">
                {food_list.map((Item, index) => {
                    return (
                        <FoodItem
                            key={index}
                            id={Item._id}
                            name={Item.name}
                            description={Item.description}
                            price={Item.price}
                            image={Item.image}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default FoodDisplay;
