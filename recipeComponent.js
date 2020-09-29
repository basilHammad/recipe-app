import React from 'react'
import './recipesComponent.css'


const RecipeComponenet = (props) => {

  return (
        <div className = 'recipe'>
           <h1 key={props.label}>{props.label}</h1>
           <img key={props.image}  src = {props.image} alt = {props.label} />
           <p key={props.calories} >{props.calories}</p>
           <ul key={props.text}>
            {props.ingredients.map(ingredient =>(
                <li key={Math.random()}>{ingredient.text}</li>
            ) )}
           </ul>
        </div>
  )
}


export default RecipeComponenet