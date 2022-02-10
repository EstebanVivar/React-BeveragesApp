import React, { useContext, useState } from 'react';
import { CategoryContext } from '../Context/CategoryContext';
import { RecipesContext } from '../Context/RecipesContext';

const Form = () => {

    const { Categories } = useContext(CategoryContext);

    const { setIngredient, setQuery } = useContext(RecipesContext);

    const [Search, setSearch] = useState({
        name: '',
        category: '',
    });

    const getForm = e => {
        setSearch({
            ...Search,
            [e.target.name]: e.target.value
        });
        setQuery(true);
    }

    return (
        <form className='col-12'
            onSubmit={e => {
                e.preventDefault();
                setIngredient(Search);
            }}>

            <fieldset className='text-center'>
                <legend id='title'>Search beverages by category or ingredients</legend>
            </fieldset>

            <div className='row'>

                <div className='col-md-4 my-2 p-2'>
                    <input
                        id='title-modal'
                        name='name'
                        className='form-control'
                        type={'text'}
                        placeholder='Search by ingredient'
                        onChange={getForm}
                    />
                </div>

                <div className='col-md-4 my-2 p-2'>
                    <select
                        id='title-modal'
                        className='form-control'
                        name='category'
                        onChange={getForm}
                    >
                        <option value="">
                            Selecciona una categoria...
                        </option>

                        {Categories.map(category => (
                            <option
                                key={category.strCategory}
                                value={category.strCategory}
                            >
                                {category.strCategory}
                            </option>
                        ))}
                    </select>
                </div>

                <div className='col-md-4 my-2 p-2'>
                    <input
                        id='title'
                        className='btn btn-block btn-primary'
                        type={'submit'}
                        value='Search'
                    />
                </div>

            </div>
        </form>
    );
}

export default Form;