import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const ModalContext = createContext();

const ModalProvider = (props) => {

    const [IDRecipe, setIDRecipe] = useState(null)
    const [Details, setDetails] = useState({})

    useEffect(() => {
        const getRecipe = async () => {
            if (!IDRecipe) return;
            const URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${IDRecipe}`;
            const DetailList = await axios.get(URL);
            setDetails(DetailList.data.drinks[0]);
        }
        getRecipe();

    }, [IDRecipe]);

    return (
        <ModalContext.Provider
            value={{
                Details,
                setDetails,
                setIDRecipe
            }}
        >
            {props.children}
        </ModalContext.Provider>
    );
}

export default ModalProvider;