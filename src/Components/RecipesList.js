import React, { useContext } from 'react';
import Recipe from './Recipe';
import { RecipesContext } from '../Context/RecipesContext';


const RecipesList = () => {
    const { Recipes } = useContext(RecipesContext)
    return (
        <div className='row mt-5'>
            {Recipes.map(recipe => (
                <Recipe
                    key={recipe.idDrink}
                    recipe={recipe}
                />
            ))}
        </div>
    );
}

export default RecipesList;