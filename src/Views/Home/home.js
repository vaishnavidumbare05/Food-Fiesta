import React from 'react'
import "./home.css"

import FoodCard from '../../Components/FoodCard/foodcard'

function home() {
  return (
    <div>
        <h1>Food Fiesta</h1>
        <FoodCard
         title="ASIAN"
         description="ASIAN Men's Wonder-13 Sports Running Shoes"
         price="₹574"
         />

      <FoodCard
        title="ASIAN"
        description="Men's Wonder Sports Running,Walking & Gym Shoes"
        price="₹879.00"
        mrp="mrp ₹1299.00"
        button="Add To Cart"
        
    />

        <FoodCard
         title="shoes "
         description="good quality"
         price="₹574"
         />
        </div>
  )
}

export default home