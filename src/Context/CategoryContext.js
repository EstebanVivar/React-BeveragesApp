import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';



export const CategoryContext = createContext();

const CategoryProvider = (props) => {

    const [Categories, setCategories] = useState([]);

    useEffect(() => {
        const getCategories = async () => {
            const URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
            const CategoryList = await axios.get(URL);
            console.log(CategoryList.data.drinks);
            setCategories(CategoryList.data.drinks);
        }
        getCategories();
    }, []);

    return (
        <CategoryContext.Provider
            value={{
                Categories
            }}
        >
            {props.children}
        </CategoryContext.Provider>
    );
}

export default CategoryProvider;