import React,{useEffect,useState} from 'react'
import RecipeComponenet from './recipeComponent'
import './recipe.css'

const Recipe = () => {

    const APP_ID = '313abbfa'
    const APP_KEY = '1b5632a768a63a3955b1c728fbcebc42'

    const [recipes,setRecipes] = useState([])
    const [search,setSearch]   = useState('')
    const [submit,setSubmit]   = useState('egg')
    

    useEffect(()=>{
       fetch(`https://api.edamam.com/search?q=${submit}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        .then(response => response.json())
        .then(response =>{setRecipes(response.hits)})
    },[submit])
    
    const handelChange = e => {
        const {value} = e.target
        setSearch(value)
    }

    const handelSubmit = e => {
        e.preventDefault()
        setSubmit(search)  
    }


    return(
       <div className = 'main-cont'>
       <form className = 'search-form' onSubmit = {handelSubmit}>
            <input
                type = 'text'
                placeholder = 'SEARCH FOR RECIPES'
                value = {search}
                className = 'search-bar'
                onChange = {handelChange}
                name = 'search'
            />
            <button className = 'search-button' type = 'submit' >Search</button>
         </form>
         <div className = 'recipes-cont'>
            {recipes.map(recipe =>(
                <RecipeComponenet
                    key = {recipe.recipe.label}
                    label = {recipe.recipe.label}
                    image = {recipe.recipe.image}
                    calories = {`calories :${recipe.recipe.calories}`}
                    ingredients = {recipe.recipe.ingredients}
                    className = 'recipes'
                />
         ))}
         </div>
            
         
             
       </div>
    )
}

export default Recipe