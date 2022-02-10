import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const RecipesContext = createContext();

const RecipesProvider = (props) => {

    const [Recipes, setRecipes] = useState([]);

    const [Ingredient, setIngredient] = useState({
        name: '',
        category: '',

    });

    const [Query, setQuery] = useState(false);

    const { name, category } = Ingredient;

    useEffect(() => {
        if (Query) {
            const getCategories = async () => {
                const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`;
                const DrinkList = await axios.get(URL);
                setRecipes(DrinkList.data.drinks);
            }
            getCategories();
        }
    }, [Ingredient]);

    return (
        <RecipesContext.Provider
            value={{
                Recipes,
                setIngredient,
                setQuery
            }}
        >
            {props.children}
        </RecipesContext.Provider>
    );
}

export default RecipesProvider;