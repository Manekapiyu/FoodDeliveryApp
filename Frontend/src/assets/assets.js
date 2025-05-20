import basket_icon from './basket_icon.png';
import logo from './logo.webp';
import header_img1 from "./header_img1.png";
import header_img2 from "./header_img2.png";
import search_icon from './search_icon.png';
import food_img from './food.jpg'; 
import menu_1 from './menu_1.jpeg';
import menu_2 from './menu_2.jpg';
import menu_3 from './menu_3.jpeg';
import menu_4 from './menu_4.png';
import menu_5 from './menu_5.png';
import menu_6 from './menu_6.jpeg';
import menu_7 from './menu_7.png';
import menu_8 from './menu_8.png';

import food_1 from './food_1.jpeg';
import food_2 from './food_2.jpg';
import food_3 from './food_3.jpg';
import food_4 from './food_4.jpeg';
import food_5 from './food_5.jpg';
import food_6 from './food_6.jpg';
import food_7 from './food_7.jpg';
import food_8 from './food_8.png';
import food_9 from './food_9.jpg';
import food_10 from './food_10.jpg';
import food_11 from './food_11.jpg';
import food_12 from './food_12.jpg';
import food_13 from './food_13.png';
import food_14 from './food_14.jpg';
import food_15 from './food_15.jpg';
import food_16 from './food_16.jpg';
import food_17 from './food_17.png';
import food_18 from './food_18.jpg';
import food_19 from './food_19.jpg';
import food_20 from './food_20.jpg';
import food_21 from './food_21.jpg';
import food_22 from './food_22.jpg';
import food_23 from './food_23.jpeg';
import food_24 from './food_24.jpeg';
import food_25 from './food_25.png';
import food_26 from './food_26.png';
import food_27 from './food_27.png';
import food_28 from './food_28.png';
import food_29 from './food_29.png';
import food_30 from './food_30.jpg';
import food_31 from './food_31.jpg';
import food_32 from './food_32.jpg'; 


import add_icon_white from './add_icon_white.png';
import add_icon_green from './add_icon_green.png';
import remove_icon_red from './remove_icon_red.png';
import app_store from './app_store.png';
import play_store from './play_store.png';
import linkedin_icon from './linkedin_icon.png';
import facebook_icon from './facebook_icon.png';
import twitter_icon from './twitter_icon.png';
import cross_icon from './cross_icon.png';
import selector_icon from './selector_icon.png';
import rating_starts from './rating_starts.png';
import profile_icon from './profile_icon.png';
import bag_icon from './bag_icon.png';
import logout_icon from './logout_icon.png';
import parcel_icon from './parcel_icon.png';

export const assets = {
  logo, 
  search_icon,
  basket_icon,
  header_img1,
  parcel_icon,
  header_img2,
  rating_starts,
  add_icon_green,
  add_icon_white,
  remove_icon_red,
  app_store,
  play_store,
  linkedin_icon,
  facebook_icon,
  twitter_icon,
  cross_icon,
  selector_icon,
  profile_icon,
  logout_icon,
  bag_icon,
  parcel_icon,
};

export const menu_list = [
  { menu_name: "Rice", menu_image: menu_1 },
  { menu_name: "Rolls", menu_image: menu_2 },
  { menu_name: "Desserts", menu_image: menu_3 },
  { menu_name: "Sandwich", menu_image: menu_4 },
  { menu_name: "Cake", menu_image: menu_5 },
  { menu_name: "Street Foods", menu_image: menu_6 }, 
  { menu_name: "Pasta", menu_image: menu_7 },
  { menu_name: "Noodles", menu_image: menu_8 }
];

export const food_list = [
  { _id: "1", name: "Cheese Rice", image: food_1, price: 1890, description: "Creamy, cheesy rice for ultimate comfort.", category: "Rice" },
  { _id: "2", name: "Vegetable Rice", image: food_2, price: 1890, description: "A healthy mix of fresh veggies and rice.", category: "Rice" },
  { _id: "3", name: "Chicken Rice", image: food_3, price: 2300, description: "Juicy chicken served over fragrant rice.", category: "Rice" },
  { _id: "4", name: "Parmesan Rice", image: food_4, price: 2500, description: "Rich and creamy rice with parmesan.", category: "Rice" },
  
  { _id: "5", name: "Cheese Rolls", image: food_5, price: 170, description: "Crispy rolls packed with cheesy goodness.", category: "Rolls" },
  { _id: "6", name: "Spring Rolls", image: food_6, price: 155, description: "Crispy rolls filled with flavorful veggies.", category: "Rolls" },
  { _id: "7", name: "Chicken Rolls", image: food_7, price: 190, description: "Crunchy rolls with juicy chicken filling.", category: "Rolls" },
  { _id: "8", name: "Egg Rolls", image: food_8, price: 160, description: "Golden-fried rolls with a tasty egg mix.", category: "Rolls" },

  { _id: "9", name: "Blackjack Ice Cream", image: food_9, price: 570, description: "A delightful mix of chocolate and vanilla.", category: "Desserts" },
  { _id: "10", name: "Fruit Ice Cream", image: food_10, price: 600, description: "Refreshing ice cream with real fruit chunks.", category: "Desserts" },
  { _id: "11", name: "Jar Ice Cream", image: food_11, price: 500, description: "Creamy ice cream served in a cute jar.", category: "Desserts" },
  { _id: "12", name: "Vanilla Ice Cream", image: food_12, price: 530, description: "Classic vanilla with a rich, smooth texture.", category: "Desserts" },

  { _id: "13", name: "Chicken Sandwich", image: food_13, price: 160, description: "Crispy chicken in a soft, toasted bun.", category: "Sandwich" },
  { _id: "14", name: "Ribbon Sandwich", image: food_14, price: 110, description: "Layered sandwich with fresh veggies.", category: "Sandwich" },
  { _id: "15", name: "Double Decker", image: food_15, price: 240, description: "Stacked sandwich packed with flavors.", category: "Sandwich" },
  { _id: "16", name: "Cheese Sandwich", image: food_16, price: 150, description: "Melted cheese between crispy bread.", category: "Sandwich" },

  { _id: "17", name: "Cupcake", image: food_17, price: 180, description: "Soft, fluffy cupcake topped with frosting.", category: "Cake" },
  { _id: "18", name: "Dark Chocolate Cake", image: food_18, price: 550, description: "Rich, decadent chocolate cake.", category: "Cake" },
  { _id: "19", name: "Strawberry Cake", image: food_19, price: 590, description: "Sweet, fruity cake with fresh strawberries.", category: "Cake" },
  { _id: "20", name: "Chocolate Buttermilk Cake", image: food_20, price: 580, description: "Soft, moist cake with a buttery taste.", category: "Cake" },

  { _id: "21", name: "Sushi Roll", image: food_21, price: 1950, description: "Freshly rolled sushi with savory fillings.", category: "Street Foods" },
  { _id: "22", name: "Hawaiian Pulled Pork", image: food_22, price: 2200, description: "Tender pork with a smoky BBQ taste.", category: "Street Foods" },
  { _id: "23", name: "Loaded Nachos", image: food_23, price: 1700, description: "Crispy nachos topped with cheese and salsa.", category: "Street Foods" },
  { _id: "24", name: "Burritos", image: food_24, price: 1850, description: "Stuffed tortillas with delicious fillings.", category: "Street Foods" },

  { _id: "25", name: "Cheese Pasta", image: food_25, price: 1950, description: "Creamy pasta loaded with melted cheese.", category: "Pasta" },
  { _id: "26", name: "Tomato Pasta", image: food_26, price: 1700, description: "Classic pasta with rich tomato sauce.", category: "Pasta" },
  { _id: "27", name: "Creamy Pasta", image: food_27, price: 1800, description: "Smooth and creamy white sauce pasta.", category: "Pasta" },
  { _id: "28", name: "Chicken Pasta", image: food_28, price: 2200, description: "Tender chicken tossed with creamy pasta.", category: "Pasta" },

  { _id: "29", name: "Butter Noodles", image: food_29, price: 1650, description: "Simple yet delicious buttery noodles.", category: "Noodles" },
  { _id: "30", name: "Veg Noodles", image: food_30, price: 1500, description: "Stir-fried noodles with fresh vegetables.", category: "Noodles" },
  { _id: "31", name: "Egg Noodles", image: food_31, price: 1600, description: "Savory noodles cooked with scrambled eggs.", category: "Noodles" },
  { _id: "32", name: "Chicken Noodles", image: food_32, price: 1750, description: "Flavorful noodles with tender chicken.", category: "Noodles" }
];
