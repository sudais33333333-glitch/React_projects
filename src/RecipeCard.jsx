import { useState } from "react"



function RecipeCard({meal}){

    const[recipe, setRecipe] = useState("")



const handleRecipe = (query = "chicken") =>{
    fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${query}`
    )
    .then((Response) => Response.json())
    .then((data) => {
        setRecipe(data.meals [0])
    })
}



    

    return(

        <div>
            <img  src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-56 object-cover"  />

            <div className="p-5">
            <h2 className="text-xl font-bold">
                {meal.strMeal}
            </h2>

            <p className="text-gray-500">Category:
                {meal.strCategory}
            </p>

            <p className="text-gray-500">Area: 
                {meal.strArea}
            </p>

            <button  onClick={() => handleRecipe(meal.idMeal)}
            className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg">
                View Recipe
            </button>

            {recipe && (
                <div>
                    <h3>Ingredients</h3>
                    <p>{recipe.strIngredient1}</p>
                    <p>{recipe.strIngredient2}</p>
                    <p>{recipe.strIngredient3}</p>
                    <p>{recipe.strIngredient4}</p>
                    <p>{recipe.strIngredient5}</p>

                    <h3>Instructions</h3>
                    <p className="text-sm text-gray-700">{recipe.strInstructions}</p>

                </div>
            )}


        </div>
        </div>
    )
}

export default RecipeCard
